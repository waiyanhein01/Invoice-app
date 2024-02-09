import { createProduct } from "./productRender.js";
import { createRecord, deleteRecord, updateRecord, updateRecordTotal } from "./record.js";
import { addProductForm, createForm, productGroup, productSelect, rowGroup } from "./selectors.js";
import products from "./variables.js";

export const createFormHandler = (e) => {
    e.preventDefault();
    // get data
    const formData = new FormData(createForm);
    const currentProductSelect = parseInt(formData.get("productSelect"));
    const currentProduct = products.find((el) => el.id === currentProductSelect)
    const currentInputQuantity = parseInt(formData.get("inputQuantity"));
    // console.log(formData);

    // isExisted
    const isExistedRow = document.querySelector(`[row-product-id="${currentProductSelect}"]`)
    if (isExistedRow) {
        // const currentQuantity = isExistedRow.querySelector(".row-quantity");
        // const currentRowCost = isExistedRow.querySelector(".row-cost");
        // const currentPrice = isExistedRow.querySelector(".row-price");
        // currentQuantity.innerText = parseInt(currentQuantity.innerText) + currentInputQuantity;
        // currentRowCost.innerText = currentPrice.innerText * currentQuantity.innerText;
        updateRecord(isExistedRow.getAttribute("row-product-id"),currentInputQuantity)
    } else {
        // append to row table
        rowGroup.append(createRecord(currentProduct, currentInputQuantity));
    };
    // total
    // updateRecordTotal();
    createForm.reset();

}

export const rowGroupHandler = (event) => {
    if (event.target.classList.contains("row-del-btn")) {
        deleteRecord(event);
    } else if (event.target.classList.contains("add-record")) {
        // addRecordBtn(event);
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"),1);
    } else if (event.target.classList.contains("sub-record")) {
        // subRecordBtn(event);
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"),-1);
    }
}

export const manageInventoryBtnHandler = () => {
    inventorySheet.classList.toggle("-translate-x-full") 
}

export const addNewProductHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(addProductForm);
    const newProduct = {
        id : Date.now(),
        name : formData.get("product_add_name"),
        price : formData.get("product_add_price")
    }
    productGroup.append(createProduct(newProduct));
    productSelect.append(new Option(newProduct.name, newProduct.id))
    products.push(newProduct)
    addProductForm.reset();
}

export const printBtnHandler = () => {
    window.print();
}

