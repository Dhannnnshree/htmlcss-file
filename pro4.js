// Get elements from the DOM
const productImage = document.getElementById("productImage");
const productModal = document.getElementById("productModal");
const closeButton = document.getElementById("closeButton");
const orderButton = document.getElementById("orderButton");

// Show modal when the image is clicked
productImage.addEventListener("click", () => {
  productModal.style.display = "flex";
});

// Close modal when the close button is clicked
closeButton.addEventListener("click", () => {
  productModal.style.display = "none";
});

// Optional: Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === productModal) {
    productModal.style.display = "none";
  }
});

// Order button functionality
orderButton.addEventListener("click", () => {
  alert("Thank you for ordering! Your product will delivered in working 2-3 days.For any query contact us.");
  productModal.style.display = "none"; // Close the modal after order
});
