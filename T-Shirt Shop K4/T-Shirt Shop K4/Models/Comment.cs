using System;

namespace T_Shirt_Shop_K4.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public Product Product { get; set; }
        public User User { get; set; }
        public string UserName { get; set; }
        public DateTime? SubmitDate { get; set; }
    }
}