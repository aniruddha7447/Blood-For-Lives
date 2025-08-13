using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace BloodBankDotNetBackend.Services
{
    public class BloodBankService
    {
        private readonly AppDbContext _context;
        public BloodBankService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<BloodBank> GetAllBloodBanks() => _context.BloodBanks.ToList();
        public BloodBank? GetBloodBankById(int id) => _context.BloodBanks.Find(id);
        public void CreateBloodBank(BloodBank bank)
        {
            _context.BloodBanks.Add(bank);
            _context.SaveChanges();
        }
        public void UpdateBloodBank(BloodBank bank)
        {
            _context.BloodBanks.Update(bank);
            _context.SaveChanges();
        }
        public void DeleteBloodBank(int id)
        {
            var bank = _context.BloodBanks.Find(id);
            if (bank != null)
            {
                _context.BloodBanks.Remove(bank);
                _context.SaveChanges();
            }
        }
    }
}