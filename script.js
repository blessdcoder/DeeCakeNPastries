console.log("Script Loaded");

// Creating file to get the products from the json file
// Using async await
class Product{
    async getProduct(){
        const response = await fetch("products.json");
        const data = await response.json();
        let products = data.items;
        products = products.map(item=>{
            const{title, price} = items.fields;
            const{id} = items.sys;
            const image = items.fields.image.fields.file.url;
            return{title, price, id, image};
        });
        return products;
    }
}

// Creating Class for the UI of the products
class UI{
    displayProducts(products){
        let result = "";
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `<div class = "product-card">
                                    <img src="${product.image}" alt="product">
                                    <span class="add-to-cart" data-id="${product.id}">
                                    <i class="fa fa-cart--plus fa-1x"
                                    style="margin-right: 0.1rem; font-size: 1em;"></i>
                                    Add to Cart
                                    </span>
                                    <div class="product-name">${product.title}</div>
                                    <div class="product-pricing">${product.price}</div>
                                    </div>`;
            // Any item added to cart will be appended inside the cart
            const p = document.querySelector(".product");
            p.append(productDiv);
        });
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const products = new Product();
    const ui = new UI();
    ui.setupApp();
    products.getProduct().then(products=>{
        ui.displayProducts(products);
    });
});