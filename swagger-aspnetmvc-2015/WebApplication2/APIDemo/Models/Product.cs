using System;

namespace APIDemo.Models
{
    /// <summary>
    /// my product
    /// </summary>
    public class Product
    {
        /// <summary>
        /// product id
        /// </summary>
        public Guid GuidId { get; set; }
        /// <summary>
        /// product Id
        /// </summary>
        public int ProductId { get; set; }
        /// <summary>
        /// product name
        /// </summary>
        public string ProductName { get; set; }
        /// <summary>
        /// product price
        /// </summary>
        public decimal Price { get; set; }
        /// <summary>
        /// product unit
        /// </summary>
        public int Unit { get; set; }


        public Product(Guid id, int productId, string productName, decimal price, int unit)
        {
            GuidId = id;
            ProductName = productName;
            Price = price;
            Unit = unit;
            ProductId = productId;
        }
    }
}
