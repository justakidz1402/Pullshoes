//SPA
function getCategories(x) {
    document.getElementById('homeKidz').classList.remove('activeTabKidz')
    document.getElementById('collectionKidz').classList.remove('activeTabKidz')
    document.getElementById('shoesKidz').classList.remove('activeTabKidz')
    document.getElementById('bootsKidz').classList.remove('activeTabKidz')
    document.getElementById('contactKidz').classList.remove('activeTabKidz')
    document.getElementById('crudKidz').classList.remove('activeTabKidz')
    document.getElementById(x).classList.add("activeTabKidz")
    for (var i = 0; i < 6; i++) {
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
let listProduct = JSON.parse(localStorage.getItem('product'));
// let listProduct = [
//     new Shoe(1, 'White Grey Shoes', "60", "images/shoes-img10.png", 'all grey'),
//     new Shoe(2, "Purple Neon Shoes", "400", "images/shoes-img5.png", 'all purple neon'),
//     new Shoe(3, "Green Red Shoes", "50", "images/shoes-img11.png", 'all green'),
//     new Shoe(4, "Black Grey Shoes", "70", "images/shoes-img7.png", 'all black grey'),
//     new Shoe(5, "Black Purple Shoes", "100", "images/running-shoes.png", 'all black purple'),
//     new Shoe(6, "Blue Green Shoes", "90", "images/shoes-img9.png", 'all blue green'),
//     new Shoe(7, "Neon Pink Shoes", "100", "images/shoes-img12.png", 'all neon'),
//     new Shoe(8, "Green Yellow Shoes", "80", "images/shoes-img13.png", 'all green'),
//     new Shoe(9, "Green Blue Shoes", "110", "images/shoes-img14.png", 'all blue green')
// ];
// localStorage.setItem('product', JSON.stringify(listProduct));

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

//CRUD
let crud = (listProduct = []) => {
    let boxProduct = ``;
    listProduct.map(({ id, productName, price, image, category }) => {
        let cate = category.replace("all ", "");
        boxProduct += `
        <tr class='my-tr' onClick='highLightRow(${id})' id='a${id}'>
            <th scope="row" style="color:black">${id}</th>
            <td><img src="${image}" alt=""></td>
            <td>${productName}</td>
            <td>${price}$</td>
            <td>${cate}</td>
            <td>
                <button class="btn btn-danger" type="button" onclick="DeleteProduct(${id})">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
        `
    })
    document.getElementById('manageProduct').innerHTML = boxProduct;
}
crud(listProduct);

let Save = () => {
    let id = parseInt(document.getElementById('idProduct').value);
    let productName = validateInput(document.getElementById('nameProduct').value);
    let price = parseInt(document.getElementById('priceProduct').value);
    let img = "images/shoes-img" + document.getElementById('imgProduct').value + ".png";
    let cate = "all " + (document.getElementById('cateProduct').value).toLowerCase().trim();
    let product = new Shoe(id, productName, price, img, cate);
    console.log(product);
    //gọi hàm kiểm tra tồn tại đối tượng 'product' trong listProduct
    let findRs = (id) => listProduct.find(e => e.id == id);
    if (findRs(product.id) == undefined) {
        listProduct.push(product);
        localStorage.setItem('product', JSON.stringify(listProduct));
        listProduct.splice(0, listCart.length);
        crud(listProduct);
        $('#addSuccess').modal('show');
        setTimeout(() => {
            $('#addSuccess').modal('hide');
        }, 1500);
        reset();
    } else {
        $('#existedID').modal('show');
        setTimeout(() => {
            $('#existedID').modal('hide');
        }, 1500);
        highLightRow(product.id)
        document.getElementById('idProduct').focus();
    }
}

let DeleteProduct = (x) => {
    if (confirm("Do you want to delete this student")) {
        const index = listProduct.findIndex(e => e.id === x);
        if (index !== -1) {
            listProduct = listProduct.filter(e => e.id !== x);
            // decrease id of remaining items
            listProduct.forEach((e, i) => {
                if (e.id > x) {
                    e.id--;
                }
            });
        }
        localStorage.setItem('product', JSON.stringify(listProduct));
        reset();
        crud(listProduct);
    }
}

let highLightRow = (id) => {
    //lấy student theo id
    let product = listProduct.find(s => s.id === id);
    //gán dữ liệu vào các form control
    document.getElementById("idProduct").value = product.id;
    document.getElementById("nameProduct").value = product.productName;
    document.getElementById("priceProduct").value = product.price;
    document.getElementById("imgProduct").value = parseInt(product.image.replace(/[^\d.]/g, ''));
    document.getElementById("cateProduct").value = product.category.replace("all ", "");
    selectedIndex = product.id - 1;
    document.getElementById("editbtn").style.display = "block";
    document.getElementById("addbtn").style.display = "none";

    // Thêm class "active" vào div được click
    $(`#a${id}`).addClass('bg-secondary');
    // Loại bỏ class "active" khỏi tất cả các div
    const trs = document.querySelectorAll(".my-tr");
    for (const tr of trs) {
        tr.addEventListener("click", function () {
            for (const other of trs) {
                if (other !== this) {
                    other.classList.remove("bg-secondary");
                }
            }
        });
    }
}

let Update = () => {
    listProduct[selectedIndex].productName = validateInput(document.getElementById('nameProduct').value);
    listProduct[selectedIndex].price = parseInt(document.getElementById('priceProduct').value);
    listProduct[selectedIndex].image = "images/shoes-img" + document.getElementById('imgProduct').value + ".png";
    listProduct[selectedIndex].category = "all " + (document.getElementById('cateProduct').value).toLowerCase().trim();
    localStorage.setItem('product', JSON.stringify(listProduct));
    crud(listProduct);
    $('#editSuccess').modal('show');
    setTimeout(() => {
        $('#editSuccess').modal('hide');
    }, 1500);
    document.getElementById("editbtn").style.display = "none";
    document.getElementById("addbtn").style.display = "block";
    reset();
}

const max = Math.max(...listProduct.map(e => e.price));
document.getElementById('txtTo').value = max;
document.getElementById('txtTo').max = max;
const min = Math.min(...listProduct.map(e => e.price));
document.getElementById('txtFrom').value = min;
document.getElementById('txtFrom').min = min;
document.getElementById('priceProduct').value = min;
document.getElementById('priceProduct').min = min;
document.getElementById('priceProduct').max = max;
let SearchManage = () => {
    let from = parseInt(document.querySelector('#txtFrom').value);
    let to = parseInt(document.querySelector('#txtTo').value);
    let name = document.getElementById("search-manage").value;

    let searchList = [];
    let searchList1 = [];
    if (name == null || name == '') {
        searchList = listProduct.filter(e => e.price >= from && e.price <= to);
    } else {
        searchList1 = listProduct.filter(e => e.price >= from && e.price <= to);
        searchList = searchList1.filter(e => (e.productName).toLowerCase().includes(name.toLowerCase()));
    }
    crud(searchList);
}

let validateInput = (x) => {
    return x
        .trim() // loại bỏ các khoảng trắng ở đầu và cuối câu
        .split(/\s+/) // tách câu thành các từ và loại bỏ các khoảng trắng dư thừa
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // viết hoa chữ cái đầu của mỗi từ
        .join(" "); // ghép lại các từ thành một câu với một khoảng trắng giữa các từ
}


//Filter and Search
let Filter = (x) => {
    let FilterList = listProduct.filter(e => (e.category).toLowerCase().includes(x.toLowerCase()));
    let result = FilterList.filter(value => Search().includes(value));
    render(result);
    // Thêm class "active" vào div được click
    $("#" + x).addClass('activeShoes');
    // Loại bỏ class "active" khỏi tất cả các div
    const buttons = document.querySelectorAll(".filter");
    for (const button of buttons) {
        button.addEventListener("click", function () {
            for (const other of buttons) {
                if (other !== this) {
                    other.classList.remove("activeShoes");
                }
            }
        });
    }
    return FilterList;
}

let Search = () => {
    let name = document.getElementById("search-input").value;
    let searchList = listProduct.filter(e => (e.productName).toLowerCase().includes(name.toLowerCase()));
    render(searchList);
    return searchList;
}

let reset = () => {
    document.getElementById('idProduct').value = '';
    document.getElementById('txtTo').value = max;
    document.getElementById('txtFrom').value = min;
    document.getElementById('nameProduct').value = "";
    document.getElementById('priceProduct').value = min;
    document.getElementById('imgProduct').value = "";
    document.getElementById('cateProduct').value = "";
    document.getElementById('search-input').value = "";
    document.getElementById("search-manage").value = "";
    document.getElementById("editbtn").style.display = "none";
    document.getElementById("addbtn").style.display = "block";
    render(listProduct);
    crud(listProduct);
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
order.onclick = async function () {
    historyPay()
    document.getElementById('payment-detail').innerHTML = renderData();
    setTimeout(reload, 1800);
    function reload() {
        window.location.reload();
    }
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
              <th scope="row">${data.time}</th>
              <td>
                <ul class="mx-0 my-2">
                  ${data.product.map((product) => {
                    return `<li class="payment-detail align-items-center my-2">
                    <div style="width: 25%;"><img src="${product.image}" alt=""></div>
                    <div style="width: 50%; display: flex; justify-content: flex-start;"><h6>${product.title}</h6> </div>
                    <div style="width: 25%; display: flex; justify-content: flex-start;"><h6>Quantity: ${product.quantity}</h6></div>
                    </li>`
                }).join('')}
                </ul>
              </td>
              <td>
                <h6 class='mt-3'>${data.total}$</h6>
                <button class="btn btn-danger mb-3" type="button" onclick="removePayment('${data.time}')">
                    <i class="fa fa-trash"></i>
                </button>
                </td>
            </tr>
            </hr>`
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