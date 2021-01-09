using Microsoft.AspNetCore.Mvc;

namespace T_Shirt_Shop_K4.Controllers
{
    public class AdminController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}