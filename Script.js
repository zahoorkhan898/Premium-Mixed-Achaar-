// Product Data
const products = [
    {
        id: 1,
        name: "Mango Mixed Pickle",
        description: "Traditional Pakistani mango mixed pickle made with raw mangoes, aromatic spices, and pure mustard oil. A perfect blend of tangy and spicy flavors.",
        price: 229,
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Mixed Pickle",
        description: "A delightful mix of seasonal vegetables and fruits picked in perfection. Contains mango, lime, carrot, and green chilies.",
        price: 239,
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        
      
        id: 6,
        name: "Premium Mixed Achaar",
        description: "Our signature product - a special mix of all our best pickles in one jar. The ultimate pickle experience!",
        price: 299,i
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  

// Cart functionality
let cart = [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const closeButtons = document.querySelectorAll('.close');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-btn');
const checkoutForm = document.getElementById('checkout-form');
const orderItemsContainer = document.getElementById('order-items');
const orderTotalElement = document.getElementById('order-total');
const closeConfirmation = document.getElementById('close-confirmation');
const orderNumberElement = document.getElementById('order-number');

// Display products
function displayProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to cart function
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCart();
    showCartNotification();
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Update cart
function updateCart() {
    // Update cart count
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
    
    // Update cart modal
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price} × ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = total;
}

// Decrease quantity
function decreaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    updateCart();
}

// Increase quantity
function increaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    item.quantity += 1;
    updateCart();
}

// Remove item
function removeItem(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Show checkout modal
function showCheckoutModal() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Update order summary
    orderItemsContainer.innerHTML = '';
    let orderTotal = 0;
    
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
        `;
        orderItemsContainer.appendChild(orderItem);
        orderTotal += item.price * item.quantity;
    });
    
    orderTotalElement.textContent = orderTotal;
    
    // Show modal
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'block';
}

// Place order
function placeOrder(e) {
    e.preventDefault();
    
    // Generate random order number
    const orderNumber = Math.floor(10000 + Math.random() * 90000);
    orderNumberElement.textContent = orderNumber;
    
    // Show confirmation
    checkoutModal.style.display = 'none';
    confirmationModal.style.display = 'block';
    
    // Clear cart
    cart = [];
    updateCart();
}

// Close modals
function closeModal() {
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'none';
    confirmationModal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (e.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// Event Listeners
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

checkoutButton.addEventListener('click', showCheckoutModal);

closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

checkoutForm.addEventListener('submit', placeOrder);

closeConfirmation.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
    window.location.href = '#home';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#cart') {
            cartModal.style.display = 'block';
            return;
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
displayProducts();
updateCart();

// Add cart notification styles dynamically
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s;
        z-index: 1001;
    }
    
    .cart-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(style);
