using System.IO;

namespace T_Shirt_Shop_K4.Models
{
    public class Product
    {
        public long Id { get; set; }
        
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Cost { get; set; }
        
        public byte[] Image { get; set; }
    }
}