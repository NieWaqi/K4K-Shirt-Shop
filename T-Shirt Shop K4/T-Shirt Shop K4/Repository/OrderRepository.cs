using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting;
using Microsoft.EntityFrameworkCore;
using T_Shirt_Shop_K4.Models;
using T_Shirt_Shop_K4.Repository.Interfaces;

namespace T_Shirt_Shop_K4.Repository
{
    public class OrderRepository : IRepository<Order>
    {
        private ApplicationContext db;

        public OrderRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<Order> GetAll()
        {
            return db.Orders;
        }

        public Order Get(int id)
        {
            return db.Orders.Find(id);
        }

        public void Create(Order item)
        {
            db.Orders.Add(item);
        }

        public void Update(Order item)
        {
            db.Entry(item).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            Order ord = db.Orders.Find(id);
            if (ord != null)
                db.Orders.Remove(ord);
        }

        public void Save()
        {
            db.SaveChanges();
        }
    }
}