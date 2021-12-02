using APIDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace APIDemo
{
    /// <summary>
    /// ProductController API
    /// </summary>
    public class ProductController : ApiController
    {
        /// <summary>
        /// products data
        /// </summary>
        public static List<Product> Products
        {
            get
            {
                return new List<Product>
                {
                    new Product(Guid.NewGuid(), 122, "Product A", 300, 1),
                    new Product(Guid.NewGuid(), 333, "Product B", 400, 10),
                    new Product(Guid.NewGuid(), 444, "Product C", 500, 20),
                    new Product(Guid.NewGuid(), 555, "Product D", 600, 15),
                    new Product(Guid.NewGuid(), 777, "Product E", 700, 5)
                };
            }
        }

        /// <summary>
        ///  get values for products
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Product> Get()
        {
            return Products;
        }

        /// <summary>
        /// Get one
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
