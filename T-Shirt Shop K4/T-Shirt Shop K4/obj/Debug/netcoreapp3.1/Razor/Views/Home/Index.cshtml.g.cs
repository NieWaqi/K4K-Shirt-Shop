#pragma checksum "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d0b21e45fab6f58a4d60991210cd0002201acbda"
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d0b21e45fab6f58a4d60991210cd0002201acbda", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fbe6ca77881f5a29934d09b08139ffe105b983ef", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<MainProductsViewModell>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "XS", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "S", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "M", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "L", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "XL", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "XXL", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "XXXL", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
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
            WriteLiteral("\r\n<div class=\"row\">\r\n");
#nullable restore
#line 8 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
     using (Html.BeginForm("Index", "Home", FormMethod.Get))
    {

#line default
#line hidden
#nullable disable
            WriteLiteral(@"        <table>
            <tr>
                <th>
                    <label for=""searchInput"">Search by name</label>
                    <input name=""search"" id=""searchInput"" type=""text"">
                </th>
                <th>
                    <label>
                        <input name=""male"" type=""checkbox"" class=""filled-in""/>
                        <span>Male</span>
                    </label>
                    <label>
                        <input name=""female"" type=""checkbox"" class=""filled-in""/>
                        <span>Female</span>
                    </label>
                </th>
                <th>
                    <label>Select data</label>
                    <select name=""size"">
                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda6844", async() => {
                WriteLiteral("Choose your option");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            BeginWriteTagHelperAttribute();
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __tagHelperExecutionContext.AddHtmlAttribute("disabled", Html.Raw(__tagHelperStringValueBuffer), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.Minimized);
            BeginWriteTagHelperAttribute();
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __tagHelperExecutionContext.AddHtmlAttribute("selected", Html.Raw(__tagHelperStringValueBuffer), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.Minimized);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda8661", async() => {
                WriteLiteral("XS");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda9840", async() => {
                WriteLiteral("S");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda11018", async() => {
                WriteLiteral("M");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda12197", async() => {
                WriteLiteral("L");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_4.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda13376", async() => {
                WriteLiteral("XL");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_5.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda14556", async() => {
                WriteLiteral("XXL");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_6.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b21e45fab6f58a4d60991210cd0002201acbda15737", async() => {
                WriteLiteral("XXXL");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_7.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_7);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                    </select>
                </th>
                <th>
                    <button class=""btn waves-effect waves-light right blue"" type=""submit"" name=""action"">
                        Search
                    </button>
                </th>
            </tr>
        </table>
");
#nullable restore
#line 46 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
    }

#line default
#line hidden
#nullable disable
#nullable restore
#line 47 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
     foreach (var prod in Model.Products)
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <div class=\"col s12 m2\">\r\n            <div class=\"card\">\r\n                <div class=\"card-image\">\r\n");
            WriteLiteral("                    ");
#nullable restore
#line 53 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
               Write(Html.Raw("<img style='width:100%; height:100%; alt=shirt image' class='materialboxed' src=\"data:image/jpeg;base64,"
                              + Convert.ToBase64String(prod.Image) + "\" />"));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <p>\r\n                        ");
#nullable restore
#line 58 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                   Write(prod.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </p>\r\n                    <p>\r\n                        <b>");
#nullable restore
#line 61 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                      Write(prod.Cost);

#line default
#line hidden
#nullable disable
            WriteLiteral("$</b>\r\n                    </p>\r\n                    <p>\r\n                        Size: ");
#nullable restore
#line 64 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                         Write(prod.Size);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </p>\r\n                </div>\r\n                <div class=\"center card-action\">\r\n");
            WriteLiteral("                    <!-- Modal Trigger -->\r\n                    <a class=\"waves-effect waves-light btn modal-trigger\"");
            BeginWriteAttribute("href", " href=", 2849, "", 2876, 1);
#nullable restore
#line 70 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 2855, "#modal" + prod.Id, 2855, 21, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Select</a>\r\n\r\n                    <!-- Modal Structure -->\r\n");
#nullable restore
#line 73 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                     using (Html.BeginForm("MakeOrder", "Purchase", routeValues: new {ProductId = prod.Id.ToString()}, FormMethod.Post))
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <div");
            BeginWriteAttribute("id", " id=", 3126, "", 3150, 1);
