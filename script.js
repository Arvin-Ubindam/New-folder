// Sample items data with categories
const items = [
    { id: 1, image: "imgs/GG_Embelm_Belt_bag.webp", name: "GG Embelm Belt Bag", price: 50, category: "men-bags", description: "Lightweight bag and comfortable to hug.", stock:"In stock" },
    { id: 2, image: "imgs/Light-Small-GG-crossbody-bag-with-Web.avif", name: "GG black bag", price: 40, category: "men-bags", description: "Stylish casual shoes.", stock:"10 left" },
    { id: 3, image: "imgs/original_gucci_shoe_men1.avif", name: "GG brown shoe", price: 100, category: "men-shoes", description: "Elegant party dress.", stock:"In stock" },
    { id: 4, image: "imgs/Superstar_II_Shoes_White_JI0124_01_standard.avif", name: "Superstar || shoe", price: 70, category: "girls-clothes", description: "Lightweight summer dress.", stock:"In stock" },
    { id: 4, image: "imgs/Speedcat-OG-Women's-Sneakers.avif", name: "Speedcat OG", price: 70, category: "women-shoes", description: "Stylish casual shoes.", stock:"In stock" },
    { id: 5, image: "imgs/gucci_shoe_men.avif", name: "GG modern shoe", price: 100, category: "men-shoes", description: "Elegant party dress.", stock:"8 left" },
    { id: 6, image: "imgs/kids_crocs.jpg", name: "Modern Kids Cros", price: 100, category: "boys-shoes", description: "Elegant party dress.", stock:"In stock" },
    { id: 7, image: "imgs/earbuds.jpg", name: "Earbuds", price: 100, category: "tech-gadgets", description: "Elegant party dress.", stock:"In stock" },
    { id: 8, image: "imgs/Adidas_customized.avif", name: "Addidas custom", price: 100, category: "men-shoes", description: "Elegant party dress.", stock:"In stock" },
    { id: 9, image: "imgs/gabardine_shorts.webp", name: "Gabardine pocket shorts", price: 142, category: "men-cloths", description: "Elegant party dress.", stock:"In stock" },
    { id: 10, image: "imgs/loius_vuitton_ladies_bag.webp", name: "On THe Go MM", price: 370, category: "women-bags", description: "Elegant party dress.", stock:"In stock" },
    { id: 11, image: "imgs/coussin.webp", name: "Coussin PM", price: 455, category: "women-bags", description: "Elegant party dress.", stock:"In stock" },
    { id: 12, image: "imgs/LV_lagoon_sneaker.webp", name: "LV lagoon sneakers", price: 935, category: "women-shoes", description: "Elegant party dress.", stock:"2 left" },
    { id: 13, image: "imgs/LVxTM_boulogne.webp", name: "LV x TM Boulogne", price: 277, category: "women-bags", description: "Elegant party dress.", stock:"In stock" },
    { id: 3, image: "imgs/sunset.webp", name: "Sunset", price: 300, category: "women-bags", description: "Elegant party dress.", stock:"In stock" },
    { id: 14, image: "imgs/Liv_pochette.webp", name: "Liv Pochette", price: 234, category: "women-bags", description: "Elegant party dress.", stock:"In stock" },
    { id: 15, image: "imgs/necklace.webp", name: "LV Enamel Necklace", price: 480, category: "women-accessories", description: "Elegant party dress.", stock:"6 left" },
    { id: 16, image: "imgs/africa-en-galaxy-tab-s10-ultra-sm-x920-sm-x926bzadafa-543688846.webp", name: "Galaxy Tab S10 Ultra", price: 480, category: "tech-gadgets", description: "Elegant party dress.", stock:"In stock" },
    { id: 17, image: "imgs/Anthony_Edwards_1_Low_Nicks_Gift_Shoes_Blue_JQ6139_00_plp_standard.jpg", name: "Nick", price: 480, category: "men-shoes", description: "Elegant party dress.", stock:"Out of stock" },

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
  
  
  function renderItems() {
    itemsContainer.innerHTML = "";
    filteredItems.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.innerHTML = `
        <img src="${item.image}">
        <h3 class="content">${item.name}</h3>
        <p class="price">Price: £${item.price}</p>
        <span class="stockStatus">${item.stock}</span>
      `;
      itemDiv.addEventListener("click", () => showItemDetail(item));
      itemsContainer.appendChild(itemDiv);
    });
  }


  function showItemDetail(item) {
    detailName.textContent = item.name;
    detailDescription.textContent = item.description;
    detailPrice.textContent = item.price;
    itemDetail.classList.remove("hidden");
  
    addToCartButton.onclick = () => {
      addToCart(item, parseInt(quantityInput.value, 10));
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
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
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
    let elements = document.querySelectorAll(".stockStatus");
    
    elements.forEach(element => {
        let stockValue = element.textContent.trim().toLowerCase();

        if (stockValue === "in stock") {
            element.style.backgroundColor = "green";
        } else if (stockValue === "out of stock") {
            element.style.backgroundColor = "rgb(215, 0, 0)"
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

// Update colors on page load
window.onload = updateStockStatus;

  

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
