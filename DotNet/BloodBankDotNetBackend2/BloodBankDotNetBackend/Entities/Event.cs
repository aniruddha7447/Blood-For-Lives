using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("events")]
    public class Event : BaseEntity
    {
        [MaxLength(100)]
        public string? Name { get; set; }

        [MaxLength(255)]
        public string? Description { get; set; }

        public DateTime? Date { get; set; }
    }
}