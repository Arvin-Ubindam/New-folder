// Sample items data with categories
const items = [
    { id: 1, name: "Running Shoes", price: 50, category: "shoes", description: "Comfortable running shoes." },
    { id: 2, name: "Casual Shoes", price: 40, category: "shoes", description: "Stylish casual shoes." },
    { id: 3, name: "Party Dress", price: 100, category: "girls-clothes", description: "Elegant party dress." },
    { id: 4, name: "Summer Dress", price: 70, category: "girls-clothes", description: "Lightweight summer dress." },
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
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        
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
