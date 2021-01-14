using System.ComponentModel.DataAnnotations;

namespace T_Shirt_Shop_K4.Models
{
    public class ChangeUserPasswordViewModel
    {
        [Required]
        [StringLength(100, ErrorMessage = "Password's length must have at least 6 letters")]
        [DataType(DataType.Password)]
        [Display(Name = "Enter password")]
        public string Password { get; set; }
        
        [Required]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "Password are not same")]
        public string ConfirmPassword { get; set; }
    }
}