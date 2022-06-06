function addToCart(btn) {
  const trNode = btn.parentElement.parentElement;

  const trNodeClone = trNode.cloneNode(true);
  const btnAdd = trNodeClone.getElementsByTagName("button");
  btnAdd[0].innerText = "Xóa";
  btnAdd[0].setAttribute("onclick", "removeCartItem(this)");
  const cartBody = document.getElementById("cart-body");

  cartBody.appendChild(trNodeClone);

  const cartTable = document.getElementById("cartItems");
  cartTable.style.display = "table";

  const emptyCart = document.getElementById("emptyCart");
  emptyCart.style.display = "none";
  const grandTotal = document.getElementById("grandTotal");
  grandTotal.style.display = "block";

  calculateGrandTotal();
}

function removeCartItem(btn) {
  const trNode = btn.parentElement.parentElement;

  const tbodyNode = trNode.parentElement;
  tbodyNode.removeChild(trNode);

  if (tbodyNode.children.length <= 0) {
    const cartTable = document.getElementById("cartItems");
    cartTable.style.display = "none";

    const emptyCart = document.getElementById("emptyCart");
    emptyCart.style.display = "block";

    const grandTotal = document.getElementById("grandTotal");
    grandTotal.style.display = "none";

    grandTotal.childNodes[1].innerHTML = "0";
  }
  calculateGrandTotal();
}



function calculateGrandTotal() {
  const cartItemsTable = document.getElementById("cartItems");
  const amountSpans = cartItemsTable.getElementsByClassName("amount");

  let total = 0;

  for (const element of amountSpans) {
    total += Number(element.innerText);
  }

  const totalSpan = document.getElementById("total");
  totalSpan.innerText = total;
}
