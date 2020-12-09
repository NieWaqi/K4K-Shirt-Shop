using System.ComponentModel.DataAnnotations;

namespace T_Shirt_Shop_K4.Models
{
    public class LoginVIewModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
         
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
         
        [Display(Name = "Remember?")]
        public bool RememberMe { get; set; }
         
        public string ReturnUrl { get; set; }
    }
}