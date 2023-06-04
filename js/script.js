const product = [
    {
        id: 0,
        image: 'images/tshirt_1.jpeg',
        title: 'Premium High Quality Shirt',
        price: '1000',
    },
    {
        id: 1,
        image: 'images/tshirt_2.jpg',
        title: 'VIP High Quality T-shirt',
        price: '1200',
    },
    {
        id: 2,
        image: 'images/watch_1.webp',
        title: 'Rolex-541 Men Watch',
        price: '10000',
    },
    {
        id: 3,
        image: 'images/watch_2.webp',
        title: 'Sony F-10 Watch',
        price: '12000',
    },
    {
        id: 4,
        image: 'images/watch_3.webp',
        title: 'Apple Digital Watch',
        price: '9000',
    }
];

const categories = [...new Set(product.map((item)=>{
    return item
}))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(`
    <div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>
    `
    + "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>
    `
    )
})