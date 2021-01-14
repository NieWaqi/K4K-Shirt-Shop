using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using T_Shirt_Shop_K4.Models;
using T_Shirt_Shop_K4.Repository;
using T_Shirt_Shop_K4.Repository.Interfaces;
using T_Shirt_Shop_K4.Shared.Enums;

namespace T_Shirt_Shop_K4.Controllers
{
    public class AdminController : Controller
    {
        private readonly UserManager<User> _userManager;
        private IRepository<Order> _orderRepository;
        private IRepository<Product> _productRepository;

        public AdminController(UserManager<User> userManager, ApplicationContext context)
        {
            _orderRepository = new OrderRepository(context);
            _productRepository = new ProductRepository(context);
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
            if (selected == "orders")
            {
                return RedirectToAction("ShowOrders");
            }

            if (selected == "products")
            {
                return RedirectToAction("ShowProducts");
            }

            return null;
        }

        [HttpGet("Show/Users")]
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
                users = users.Where(w => !string.IsNullOrEmpty(w.PhoneNumber) && w.PhoneNumber.Contains(phone))
                    .ToList();
            }

            return View(users);
        }

        [HttpGet("Show/Orders")]
        [Authorize(Roles = "admin")]
        public IActionResult ShowOrders(string login, string productName, string productStatus, DateTime? orderDate)
        {
            var orders = _orderRepository.GetAll().ToList();

            if (!string.IsNullOrEmpty(login))
            {
                orders = orders.Where(w => w.UserName.ToLower().Contains(login.ToLower())).ToList();
            }

            if (!string.IsNullOrEmpty(productName))
            {
                orders = orders.Where(w => w.ProductName.ToLower().Contains(productName.ToLower())).ToList();
            }

            if (!string.IsNullOrEmpty(productStatus))
            {
                orders = orders.Where(w =>
                        Enum.GetName(typeof(Enums.OrderStatus), w.OrderStatus).ToLower()
                            .Contains(productStatus.ToLower()))
                    .ToList();
            }

            if (orderDate.HasValue)
            {
                DateTime orderDateNn = orderDate.Value;
                var roundedOrderDate = new DateTime(orderDateNn.Year, orderDateNn.Month, orderDateNn.Day, 0, 0, 0);
                orders = orders.Where(w =>
                        new DateTime(w.OrderDate.Year, w.OrderDate.Month, w.OrderDate.Day, 0, 0, 0) == roundedOrderDate)
                    .ToList();
            }

            return View(orders);
        }

        [HttpGet("Show/Products")]
        [Authorize(Roles = "admin")]
        public IActionResult ShowProducts(string productName)
        {
            var products = _productRepository.GetAll().ToList();

            if (!string.IsNullOrEmpty(productName))
            {
                products = products.Where(w => w.Name.ToLower().Contains(productName.ToLower())).ToList();
            }

            return View(products);
        }

        [HttpPost]
        [Authorize(Roles = "admin")]
        public IActionResult AddProduct(string productName, string productDescription, string productCost,
            IFormFile productImage)
        {
            if (productImage != null && !string.IsNullOrEmpty(productName) &&
                !string.IsNullOrEmpty(productDescription) && decimal.Parse(productCost.Replace('.',',')) > 0)
            {
                byte[] imageData = null;

                using (var binaryReader = new BinaryReader(productImage.OpenReadStream()))
                {
                    imageData = binaryReader.ReadBytes(Convert.ToInt32(productImage.Length));
                }

                var product = new T_Shirt_Shop_K4.Models.Product
                {
                    Name = productName,
                    Description = productDescription,
                    Cost = decimal.Parse(productCost.Replace('.',',')),
                    Image = imageData
                };

                _productRepository.Create(product);

                _productRepository.Save();
            }

            return RedirectToAction("ShowProducts");
        }
    }
}