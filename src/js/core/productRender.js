import { productGroup, productSelect, productTemplate } from "./selectors.js";

export const createProduct = ({ name, price }) => {
    // const option = document.createElement("option");
    // option.innerText = name;
    // option.value = id;
    // return option;
    const productInventory = productTemplate.content.cloneNode(true);
    productInventory.querySelector(".product-name").innerText = name;
    productInventory.querySelector(".product-price").innerText = price;
    return productInventory;
}

export const productRender = (products) => {
    // productSelect.innerHTML = "";
    // productGroup.innerHTML = "";
    products.forEach(({ name, id, price }) => {
        productSelect.append(new Option(name, id))
        productGroup.append(createProduct({ name, price }))
    });
}

