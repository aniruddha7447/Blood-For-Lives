using BloodBankDotNetBackend.DTOs;
using BloodBankDotNetBackend.Services;
using Microsoft.AspNetCore.Mvc;

namespace BloodBankDotNetBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            var user = _authService.Register(dto);
            if (user == null) return BadRequest("Email already exists");
            return Ok(user);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _authService.Login(dto);
            if (user == null) return Unauthorized("Invalid credentials");
            var token = _authService.GenerateJwtToken(user);
            return Ok(new { token });
        }
    }
}