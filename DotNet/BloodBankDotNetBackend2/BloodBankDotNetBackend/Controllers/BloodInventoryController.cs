using Microsoft.AspNetCore.Mvc;
using BloodBankDotNetBackend.Entities;
using BloodBankDotNetBackend.Services;

namespace BloodBankDotNetBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BloodInventoryController : ControllerBase
    {
        private readonly BloodInventoryService _inventoryService;
        public BloodInventoryController(BloodInventoryService inventoryService)
        {
            _inventoryService = inventoryService;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_inventoryService.GetAllBloodInventories());

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var inventory = _inventoryService.GetBloodInventoryById(id);
            if (inventory == null) return NotFound();
            return Ok(inventory);
        }

        [HttpPost]
        public IActionResult Create(BloodInventory inventory)
        {
            _inventoryService.CreateBloodInventory(inventory);
            return CreatedAtAction(nameof(GetById), new { id = inventory.Id }, inventory);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, BloodInventory inventory)
        {
            if (id != inventory.Id) return BadRequest();
            _inventoryService.UpdateBloodInventory(inventory);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _inventoryService.DeleteBloodInventory(id);
            return NoContent();
        }
    }
}