package com.app.service.BloodInventoryService;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IBloodInventoryDao;
import com.app.entities.BloodGroup;
import com.app.entities.BloodInventory;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class BloodInventoryServiceImpl implements IBloodInventoryService {

    @Autowired
    private IBloodInventoryDao bloodInventoryDao;

    @Override
    public int addBloodInventory(int quantity, int bagSize, BloodGroup bloodGroup) {
        // Check if blood inventory with the given blood group and bag size exists
        BloodInventory existingInventory = bloodInventoryDao.findByBloodGroupAndBagSize(bloodGroup, bagSize);
        
        if (existingInventory != null) {
            // If it exists, increment the quantity
            existingInventory.setBagQuantity(existingInventory.getBagQuantity() + quantity);
            existingInventory.setLastUpdatedDate(LocalDate.now());
            bloodInventoryDao.save(existingInventory);  // Persist updated inventory
            log.info("Updated blood inventory for {} with {} ml bag size", bloodGroup, bagSize);
        } else {
            // If it doesn't exist, create a new inventory record
            BloodInventory newInventory = new BloodInventory(bloodGroup, bagSize, quantity);
            bloodInventoryDao.save(newInventory);  // Persist new inventory
            log.info("Added new blood inventory for {} with {} ml bag size", bloodGroup, bagSize);
        }
        
        return quantity; // Return the quantity added
    }

    @Override
    public int subBloodInventory(int quantity, int bagSize, BloodGroup bloodGroup) {
        // Fetch existing inventory
        BloodInventory existingInventory = bloodInventoryDao.findByBloodGroupAndBagSize(bloodGroup, bagSize);

        if (existingInventory != null && existingInventory.getBagQuantity() >= quantity) {
            // Decrement the quantity
            existingInventory.setBagQuantity(existingInventory.getBagQuantity() - quantity);
            existingInventory.setLastUpdatedDate(LocalDate.now());
            bloodInventoryDao.save(existingInventory);  // Persist updated inventory
            log.info("Subtracted {} units from blood inventory for {} with {} ml bag size", quantity, bloodGroup, bagSize);
            return quantity;  // Return the quantity subtracted
        } else {
            // If not enough quantity available, log or handle appropriately
            log.warn("Insufficient stock for {} with {} ml bag size", bloodGroup, bagSize);
            return 0;  // Return 0 to indicate failure
        }
    }

    @Override
    public int findByBloodGroupAndBagSize(BloodGroup bloodGroup, int bag) {
        // Fetch the blood inventory for the specified blood group and bag size
        BloodInventory inventory = bloodInventoryDao.findByBloodGroupAndBagSize(bloodGroup, bag);
        
        // Return quantity if inventory is found, otherwise return 0
        return inventory != null ? inventory.getBagQuantity() : 0;
    }

    @Override
    public List<BloodInventory> getBloodStock() {
        // Return the list of all blood inventories
        return bloodInventoryDao.findAll();
    }

    @Override
    public BloodInventory addBloodInventory(BloodInventory inventory) {
        // Call the addBloodInventory method with necessary parameters
        this.addBloodInventory(inventory.getBagQuantity(), inventory.getBagSize(), inventory.getBloodGroup());
        
        // Return the updated or newly created BloodInventory from the repository
        return bloodInventoryDao.findByBloodGroupAndBagSize(inventory.getBloodGroup(), inventory.getBagSize());
    }
}
