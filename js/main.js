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
class Shoes {
    constructor(id, productName, price, image) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.image = image;
    }
}
let shoe1 = new Shoes(1, 'Best Shoes', "60", 'images/shoes-img10.png');
let shoe2 = new Shoes(2, 'Best Shoes', "400", 'images/shoes-img5.png');
let shoe3 = new Shoes(3, 'Best Shoes', "50", 'images/shoes-img11.png');
let shoe4 = new Shoes(4, 'Sports Shoes', "70", 'images/shoes-img7.png');
let shoe5 = new Shoes(5, 'Sports Shoes', "100", 'images/shoes-img8.png');
let shoe6 = new Shoes(6, 'Sports Shoes', "90", 'images/shoes-img9.png');
console.log(shoe1);

for (let i = 0; i < Shoes.length; i++) {
    console.log(Shoes[i]);
}

const objectArray = Object.entries(shoe1);

objectArray.forEach(([key, value]) => {
  console.log(key); // 'one'
  console.log(value); // 1
});
// Object.entries(Shoes).forEach(([key, value]) => console.log(key, value));

let listProduct = [
    {
        id: 1,
        productName: 'Best Shoes',
        price: "60",
        image: "images/shoes-img10.png",
    },
    {
        id: 2,
        productName: "Best Shoes",
        price: "400",
        image: "images/shoes-img5.png",
    },
    {
        id: 3,
        productName: "Best Shoes",
        price: "50",
        image: "images/shoes-img11.png",
    },
    {
        id: 4,
        productName: "Sports Shoes",
        price: "70",
        image: "images/shoes-img7.png",
    },
    {
        id: 5,
        productName: "Sports Shoes",
        price: "100",
        image: "images/shoes-img8.png",
    },
    {
        id: 6,
        productName: "Sports Shoes",
        price: "90",
        image: "images/shoes-img9.png",
    }
];

for (let i = 0; i < listProduct.length; i++) {
    var boxProduct = `<div class="col-sm-4" data-toggle="modal" data-target="#${listProduct[i].id}">
    <div class="best_shoes">
        <p class="best_text">${listProduct[i].productName}</p>
        <div class="shoes_icon"><img src='${listProduct[i].image}'></div>
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
                <div class="shoes_price">$ <span style="color: #ff4e5b;">${listProduct[i].price}</span></div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="${listProduct[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
              <div class="photo-main">
                  <img src='${listProduct[i].image}' alt="green apple slice" style="margin: 100px;">
              </div>
          </div>
      </div>
      <div class="product__info">
          <div class="title">
              <h1>${listProduct[i].productName}</h1>
          </div>
          <div class="price">
              $ <span>${listProduct[i].price}</span>
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
          <button class="buy--btn">ADD TO CART</button>
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

// Login
$('#myModal').modal('show');