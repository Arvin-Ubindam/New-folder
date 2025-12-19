const items = [
  {
    id: 1,
    image: "imgs/GG_Embelm_Belt_bag.webp",
    name: "GG Embelm Belt Bag",
    price: 50,
    category: "men-bags",
    description: "Lightweight bag and comfortable to hug.",
    stock: "In stock",
    rating_icon: "rating-icons/3_and_a_half_star.png",
    rating: "1.9K",
  },
  {
    id: 2,
    image: "imgs/Light-Small-GG-crossbody-bag-with-Web.avif",
    name: "GG black bag",
    price: 40,
    category: "men-bags",
    description: "Stylish casual shoes.",
    stock: "10 left",
    rating_icon: "rating-icons/4_star.png",
    rating: "2.9K reviews",
  },
  {
    id: 3,
    image: "imgs/original_gucci_shoe_men1.avif",
    name: "GG brown shoe",
    price: 100,
    category: "men-shoes",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_and_a_half_star.png",
    rating: "1.9K reviews",
  },
  {
    id: 4,
    image: "imgs/Superstar_II_Shoes_White_JI0124_01_standard.avif",
    name: "Superstar || shoe",
    price: 70,
    category: "girls-clothes",
    description: "Lightweight summer dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "3.9K reviews",
  },
  {
    id: 4,
    image: "imgs/Speedcat-OG-Women's-Sneakers.avif",
    name: "Speedcat OG",
    price: 70,
    category: "women-shoes",
    description: "Stylish casual shoes.",
    stock: "In stock",
    rating_icon: "rating-icons/3_star.png",
    rating: "1.1K reviews",
  },
  {
    id: 5,
    image: "imgs/gucci_shoe_men.avif",
    name: "GG modern shoe",
    price: 100,
    category: "men-shoes",
    description: "Elegant party dress.",
    stock: "8 left",
    rating_icon: "rating-icons/5_star.png",
    rating: "4.9K reviews",
  },
  {
    id: 6,
    image: "imgs/kids_crocs.jpg",
    name: "Modern Kids Cros",
    price: 100,
    category: "boys-shoes",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "3K reviews",
  },
  {
    id: 7,
    image: "imgs/earbuds.jpg",
    name: "Earbuds",
    price: 100,
    category: "tech-gadgets",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/2_and_a_half_star.png",
    rating: "978 reviews",
  },
  {
    id: 8,
    image: "imgs/Adidas_customized.avif",
    name: "Addidas custom",
    price: 100,
    category: "men-shoes",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_and_a_half_star.png",
    rating: "1.9K reviews",
  },
  {
    id: 9,
    image: "imgs/gabardine_shorts.webp",
    name: "Gabardine shorts",
    price: 142,
    category: "men-cloths",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_star.png",
    rating: "1K reviews",
  },
  {
    id: 10,
    image: "imgs/loius_vuitton_ladies_bag.webp",
    name: "On THe Go MM",
    price: 370,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_and_a_half_star.png",
    rating: "1.8K reviews",
  },
  {
    id: 11,
    image: "imgs/coussin.webp",
    name: "Coussin PM",
    price: 455,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_star.png",
    rating: "1.3K reviews",
  },
  {
    id: 12,
    image: "imgs/LV_lagoon_sneaker.webp",
    name: "LV lagoon sneakers",
    price: 935,
    category: "women-shoes",
    description: "Elegant party dress.",
    stock: "2 left",
    rating_icon: "rating-icons/3_star.png",
    rating: "1K reviews",
  },
  {
    id: 13,
    image: "imgs/LVxTM_boulogne.webp",
    name: "LV x TM Boulogne",
    price: 277,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_star.png",
    rating: "1K reviews",
  },
  {
    id: 3,
    image: "imgs/sunset.webp",
    name: "Sunset",
    price: 300,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_and_a_half_star.png",
    rating: "1.7K reviews",
  },
  {
    id: 14,
    image: "imgs/Liv_pochette.webp",
    name: "Liv Pochette",
    price: 234,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/3_and_a_half_star.png",
    rating: "1.9K reviews",
  },
  {
    id: 15,
    image: "imgs/necklace.webp",
    name: "LV Enamel Necklace",
    price: 480,
    category: "women-accessories",
    description: "Elegant party dress.",
    stock: "6 left",
    rating_icon: "rating-icons/2_and_a_half_star.png",
    rating: "768 reviews",
  },
  {
    id: 16,
    image:
      "imgs/africa-en-galaxy-tab-s10-ultra-sm-x920-sm-x926bzadafa-543688846.webp",
    name: "Galaxy Tab S10 Ultra",
    price: 480,
    category: "tech-gadgets",
    description: "Elegant party dress.",
    stock: "In stock",
    colour_1: "gray",
    rating_icon: "rating-icons/3_star.png",
    rating: "1.1K reviews",
  },
  {
    id: 17,
    image:
      "imgs/Anthony_Edwards_1_Low_Nicks_Gift_Shoes_Blue_JQ6139_00_plp_standard.jpg",
    name: "Nick",
    price: 480,
    category: "men-shoes",
    description: "Elegant party dress.",
    stock: "Out",
    rating_icon: "rating-icons/4_star.png",
    rating: "2.3K reviews",
  },
  {
    id: 18,
    image: "imgs/Mascara.jpeg",
    name: "Mascara",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_star.png",
    rating: "2.3K reviews",
  },
  {
    id: 19,
    image: "imgs/8a6c12b1-52d5-4df2-bac1-cf89c287c2fc.jpeg",
    name: "Moisturizing Lip Gloss",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_star.png",
    rating: "2.3K reviews",
  },
  {
    id: 20,
    image: "imgs/Y0000010_E000000093_E01_GHC.webp",
    name: "Forever Glow Luminizer",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "9 left",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "2.7K reviews",
  },
  {
    id: 21,
    image: "imgs/A036AAAB-02E0-41BC-8AE5-C51974918AC0.webp",
    name: "Burberry Goddess",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "Out",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "2.7K reviews",
  },
  {
    id: 22,
    image: "imgs/comfortable_shoe.jpg",
    name: "Boy Shoe",
    price: 480,
    category: "boy-shoes",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "2.7K reviews",
  },
  {
    id: 23,
    image: "imgs/C68106E4-323F-4A49-B5F1-0356DF81848A.webp",
    name: "Goddess Perfume",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "2.7K reviews",
  },
  {
    id: 23,
    image:
      "imgs/90_R742011-R200MLS_RNUL_20_ErosEnergyEDP200ml-Eros~Energy-Versace-online-store_0_2.jpg",
    name: "Eros Energy",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "2.7K reviews",
  },
  {
    id: 24,
    image:
      "imgs/90_R702232-R100MLS_RNUL_20_Dylan~Purple~EDP~100~ml-Accessories-Versace-online-store_4_1.webp",
    name: "Dylan Purple EDP",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "5 left",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "2.7K reviews",
  },
  {
    id: 25,
    image:
      "imgs/90_R721010-R100MLS_RNUL_20_DylanBluePourHommeEDT100ml--Versace-online-store_2_1.webp",
    name: "Dylan Blue EPT",
    price: 480,
    category: "Fragrance-and-beauty",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/4_and_a_half_star.png",
    rating: "2.7K reviews",
  },
  {
    id: 26,
    image: "imgs/M0455CBAAM900_E01.webp",
    name: "Saddle Bag",
    price: 345,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/5_star.png",
    rating: "9K reviews",
  },
  {
    id: 27,
    image: "imgs/M1365UDCEM49E_E01.webp",
    name: "Dior Groove 25 Bag",
    price: 260,
    category: "men-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/5_star.png",
    rating: "9K reviews",
  },
  {
    id: 28,
    image: "imgs/M2835OSNWM55G_E03.webp",
    name: "Dior Toujours Tote Bag",
    price: 345,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/5_star.png",
    rating: "9K reviews",
  },
  {
    id: 29,
    image: "imgs/M3372UNOZM030_E01.webp",
    name: "Dior Caro Bucket Bag",
    price: 345,
    category: "women-bags",
    description: "Elegant party dress.",
    stock: "In stock",
    rating_icon: "rating-icons/5_star.png",
    rating: "10K reviews",
  },
];

