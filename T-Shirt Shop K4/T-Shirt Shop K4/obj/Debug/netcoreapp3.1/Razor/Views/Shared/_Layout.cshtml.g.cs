#pragma checksum "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "66cc3b7b1313b3a80d3bc144e1b62f7c283db763"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__Layout), @"mvc.1.0.view", @"/Views/Shared/_Layout.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\_ViewImports.cshtml"
using T_Shirt_Shop_K4;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\_ViewImports.cshtml"
using T_Shirt_Shop_K4.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"66cc3b7b1313b3a80d3bc144e1b62f7c283db763", @"/Views/Shared/_Layout.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fbe6ca77881f5a29934d09b08139ffe105b983ef", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__Layout : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/site.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/materialize.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/materialize.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "~/js/site.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66cc3b7b1313b3a80d3bc144e1b62f7c283db7635359", async() => {
                WriteLiteral("\r\n    <meta charset=\"utf-8\"/>\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\r\n    <title>");
#nullable restore
#line 6 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
      Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
                WriteLiteral(" - T_Shirt_Shop_K4</title>\r\n\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "66cc3b7b1313b3a80d3bc144e1b62f7c283db7636037", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "66cc3b7b1313b3a80d3bc144e1b62f7c283db7637215", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66cc3b7b1313b3a80d3bc144e1b62f7c283db7638394", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral(@"
    <script src=""js/jquery-3.4.1.intellisense.js""></script>
    <script src=""js/jquery-3.4.1.js""></script>
    <script src=""js/jquery-3.4.1.slim.js""></script>
    <script src=""js/jquery.validate-vsdoc.js""></script>
    <script> 
    $(document).ready(function(){
                 $('.materialboxed').materialbox();
               });
               </script>
");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66cc3b7b1313b3a80d3bc144e1b62f7c283db76310572", async() => {
                WriteLiteral("\r\n<header>\r\n    <nav>\r\n");
#nullable restore
#line 24 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
         if (User.Identity.IsAuthenticated)
        {

#line default
#line hidden
#nullable disable
                WriteLiteral("            <div class=\"nav-wrapper deep-purple .deep-purple.accent-4\">\r\n                <h5 href=\"#\" class=\"brand-logo center\">K4K Shirt Shop</h5>\r\n                <ul id=\"nav-mobile\" class=\"right smaller-on-med-and-down\">\r\n");
                WriteLiteral("\r\n                    <li style=\"padding-right: 20px\">\r\n");
                WriteLiteral("                    </li>\r\n\r\n                </ul>\r\n                <ul id=\"nav-mobile\" class=\"left smaller-on-med-and-down\">\r\n                    <li>");
#nullable restore
#line 39 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                   Write(Html.ActionLink("Store", "Index", "Home"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</li>\r\n");
#nullable restore
#line 40 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                     if (User.IsInRole("admin"))
                    {

#line default
#line hidden
#nullable disable
                WriteLiteral("                        <li>");
#nullable restore
#line 42 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                       Write(Html.ActionLink("Admin", "Index", "Admin"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</li>\r\n");
#nullable restore
#line 43 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                    }

#line default
#line hidden
#nullable disable
                WriteLiteral("                </ul>\r\n                <ul id=\"nav-mobile\" class=\"right smaller-on-med-and-down\">\r\n                    <li>");
#nullable restore
#line 46 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                   Write(Html.ActionLink("Shopping cart", "Card", "Purchase"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</li>\r\n                    \r\n                        <li>");
#nullable restore
#line 48 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                       Write(Html.ActionLink("Account", "Info", "Account"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</li>\r\n                </ul>\r\n            </div>\r\n");
#nullable restore
#line 51 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
        }
        else
        {

#line default
#line hidden
#nullable disable
                WriteLiteral("            <div class=\"nav-wrapper deep-purple .deep-purple.accent-4\">\r\n                <h5 href=\"#\" class=\"brand-logo center\">K4K Shirt Shop</h5>\r\n                <ul id=\"nav-mobile\" class=\"right smaller-on-med-and-down\">\r\n");
                WriteLiteral("\r\n                    <li style=\"padding-right: 20px\">\r\n");
                WriteLiteral("                    </li>\r\n\r\n                </ul>\r\n                <ul id=\"nav-mobile\" class=\"left smaller-on-med-and-down\">\r\n                    <li>");
#nullable restore
#line 67 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                   Write(Html.ActionLink("Store", "Index", "Home"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</li>\r\n                </ul>\r\n\r\n                <ul id=\"nav-mobile\" class=\"right smaller-on-med-and-down\">\r\n                    <li>");
#nullable restore
#line 71 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                   Write(Html.ActionLink("Login", "Login", "Account"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</li>\r\n                    <li>");
#nullable restore
#line 72 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
                   Write(Html.ActionLink("Registration", "Register", "Account"));

#line default
#line hidden
#nullable disable
                WriteLiteral("</li>\r\n                </ul>\r\n            </div>\r\n");
#nullable restore
#line 75 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
        }

#line default
#line hidden
#nullable disable
                WriteLiteral("    </nav>\r\n</header>\r\n\r\n<div class=\"container\">\r\n    <main role=\"main\" class=\"pb-3\">\r\n        ");
#nullable restore
#line 81 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
   Write(RenderBody());

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n    </main>\r\n</div>\r\n\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "66cc3b7b1313b3a80d3bc144e1b62f7c283db76316252", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_4.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
#nullable restore
#line 85 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion = true;

#line default
#line hidden
#nullable disable
                __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
#nullable restore
#line 86 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Shared\_Layout.cshtml"
Write(RenderSection("Scripts", required: false));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