#nullable restore
#line 75 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 3130, "modal" + prod.Id, 3130, 20, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"modal\">\r\n                            <div class=\"modal-content\">\r\n                                <h4>");
#nullable restore
#line 77 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                               Write(prod.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h4>\r\n                                <p>");
#nullable restore
#line 78 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                              Write(prod.Description);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n                                <p>\r\n                                    <input readonly");
            BeginWriteAttribute("value", " value=", 3423, "", 3477, 1);
#nullable restore
#line 80 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 3430, prod.Cost.ToString().Replace(',', '.') + "$", 3430, 47, false);

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
#line 85 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                                                                                 Write(prod.Cost + "$");

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</p>
                                </div>
                            </div>
                            <div class=""modal-footer"">
                                <br>
                                <br>
                                <br>
                                <br>
                                <br>
                                <p class=""left"">Enter your address</p>
                                <input required name=""address"" id=""address"" type=""text"">
                                <button type=""submit"" value=""Create"" class=""purple btn .light-purple.accent-3 waves-effect waves-light"">
                                    Add to card
                                </button>
                            </div>
                            <br>
                        </div>
");
#nullable restore
#line 102 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                </div>\r\n            </div>\r\n        </div>\r\n");
#nullable restore
#line 106 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
    }

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n<div class=\"center\">\r\n    <ul class=\"pagination\">\r\n");
#nullable restore
#line 115 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
         if (Model.CurrentPage > 5)
        {
            

#line default
#line hidden
#nullable disable
#nullable restore
#line 117 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             for (long num = Model.CurrentPage - 5; num <= Model.MaxPages && num <= Model.CurrentPage + 5; num++)
            {
                

#line default
#line hidden
#nullable disable
#nullable restore
#line 119 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 if (num == Model.CurrentPage)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"active\">\r\n                        <a");
            BeginWriteAttribute("href", " href=\"", 5422, "\"", 5437, 2);
            WriteAttributeValue("", 5429, "?id=", 5429, 4, true);
#nullable restore
#line 122 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 5433, num, 5433, 4, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 122 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                      Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 124 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }
                else
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"waves-effect\">\r\n                        <a");
            BeginWriteAttribute("href", " href=\"", 5609, "\"", 5624, 2);
            WriteAttributeValue("", 5616, "?id=", 5616, 4, true);
#nullable restore
#line 128 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 5620, num, 5620, 4, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 128 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                      Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 130 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 130 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
#nullable restore
#line 131 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             
        }
        else
        {
            

#line default
#line hidden
#nullable disable
#nullable restore
#line 135 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             for (long num = 1; num <= Model.MaxPages && num <= 10; num++)
            {
                

#line default
#line hidden
#nullable disable
#nullable restore
#line 137 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 if (num == Model.CurrentPage)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"active\">\r\n                        <a");
            BeginWriteAttribute("href", " href=\"", 5958, "\"", 5973, 2);
            WriteAttributeValue("", 5965, "?id=", 5965, 4, true);
#nullable restore
#line 140 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 5969, num, 5969, 4, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 140 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                      Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 142 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }
                else
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <li class=\"waves-effect\">\r\n                        <a");
            BeginWriteAttribute("href", " href=\"", 6145, "\"", 6160, 2);
            WriteAttributeValue("", 6152, "?id=", 6152, 4, true);
#nullable restore
#line 146 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
WriteAttributeValue("", 6156, num, 6156, 4, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 146 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                                      Write(num);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n                    </li>\r\n");
#nullable restore
#line 148 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 148 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
                 
            }

#line default
#line hidden
#nullable disable
#nullable restore
#line 149 "C:\Users\peron\Desktop\kursach4\K4K-Shirt-Shop\T-Shirt Shop K4\T-Shirt Shop K4\Views\Home\Index.cshtml"
             
        }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"    </ul>
</div>
<script >
    function nChanged(){
    $("":input"").bind('keyup mouseup', function () {
        let price = $(this).parent().prev().children().val();
        price = price.slice(0, price.length)
        $(this).next().next().text(""Total price: "" + parseFloat((parseFloat($(this).val()) * parseFloat(price))+ ""$"")).toFixed(2)
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
