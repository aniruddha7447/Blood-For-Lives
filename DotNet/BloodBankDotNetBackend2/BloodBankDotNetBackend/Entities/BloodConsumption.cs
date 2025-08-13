using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("blood_consumptions")]
    public class BloodConsumption : BaseEntity
    {
        [EnumDataType(typeof(BloodGroup))]
        [MaxLength(15)]
        [Column("blood_group")]
        public BloodGroup? BloodGroup { get; set; }

        [ForeignKey("Appointment")]
        public long? AppointmentId { get; set; }
        public Appointment? Appointment { get; set; }

        [Column("bag_size")]
        public int? BagSize { get; set; }

        [Column("bag_quantity")]
        public int? BagQuantity { get; set; }

        [Column("creation_date")]
        public DateTime? CreationDate { get; set; }
    }
}