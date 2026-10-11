const BaseUrl = "https://fakestoreapi.com";
const detailContainer = document.getElementById("product-detail-container");

// 1. URL se query parameters (id) get karne ka tareeqa
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// 2. Specific product data fetch karne ki function
async function fetchProductDetail() {
    if (!productId) {
        detailContainer.innerHTML = `<p class="text-danger">Product ID not found in URL!</p>`;
        return;
    }

    try {
        const response = await fetch(`${BaseUrl}/products/${productId}`);
        const product = await response.json();
        
        // 3. HTML mein product ki details inject karna
        detailContainer.innerHTML = `
            <div class="col-md-6 text-center">
                <img src="${product.image}" alt="${product.title}" class="img-fluid product-img mb-3">
            </div>
            <div class="col-md-6">
                <span class="badge bg-secondary mb-2">${product.category.toUpperCase()}</span>
                <h2>${product.title}</h2>
                <h3 class="text-success my-3">$${product.price}</h3>
                <p class="text-muted"><strong>Rating:</strong> ${product.rating.rate} / 5 (${product.rating.count} reviews)</p>
                <p>${product.description}</p>
                <button class="btn btn-primary mt-3">Add to Cart</button>
            </div>
        `;
    } catch (error) {
        console.log("Error fetching product detail:", error);
        detailContainer.innerHTML = `<p class="text-danger">Failed to load product details. Please try again later.</p>`;
    }
}

fetchProductDetail();