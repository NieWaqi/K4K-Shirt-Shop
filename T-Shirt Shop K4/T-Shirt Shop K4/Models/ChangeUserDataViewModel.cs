using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace T_Shirt_Shop_K4.Models
{
    public class ChangeUserDataViewModel
    {
        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Phone number")]
        [Phone(ErrorMessage = "Wrong phone number")]
        public string Phone { get; set; }
        
        [Display(Name = "Your name")]
        [MaxLength(20, ErrorMessage = "Too long name value")]
        public string Name { get; set; }
        
        [Display(Name = "Email")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress (ErrorMessage = "Incorrect email address")]
        [Remote(action: "CheckEmail", controller:"Account", ErrorMessage = "Email already in use", HttpMethod = "POST")]
        public string Email { get; set; }
    }
}