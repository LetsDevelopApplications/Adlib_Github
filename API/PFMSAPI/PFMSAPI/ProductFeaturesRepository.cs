using PFMSAPI.Models;
using Microsoft.EntityFrameworkCore;
using PFMSAPI.Controllers.Data;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace PFMSAPI
{
    public class ProductFeaturesRepository :IProductFeatures
    {
     
            public ProductFeaturesRepository()
            {
                using (var context = new ProductFeaturesDBContext())
                {
                    var productfeatures = new List<ProductFeature>
                {
                    new ProductFeature
                    {
                        FeatureTitle ="Inventory change",
                        Description ="Inventory change notification",
                        estCapacity="S",
                        status="New",
                        targetCompDate="10-Jun-2023",
                        ActualCompDate="12-Jun-2023"

                    },
                    new ProductFeature
                    {
                      FeatureTitle ="User settings",
                        Description ="User settings are persisted",
                        estCapacity="M",
                        status="Active",
                        targetCompDate="10-May-2023",
                        ActualCompDate="12-Oct-2023"
                    }
                };
                context.ProductFeatures.RemoveRange(productfeatures);
                context.ProductFeatures.AddRange(productfeatures);
                    if(context.HasChanges())
                        context.SaveChanges();
                }
            }
            public List<ProductFeature> GetProductFeatures()
            {
                using (var context = new ProductFeaturesDBContext())
                {
                    var list = context.ProductFeatures
                        .ToList();
                    return list;
                }
            }


    }
}
