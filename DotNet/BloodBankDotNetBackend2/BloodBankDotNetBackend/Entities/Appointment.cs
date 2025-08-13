using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("appointments")]
    public class Appointment : BaseEntity
    {
        [ForeignKey("User")]
        public long? UserId { get; set; }
        public User? User { get; set; }

        [Column("appointment_creation_date")]
        public DateTime? AppointmentCreationDate { get; set; }

        [Column("appointment_schedule_date")]
        public DateTime? AppointmentScheduleDate { get; set; }

        [EnumDataType(typeof(Center))]
        [MaxLength(15)]
        public Center? Center { get; set; }

        [Column("bag_size")]
        public int? BagSize { get; set; }

        [Column("bag_quantity")]
        public int? BagQuantity { get; set; }

        [EnumDataType(typeof(Status))]
        [MaxLength(15)]
        public Status? Status { get; set; }

        [ForeignKey("Patient")]
        public long? PatientId { get; set; }
        public Patient? Patient { get; set; }

        [EnumDataType(typeof(BloodGroup))]
        [MaxLength(10)]
        public BloodGroup? BloodGroup { get; set; }
    }
}