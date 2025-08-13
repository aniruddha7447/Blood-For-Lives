using Microsoft.AspNetCore.Mvc;
using BloodBankDotNetBackend.Entities;
using BloodBankDotNetBackend.Services;

namespace BloodBankDotNetBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BloodBankController : ControllerBase
    {
        private readonly BloodBankService _bloodBankService;
        public BloodBankController(BloodBankService bloodBankService)
        {
            _bloodBankService = bloodBankService;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_bloodBankService.GetAllBloodBanks());

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var bank = _bloodBankService.GetBloodBankById(id);
            if (bank == null) return NotFound();
            return Ok(bank);
        }

        [HttpPost]
        public IActionResult Create(BloodBank bank)
        {
            _bloodBankService.CreateBloodBank(bank);
            return CreatedAtAction(nameof(GetById), new { id = bank.Id }, bank);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, BloodBank bank)
        {
            if (id != bank.Id) return BadRequest();
            _bloodBankService.UpdateBloodBank(bank);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _bloodBankService.DeleteBloodBank(id);
            return NoContent();
        }
    }
}