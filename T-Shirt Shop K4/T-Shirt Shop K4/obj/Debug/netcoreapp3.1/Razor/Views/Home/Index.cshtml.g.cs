#pragma checksum "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7faebfcc69d0571b3d2122fbb28f9b3dc84d71ee"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7faebfcc69d0571b3d2122fbb28f9b3dc84d71ee", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fbe6ca77881f5a29934d09b08139ffe105b983ef", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<MainProductsViewModell>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("materialboxed"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/lib/Images/shirt1.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("shirt image"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("width: 190px; height: 190px"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";
    Layout = "_Layout";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<script >\r\nM.AutoInit();\r\n</script>\r\n\r\n<div class=\"row\">\r\n\r\n");
#nullable restore
#line 13 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
     foreach (var prod in Model.Products)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <div class=\"col s12 m2\">\r\n            <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "7faebfcc69d0571b3d2122fbb28f9b3dc84d71ee5346", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <p>\r\n                        ");
#nullable restore
#line 22 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                   Write(prod.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </p>\r\n                    <p>\r\n                        <b>");
#nullable restore
#line 25 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                      Write(prod.Cost);

#line default
#line hidden
#nullable disable
            WriteLiteral("</b>\r\n                    </p>\r\n                </div>\r\n                <div class=\"center card-action\">\r\n");
            WriteLiteral("                    <!-- Modal Trigger -->\r\n                    <a class=\"waves-effect waves-light btn modal-trigger\"");
            BeginWriteAttribute("href", " href=", 981, "", 1008, 1);
#nullable restore
#line 31 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 987, "#modal" + prod.Id, 987, 21, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Select</a>\r\n\r\n                    <!-- Modal Structure -->\r\n");
#nullable restore
#line 34 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                     using (Html.BeginForm("MakeOrder", "Purchase", routeValues: new {ProductId = prod.Id.ToString()}, FormMethod.Post))
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <div");
            BeginWriteAttribute("id", " id=", 1258, "", 1282, 1);
#nullable restore
#line 36 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 1262, "modal" + prod.Id, 1262, 20, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"modal\">\r\n                            <div class=\"modal-content\">\r\n                                <h4>");
#nullable restore
#line 38 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                               Write(prod.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h4>\r\n                                <p>");
#nullable restore
#line 39 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                              Write(prod.Description);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n                                <p>\r\n                                    <input");
            BeginWriteAttribute("value", " value=", 1546, "", 1571, 1);
#nullable restore
#line 41 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 1553, prod.Cost + "$", 1553, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(@">
                                </p>
                                <div class=""col m8 offset-m2 s12 z-depth-2"">
                                    <input name=""Quantity"" value=""1"" type=""number"" onchange=""nChanged()"" min=""1"" max=""500"" id=""amount"" class=""validate"">
                                    <label for=""amount"" data-error=""Invalid number"">Amount</label>
                                    <p type=""text"" id=""tot_amount"" readonly value=""123"">Total price: ");
#nullable restore
#line 46 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                                                                                 Write(prod.Cost + "$");

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n");
#nullable restore
#line 51 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                 if (!User.Identity.IsAuthenticated)
                                {
                                    
                                }
                                else
                                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                    <button type=\"submit\" value=\"Create\" class=\"purple btn .light-purple.accent-3 waves-effect waves-light\">\r\n                                        Add to card\r\n                                    </button>\r\n");
#nullable restore
#line 60 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                }

#line default
#line hidden
#nullable disable
            WriteLiteral("                            </div>\r\n                            <br>\r\n                        </div>\r\n");
#nullable restore
#line 64 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                </div>\r\n            </div>\r\n        </div>\r\n");
#nullable restore
#line 68 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n<div class=\"center\">\r\n    <ul class=\"pagination\">\r\n        <li class=\"disabled\">\r\n            <a href=\"#!\">\r\n                <i class=\"material-icons\"><</i>\r\n            </a>\r\n        </li>\r\n");
#nullable restore
#line 77 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
         if (Model.CurrentPage > 5)
        {
            

#line default
#line hidden
#nullable disable
#nullable restore
#line 79 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             for (long num = Model.CurrentPage - 5; num <= Model.MaxPages && num <= Model.CurrentPage + 5; num++)
            {
                

#line default
#line hidden
#nullable disable
#nullable restore
#line 81 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 if (num == Model.CurrentPage)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"active\">\r\n                        <a href=\"#!\">");
#nullable restore
#line 84 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 86 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }
                else
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"waves-effect\">\r\n                        <a href=\"#!\">");
#nullable restore
#line 90 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 92 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 92 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
#nullable restore
#line 93 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             
        }
        else
        {
            

#line default
#line hidden
#nullable disable
#nullable restore
#line 97 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             for (long num = 1; num <= Model.MaxPages && num <= 10; num++)
            {
                

#line default
#line hidden
#nullable disable
#nullable restore
#line 99 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 if (num == Model.CurrentPage)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"active\">\r\n                        <a href=\"#!\">");
#nullable restore
#line 102 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 104 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }
                else
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"waves-effect\">\r\n                        <a href=\"#!\">");
#nullable restore
#line 108 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 110 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 110 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
#nullable restore
#line 111 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             
        }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"        <li class=""waves-effect"">
            <a href=""#!"">
                <i class=""material-icons"">></i>
            </a>
        </li>
    </ul>
</div>
<script >
    function nChanged(){
    $("":input"").bind('keyup mouseup', function () {
        let price = $(this).parent().prev().children().val();
        price = price.slice(0, price.length)
        $(this).next().next().text(""Total price: "" + (parseInt($(this).val()) * parseInt(price))+ ""$"")
    })
    }
    </script>
<script >M.AutoInit();</script>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<MainProductsViewModell> Html { get; private set; }
    }
}
#pragma warning restore 1591
