using Microsoft.AspNetCore.Mvc;
using T_Shirt_Shop.Tests.Models;
using T_Shirt_Shop_K4.Models;

namespace T_Shirt_Shop.Tests.Controllers
{
    public class HomeController : Controller
    {
        IRepository<Product> repo;
        public HomeController(IRepository<Product> r)
        {
            repo = r;
        }
        public IActionResult GetAll()
        {
            return View(repo.GetAll());
        }
    }
}