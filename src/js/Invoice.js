import { initialRender } from "./core/initialRender.js";
import listener from "./core/listener.js";
import observer from "./core/observer.js";
// import products from "./core/variable.js";

class Invoice {
    init() {
        // console.log("Invoice Start");
        initialRender();
        listener();
        observer();
    }
}
export default Invoice;