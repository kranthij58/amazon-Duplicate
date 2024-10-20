
import formatCurrency from '/scripts/utils/money.js';


export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}


class Product {
 
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;

  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {

    return `$${formatCurrency(this.priceCents)}`;
  }
  extraInfoHtml(){
    return '';
  }

}
class Clothing extends Product{
  sizeChartLink;
  constructor(productDetails){
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  extraInfoHtml(){
    return `
    <a href= "/images/clothing-size-chart.png"  target="_blank"
    style="color: black; text-decoration: none;" 
   onmouseover="this.style.color='black';" 
   onmouseout="this.style.color='black';" 
   onmousedown="this.style.color='black';" 
   onmouseup="this.style.color='black';"
    >
    Size Chart
    </a>
    `;
  }

}


export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  },
  /*
  
  
  
  
  
  
  no keywords added for the below prducts and these are not added and included in the backend json files
  
  
  
  
  
  
  
  
  
  */
  {
    id: "9bb12e8f-39c1-472d-a9f5-33e8dc82b0a7",
    image: "images/products/stainless steel waterbottle.png",
    name: "Stainless Steel Water Bottle - 32 oz",
    rating: {
        stars: 4.0,
        count: 2897
    },
    priceCents: 2495
},
{
    id: "ce21eac4-1c34-4384-8b6b-5cf65f7c4f57",
    image: "images/products/Bluetooth Wireless earbuds.jpeg",
    name: "Bluetooth Wireless Earbuds - Black",
    rating: {
        stars: 4.5,
        count: 1520
    },
    priceCents: 7999
},
{
    id: "da5c11bc-4d97-43c5-87d5-8708cf6d2fc7",
    image: "images/products/LED Desk Lamp with USB.jpeg",
    name: "LED Desk Lamp with USB Port",
    rating: {
        stars: 4.0,
        count: 732
    },
    priceCents: 3399
},
{
    id: "84a50e0f-9a5b-4c24-9b2b-3cb0fae7d6a9",
    image: "images/products/Organic Cotton bedsheet.jpeg",
    name: "Organic Cotton Bed Sheets - Queen Size",
    rating: {
        stars: 4.5,
        count: 1185
    },
    priceCents: 7995
},
{
    id: "5f4963c2-4b87-4512-b660-f9ff3629b39d",
    image: "images/products/Stainless Steel Cheif Knife.jpeg",
    name: "Stainless Steel Chef Knife - 8 inch",
    rating: {
        stars: 5.0,
        count: 4321
    },
    priceCents: 4599
},
{
    id: "d9c8ab3f-36b2-4a85-b929-6e0d396f5bbf",
    image: "images/products/Portable Power Bank - 10000mAh.jpeg",
    name: "Portable Power Bank - 10000mAh",
    rating: {
        stars: 4.5,
        count: 3650
    },
    priceCents: 2699
},
{
    id: "f2a648d7-7b4a-490b-993b-80a3dcb9f4cf",
    image: "images/products/Ceramic Coffee Mug - 12 oz.jpeg",
    name: "Ceramic Coffee Mug - 12 oz",
    rating: {
        stars: 4.0,
        count: 920
    },
    priceCents: 1499
},
{
    id: "31ab529b-0d39-476e-8c88-25ff4a7342ff",
    image: "images/products/USB-C to HDMI Adapter.jpeg",
    name: "USB-C to HDMI Adapter",
    rating: {
        stars: 3.5,
        count: 573
    },
    priceCents: 1995
},
{
    id: "46bc6f95-d89d-4bda-857e-9ea8a1dc0d24",
    image: "images/products/Wireless Gaming Mouse.jpeg",
    name: "Wireless Gaming Mouse",
    rating: {
        stars: 4.5,
        count: 2140
    },
    priceCents: 5999
},
{
    id: "bd8a1b26-9076-41b7-8304-4acfcbe75bb7",
    image: "images/products/Noise Cancelling Headphones.jpeg",
    name: "Noise Cancelling Headphones",
    rating: {
        stars: 4.5,
        count: 2880
    },
    priceCents: 12995
},
{
    id: "e4ef91b1-47be-4f91-9d68-034f9e3f1d8f",
    image: "images/products/Smart LED Light Bulb - 4 Pack.jpeg",
    name: "Smart LED Light Bulb - 4 Pack",
    rating: {
        stars: 4.0,
        count: 1750
    },
    priceCents: 3999
},
{
    id: "7ef8f3a9-c79f-4d5f-86e3-2f17dcfc53bf",
    image: "images/products/Eco-Friendly Bamboo Cutting Board.jpeg",
    name: "Eco-Friendly Bamboo Cutting Board",
    rating: {
        stars: 4.5,
        count: 981
    },
    priceCents: 2199
},
{
    id: "1045c77e-dc89-496a-95ee-52948feef2e9",
    image: "images/products/Adjustable Laptop Stand.jpeg",
    name: "Adjustable Laptop Stand",
    rating: {
        stars: 4.5,
        count: 2110
    },
    priceCents: 3595
},
{
    id: "a34a8ae9-9ba7-4a0c-aeda-7d8f66fef34b",
    image: "images/products/Electric Toothbrush with 3 Modes.jpeg",
    name: "Electric Toothbrush with 3 Modes",
    rating: {
        stars: 4.0,
        count: 1450
    },
    priceCents: 4999
},
{
    id: "cfe0a5a9-4992-4713-bdf7-81e4a2a2a5a7",
    image: "images/products/Silicone Baking Mat - 2 Pack.jpeg",
    name: "Silicone Baking Mat - 2 Pack",
    rating: {
        stars: 4.5,
        count: 610
    },
    priceCents: 1299
},
{
    id: "d7423e5e-6df3-4547-a6ee-cd40b41d8af8",
    image: "images/products/Wireless Charging Pad - Fast Charge.jpeg",
    name: "Wireless Charging Pad - Fast Charge",
    rating: {
        stars: 4.5,
        count: 1830
    },
    priceCents: 3495
},
{
    id: "1a11d23f-3b74-4e04-8545-4f3d5ff5a429",
    image: "images/products/Ergonomic Office Chair - Black.jpeg",
    name: "Ergonomic Office Chair - Black",
    rating: {
        stars: 4.5,
        count: 3452
    },
    priceCents: 14999
},
{
    id: "e15f4fa7-3ad8-4509-a5d7-f9ecbc5e16f2",
    image: "images/products/Stainless Steel Insulated Tumbler - 20 oz.jpeg",
    name: "Stainless Steel Insulated Tumbler - 20 oz",
    rating: {
        stars: 4.0,
        count: 825
    },
    priceCents: 2395
},
{
    id: "5839a0e2-8dfd-4dcb-bb50-9e3e2b7527eb",
    image: "images/products/Cordless Handheld Vacuum Cleaner.jpeg",
    name: "Cordless Handheld Vacuum Cleaner",
    rating: {
        stars: 4.5,
        count: 1935
    },
    priceCents: 6999
},
{
    id: "2d5f965c-6a7a-4f2b-91f0-df63e4e52fc4",
    image: "images/products/Digital Air Fryer - 4 Quar.jpeg",
    name: "Digital Air Fryer - 4 Quart",
    rating: {
        stars: 4.5,
        count: 2215
    },
    priceCents: 8995
},
{
    id: "bfa66e39-4f5b-4bfa-a8da-b5c92b248bfa",
    image: "images/products/Compact Travel Umbrella - Windproof.jpeg",
    name: "Compact Travel Umbrella - Windproof",
    rating: {
        stars: 4.0,
        count: 1240
    },
    priceCents: 1999
},
{
    id: "a61f2d8d-071d-488e-a7fc-83fce6c6ea4d",
    image: "images/products/Stainless Steel Cookware Set - 10 Piece.jpeg",
    name: "Stainless Steel Cookware Set - 10 Piece",
    rating: {
        stars: 4.5,
        count: 2875
    },
    priceCents: 15999
},
{
    id: "6f5e7da3-1d2a-44a8-8c57-b0a0d587a6e4",
    image: "images/products/Non-Slip Yoga Mat - 6mm Thick.jpeg",
    name: "Non-Slip Yoga Mat - 6mm Thick",
    rating: {
        stars: 4.0,
        count: 1395
    },
    priceCents: 2999
},
{
    id: "3d971a0f-1da9-4cb8-b598-b0c6b7d10b3c",
    image: "images/products/Rechargeable Electric Wine Opener.jpeg",
    name: "Rechargeable Electric Wine Opener",
    rating: {
        stars: 4.5,
        count: 1075
    },
    priceCents: 3495
},
{
    id: "9baf13d3-004b-4bbf-abc4-c84f51b07bde",
    image: "images/products/Anti-Glare Computer Screen Filter.jpeg",
    name: "Anti-Glare Computer Screen Filter",
    rating: {
        stars: 4.0,
        count: 380
    },
    priceCents: 2999
},


].map((productDetails) => {
  if(productDetails.type==='clothing'){
    return new Clothing(productDetails);
  }
  return new Product(productDetails);

});
