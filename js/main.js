//SPA
function getCategories(x) {
    document.getElementById('homeKidz').classList.remove('activeTabKidz')
    document.getElementById('collectionKidz').classList.remove('activeTabKidz')
    document.getElementById('shoesKidz').classList.remove('activeTabKidz')
    document.getElementById('bootsKidz').classList.remove('activeTabKidz')
    document.getElementById('contactKidz').classList.remove('activeTabKidz')
    document.getElementById(x).classList.add("activeTabKidz")
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName('categoryKidz')[i].style.display = 'none';
    }
    for (var i = 0; i < document.getElementsByClassName(x).length; i++) {
        document.getElementsByClassName(x)[i].style.display = 'block';
    }
}

//Products and Product detail
class Shoe {
    constructor(id, productName, price, image, category) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.image = image;
        this.category = category;
    }
}

let listProduct = [
    new Shoe(1, 'White Grey Shoes', "60", "images/shoes-img10.png", 'all grey'),
    new Shoe(2, "Purple Neon Shoes", "400", "images/shoes-img5.png", 'all purple neon'),
    new Shoe(3, "Green Red Shoes", "50", "images/shoes-img11.png", 'all green'),
    new Shoe(4, "Black Grey Shoes", "70", "images/shoes-img7.png", 'all black grey'),
    new Shoe(5, "Black Purple Shoes", "100", "images/running-shoes.png", 'all black purple'),
    new Shoe(6, "Blue Green Shoes", "90", "images/shoes-img9.png", 'all blue green'),
    new Shoe(7, "Neon Pink Shoes", "100", "images/shoes-img12.png", 'all neon'),
    new Shoe(8, "Green Yellow Shoes", "80", "images/shoes-img13.png", 'all green'),
    new Shoe(9, "Green Blue Shoes", "110", "images/shoes-img14.png", 'all blue green')
];

let render = (listProduct = []) => {
    let boxProduct = ``;
    listProduct.map(({ id, productName, price, image, category }) => {
        boxProduct += `
        <div class="col-sm-4 categoryShoes ${category}" data-toggle="modal" data-target="#${id}">
        <div class="best_shoes">
            <p class="best_text product-name">${productName}</p>
            <div class="shoes_icon"><img src='${image}' style="width: 200px; height: 200px"></div>
            <div class="star_text">
                <div class="left_part">
                    <ul>
                        <li><a href="#"><img src="images/star-icon.png"></a></li>
                        <li><a href="#"><img src="images/star-icon.png"></a></li>
                        <li><a href="#"><img src="images/star-icon.png"></a></li>
                        <li><a href="#"><img src="images/star-icon.png"></a></li>
                        <li><a href="#"><img src="images/star-icon.png"></a></li>
                    </ul>
                </div>
                <div class="right_part">
                    <div class="shoes_price"><span style="color: #ff4e5b;">${price}</span>$</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade detailModal" id="${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document" style="margin: 50px auto; min-width: 650px;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">${productName} Detail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="close-detail">&times;</span>
            </button>
          </div>
          <section class="product">
          <div class="product__photo">
              <div class="photo-container">
                  <div class="photo-main img-product">
                      <img class="img-prd" src='${image}' alt="green apple slice" style="margin: 100px; width: 200px; height: 200px">
                  </div>
              </div>
          </div>
          <div class="product__info">
              <div class="title">
                  <h1 class="content-product-h1">${productName}</h1>
              </div>
              <div class="price">
                   <span class="span">${price}$</span>
              </div>
              <div class="description">
                  <h3>DESCRIPTION</h3>
                  <ul>
                      <li>Apples are nutricious</li>
                      <li>Apples may be good for weight loss</li>
                      <li>Apples may be good for bone health</li>
                      <li>They're linked to a lowest risk of diabetes</li>
                  </ul>
              </div>
              <button class="buy--btn btn-cart" onclick="AddToCart('${productName}','${price}','${image}')">ADD TO CART</button>
          </div>
      </section>
          </div>
      </div>
    </div>   
        `
    })
    document.getElementById('renderProduct').innerHTML = boxProduct;
}
render(listProduct);


//Filter and Search
let Filter = (x) => {
    let FilterList = listProduct.filter(e => (e.category).toLowerCase().includes(x.toLowerCase()));
    let result = FilterList.filter(value => Search().includes(value));
    render(result);
    return FilterList;
}

let Search = () => {
    let name = document.getElementById("search-input").value;
    let searchList = listProduct.filter(e => (e.productName).toLowerCase().includes(name.toLowerCase()));
    render(searchList);
    return searchList;
}

