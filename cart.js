// Select all remove buttons
const removeButtons = document.querySelectorAll(".remove-btn");
const itemsTotalEl = document.getElementById("items-total");
const grandTotalEl = document.getElementById("grand-total");
const deliveryFeeEl = document.getElementById("delivery-fee");

// Helper to parse ₹ amounts
function parseRupees(text) {
  return parseInt(text.replace(/[₹,\s]/g, ""), 10) || 0;
}

// Helper to format back to ₹ with comma
function formatRupees(num) {
  return "₹" + num.toLocaleString("en-IN");
}

// Recalculate totals
function recalcTotals() {
  const priceCells = document.querySelectorAll(".cart-table tbody .price");
  const qtyInputs = document.querySelectorAll(
    ".cart-table tbody input[type='number']"
  );

  let itemsTotal = 0;
  priceCells.forEach((cell, index) => {
    const price = parseRupees(cell.textContent);
    const qty = parseInt(qtyInputs[index].value, 10) || 1;
    itemsTotal += price * qty;
  });

  const deliveryFee = parseRupees(deliveryFeeEl.textContent);
  const grandTotal = itemsTotal + deliveryFee;

  itemsTotalEl.textContent = formatRupees(itemsTotal);
  grandTotalEl.textContent = formatRupees(grandTotal);
}

// Attach events to remove buttons
removeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr");
    if (row) {
      row.remove();
      recalcTotals();
      alert("Item removed from cart!");
    }
  });
});

// Attach change events to quantity inputs
document
  .querySelectorAll(".cart-table tbody input[type='number']")
  .forEach((input) => {
    input.addEventListener("change", () => {
      if (parseInt(input.value, 10) < 1 || isNaN(parseInt(input.value, 10))) {
        input.value = 1;
      }
      recalcTotals();
    });
  });

// Initial calculation
recalcTotals();
