using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace BloodBankDotNetBackend.Services
{
    public class BloodInventoryService
    {
        private readonly AppDbContext _context;
        public BloodInventoryService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<BloodInventory> GetAllBloodInventories() => _context.BloodInventories.ToList();
        public BloodInventory? GetBloodInventoryById(long id) => _context.BloodInventories.Find(id);
        public int AddBloodCount(int quantity, DateTime lastUpdatedDate, int bagSize, BloodGroup bloodGroup)
        {
            var inventory = _context.BloodInventories.FirstOrDefault(b => b.BagSize == bagSize && b.BloodGroup == bloodGroup);
            if (inventory == null) return 0;
            inventory.BagQuantity += quantity;
            inventory.LastUpdatedDate = lastUpdatedDate;
            _context.BloodInventories.Update(inventory);
            return _context.SaveChanges();
        }
        public int SubBloodCount(int quantity, DateTime lastUpdatedDate, int bagSize, BloodGroup bloodGroup)
        {
            var inventory = _context.BloodInventories.FirstOrDefault(b => b.BagSize == bagSize && b.BloodGroup == bloodGroup);
            if (inventory == null) return 0;
            inventory.BagQuantity -= quantity;
            inventory.LastUpdatedDate = lastUpdatedDate;
            _context.BloodInventories.Update(inventory);
            return _context.SaveChanges();
        }
        public BloodInventory? FindByBloodGroupAndBagSize(BloodGroup bloodGroup, int bagSize)
            => _context.BloodInventories.FirstOrDefault(b => b.BloodGroup == bloodGroup && b.BagSize == bagSize);
        public void CreateBloodInventory(BloodInventory inventory)
        {
            _context.BloodInventories.Add(inventory);
            _context.SaveChanges();
        }
        public void UpdateBloodInventory(BloodInventory inventory)
        {
            _context.BloodInventories.Update(inventory);
            _context.SaveChanges();
        }
        public void DeleteBloodInventory(long id)
        {
            var inventory = _context.BloodInventories.Find(id);
            if (inventory != null)
            {
                _context.BloodInventories.Remove(inventory);
                _context.SaveChanges();
            }
        }
    }
}