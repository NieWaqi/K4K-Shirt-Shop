using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using T_Shirt_Shop_K4.Models;

namespace T_Shirt_Shop_K4.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<User> _roleManager;

        private string GetCurrentUserIdAsync() => _userManager.GetUserId(HttpContext.User);

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        // GET
        [HttpGet("Register")]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User {Email = model.Email, UserName = model.Email};
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    await _userManager.AddToRoleAsync(user, "user");
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }

            RedirectToAction("Register", model);
            return Ok("200. Registration completed successfully");
        }

        [HttpGet("Account/Login")]
        public IActionResult Login(string returnUrl = null)
        {
            return View(new Models.LoginVIewModel {ReturnUrl = returnUrl});
        }

        [HttpPost("Account/Login")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(Models.LoginVIewModel model)
        {
            if (ModelState.IsValid)
            {
                var result =
                    await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
                if (result.Succeeded)
                {
                    if (!string.IsNullOrEmpty(model.ReturnUrl) && Url.IsLocalUrl(model.ReturnUrl))
                    {
                        return Redirect(model.ReturnUrl);
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "Wrong login or password");
                }
            }

            return RedirectToAction("Login", model);
            // return Ok("200. Login completed successfully");
        }

        [HttpPost("Logout")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public JsonResult CheckEmail(string email)
        {
            if (_userManager.Users.Any(a => a.NormalizedEmail == email.ToUpper()))
                return Json(false);
            return Json(true);
        }

        [HttpGet]
        [Authorize]
        public IActionResult Info()
        {
            var curUser = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());

            var userModel = new ChangeUserDataViewModel
            {
                Email = curUser.Email,
                Phone = curUser.PhoneNumber,
                Name = curUser.name
            };

            return View(userModel);
        }

        [HttpPost]
        public async Task<IActionResult> Info(ChangeUserDataViewModel model)
        {
            if (ModelState.IsValid)
            {
                var curUser = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());

                if (!string.IsNullOrEmpty(model.Name))
                {
                    curUser.name = model.Name;
                }

                if (!string.IsNullOrEmpty(model.Phone))
                {
                    curUser.PhoneNumber = model.Phone;
                }

                if (!string.IsNullOrEmpty(model.Email))
                {
                    if (_userManager.Users.Any(a => a.NormalizedEmail == model.Email.ToUpper()))
                    {
                        ModelState.AddModelError(model.Email, "Email already in use");
                        ModelState.AddModelError(String.Empty, "Email already in use");
                    }
                    else
                    {
                        curUser.Email = model.Email;
                        curUser.NormalizedEmail = model.Email.ToUpper();
                    }
                }

                await _userManager.UpdateAsync(curUser);
            }

            return View(model);
        }

        [HttpGet]
        public IActionResult ChangePassword()
        {
            return View();
        }
        
        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangeUserPasswordViewModel model)
        {
            var curUser = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());

            var _passwordValidator =
                HttpContext.RequestServices.GetService(typeof(IPasswordValidator<User>)) as IPasswordValidator<User>;
            var _passwordHasher =
                HttpContext.RequestServices.GetService(typeof(IPasswordHasher<User>)) as IPasswordHasher<User>;

            IdentityResult result =
                await _passwordValidator.ValidateAsync(_userManager, curUser, model.Password);

            if (result.Succeeded)
            {
                curUser.PasswordHash = _passwordHasher.HashPassword(curUser, model.Password);
                await _userManager.UpdateAsync(curUser);
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            return View();
        }
    }
}