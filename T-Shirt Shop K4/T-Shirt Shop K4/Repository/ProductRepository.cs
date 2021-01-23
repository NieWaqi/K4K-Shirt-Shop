using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using T_Shirt_Shop_K4.Models;
using T_Shirt_Shop_K4.Repository.Interfaces;

namespace T_Shirt_Shop_K4.Repository
{
    public class ProductRepository : IRepository<Product>
    {
        private ApplicationContext db;

        public ProductRepository(ApplicationContext context)
        {
            db = context;
        }
        
        public IEnumerable<Product> GetAll()
        {
            return db.Products;
        }

        public Product Get(int id)
        {
            return db.Products.Find(id);
        }
        
        public void Create(Product item)
        {
            db.Products.Add(item);
        }

        public void Update(Product item)
        {
            db.Entry(item).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            Product prod = db.Products.Find((long)id);
            if (prod != null)
                db.Products.Remove(prod);
        }

        public void Save()
        {
            db.SaveChanges();
        }
    }
}