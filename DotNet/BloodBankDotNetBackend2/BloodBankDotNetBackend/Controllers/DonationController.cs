using Microsoft.AspNetCore.Mvc;
using BloodBankDotNetBackend.Entities;
using BloodBankDotNetBackend.Services;

namespace BloodBankDotNetBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DonationController : ControllerBase
    {
        private readonly DonationService _donationService;
        public DonationController(DonationService donationService)
        {
            _donationService = donationService;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_donationService.GetAllDonations());

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var donation = _donationService.GetDonationById(id);
            if (donation == null) return NotFound();
            return Ok(donation);
        }

        [HttpPost]
        public IActionResult Create(Donation donation)
        {
            _donationService.CreateDonation(donation);
            return CreatedAtAction(nameof(GetById), new { id = donation.Id }, donation);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Donation donation)
        {
            if (id != donation.Id) return BadRequest();
            _donationService.UpdateDonation(donation);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _donationService.DeleteDonation(id);
            return NoContent();
        }
    }
}