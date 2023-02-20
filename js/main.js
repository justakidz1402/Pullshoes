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
    console.log(x)
}

//Products and Product detail
let listProduct = [
    {
        id: 1,
        productName: 'White Grey Shoes',
        price: "60",
        image: "images/shoes-img10.png",
        category: 'all grey'
    },
    {
        id: 2,
        productName: "Purple Neon Shoes",
        price: "400",
        image: "images/shoes-img5.png",
        category: 'all purple neon'

    },
    {
        id: 3,
        productName: "Green Red Shoes",
        price: "50",
        image: "images/shoes-img11.png",
        category: 'all green'
    },
    {
        id: 4,
        productName: "Black Grey Shoes",
        price: "70",
        image: "images/shoes-img7.png",
        category: 'all black grey'
    },
    {
        id: 5,
        productName: "Black Purple Shoes",
        price: "100",
        image: "images/running-shoes.png",
        category: 'all black purple'
    },
    {
        id: 6,
        productName: "Blue Green Shoes",
        price: "90",
        image: "images/shoes-img9.png",
        category: 'all blue green'
    },
    {
        id: 7,
        productName: "Neon Pink Shoes",
        price: "100",
        image: "images/shoes-img12.png",
        category: 'all neon'
    },
    {
        id: 8,
        productName: "Green Yellow Shoes",
        price: "80",
        image: "images/shoes-img13.png",
        category: 'all green'
    },
    {
        id: 9,
        productName: "Blue Green Shoes",
        price: "110",
        image: "images/shoes-img14.png",
        category: 'all blue green'
    }
];

for (let i = 0; i < listProduct.length; i++) {
    var boxProduct = `<div class="col-sm-4 categoryShoes ${listProduct[i].category}" data-toggle="modal" data-target="#${listProduct[i].id}">
    <div class="best_shoes">
        <p class="best_text product-name">${listProduct[i].productName}</p>
        <div class="shoes_icon"><img src='${listProduct[i].image}' style="width: 200px; height: 200px"></div>
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
                <div class="shoes_price"><span style="color: #ff4e5b;">${listProduct[i].price}</span>$</div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade detailModal" id="${listProduct[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document" style="margin: 50px auto; min-width: 650px;">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">${listProduct[i].productName} Detail</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="close-detail">&times;</span>
        </button>
      </div>
      <section class="product">
      <div class="product__photo">
          <div class="photo-container">
              <div class="photo-main img-product">
                  <img class="img-prd" src='${listProduct[i].image}' alt="green apple slice" style="margin: 100px; width: 200px; height: 200px">
              </div>
          </div>
      </div>
      <div class="product__info">
          <div class="title">
              <h1 class="content-product-h1">${listProduct[i].productName}</h1>
          </div>
          <div class="price">
               <span class="span">${listProduct[i].price}$</span>
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
          <button class="buy--btn btn-cart">ADD TO CART</button>
      </div>
  </section>
      </div>
  </div>
</div>`

    if (listProduct[i].new === true) {
        document.getElementById("renderProduct").innerHTML += boxProductNew
    }
    else {
        document.getElementById("renderProduct").innerHTML += boxProduct
    }
}

//Filter
function filterProduct(x) {
    document.getElementById('all').classList.remove('activeShoes')
    document.getElementById('grey').classList.remove('activeShoes')
    document.getElementById('purple').classList.remove('activeShoes')
    document.getElementById('neon').classList.remove('activeShoes')
    document.getElementById('blue').classList.remove('activeShoes')
    document.getElementById('green').classList.remove('activeShoes')
    document.getElementById('black').classList.remove('activeShoes')
    document.getElementById(x).classList.add("activeShoes")
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName('categoryShoes')[i].style.display = 'none';
    }
    for (var i = 0; i < document.getElementsByClassName(x).length; i++) {
        document.getElementsByClassName(x)[i].style.display = 'block';
    }
    console.log(x)
}

//Search
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".categoryShoes");
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (((element.innerText).toUpperCase()).includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            document.getElementsByClassName('categoryShoes')[index].style.display = 'none';
        }
        console.log(element);
    });
});

// Login
// $('#myModal').modal('show');

//Giỏ Hàng
var order = document.getElementsByClassName("order")[0];
order.onclick = function () {
    alert('Mua hàng thành công');
}

// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
debugger;
for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i]
    button.addEventListener("click", function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
    })
}

// update cart 
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i]
        var price_item = cart_row.getElementsByClassName("cart-price")[0]
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
        var quantity = quantity_item.value // lấy giá trị trong thẻ input
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total;
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
    var add = add_cart[i];
    add.addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement.parentElement;
        var img = product.parentElement.getElementsByClassName("img-prd")[0].src
        var title = product.getElementsByClassName("content-product-h1")[0].innerText
        var price = product.getElementsByClassName("price")[0].innerText
        addItemToCart(title, price, img)
        // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
        $('#cartModal').modal('show');
        $('.detailModal').modal('hide');
        updatecart();
    })

}

function addItemToCart(title, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cart_title = cartItems.getElementsByClassName('cart-item-title')
    // Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
            return;
        }
    }

    var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button"><i class="fa fa-trash"></i></button>
  </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
        var button_remove = event.target;
        button_remove.parentElement.parentElement.remove();
        updatecart();
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart();
    })
}