// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Boondi Laddu",
        category: "sweets",
        price: 150,
        image:"boondi laddu.jpg",
        description: "Soft, spongy milk dumplings soaked in aromatic sugar syrup"
    },
    {
        id: 2,
        name: "Rava Laddu",
        category: "sweets",
        price: 120,
        image: "rava ladu.jpg",
        description: "Light, spongy cottage cheese balls in sugar syrup"
    },
    {
        id: 3,
        name: "Mothichur Laddu",
        category: "sweets",
        price: 200,
        image: "mothichur.jpg",
        description: "Traditional spicy mango pickle with authentic spices"
    },
    {
        id: 4,
        name: "Sunnundalu",
        category: "sweets",
        price: 180,
        image: "sunnunda.jpg",
        description: "Tangy lemon pickle with traditional herbs and spices"
    },
    {
        id: 5,
        name: "Multigrain Laddu",
        category: "sweets",
        price: 400,
        image: "multigrain laddu.jpg",
        description: "Premium cashew fudge with silver leaf"
    },
    {
        id: 6,
        name: "Nethi Ariselu",
        category: "sweets",
        price: 80,
        image: "nethiariselu.jpg",
        description: "Crispy triangular pastry filled with spiced potatoes"
    },
    {
        id: 7,
        name: "Nuvvula Ariselu",
        category: "sweets",
        price: 250,
        image: "nuvu ariselu.jpg",
        description: "Rich, ghee-laden sweet from South India"
    },
    {
        id: 8,
        name: "Bellam Gavvalu",
        category: "sweets",
        price: 220,
        image: "bellam gavalu.jpg",
        description: "Assorted vegetables pickled with aromatic spices"
    },
    {
        id: 9,
        name: "Kajji Kayalu",
        category: "sweets",
        price: 120,
        image: "kajukai.jpg",
        description: "Spiral-shaped crispy snack made from rice flour"
    },
    {
        id: 10,
        name: "Chalividi",
        category: "sweets",
        price: 180,
        image: "salividi.jpg",
        description: "Round sweet balls made with gram flour and ghee"
    },
    {
        id: 11,
        name: "Avakai Pickle",
        category: "pickles",
        price: 190,
        image: "avakai.jpg",
        description: "Spicy garlic pickle with traditional spices"
    },
    {
        id: 12,
        name: "Magai Avakai Pickle",
        category: "pickles",
        price: 100,
        image: "magai avakai.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
  {
        id: 13,
        name: "Gongura Pickle",
        category: "pickles",
        price: 100,
        image: "gongura.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 14,
        name: "Pandu Mirchi Pickle",
        category: "pickles",
        price: 100,
        image: "pandu mirchi.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 15,
        name: "Amla Pickle",
        category: "pickles",
        price: 100,
        image: "amla.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 16,
        name: "Dosa Avakai Pickle",
        category: "pickles",
        price: 100,
        image: "dosa avakai.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 17,
        name: "Cauli Flower Pickle",
        category: "pickles",
        price: 100,
        image: "cauli.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 18,
        name: "Curryleaves Pickle",
        category: "pickles",
        price: 100,
        image: "curryleaves.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 19,
        name: "Chintakai Pickle",
        category: "pickles",
        price: 100,
        image: "chintakai.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 19,
        name: "Tomato Nilava Pickle",
        category: "pickles",
        price: 100,
        image: "tamota nilava.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 20,
        name: "Allam Pickle",
        category: "pickles",
        price: 100,
        image: "allam.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 21,
        name: "Nimmakaya Pickle",
        category: "pickles",
        price: 100,
        image: "nima pachadi.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 22,
        name: "Boondi(Ghee & Nrml)",
        category: "Snacks",
        price: 100,
        image: "boondi.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 23,
        name: "Chakralu",
        category: "Snacks",
        price: 100,
        image: "chakralu.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 24,
        name: "Chakralu(Urdal Floor)",
        category: "Snacks",
        price: 100,
        image: "chakraluur.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 25,
        name: "Chakralu(All Varities)",
        category: "Snacks",
        price: 100,
        image: "chak.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 26,
        name: "Jantikalu",
        category: "Snacks",
        price: 100,
        image: "jantrikalu.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 27,
        name: "Spicy Gavvalu",
        category: "Snacks",
        price: 100,
        image: "spicy gavalu.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 28,
        name: "Munagaku Podi",
        category: "Podulu",
        price: 100,
        image: "munugu.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 29,
        name: "Nuvvula Podi",
        category: "Podulu",
        price: 100,
        image: "nuvula karam.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 30,
        name: "Kobbari Karam Podi",
        category: "Podulu",
        price: 100,
        image: "kobbari.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 31,
        name: "Sambar Karam",
        category: "Podulu",
        price: 100,
        image: "sambar.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 32,
        name: "Kandi Podi",
        category: "Podulu",
        price: 100,
        image: "kandi.jpg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
{
        id: 33,
        name: "Java Powder",
        category: "Podulu",
        price: 100,
        image: "millet.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
  {
        id: 34,
        name: "Dhaniyalankaram",
        category: "Podulu",
        price: 100,
        image: "daniyala.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
  {
        id: 35,
        name: "Garam Masala",
        category: "Podulu",
        price: 100,
        image: "garam masala.jpeg",
        description: "Crunchy spiral snack made from rice and lentil flour"
    },
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menuItems);
    updateCartUI();
    initializeNavigation();
    initializeCategoryFilters();
    initializeForms();
    initializeScrollEffects();
});

// Display menu items
function displayMenuItems(items) {
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Category filtering
function initializeCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            if (category === 'all') {
                displayMenuItems(menuItems);
            } else {
                const filteredItems = menuItems.filter(item => item.category === category);
                displayMenuItems(filteredItems);
            }
        });
    });
}

// Add to cart functionality
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    
    // Show feedback
    showNotification('Item added to cart!');
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <span class="price">₹${item.price * item.quantity}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
}

// Update quantity
function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(cartItem => cartItem.id !== itemId);
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cart.map(item => `${item.name} x ${item.quantity}`).join('\n');
    
    const message = `Order Details:\n${orderDetails}\n\nTotal: ₹${total}\n\nPlease confirm your order and provide delivery address.`;
    
    // In a real application, this would integrate with a payment gateway
    alert(`Order Summary:\n\n${message}\n\nRedirecting to payment...`);
    
    // Clear cart after order
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    toggleCart();
    
    showNotification('Order placed successfully!');
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close mobile menu
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active navigation based on scroll position
        updateActiveNavigation();
    });
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form handling
function initializeForms() {
    const contactForm = document.querySelector('.contact-form');
    const complaintForm = document.querySelector('.complaint-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Message sent successfully! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    if (complaintForm) {
        complaintForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Complaint submitted successfully! We will review it within 24 hours.');
            complaintForm.reset();
        });
    }
}

// Scroll effects and animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-item, .service-card, .feature');
    animateElements.forEach(el => observer.observe(el));
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff6b35;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1002;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (!cartSidebar.contains(e.target) && !e.target.closest('.cart-icon')) {
        cartSidebar.classList.remove('open');
    }
});

// Prevent cart from closing when clicking inside
cartSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Search functionality (bonus feature)
function searchMenu(query) {
    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    displayMenuItems(filteredItems);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'C' to toggle cart
    if (e.key.toLowerCase() === 'c' && !e.target.matches('input, textarea')) {
        toggleCart();
    }
    
    // Press 'Escape' to close cart
    if (e.key === 'Escape') {
        cartSidebar.classList.remove('open');
    }
});

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);