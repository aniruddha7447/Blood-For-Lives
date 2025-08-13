using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.DTOs;
using BloodBankDotNetBackend.Entities;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace BloodBankDotNetBackend.Services
{
    public class AuthService
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;
        public AuthService(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        public User? Register(RegisterDto dto)
        {
            if (_context.Users.Any(u => u.Email == dto.Email)) return null;
            var user = new User
            {
                FirstName = dto.Name, // Assuming dto.Name is first name; adjust if needed
                LastName = "", // No last name in RegisterDto; set to empty or add to DTO
                Email = dto.Email,
                Password = dto.Password, // Should hash in production
                ContactNo = "", // No contact in RegisterDto; set to empty or add to DTO
                Image = "", // No image in RegisterDto; set to empty or add to DTO
                Role = Enum.TryParse<Role>(dto.Role, out var role) ? role : Role.ROLE_USER
            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User? Login(LoginDto dto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email);
            if (user == null || !VerifyPassword(dto.Password, user.Password)) return null;
            return user;
        }

        public bool VerifyPassword(string password, string hash)
        {
            return password == hash;
        }

        public string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString())
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: creds
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}