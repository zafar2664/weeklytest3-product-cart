const Products = [
    { id: 1, name: "Milk", price: 100, count: 0 },
    { id: 2, name: "Apple", price: 200, count: 0 },
    { id: 3, name: "Ice-cream", price: 300, count: 0 },
    { id: 4, name: "Chips", price: 50, count: 0 },
  ];
  
  const productListContainer = document.querySelector(".product-list");
  const cartContainer = document.querySelector(".cart-container");
  const totalAmount = document.querySelector(".amount");
  const para = document.querySelector(".info");
  let amount=0;
  window.addEventListener("load", () => {
    displayProduct(Products);
  });
  
  function displayProduct(Product) {
    Product.forEach((product, index) => {
      let productContainer = document.createElement("div");
      productContainer.classList.add("product-container");
  
      let prdName = document.createElement("span");
      prdName.innerText = product.name;
  
      let prdPrice = document.createElement("span");
      prdPrice.innerText = product.price;
  
      let btnDiv = document.createElement("div");
      btnDiv.classList.add("btn");
      let removeIcon = document.createElement("span");
      removeIcon.classList.add("material-symbols-outlined", "minus");
      removeIcon.innerText = "remove";
      removeIcon.addEventListener("click", (event) => {
        minusPrd(index, event);
      });
  
      let count = document.createElement("span");
      count.innerText = product.count;
  
      let addIcon = document.createElement("span");
      addIcon.classList.add("material-symbols-outlined", "plus");
      addIcon.innerText = "add";
      addIcon.addEventListener("click", (event) => {
        // addCart(index,event);
        addCount(index, event);
      });
  
      btnDiv.append(removeIcon);
      btnDiv.append(count);
      btnDiv.append(addIcon);
  
      productContainer.append(prdName);
      productContainer.append(prdPrice);
      productContainer.append(btnDiv);
  
      productListContainer.append(productContainer);
    });
  }
  
  function addCart(Products) {
     Products.forEach((product)=>{
      let cart = document.createElement("div");
      cart.classList.add("cart-list");
      cart.setAttribute("id",product.id);
  
      let pName = document.createElement("span");
      pName.innerText = product.name;
  
      let quantity = document.createElement("div");
      quantity.classList.add("quantity");
      let quantityNumber = document.createElement("span");
      quantityNumber.innerText = product.count;
  
      let multiplyIcon = document.createElement("span");
      multiplyIcon.innerText = "X";
  
      let quantityPrice = document.createElement("span");
      quantityPrice.innerText = product.price;
        
     amount += product.count * product.price;
  
      quantity.append(quantityNumber);
      quantity.append(multiplyIcon);
      quantity.append(quantityPrice);
  
  
      cart.append(pName);
      cart.append(quantity);
      if(product.count > 0){
  
        cartContainer.append(cart);
        totalAmount.innerText = amount;
      }
  
     })
   
  }
  
  
  function addCount(index, event) {
    let cnt = Products[index].count;
    cnt++;
    Products[index].count = cnt;
  
    productListContainer.innerHTML = "";
    cartContainer.innerHTML = "";
    totalAmount.innerText= "0"
    para.style.display = "none";
  
    amount = 0;
    displayProduct(Products);
    addCart(Products);
  }
  
  function minusPrd(index, event) {
    let cnt = Products[index].count;
    cnt--;
    if (cnt >= 0) {
      Products[index].count = cnt;
    }
  
    productListContainer.innerHTML = "";
    cartContainer.innerHTML = "";
    totalAmount.innerText= "0"
    amount=0;
    displayProduct(Products);
    
    addCart(Products);
  }