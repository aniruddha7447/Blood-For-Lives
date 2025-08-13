using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("forget_passwords")]
    public class ForgetPassword : BaseEntity
    {
        [MaxLength(30)]
        public string? Email { get; set; }

        [MaxLength(100)]
        public string? Token { get; set; }

        public bool IsUsed { get; set; }
    }
}