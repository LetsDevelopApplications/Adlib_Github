using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PFMSAPI.Controllers.Data;
using PFMSAPI.Models;

namespace PFMSAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductFeaturesontroller : Controller
    {
       
        readonly IProductFeatures _productFeatures;

        public ProductFeaturesontroller(IProductFeatures productFeatures)
        {
            this._productFeatures = productFeatures;
        }
        
        [HttpGet]
        public ActionResult<List<ProductFeature>> GetAllProductFeatures()
        {
            return Ok(_productFeatures.GetProductFeatures());


        }

        [HttpPost]
        [Route("AddProductFeatures")]
        public async Task<bool> AddProductFeatures(ProductFeature newfeature)
        {
            await _productFeatures.AddProductFeature(newfeature);
            return true;
            
        }

        [HttpPut("{id}")]
       
        public async Task<bool> EditProductFeatures(ProductFeature newfeature)
        {
            await _productFeatures.EditProductFeature(newfeature);

            return true;

        }


        [HttpDelete]
        public ActionResult<bool> DeleteProductFeatures(ProductFeature newfeature)
        {
            return Ok(_productFeatures.DeleteProductFeature(newfeature));


        }
    }
}
