using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using T_Shirt_Shop_K4.Models;

namespace T_Shirt_Shop_K4.Controllers
{
    public class AdminController : Controller
    {
        private readonly UserManager<User> _userManager;
        
        public AdminController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }
        
        [HttpGet]
        [Authorize(Roles = "admin")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Authorize(Roles = "admin")]
        public IActionResult Select(string selected)
        {
            if (selected == "users")
            {
                return RedirectToAction("ShowUsers");
            }
            return null;
        }
        
        [HttpGet]
        [Authorize(Roles = "admin")]
        public IActionResult ShowUsers(string login, string email, string phone)
        {
            var users = _userManager.Users.ToList();
            if (!string.IsNullOrEmpty(login))
            {
                users = users.Where(w => w.NormalizedUserName.ToLower().Contains(login.ToLower())).ToList();
            }

            if (!string.IsNullOrEmpty(email))
            {
                users = users.Where(w => w.NormalizedEmail.ToLower().Contains(email.ToLower())).ToList();
            }

            if (!string.IsNullOrEmpty(phone))
            {
                users = users.Where(w => !string.IsNullOrEmpty( w.PhoneNumber) && w.PhoneNumber.Contains(phone)).ToList();
            }

            return View(users);
        }
    }
}