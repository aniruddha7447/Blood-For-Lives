using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace BloodBankDotNetBackend.Services
{
    public class AddressService
    {
        private readonly AppDbContext _context;
        public AddressService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Address> GetAllAddresses() => _context.Addresses.Include(a => a.User).ToList();
        public Address? GetAddressById(long id) => _context.Addresses.Find(id);
        public Address? FindByUserAndIsDefault(long userId) => _context.Addresses.FirstOrDefault(a => a.UserId == userId && a.IsDefault);
        public IEnumerable<Address> FindUserAddress(long userId) => _context.Addresses.Where(a => a.UserId == userId).ToList();
        public int DeleteAddress(long userId)
        {
            var addresses = _context.Addresses.Where(a => a.UserId == userId).ToList();
            _context.Addresses.RemoveRange(addresses);
            return _context.SaveChanges();
        }
        public void CreateAddress(Address address)
        {
            _context.Addresses.Add(address);
            _context.SaveChanges();
        }
        public void UpdateAddress(Address address)
        {
            _context.Addresses.Update(address);
            _context.SaveChanges();
        }
        public void DeleteAddressById(long id)
        {
            var address = _context.Addresses.Find(id);
            if (address != null)
            {
                _context.Addresses.Remove(address);
                _context.SaveChanges();
            }
        }
    }
}