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
            <h2>${price}.00</h2>`
    + "<button onclick='addToCart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>
    `
    )
}).join('')

var cart = [];

function addToCart(a) {
    cart.push({...categories[a]});
    disPlayCart();
}

function delElement(a) {
    cart.splice(a, 1);
    disPlayCart();
}

function disPlayCart(a) {
    let j = 0;
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "৳ " +0+ ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>{
            var {image, title, price} = items;
            in_price = parseFloat(price);
            total = total + in_price;
            document.getElementById("total").innerHTML = "৳ " +total+ ".00";
            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size 15px;'>৳ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            )
        }).join('')
    }
}