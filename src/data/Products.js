const productArray = [
    {
        id:"1",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/0_0015_img_3129_1_1_1080x.jpg?v=1658980143",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"2",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_1__0002_img_3098_0008_img_3271_3_1080x.jpg?v=1658980209",
        title: "Christ Dio Gold Logo Crested Designed White Sole Lace Up Sneakers- Black",
        size: "42",
        price: 5.99
    },
    {
        id:"3",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_1__0002_img_3098_0002_img_3277_1_1080x.jpg?v=1658980190",
        title: "Vers Crested Belt Logo Designed White Sole Lace Up Sneakers",
        size: "42",
        price: 6.99
    },
    {
        id:"4",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/0_0010_img_3146_2_1080x.jpg?v=1658980192",
        title: "AD Surprskaa Fashion Breathable Outdoor sneakers- Multicolor",
        size: "43",
        price: 10.99
    },
    {
        id:"5",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_1__0002_img_3098_0017_img_3259_3_1080x.jpg?v=1658980186",
        title: "Christ Dio Gold Logo Crested Designed White Sole Lace Up Sneakers",
        size: "42",
        price: 7.99
    },
    {
        id:"6",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_1__0002_img_3098_0012_img_3265_1_1_800x.jpg?v=1658980169",
        title: "Christ Dio Logo Crested Designed White Sole Lace Up Sneakers",
        size: "44",
        price: 5.99
    },
    {
        id:"7",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/0_0020_img_3117_2_1080x.jpg?v=1658980165",
        title: "JD 14 Retro Hamilton Lightweight Sneakers",
        size: "41",
        price: 8.99
    },
    {
        id:"8",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/0_0015_img_3129_1_1_1080x.jpg?v=1658980143",
        title: "AD Surprskaa Fashion Breathable Outdoor sneakers",
        size: "42",
        price: 8.99
    },
    {
        id:"9",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_1__0044_img_3189_5_800x.jpg?v=1658980138",
        title: "NK MAX 2017 Sneakers-Black White",
        size: "42",
        price: 9.99
    },
    {
        id:"10",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/product_large_2_800x.jpg?v=1658980069",
        title: "Nk Max 90 Suede Sneakerboot Ice - Beige",
        size: "42",
        price: 4.99
    },
    {
        id:"11",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"12",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"13",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"14",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"15",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"16",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"17",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"18",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"19",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"20",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"21",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"22",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"23",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"24",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"25",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"26",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"27",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"28",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"29",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"30",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"31",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"32",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"33",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"34",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"35",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"37",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"38",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"39",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"40",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"41",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"42",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"43",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"44",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"45",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"46",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"47",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"48",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"49",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_514_7aef7ab4-bc44-489a-a568-f508cba7a162_1080x.jpg?v=1663675993",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"50",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/download_3__4_1_225x.jpg?v=1658979571",
        title: "NK ACG Mowabb Comfy Sneakers - Multi Colors",
        size: "42",
        price: 4.99
    },
    {
        id:"51",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/download_3__4_1_225x.jpg?v=1658979571",
        title: "NK ACG Mowabb Comfy Sneakers - Multi Colors",
        size: "42",
        price: 4.99
    },
    {
        id:"52",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/download_3__4_1_225x.jpg?v=1658979571",
        title: "NK ACG Mowabb Comfy Sneakers - Multi Colors",
        size: "42",
        price: 4.99
    },
    {
        id:"53",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/download_3__4_1_225x.jpg?v=1658979571",
        title: "NK ACG Mowabb Comfy Sneakers - Multi Colors",
        size: "42",
        price: 4.99
    },
    {
        id:"54",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/download_3__4_1_225x.jpg?v=1658979571",
        title: "NK ACG Mowabb Comfy Sneakers - Multi Colors",
        size: "42",
        price: 4.99
    },
    {
        id:"55",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/download_3__4_1_225x.jpg?v=1658979571",
        title: "NK ACG Mowabb Comfy Sneakers - Multi Colors",
        size: "42",
        price: 4.99
    },
    {
        id:"56",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/39e2a202-76cc-4bf2-a6cb-cfa4c8ddb768_5_800x.jpg?v=1658979566",
        title: "AD Ultra Boost Web DNA CZ3680 Sneakers",
        size: "44",
        price: 4.99
    },
  
]

function getProductData(id) {
    let productData = productArray.find(product => product.id === id)
    if(productData === undefined) return;
    return productData
}

export {productArray, getProductData}