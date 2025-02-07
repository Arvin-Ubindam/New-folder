
const items = [
    { id: 1, name: "Running Shoes", price: 50, category: "shoes", description: "Comfortable running shoes." },
    { id: 2, name: "Football boots", price: 50, category: "shoes", description: "Comfortable football boots" },
    { id: 3, name: "Party Dress", price: 100, category: "girls-children", description: "Elegant party dress." },
    { id: 4, name: "Summer Dress", price: 70, category: "boys-children", description: "Lightweight summer dress." },
    {id: 5, name: "A Golden Watch", price: 100, category: "watches", description: "A shiny wrist watch for any occasion" },
];


document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
