// import Swal from "sweetalert2";
import "./input.css"
import Invoice from "./src/js/Invoice.js";

const invoice = new Invoice();
invoice.init();

// console.log(printBtn);

// Swal.fire("Hello")
// Swal.fire({
//     title: "My Title",
//     text: "San Kyi Tar Par",
//     icon: "success"
// })

// Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     // confirmButtonColor: "#3085d6",
//     // cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       });
//     }
//   });