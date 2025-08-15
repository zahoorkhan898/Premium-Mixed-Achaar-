# Premium-Mixed-Achaar-
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Premium Mixed Achaar - Authentic homemade pickles made with traditional recipes. 100% homemade, hygienic, and natural ingredients. Order now for the best mango pickle, lime pickle, and mixed vegetable pickle.">
    <meta name="keywords" content="homemade achaar, mango pickle, lime pickle, mixed vegetable pickle, traditional Pakistani pickles, spicy pickles, authentic achaar, buy pickles online">
    <title>Premium Mixed Achaar | Homemade Pickles Online</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* CSS Styles from the previous implementation */
        :root {
            --primary-color: #e67e22;
            --secondary-color: #f9f4e8;
            --accent-color: #d35400;
            --dark-color: #2c3e50;
            --light-color: #ffffff;
            --text-color: #333333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--secondary-color);
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .btn {
            display: inline-block;
            background-color: var(--primary-color);
            color: var(--light-color);
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;
        }

        .btn:hover {
            background-color: var(--accent-color);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* ... (rest of the CSS styles from previous implementation) ... */
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="logo">
                <h1>Premium Mixed Achaar</h1>
                <p>Authentic Homemade Pickles</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="cart-icon">
                        <a href="#cart" id="cart-button">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count">0</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h2>Why Choose Premium Mixed Achaar?</h2>
                <div class="features-grid">
                    <div class="feature">
                        <i class="fas fa-home"></i>
                        <p>100% Homemade</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-hand-sparkles"></i>
                        <p>100% Hygienic</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-leaf"></i>
                        <p>Natural Ingredients</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-heart"></i>
                        <p>Made with Love</p>
                    </div>
                </div>
                <a href="#products" class="btn">Shop Now</a>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
        <div class="container">
            <h2>Our Special Pickles</h2>
            <div class="product-grid" id="product-grid">
                <!-- Products will be loaded by JavaScript -->
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>Our Story</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Premium Mixed Achaar began as a labor of love, where traditional recipes have been passed down through generations. Our founder, inspired by family's secret pickle recipes, decided to share these authentic flavors with the world.</p>
                    <p>Every jar of Premium Mixed Achaar is crafted with the same care and attention that goes into homemade pickles. We use only the finest ingredients – fresh vegetables, premium spices, and pure oils – to create pickles that bring authentic taste to your meals.</p>
                    <p>From our family to yours, we bring you authentic homemade taste, made with love, tradition, and the highest standards of hygiene and quality.</p>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1604977046806-7a8a8a8a8a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Traditional pickle making">
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section id="reviews" class="reviews">
        <div class="container">
            <h2>Customer Reviews</h2>
            <div class="reviews-grid">
                <div class="review-card">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"The mango pickle is absolutely divine! Tastes just like homemade."</p>
                    <p class="reviewer">- Aisha Khan</p>
                </div>
                <div class="review-card">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"Authentic flavors that take me back to my childhood. Will order again!"</p>
                    <p class="reviewer">- Muhammad Ali</p>
                </div>
                <div class="review-card">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <p>"The mixed pickle is perfect - just the right balance of spicy and tangy."</p>
                    <p class="reviewer">- Fatima Ahmed</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <p><i class="fas fa-map-marker-alt"></i> Pakistan</p>
                    <p><i class="fas fa-phone"></i> 03704053199</p>
                    <p><i class="fas fa-envelope"></i> premium.achaar@gmail.com</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <form id="contact-form">
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Cart Modal -->
    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Your Cart</h2>
            <div id="cart-items">
                <!-- Cart items will be loaded by JavaScript -->
                <p class="empty-cart">Your cart is empty</p>
            </div>
            <div class="cart-total">
                <p>Total: ₹<span id="cart-total">0</span></p>
                <button id="checkout-btn" class="btn">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <!-- Checkout Modal -->
    <div id="checkout-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Checkout</h2>
            <form id="checkout-form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="address">Full Address</label>
                    <textarea id="address" required></textarea>
                </div>
                <div class="form-group">
                    <label for="pincode">Pincode</label>
                    <input type="text" id="pincode" required>
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" required>
                </div>
                <div class="payment-methods">
                    <h3>Payment Method</h3>
                    <div class="payment-option">
                        <input type="radio" id="cod" name="payment" checked>
                        <label for="cod">Cash on Delivery</label>
                    </div>
                    <div class="payment-option">
                        <input type="radio" id="upi" name="payment">
                        <label for="upi">UPI Payment</label>
                    </div>
                </div>
                <div class="order-summary">
                    <h3>Order Summary</h3>
                    <div id="order-items">
                        <!-- Order items will be loaded by JavaScript -->
                    </div>
                    <p class="order-total">Total: ₹<span id="order-total">0</span></p>
                </div>
                <button type="submit" class="btn">Place Order</button>
            </form>
        </div>
    </div>

    <!-- Order Confirmation Modal -->
    <div id="confirmation-modal" class="modal">
        <div class="modal-content confirmation">
            <i class="fas fa-check-circle"></i>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase. Your order has been confirmed.</p>
            <p>We'll deliver your Premium Mixed Achaar within 3-5 business days.</p>
            <p>Order ID: <span id="order-id">PMAC</span><span id="order-number">12345</span></p>
            <button id="close-confirmation" class="btn">Continue Shopping</button>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Our Products</h3>
                    <ul>
                        <li><a href="#">Mango Pickle</a></li>
                        <li><a href="#">Lime Pickle</a></li>
                        <li><a href="#">Mixed Pickle</a></li>
                        <li><a href="#">Garlic Pickle</a></li>
                        <li><a href="#">Chili Pickle</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Pakistan</p>
                    <p><i class="fas fa-phone"></i> 03704053199</p>
                    <p><i class="fas fa-envelope"></i> premium.achaar@gmail.com</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 Premium Mixed Achaar. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // JavaScript from the previous implementation
        // Product Data
        const products = [
            {
                id: 1,
                name: "Mango Pickle",
                description: "Traditional mango pickle made with raw mangoes, aromatic spices, and pure mustard oil. A perfect blend of tangy and spicy flavors.",
                price: 550,
                image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 2,
                name: "Mixed Pickle",
                description: "A delightful mix of seasonal vegetables and fruits picked in perfection. Contains mango, lime, carrot, and green chilies.",
                price: 600,
                image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 3,
                name: "Lime Pickle",
                description: "Zesty lime pickle that adds a bowl of flavor to any meal. Made with fresh limes, turmeric, and traditional spice blend.",
                price: 500,
                image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 4,
                name: "Garlic Pickle",
                description: "Strong and pungent garlic pickle with a perfect balance of spices. Great for garlic lovers!",
                price: 650,
                image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 5,
                name: "Chili Pickle",
                description: "Fiery hot chili pickle made with fresh green chilies. Not for the faint-hearted!",
                price: 450,
                image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 6,
                name: "Premium Mixed Achaar",
                description: "Our signature product - a special mix of all our best pickles in one jar. The ultimate pickle experience!",
                price: 750,
                image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ];

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
                notification.classList.add('s
