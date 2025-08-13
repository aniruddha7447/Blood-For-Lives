using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("patients")]
    public class Patient : BaseEntity
    {
        [MaxLength(15)]
        public string? Name { get; set; }

        [EnumDataType(typeof(Gender))]
        [MaxLength(7)]
        public Gender Gender { get; set; }

        public int? Age { get; set; }

        [MaxLength(30)]
        public string? DoctorName { get; set; }

        public string? Description { get; set; }
    }
}