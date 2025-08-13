namespace BloodBankDotNetBackend.DTOs
{
    public class AuthResp
    {
        public string Message { get; set; }
        public string Jwt { get; set; }
        public object User { get; set; }
    }
}