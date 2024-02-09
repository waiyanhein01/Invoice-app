import { rowGroup, rowTemplate, totalCost } from "./selectors.js"

// let recordIndex = 1;
export const createRecord = ({ id ,name, price }, quantity) => {
    const recordUi = rowTemplate.content.cloneNode(true);
    const rowCost = price * quantity;

    //    recordUi.querySelector(".row-num").innerText = recordIndex++;
    recordUi.querySelector(".row").setAttribute("row-product-id",id);
    recordUi.querySelector(".row-product-name").innerText = name;
    recordUi.querySelector(".row-price").innerText = price;
    recordUi.querySelector(".row-quantity").innerText = quantity;
    recordUi.querySelector(".row-cost").innerText = rowCost;
    return recordUi;
}

export const updateRecordTotal = () => {
    const allRowCost = document.querySelectorAll(".row-cost");
    // let total = 0;
    // allRowCost.forEach((el) => total += parseFloat(el.innerText) );
    totalCost.innerText = [...allRowCost].reduce((pv,{innerText}) => pv + parseFloat(innerText),0);
}

export const deleteRecord = (event) => {
     const row = event.target.closest('.row')
     if(confirm("Are u sure want to delete?")){
        row.remove();
        // updateRecordTotal();
     }
}

export const updateRecord = (productId,q) => {
    const row = document.querySelector(`[row-product-id="${productId}"]`)
    const currentQuantity= row.querySelector(".row-quantity");
    const currentRowCost = row.querySelector(".row-cost");
    const currentPrice = row.querySelector(".row-price");
    if(q > 0 || currentQuantity.innerText > 1) {
        currentQuantity.innerText = parseInt(currentQuantity.innerText) + q; 
        currentRowCost.innerText = currentPrice.innerText * currentQuantity.innerText;
        // updateRecordTotal();
    }

}

// export const addRecordBtn =(event) => {
//     const row = event.target.closest('.row')
//     const currentQuantity= row.querySelector(".row-quantity");
//     const currentRowCost = row.querySelector(".row-cost");
//     const currentPrice = row.querySelector(".row-price");
//     currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
//     currentRowCost.innerText = currentPrice.innerText * currentQuantity.innerText;
//     updateRecordTotal();
// }

// export const subRecordBtn =(event) => { 
//     const row = event.target.closest('.row')
//     const currentQuantity= row.querySelector(".row-quantity");
//     const currentRowCost = row.querySelector(".row-cost");
//     const currentPrice = row.querySelector(".row-price");
//     if(currentQuantity.innerText > 1) {
//         currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
//         currentRowCost.innerText = currentPrice.innerText * currentQuantity.innerText;
//         updateRecordTotal();     
//     }else{
//         deleteRecord(event);
//     }
// }

export const recordObserver = () => {
    const runObserver = () => {
        // console.log("U change Observer");
        updateRecordTotal();
    } 
    const observerOptions = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver(runObserver);
    observer.observe(rowGroup, observerOptions)
}
