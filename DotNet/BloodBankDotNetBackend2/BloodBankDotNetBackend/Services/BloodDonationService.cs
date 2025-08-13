using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace BloodBankDotNetBackend.Services
{
    public class BloodDonationService
    {
        private readonly AppDbContext _context;
        public BloodDonationService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<BloodDonation> GetAllDonations() => _context.BloodDonations.Include(b => b.User).ToList();
        public BloodDonation? GetDonationById(long id) => _context.BloodDonations.Find(id);
        public IEnumerable<BloodDonation> GetBloodDonationByUser(long userId) => _context.BloodDonations.Where(b => b.UserId == userId).ToList();
        public int DeleteBloodDonationByUser(long userId)
        {
            var donations = _context.BloodDonations.Where(b => b.UserId == userId).ToList();
            _context.BloodDonations.RemoveRange(donations);
            return _context.SaveChanges();
        }
        public void CreateDonation(BloodDonation donation)
        {
            _context.BloodDonations.Add(donation);
            _context.SaveChanges();
        }
        public void UpdateDonation(BloodDonation donation)
        {
            _context.BloodDonations.Update(donation);
            _context.SaveChanges();
        }
        public void DeleteDonation(long id)
        {
            var donation = _context.BloodDonations.Find(id);
            if (donation != null)
            {
                _context.BloodDonations.Remove(donation);
                _context.SaveChanges();
            }
        }
    }
}