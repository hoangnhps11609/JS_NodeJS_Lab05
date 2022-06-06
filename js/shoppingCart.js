
function calculate(){
    const pricebl = document.getElementById('pro')
    const qtyInput = document.getElementById('qty')

    const price = Number(pricebl.getAttribute('data-price'))
    const qty = Number(qtyInput.value)

    const nameSpan = document.getElementById('name')
    const amountSpan = document.getElementById('amount')

    nameSpan.innerText = "iPhone9"
    amountSpan.innerText = "$" + price * qty
}