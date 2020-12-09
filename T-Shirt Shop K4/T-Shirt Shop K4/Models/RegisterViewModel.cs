using System.ComponentModel.DataAnnotations;

namespace T_Shirt_Shop_K4.Models
{
    public class RegisterViewModel
    {
        [Required] 
        [Display(Name = "Name")] 
        public string Email { get; set; }
        
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        
        [Required]
        [Compare("Password", ErrorMessage = "Password aren't same")]
        [DataType(DataType.Password)]
        [Display(Name = "Repeat password")]
        public string PasswordConfirm { get; set; }
    }
}