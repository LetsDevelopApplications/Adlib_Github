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
    }
}
