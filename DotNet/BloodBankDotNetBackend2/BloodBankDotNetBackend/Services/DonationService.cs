using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace BloodBankDotNetBackend.Services
{
    public class DonationService
    {
        private readonly AppDbContext _context;
        public DonationService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Donation> GetAllDonations() => _context.Donations.ToList();
        public Donation? GetDonationById(int id) => _context.Donations.Find(id);
        public void CreateDonation(Donation donation)
        {
            _context.Donations.Add(donation);
            _context.SaveChanges();
        }
        public void UpdateDonation(Donation donation)
        {
            _context.Donations.Update(donation);
            _context.SaveChanges();
        }
        public void DeleteDonation(int id)
        {
            var donation = _context.Donations.Find(id);
            if (donation != null)
            {
                _context.Donations.Remove(donation);
                _context.SaveChanges();
            }
        }
    }
}