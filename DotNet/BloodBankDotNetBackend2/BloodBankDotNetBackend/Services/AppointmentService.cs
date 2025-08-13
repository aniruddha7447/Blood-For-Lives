using BloodBankDotNetBackend.Data;
using BloodBankDotNetBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace BloodBankDotNetBackend.Services
{
    public class AppointmentService
    {
        private readonly AppDbContext _context;
        public AppointmentService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Appointment> GetAllAppointments() => _context.Appointments.Include(a => a.User).Include(a => a.Patient).ToList();
        public Appointment? GetAppointmentById(long id) => _context.Appointments.Find(id);
        public IEnumerable<Appointment> FindByStatus(Status status) => _context.Appointments.Where(a => a.Status == status).ToList();
        public int UpdateAppointmentStatus(Status status, long id)
        {
            var appointment = _context.Appointments.Find(id);
            if (appointment == null) return 0;
            appointment.Status = status;
            _context.Appointments.Update(appointment);
            return _context.SaveChanges();
        }
        public IEnumerable<Appointment> FindByUserId(long userId) => _context.Appointments.Where(a => a.UserId == userId).ToList();
        public void CreateAppointment(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            _context.SaveChanges();
        }
        public void UpdateAppointment(Appointment appointment)
        {
            _context.Appointments.Update(appointment);
            _context.SaveChanges();
        }
        public void DeleteAppointment(long id)
        {
            var appointment = _context.Appointments.Find(id);
            if (appointment != null)
            {
                _context.Appointments.Remove(appointment);
                _context.SaveChanges();
            }
        }
    }
}