let reset = () => {
    document.getElementById('search-input').value = "";
    render(listProduct);
}

// Login
// $('#myModal').modal('show');

//Giỏ Hàng
class Cart {
    constructor(id, title, price, image, quantity) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }
}
let listCart = [];
var productIdCounter = 0;
let showCart = (listCart = []) => {
    let row = ``;
    listCart.map(({ id, title, price, image, quantity }) => {
        row += `<div class="d-flex cart-row justify-content-center">
        <div class="cart-item cart-column">
        <img class="cart-item-image" src="${image}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column d-flex justify-content-center">${price}$</span>
    <div class="cart-quantity cart-column d-flex justify-content-center">
        <input id='quantity-${id}' class="cart-quantity-input" type="number" value="${quantity}" min="1">
        <button class="btn btn-danger" type="button" onclick="Delete(${id})"><i class="fa fa-trash"></i></button>
    </div>  </div> 
        `
    })
    document.getElementById('cart-items').innerHTML = row;
}
showCart(listCart);

let AddToCart = (title, price, image) => {
    let id = ++productIdCounter;
    let product = new Cart(id, title, price, image, 1);

    let findRs = (title) => listCart.find(e => e.title == title);
    if (findRs(product.title) == undefined) {
        listCart.push(product);
        showCart(listCart);
        UpdateQuantity();
        Total();
        $('#cartModal').modal('show');
        $('.detailModal').modal('hide');
    } else {
        $('#existedShoe').modal('show');
        setTimeout(() => {
            $('#existedShoe').modal('hide');
        }, 1500);
        $('#cartModal').modal('show');
        $('.detailModal').modal('hide');
    }
}

var order = document.getElementsByClassName("order")[0];
order.onclick = function () {
    historyPay();
    document.getElementById('payment-detail').innerHTML = renderData();
}

// xóa cart
let Delete = (x) => {
    listCart = listCart.filter(e => e.id !== x);
    Total();
    showCart(listCart);
}

// update cart 
let Total = () => {
    let total = listCart.reduce((sum, shoe) => parseInt(sum) + parseInt(shoe.price) * parseInt(shoe.quantity), 0);
    document.getElementById('total-price').innerText = total;
    return total;
}

let UpdateQuantity = () => {
    listCart.forEach((product) => {
        const input = document.getElementById(`quantity-${product.id}`);
        input.addEventListener('input', (event) => {
            const newQuantity = parseInt(event.target.value);
            product.quantity = newQuantity;
            Total();
        });
    });
}

//Lưu đơn hàng vào local storage
let data = JSON.parse(localStorage.getItem('myPayment')) || [];
let historyPay = () => {
    if (listCart == null || listCart == [] || Total() == 0) {
        $('#BuyFail').modal('show');
        setTimeout(() => {
            $('#BuyFail').modal('hide');
        }, 1500);
        $('#cartModal').modal('hide');
    } else {
        let newPayment = {
            product: listCart,
            time: new Date().toLocaleString(),
            total: Total()
        };
        data.push(newPayment);
        localStorage.setItem('myPayment', JSON.stringify(data));
        listCart.splice(0, listCart.length);
        Total();
        showCart(listCart);
        $('#BuySuccess').modal('show');
        setTimeout(() => {
            $('#BuySuccess').modal('hide');
        }, 1500);
        $('#cartModal').modal('hide');
    }
}

const renderData = () => {
  return (
    `
      <tbody>
        ${data.map((data) => {
          return (
            `<tr>
              <td>${data.time}</td>
              <td>
                <ul class="m-0">
                  ${data.product.map((product) => {
                    return `<li class="payment-detail align-items-center my-2"><img src="${product.image}" alt=""> <h6>${product.title}</h6> <h6>Quantity: ${product.quantity}</h6></li>`
                  }).join('')}
                </ul>
              </td>
              <td>
                <h6 class='mt-3'>${data.total}$</h6>
                <button class="btn btn-danger mb-3" type="button" onclick="removePayment('${data.time}')">
                    <i class="fa fa-trash"></i>
                </button>
                </td>
            </tr>`
          )
        }).join('')}
      </tbody>
    `
  );
}

document.getElementById('payment-detail').innerHTML = renderData();

let removePayment = (x) => {
    data = data.filter(e => e.time !== x);
    localStorage.setItem('myPayment', JSON.stringify(data));
    document.getElementById('payment-detail').innerHTML = renderData();
}