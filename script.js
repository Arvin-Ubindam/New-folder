// Sample items data with categories
const items = [
    { id: 1, image: "imgs/GG_Embelm_Belt_bag.webp", name: "GG Embelm Belt Bag", price: 50, category: "men-bags", description: "Lightweight bag and comfortable to hug.", stock:"In stock" },
    { id: 2, image: "imgs/Light-Small-GG-crossbody-bag-with-Web.avif", name: "GG black bag", price: 40, category: "men-bags", description: "Stylish casual shoes.", stock:"In stock" },
    { id: 3, image: "imgs/original_gucci_shoe_men1.avif", name: "GG brown shoe", price: 100, category: "men-shoes", description: "Elegant party dress.", stock:"In stock" },
    { id: 4, image: "imgs/Superstar_II_Shoes_White_JI0124_01_standard.avif", name: "Superstar || shoe", price: 70, category: "girls-clothes", description: "Lightweight summer dress.", stock:"In stock" },
    { id: 4, image: "imgs/Speedcat-OG-Women's-Sneakers.avif", name: "Speedcat OG", price: 70, category: "women-shoes", description: "Stylish casual shoes.", stock:"In stock" },
    { id: 3, image: "imgs/gucci_shoe_men.avif", name: "GG modern shoe", price: 100, category: "men-shoes", description: "Elegant party dress.", stock:"In stock" },
    { id: 3, image: "imgs/kids_crocs.jpg", name: "Modern Kids Cros", price: 100, category: "boys-shoes", description: "Elegant party dress.", stock:"In stock" },
    
  ];
  
  let cart = [];
  let filteredItems = [...items];
  
  
  const itemsContainer = document.getElementById("items");
  const itemDetail = document.getElementById("item-detail");
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
        <p class="price">Price: $${item.price}</p>
        <span>${item.stock}</span>
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
  
  
  

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
