﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using T_Shirt_Shop_K4.Data;
using T_Shirt_Shop_K4.Models;

namespace T_Shirt_Shop_K4.Controllers
{
    public class HomeController : Controller
    {
        private ApplicationContext db;
        public HomeController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IActionResult Index(string search, int? id = 1)
        {
            var products = db.Products.ToList();
            if (!string.IsNullOrEmpty(search))
            {
                products = products.Where(w => w.Name.ToLower().Contains(search.ToLower())).ToList();
            }

            var model = new MainProductsViewModell
            {
                Products = products
                    .Skip(36 * (Convert.ToInt32(id - 1)))
                    .Take(36)
                    .ToList(),

                CurrentPage = Convert.ToInt32(id),
                MaxPages = ((int)db.Products.Count() / 36) + 1
            };
            
            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
