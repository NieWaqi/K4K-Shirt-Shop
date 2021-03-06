﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
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
            var model = db.Orders.Where(w =>
                    w.User.Id == GetCurrentUserIdAsync() && w.OrderStatus != Enums.OrderStatus.Received &&
                    w.OrderStatus != Enums.OrderStatus.Cancelled)
                .ToList();

            foreach (var order in model)
            {
                order.User = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());
                order.Product = db.Products.FirstOrDefault(w => w.Id == order.ProductId);
            }

            return View(model);
        }

        [Authorize]
        public IActionResult UserPurchases()
        {
            var model = db.Orders.Where(w =>
                    w.User.Id == GetCurrentUserIdAsync())
                .ToList();

            foreach (var order in model)
            {
                order.User = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());
                order.Product = db.Products.FirstOrDefault(w => w.Id == order.ProductId);
            }

            return View(model);
        }

        [HttpPost]
        [Authorize]
        public IActionResult LeaveComment(int? ProductId, string Comment)
        {
            var comment = new Comment
            {
                Product = db.Products.FirstOrDefault(w => w.Id == ProductId),
                Text = Comment,
                User = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync()),
                UserName = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync()).name,
                SubmitDate = DateTime.UtcNow
            };

            db.Comments.Add(comment);
            db.SaveChanges();
            
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        [Authorize]
        public ActionResult MakeOrder(int? ProductId, string Quantity, string address)
        {
            Order order = new Order
            {
                Address = address,
                ProductId = (long) ProductId,
                Product = db.Products.FirstOrDefault(w => w.Id == ProductId),
                ProductName = db.Products.FirstOrDefault(w => w.Id == ProductId)?.Name,
                Quantity = Convert.ToInt32(Quantity),
                User = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync()),
                UserName = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync()).UserName,
                OrderDate = DateTime.UtcNow,
                OrderStatus = Enums.OrderStatus.Unpaid
            };

            db.Orders.Add(order);

            db.SaveChanges();

            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteOrder(long? id)
        {
            Order order = db.Orders.FirstOrDefault(w => w.Id == id);

            db.Orders.Remove(order);

            db.SaveChanges();

            return RedirectToAction("Card");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult ChangeQuantity(long? id, int quantity)
        {
            Order order = db.Orders.FirstOrDefault(w => w.Id == id);

            order.Quantity = quantity;

            db.SaveChanges();

            return RedirectToAction("Card");
        }
    }
}