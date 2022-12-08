const BannerArray  = [
    {
        id:"126",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/0_0015_img_3129_1_1_1080x.jpg?v=1658980143",
        title: "John Foster Twisted Woven Strap Full Suede Leather Men's Shoe -Green",
        size: "42",
        price: 4.99
    },
    {
        id:"87363",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/0_0015_img_3129_1_1_1080x.jpg?v=1658980143",
        title: "AD Surprskaa Fashion Breathable Outdoor sneakers",
        size: "42",
        price: 8.99
    },
    {
        id:"254",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_1__0002_img_3098_0008_img_3271_3_1080x.jpg?v=1658980209",
        title: "Christ Dio Gold Logo Crested Designed White Sole Lace Up Sneakers- Black",
        size: "42",
        price: 5.99
    },
    {
        id:"254",
        url: "https://cdn.shopify.com/s/files/1/0590/3646/7399/products/1_1__0002_img_3098_0008_img_3271_3_1080x.jpg?v=1658980209",
        title: "Christ Dio Gold Logo Crested Designed White Sole Lace Up Sneakers- Black",
        size: "42",
        price: 5.99
    },
]

function getProductData(id) {
    let productData = BannerArray.find(product => product.id === id)
    if(productData === undefined) return;
    return productData
}

export {BannerArray, getProductData}