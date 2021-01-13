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

        [HttpGet("Login")]
        public IActionResult Login(string returnUrl = null)
        {
            return View(new Models.LoginVIewModel {ReturnUrl = returnUrl});
        }

        [HttpPost("Login")]
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

        [HttpGet("Info")]
        [Authorize]
        public IActionResult Info()
        {
            var curUser = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());

            var userModel = new UserViewModel
            {
                Email = curUser.Email,
                Login = curUser.name,
                Phone = curUser.PhoneNumber,
                Name = curUser.name
            };

            return View(userModel);
        }

        [HttpGet]
        public async Task<IActionResult> SaveChanges(string changedPhone, string changedName, string changedEmail)
        {
            var curUser = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());

            if (!string.IsNullOrEmpty(changedName))
            {
                curUser.name = changedName;
            }

            if (!string.IsNullOrEmpty(changedPhone))
            {
                curUser.PhoneNumber = changedPhone;
            }

            if (!string.IsNullOrEmpty(changedEmail))
            {
                if (!_userManager.Users.Any(w => w.Email.ToLower() == changedEmail.ToLower()))
                {
                    curUser.Email = changedEmail;
                    curUser.NormalizedEmail = changedEmail.ToUpper();
                }
            }

            await _userManager.UpdateAsync(curUser);

            return RedirectToAction("Info");
        }

        [HttpPost]
        public async Task<IActionResult> ChangePassword(string changedPassword, string changedPasswordRepeat)
        {
            var curUser = _userManager.Users.Single(w => w.Id == GetCurrentUserIdAsync());

            var _passwordValidator =
                HttpContext.RequestServices.GetService(typeof(IPasswordValidator<User>)) as IPasswordValidator<User>;
            var _passwordHasher =
                HttpContext.RequestServices.GetService(typeof(IPasswordHasher<User>)) as IPasswordHasher<User>;

            IdentityResult result =
                await _passwordValidator.ValidateAsync(_userManager, curUser, changedPassword);

            if (result.Succeeded && changedPassword == changedPasswordRepeat)
            {
                curUser.PasswordHash = _passwordHasher.HashPassword(curUser, changedPassword);
                await _userManager.UpdateAsync(curUser);
            }

            return RedirectToAction("Info");
        }
    }
}