using Microsoft.EntityFrameworkCore;
using BloodBankDotNetBackend.Entities;

namespace BloodBankDotNetBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<BloodBank> BloodBanks { get; set; }
        public DbSet<Donation> Donations { get; set; }
        public DbSet<BloodInventory> BloodInventories { get; set; }

        
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<BloodDonation> BloodDonations { get; set; }

    }
}
