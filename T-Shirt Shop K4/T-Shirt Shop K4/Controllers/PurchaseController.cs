using Microsoft.AspNetCore.Mvc;

namespace T_Shirt_Shop_K4.Controllers
{
    public class PurchaseController : Controller
    {
        // GET
        public IActionResult Card()
        {
            return View();
        }
    }
}