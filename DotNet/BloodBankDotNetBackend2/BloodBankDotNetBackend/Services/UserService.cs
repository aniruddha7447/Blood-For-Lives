using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace BloodBankDotNetBackend.Services
{
    public class UserService
    {
        private readonly AppDbContext _context;
        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAllUsers() => _context.Users.ToList();
        public User? GetUserById(long id) => _context.Users.Find(id);
        public IEnumerable<User> FindByRole(Role role) => _context.Users.Where(u => u.Role == role).ToList();
        public User? FindByEmailAndPassword(string email, string password) => _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        public User? FindByEmail(string email) => _context.Users.FirstOrDefault(u => u.Email == email);
        public int UpdateUserDetails(string firstName, string lastName, string contactNo, int? age, Gender? gender, string image, string email)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);
            if (user == null) return 0;
            user.FirstName = firstName;
            user.LastName = lastName;
            user.ContactNo = contactNo;
            user.Age = age;
            user.Gender = gender;
            user.Image = image;
            _context.Users.Update(user);
            return _context.SaveChanges();
        }
        public void CreateUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }
        public void UpdateUser(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
        }
        public void DeleteUser(long id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }
    }
}