using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("identity_proofs")]
    public class IdentityProof : BaseEntity
    {
        [MaxLength(50)]
        public string? DocumentNumber { get; set; }

        [MaxLength(30)]
        public string? DocumentType { get; set; }

        [MaxLength(100)]
        public string? FilePath { get; set; }
    }
}