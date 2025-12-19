
  const expiryInput = document.getElementById("expiry");

  expiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    // Limit to 4 digits (MMYY)
    if (value.length > 4) value = value.slice(0, 4);

    // Validate month
    if (value.length >= 2) {
      let month = value.slice(0, 2);
      if (month < "01") month = "01";
      if (month > "12") month = "12";
      value = month + value.slice(2);
    }

    // Insert slash
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    e.target.value = value;
  });

  //cvc to accept only numbers and limit to 3 digits
  const cvcInput = document.getElementById("cvc");

  cvcInput.addEventListener("input", () => {
    cvcInput.value = cvcInput.value.replace(/\D/g, "");
  });


  //card number to accept only numbers and format as 0000 0000 0000 0000
  const cardInput = document.getElementById("cardNumber");

  cardInput.addEventListener("input", () => {
    // Remove all non-digits
    let value = cardInput.value.replace(/\D/g, "");

    // Limit to 16 digits
    value = value.slice(0, 16);

    // Add space every 4 digits
    value = value.replace(/(.{4})/g, "$1 ").trim();

    cardInput.value = value;
  });


  // checkout button

  const btnDiv = document.getElementById("btn");
  const checkoutBtn = document.createElement("button");
  checkoutBtn.textContent = "Checkout";
  checkoutBtn.className = "checkoutBtn";
  btnDiv.appendChild(checkoutBtn);