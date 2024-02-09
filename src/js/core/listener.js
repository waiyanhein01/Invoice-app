import { addNewProductHandler, createFormHandler, manageInventoryBtnHandler, printBtnHandler, rowGroupHandler } from "./handlers.js";

import { createForm, inventorySheetCloseBtn, manageInventoryBtn, printBtn, productAddBtn, rowGroup } from "./selectors.js";

const listener = () => {
    createForm.addEventListener("submit",createFormHandler);
    rowGroup.addEventListener("click",rowGroupHandler);
    manageInventoryBtn.addEventListener("click",manageInventoryBtnHandler);
    inventorySheetCloseBtn.addEventListener("click",manageInventoryBtnHandler);
    productAddBtn.addEventListener("click",addNewProductHandler)
    printBtn.addEventListener("click", printBtnHandler)
}

export default listener;