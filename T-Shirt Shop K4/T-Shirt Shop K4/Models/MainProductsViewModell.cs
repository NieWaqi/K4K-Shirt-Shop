using System.Collections.Generic;

namespace T_Shirt_Shop_K4.Models
{
    public class MainProductsViewModell
    {
        public List<Product> Products;
        public List<Comment> Comments;
        public long MaxPages;
        public long CurrentPage;
    }
}