let cart = [];
let filteredItems = [...items];

const itemsContainer = document.getElementById("items");
const itemDetail = document.getElementById("item-detail");
const detailImage = document.getElementById("detail-image");
const cartCount = document.getElementById("cart-count");
const detailName = document.getElementById("detail-name");
const detailDescription = document.getElementById("detail-description");
const detailPrice = document.getElementById("detail-price");
const quantityInput = document.getElementById("quantity");
const addToCartButton = document.getElementById("add-to-cart");
const closeDetailButton = document.getElementById("close-detail");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-selection");
const ItemDetail = document.getElementById("item-detail");
itemDetail.classList.add("hidden");

const noResults = document.getElementById("no-results");

function renderItems() {
  itemsContainer.innerHTML = "";

  if (filteredItems.length === 0) {
    noResults.classList.remove("hidden");
    return;
  } else {
    noResults.classList.add("hidden");
  }

  filteredItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="img">
      <h3 class="content">${item.name}</h3>
      <p class="price"><span class="price_text">Price: £${item.price}</span></p>
      <img src="${item.rating_icon}" class="rating-icon">
      <p class="rating">${item.rating}</p>
      <span class="stockStatus">${item.stock}</span>
    `;
    itemDiv.addEventListener("click", () => showItemDetail(item));
    itemsContainer.appendChild(itemDiv);
  });
}


function showItemDetail(item) {
  // Update all detail elements
  detailName.textContent = item.name;
  detailDescription.textContent = item.description;
  detailPrice.textContent = `£${item.price}`;

  // Properly set the image
  detailImage.src = item.image;
  detailImage.alt = item.name;

  // Load event to handle image loading
  detailImage.onload = function () {
    console.log("Image loaded successfully:", item.image);
  };

  detailImage.onerror = function () {
    console.error("Failed to load image:", item.image);
    detailImage.src = "imgs/placeholder.jpg"; // Fallback image
  };

  // Show the detail panel
  itemDetail.classList.remove("hidden");

  // Set up add to cart button
  addToCartButton.onclick = () => {
    addToCart(item, parseInt(quantityInput.value, 10) || 1);
    itemDetail.classList.add("hidden");
  };
}

function addToCart(item, quantity) {
  const cartItem = cart.find((i) => i.id === item.id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  updateCartCount();
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function filterItems() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;
  filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchText);
    return matchesCategory && matchesSearch;
  });
  renderItems();
}

searchInput.addEventListener("input", filterItems);
categorySelect.addEventListener("change", filterItems);
closeDetailButton.addEventListener("click", () => {
  itemDetail.classList.add("hidden");
});

renderItems();

function updateStockStatus() {
  const elements = document.querySelectorAll(".stockStatus");
  elements.forEach((element) => {
    let stockValue = element.textContent.trim().toLowerCase();
    if (stockValue === "in stock") {
      element.style.backgroundColor = "yellowgreen";
    } else if (stockValue === "out") {
      element.style.backgroundColor = "rgb(215, 0, 0)";
      element.style.opacity = "0.1";
      element.style.color = "white";
    } else {
      let numericValue = parseInt(stockValue);
      if (!isNaN(numericValue) && numericValue > 1 && numericValue <= 10) {
        element.style.backgroundColor = "rgb(191, 191, 2)";
        element.style.color = "white";
      }
    }
  });
}

// Sign up and in account button

const modal = document.getElementById("authModal");
const closeBtn = document.getElementById("closeAuth");
const forms = document.querySelector(".forms");

const toSignup = document.getElementById("toSignup");
const toSignin = document.getElementById("toSignin");

const signupPassword = document.getElementById("signupPassword");
const signupEmail = document.getElementById("signupEmail");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const accountBtn = document.getElementById("accountBtn"); // Account button

/* OPEN MODAL */
function openAuth() {
  modal.style.display = "flex";
}

/* CLICK ON ACCOUNT TO OPEN MODAL */
accountBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openAuth();
});




/* CLOSE MODAL */
closeBtn.onclick = () => modal.style.display = "none";

/* SLIDE BETWEEN SIGN IN & SIGN UP */
toSignup.onclick = e => {
  e.preventDefault();
  forms.classList.add("signup-active");
};

toSignin.onclick = e => {
  e.preventDefault();
  forms.classList.remove("signup-active");
};

/* PASSWORD STRENGTH */
signupPassword.addEventListener("input", () => {
  const val = signupPassword.value;
  if (val.length < 6) {
    strengthText.textContent = "Weak password";
    strengthText.style.color = "red";
  } else if (/[A-Z]/.test(val) && /\d/.test(val)) {
    strengthText.textContent = "Strong password";
    strengthText.style.color = "green";
  } else {
    strengthText.textContent = "Medium strength";
    strengthText.style.color = "orange";
  }
});

/* AUTH LOGIC (LOCAL STORAGE) */
document.getElementById("signupForm").onsubmit = e => {
  e.preventDefault();
  localStorage.setItem("userEmail", signupEmail.value);
  localStorage.setItem("userPassword", signupPassword.value);
  alert("Account created successfully!");
  forms.classList.remove("signup-active");
  modal.style.display = "none"; // Close modal after signup
};

document.getElementById("signinForm").onsubmit = e => {
  e.preventDefault();
  if (
    loginEmail.value === localStorage.getItem("userEmail") &&
    loginPassword.value === localStorage.getItem("userPassword")
  ) {
    alert("Login successful!");
    modal.style.display = "none";
  } else {
    alert("Invalid login details");
  }
};

const signUpPassword = document.getElementById("signupPassword");

const ruleLength = document.getElementById("rule-length");
const ruleNumber = document.getElementById("rule-number");
const ruleCase = document.getElementById("rule-case");

signupPassword.addEventListener("input", () => {
  const value = signUpPassword.value;

  // Rules
  const hasLength = value.length >= 8;
  const hasNumber = /[0-9!@#$%^&*]/.test(value);
  const hasCase = /[a-z]/.test(value) && /[A-Z]/.test(value);

  updateRule(ruleLength, hasLength, value);
  updateRule(ruleNumber, hasNumber, value);
  updateRule(ruleCase, hasCase, value);
});

function updateRule(element, isValid, value) {
  element.classList.remove("valid", "warning");

  if (!value) return;

  if (isValid) {
    element.classList.add("valid");
  } else {
    element.classList.add("warning");
  }
}

const authModal = document.getElementById("authModal");
const closeAuth = document.getElementById("closeAuth");
const Forms = document.querySelector(".forms");

// OPEN MODAL (Account button)
document.getElementById("accountBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  authModal.style.display = "flex";
});

// CLOSE MODAL (works on BOTH sign in & sign up)
closeAuth.addEventListener("click", () => {
  authModal.style.display = "none";
  Forms.classList.remove("signup-active"); // reset to sign in
});

// CLICK OUTSIDE TO CLOSE (optional but pro)
authModal.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.style.display = "none";
    Forms.classList.remove("signup-active");
  }
});


document.getElementById("toSignup").addEventListener("click", (e) => {
  e.preventDefault();
  forms.classList.add("signup-active");
});

document.getElementById("toSignin").addEventListener("click", (e) => {
  e.preventDefault();
  forms.classList.remove("signup-active");
});



window.addEventListener("load", function () {
  itemDetail.classList.add("hidden");
  updateStockStatus();
});

document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
