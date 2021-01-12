using System;
using T_Shirt_Shop_K4.Shared.Enums;

namespace T_Shirt_Shop_K4.Models
{
    public class Order
    {
        public long Id { get; set; }
        
        public string Address { get; set; } 
        public DateTime OrderDate { get; set; }
        
        public Enums.OrderStatus OrderStatus { get; set; }
        public User User { get; set; }
        public string UserName { get; set; }
        
        public long ProductId { get; set; }
        public Product Product { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
    }
}