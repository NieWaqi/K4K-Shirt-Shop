using System.Linq;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace T_Shirt_Shop_K4.Helpers
{
    public static class ProductsHelper
    {
        public static HtmlString ProductsShow()
        {
            TagBuilder row = new TagBuilder("div");
            row.AddCssClass("row");

            TagBuilder col = new TagBuilder("div");
            col.AddCssClass("card");

            TagBuilder card = new TagBuilder("div");
            card.AddCssClass("card");

            TagBuilder cardPic = new TagBuilder("div");
            cardPic.AddCssClass("card-image");

            TagBuilder cardImg = new TagBuilder("img");
            cardImg.TagRenderMode = TagRenderMode.SelfClosing;
            cardImg.AddCssClass("materialboxed");
            cardImg.Attributes.Add("src", "~/lib/Images/shirt1.png"); // Image
            cardImg.Attributes.Add("alt", "shirt image");
            cardImg.Attributes.Add("style", "width: 190px; height: 190px");
            cardPic.InnerHtml.Append(cardImg.ToString());
            card.InnerHtml.Append(cardPic.ToString());

            var cardContent = new TagBuilder("div");
            cardContent.AddCssClass("card-content");

            var productName = new TagBuilder("p"); // Product Name
            productName.InnerHtml.Append("Black Shirt");
            cardContent.InnerHtml.Append(productName.ToString());

            var productCost = new TagBuilder("P"); // Product Cost
            productCost.InnerHtml.Append("100$");
            cardContent.InnerHtml.Append(productCost.ToString());
            card.InnerHtml.Append(cardContent.ToString());

            var cardAction = new TagBuilder("div");

            var aSelect = new TagBuilder("a");
            aSelect.AddCssClass("waves-effect");
            aSelect.AddCssClass("waves-light");
            aSelect.AddCssClass("btn");
            aSelect.AddCssClass("modal-trigger");
            aSelect.Attributes.Add("href", "#model" + "1"); // Product number
            cardAction.InnerHtml.Append(aSelect.ToString());

            var divModal = new TagBuilder("div");
            divModal.Attributes.Add("id", "model" + "1"); // Product number
            divModal.AddCssClass("modal");

            var divModelContent = new TagBuilder("div");
            divModelContent.AddCssClass("modal-content");

            var h4ProdName = new TagBuilder("h4");
            divModelContent.InnerHtml.Append(h4ProdName.ToString());

            var pDescription = new TagBuilder("p");
            divModelContent.InnerHtml.Append(pDescription.ToString());

            var pPrice = new TagBuilder("p");
            var bPrice = new TagBuilder("b");
            bPrice.InnerHtml.Append("100$"); // Product cost
            pPrice.InnerHtml.Append(bPrice.ToString());
            divModelContent.InnerHtml.Append(pPrice.ToString());

            var divPrice = new TagBuilder("div");
            divPrice.AddCssClass("col");
            divPrice.AddCssClass("m8");
            divPrice.AddCssClass("offset-m2");
            divPrice.AddCssClass("s12");
            divPrice.AddCssClass("z-depth-2");

            var inputNumber = new TagBuilder("input");
            inputNumber.TagRenderMode = TagRenderMode.SelfClosing;
            inputNumber.Attributes.Add("type", "number");
            inputNumber.Attributes.Add("onchange", "nChanged()");
            inputNumber.Attributes.Add("min", "1");
            inputNumber.Attributes.Add("max", "500");
            inputNumber.Attributes.Add("name", "amount");
            inputNumber.Attributes.Add("id", "amount");
            inputNumber.AddCssClass("validate");
            divPrice.InnerHtml.Append(inputNumber.ToString());

            var labelAmount = new TagBuilder("label");
            labelAmount.Attributes.Add("for", "amount");
            labelAmount.Attributes.Add("data-error", "Invalid number");
            labelAmount.InnerHtml.Append("Amount");
            divPrice.InnerHtml.Append(labelAmount.ToString());

            var pTotalPrice = new TagBuilder("p");
            pTotalPrice.Attributes.Add("type", "text");
            pTotalPrice.Attributes.Add("id", "tot_amount");
            pTotalPrice.MergeAttribute("readonly", "readonly");
            pTotalPrice.InnerHtml.Append("Total price: 0$");
            divPrice.InnerHtml.Append(pTotalPrice.ToString());

            divModelContent.InnerHtml.Append(divPrice.ToString());

            divModal.InnerHtml.Append(divModelContent.ToString());

            var divModalFooter = new TagBuilder("div");
            divModalFooter.AddCssClass("modal-footer");

            var aAddToCard = new TagBuilder("a");
            aAddToCard.Attributes.Add("href", "#!");
            aAddToCard.AddCssClass("modal-close");
            aAddToCard.AddCssClass("waves-effect");
            aAddToCard.AddCssClass("waves-green");
            aAddToCard.AddCssClass("btn-small");
            aAddToCard.InnerHtml.Append("Add to card");
            divModalFooter.InnerHtml.Append(aAddToCard.ToString());

            divModal.InnerHtml.Append(divModalFooter.ToString());

            card.InnerHtml.Append(divModal.ToString());

            col.InnerHtml.Append(card.ToString());

            row.InnerHtml.Append(col.ToString());
            
            var writer = new System.IO.StringWriter();
            row.WriteTo(writer, HtmlEncoder.Default);

            return new HtmlString(writer.ToString());
        }

        public static HtmlString test()
        {
            var item = "test";
            TagBuilder a = new TagBuilder("a");
            TagBuilder ul = new TagBuilder("ul");
            TagBuilder li = new TagBuilder("li");
            // добавляем текст в li
            a.InnerHtml.Append(item);
            // добавляем li в ul
            ul.InnerHtml.AppendHtml(li);
            ul.Attributes.Add("class", "itemsList");
            var writer = new System.IO.StringWriter();
            a.WriteTo(writer, HtmlEncoder.Default);
            return new HtmlString(writer.ToString());
        }
    }
}