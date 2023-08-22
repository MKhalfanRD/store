const searchInput = document.getElementById("data-search");
const cards = document.querySelectorAll(".col"); // Mengambil semua elemen kartu produk

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    
    cards.forEach(card => {
        const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();
        const cardText = card.querySelector(".card-text").textContent.toLowerCase();
        
        // Cek apakah judul kartu atau teks kartu mengandung kata pencarian
        const isVisible = cardTitle.includes(value) || cardText.includes(value);
        
        // Menampilkan atau menyembunyikan kartu berdasarkan hasil pencarian
        card.style.display = isVisible ? "block" : "none";
    });
});
