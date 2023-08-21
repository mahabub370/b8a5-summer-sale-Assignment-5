let totalPrice = 0;

function addToCardBtn(btnData) {
    const itemList = document.getElementById("selected-items");
    const itemName = btnData.parentNode.parentNode.childNodes[1].innerText;
    let addItemsName = document.createElement("li");
    addItemsName.innerText = itemName;
    itemList.appendChild(addItemsName);

    const price = btnData.parentNode.parentNode.childNodes[3].innerText.split(" ")[0];

    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    const totalPrice1 = document.getElementById("total-price").innerText = totalPrice;
    const subDiscount = parseFloat(20/100) * totalPrice1;
    const discount = parseFloat(subDiscount.toFixed(2));
    const discountPrice = document.getElementById("discount").innerText = discount;
    const subtotal = totalPrice1 - discountPrice;
    const total = parseFloat(subtotal.toFixed(2));
    document.getElementById("total").innerText = total;

    // const couponField = document.getElementById("coupon-field");
    // const applyBtn = document.getElementById("coupon-btn");

    // if (couponField === "SELL200" ) {
    //     applyBtn.disabled = false;
    //   } else {
    //     applyBtn.disabled = true;
    //   }
    
    const button = document.getElementById("make-purchase");

    if (totalPrice1 < 200) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }

    
}

