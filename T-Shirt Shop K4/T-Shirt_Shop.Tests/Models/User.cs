using Microsoft.AspNetCore.Identity;

namespace T_Shirt_Shop.Tests.Models
{
    public class User : IdentityUser
    {
        public string name { get; set; }
        public int Age { get; set; }
    }
}