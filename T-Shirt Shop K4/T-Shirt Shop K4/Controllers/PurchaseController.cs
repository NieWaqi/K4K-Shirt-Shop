using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using T_Shirt_Shop_K4.Models;
using T_Shirt_Shop_K4.Shared.Enums;

namespace T_Shirt_Shop_K4.Controllers
{
    public class PurchaseController : Controller
    {
        private ApplicationContext db;
        private readonly UserManager<User> _userManager;
        
        private string GetCurrentUserIdAsync() => _userManager.GetUserId(HttpContext.User);

        public PurchaseController(ApplicationContext context, UserManager<User> userManager)
        {
            db = context;
            _userManager = userManager;
        }
        
        public IActionResult Card()
        {   
            var model = db.Orders.Where(w => w.User.Id == GetCurrentUserIdAsync()).ToList();
            return View(model);
        }

        [HttpPost]
        public string MakeOrder(int? ProductId, string Quantity)
        {
            Order order = new Order
            {
                //TODO: Address
                Address = "TestAddress",
                Product = db.Products.FirstOrDefault(w => w.Id == ProductId),
                Quantity = Convert.ToInt32(Quantity),
                User = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync()),
                OrderDate = DateTime.UtcNow,
                OrderStatus = Enums.OrderStatus.Unpaid
            };
            
            db.Orders.Add(order);

            db.SaveChanges();

            return "Success";
        }
    }
}