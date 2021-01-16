using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace T_Shirt_Shop_K4.Models
{
    public class RegisterViewModel
    {
        [Display(Name = "Email")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress (ErrorMessage = "Incorrect email address")]
        [Remote(action: "CheckEmail", controller:"Account", ErrorMessage = "Email already in use", HttpMethod = "POST")]
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