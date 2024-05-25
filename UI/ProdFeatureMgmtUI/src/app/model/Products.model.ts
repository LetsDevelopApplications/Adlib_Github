export interface Product{
    id:number,
    productImage:string,
    productTitle: string,
    productDetails: string,
    productFeatures: string,
    productSpecifications: string,
    colour:string,
    actualprice:number,
    salePrice:number,
    reviews:string,
    OverallRating:number    
}

export const PRODUCTS: Product[] = [
    {
        id: 12,productImage:'../../../assets/BaseLayerTopproduct1.jpg', productTitle: 'Base layer top', 
        productDetails: 'The Icebreaker 260 Tech Long Sleeve Crew is an incredibly warm base layer for cold-weather activities like skiing, snowshoeing and skating.', productFeatures: 'CREW NECK,Long Sleeves,Breathable', 
        colour: 'Black', actualprice: 134.99, salePrice: 93.99, reviews: 'None', OverallRating: 4,
        productSpecifications: ""
    },
    {
        id: 13,productImage:'../../../assets/everydayCrewneck.jpg', productTitle: 'Everyday Crewneck', 
        productDetails: 'The Icebreaker 175 Everyday Long Sleeve Crew is a versatile base layer top offering year-round layering performance.',
        productFeatures: 'CREW NECK,Long Sleeves,Icebreaker tonal embroidered log', 
        colour: 'Blue', actualprice: 99.99, salePrice: 99.99, reviews: 'None', OverallRating: 4,
        productSpecifications: ""
    },
    {
        id: 14, productImage:'../../../assets/northfacehalf.jpg',productTitle: 'The North Face Half Dome T Shirt',
        productDetails: 'The North Face iconic logo, a global symbol of exploration and achievement, is the focus of the simple, classic Womens Plus Short-Sleeve Half Dome Tee',
        colour: 'Blue', actualprice: 99.99, salePrice: 99.99, reviews: 'None', OverallRating: 4,
        productSpecifications: "Multisport,Hiking",
        productFeatures: "Standard fit,No-hand, water-based, screen-printed logo graphic on chest,Rib on collar"
    },
    {
        id: 15, productImage:'../../../assets/noveltytank.jpg',productTitle: 'Knockout Novelty Tank', 
        productDetails: 'This is one of the lightest, most breathable shirts Under Armour make—and your new go-to. Any sport, any training, any time.', productFeatures: 'CREW NECK,Long Sleeves,Icebreaker tonal embroidered log', 
        colour: 'Blue', actualprice: 29.99, salePrice: 29.99, reviews: 'None', OverallRating: 4,
        productSpecifications: "Insanely soft, breathable fabric,Elastane"
    },
    {
        id: 16,productImage:'../../../assets/cropshirt.jpg', productTitle: 'Under Armour Collegiate Crop T Shirt', 
        productDetails: 'Super-soft, cotton-blend fabric provides all-day comfort', productFeatures: 'Cropped body length,Ribbed collar', 
        colour: 'Blue', actualprice: 19.97, salePrice: 19.97, reviews: 'None', OverallRating: 4,
        productSpecifications: "Relaxed,Female,Crew"
    },

  ];
