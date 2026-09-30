/**
 * NAYLA ELECTRONICS - FRONTEND CORE ENGINE
 */

// 1. Tech Product Catalog Data
const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'TitanBook Ultra M4 Max',
    brand: 'Nayla Pro Series',
    category: 'laptops',
    price: 2499.00,
    oldPrice: 2899.00,
    rating: 4.9,
    reviews: 142,
    badge: 'pro',
    badgeText: 'FLAGSHIP',
    specs: ['32-Core GPU / 16-Core CPU', '64GB Unified Memory', '2TB PCIe 5.0 SSD', '120Hz Liquid XDR Display'],
    description: 'The ultimate portable powerhouse designed for extreme machine learning pipelines, 8K video rendering, and simulation workloads.',
    color: '#00f0ff',
    iconType: 'laptop'
  },
  {
    id: 'prod-2',
    name: 'Aether Phone 16 Pro Max',
    brand: 'Aether Labs',
    category: 'smartphones',
    price: 1199.00,
    oldPrice: 1299.00,
    rating: 4.9,
    reviews: 320,
    badge: 'hot',
    badgeText: 'BESTSELLER',
    specs: ['A18 Bionic 3nm Chip', '48MP Quad-Pixel Sensor', '2000 nits OLED', 'Titanium Grade 5 Frame'],
    description: 'Constructed from aerospace-grade titanium with breakthrough AI compute cores and all-day 36-hour battery endurance.',
    color: '#8b5cf6',
    iconType: 'phone'
  },
  {
    id: 'prod-3',
    name: 'SonicWave Spatial ANC 900',
    brand: 'Nayla Acoustic',
    category: 'audio',
    price: 349.00,
    oldPrice: 399.00,
    rating: 4.8,
    reviews: 98,
    badge: 'new',
    badgeText: 'NEW RELEASE',
    specs: ['True 3D Spatial Audio', 'Lossless 24-bit/192kHz', '60hr Battery Life', 'Multi-Mic Adaptive ANC'],
    description: 'Studio-mastered planar magnetic drivers with active hybrid noise cancellation that eliminates up to 98% of ambient sound.',
    color: '#ec4899',
    iconType: 'headphones'
  },
  {
    id: 'prod-4',
    name: 'Chronos Pro Watch Ultra',
    brand: 'Aether Labs',
    category: 'wearables',
    price: 499.00,
    oldPrice: 549.00,
    rating: 4.7,
    reviews: 87,
    badge: 'pro',
    badgeText: 'SURVIVAL TECH',
    specs: ['Sapphire Crystal Screen', 'Dual-Frequency GPS', 'ECG & Blood Oxygen', '100m Water Resistance'],
    description: 'Engineered for extreme environments with rugged micro-welded titanium chassis, dive computing sensors, and 7-day endurance.',
    color: '#00f0ff',
    iconType: 'watch'
  },
  {
    id: 'prod-5',
    name: 'Vortex RTX 5090 Super Rig',
    brand: 'CyberForge',
    category: 'gaming',
    price: 3899.00,
    oldPrice: 4299.00,
    rating: 5.0,
    reviews: 64,
    badge: 'hot',
    badgeText: 'EXTREME GAMING',
    specs: ['NVIDIA GeForce RTX 5090 32GB', 'AMD Ryzen 9 9950X', '64GB DDR5 6400MHz', 'Custom Loop Watercooling'],
    description: 'Max out every ray-traced title at 4K 240FPS with custom thermal architecture and zero-throttling liquid cooling.',
    color: '#10b981',
    iconType: 'desktop'
  },
  {
    id: 'prod-6',
    name: 'AeroLens AR Spatial Glasses',
    brand: 'Nayla Vision',
    category: 'gaming',
    price: 799.00,
    oldPrice: 899.00,
    rating: 4.6,
    reviews: 45,
    badge: 'new',
    badgeText: 'AUGMENTED REALITY',
    specs: ['Dual 4K Micro-OLED', '120Hz Spatial Tracking', '75g Featherweight Frame', 'Voice & Gesture Control'],
    description: 'Transform any workspace into a 130-inch virtual multi-monitor setup wherever you go with zero latency streaming.',
    color: '#8b5cf6',
    iconType: 'glasses'
  },
  {
    id: 'prod-7',
    name: 'Nexus Nova Fold 7G',
    brand: 'Aether Labs',
    category: 'smartphones',
    price: 1799.00,
    oldPrice: 1999.00,
    rating: 4.8,
    reviews: 112,
    badge: 'hot',
    badgeText: 'FOLDABLE',
    specs: ['8.0" Dynamic AMOLED 2X', 'Zero-Crease Titanium Hinge', 'S-Pen Precision Input', '5200mAh Dual-Cell Battery'],
    description: 'Unfold endless productivity. A pocket tablet that morphs into a dual-screen multitasking command station in an instant.',
    color: '#f59e0b',
    iconType: 'fold'
  },
  {
    id: 'prod-8',
    name: 'Aura Studio Soundbar Atmos 9.1',
    brand: 'Nayla Acoustic',
    category: 'audio',
    price: 899.00,
    oldPrice: 1049.00,
    rating: 4.9,
    reviews: 73,
    badge: 'pro',
    badgeText: 'DOLBY ATMOS',
    specs: ['9.1.4 Channel Setup', 'Wireless 10" Subwoofer', 'eARC 4K Pass-Through', 'Auto Room Calibration'],
    description: 'Cinema acoustics delivered to your living room with upward-firing height channels and room-filling bass calibration.',
    color: '#00f0ff',
    iconType: 'speaker'
  },
  {
    id: 'prod-9',
    name: 'Zenith Blade 15 OLED',
    brand: 'CyberForge',
    category: 'laptops',
    price: 1899.00,
    oldPrice: 2099.00,
    rating: 4.7,
    reviews: 91,
    badge: 'pro',
    badgeText: 'THIN & LIGHT',
    specs: ['Intel Core Ultra 9', '32GB LPDDR5X', '15.6" 3K 120Hz OLED', '1.38kg Ultra Slim Body'],
    description: 'Sleek CNC aluminum body packing workstation computing power and color-accurate 100% DCI-P3 cinematic canvas.',
    color: '#ec4899',
    iconType: 'laptop'
  },
  {
    id: 'prod-10',
    name: 'Halo Smart Hub & Cam 360',
    brand: 'Nayla Home',
    category: 'smarthome',
    price: 149.00,
    oldPrice: 199.00,
    rating: 4.8,
    reviews: 215,
    badge: 'new',
    badgeText: 'SMART AI HOME',
    specs: ['4K HDR Night Vision', '360° Pan & Tilt Tracking', 'Thread / Matter Certified', 'Local AI Face Recognition'],
    description: 'Protect your home without monthly cloud subscription fees using on-device encrypted neural tracking.',
    color: '#10b981',
    iconType: 'camera'
  },
  {
    id: 'prod-11',
    name: 'Pulse Air True Wireless Buds',
    brand: 'Nayla Acoustic',
    category: 'audio',
    price: 179.00,
    oldPrice: 229.00,
    rating: 4.7,
    reviews: 183,
    badge: 'hot',
    badgeText: 'TOP AUDIO',
    specs: ['Custom Carbon Drivers', 'IP68 Waterproof', '42hr Case Battery', 'Fast Wireless Qi Charging'],
    description: 'High-definition wireless audio with zero dropouts, crystal-clear beamforming microphone calls, and secure ergonomic fit.',
    color: '#8b5cf6',
    iconType: 'earbuds'
  },
  {
    id: 'prod-12',
    name: 'Lumina Smart Ambient Bar',
    brand: 'Nayla Home',
    category: 'smarthome',
    price: 89.00,
    oldPrice: 119.00,
    rating: 4.6,
    reviews: 129,
    badge: 'new',
    badgeText: 'RGB SYNC',
    specs: ['Screen Audio Reactive Sync', '16.8 Million Colors', 'Apple HomeKit & Alexa', 'Magnetic Base Mounting'],
    description: 'Immerse your gaming station or entertainment setup with real-time video screen edge color reflection.',
    color: '#f59e0b',
    iconType: 'light'
  }
];

// Helper: SVG Icons Generator based on product type
function getProductSvg(type, color = '#00f0ff') {
  switch (type) {
    case 'laptop':
      return `
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <circle cx="12" cy="10" r="2" fill="${color}" opacity="0.3"></circle>
        </svg>
      `;
    case 'phone':
    case 'fold':
      return `
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2"></line>
          <line x1="9" y1="5" x2="15" y2="5"></line>
        </svg>
      `;
    case 'headphones':
      return `
        <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      `;
    case 'watch':
      return `
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="7"></circle>
          <polyline points="12 9 12 12 13.5 13.5"></polyline>
          <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
        </svg>
      `;
    case 'desktop':
      return `
        <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2"></rect>
          <circle cx="12" cy="7" r="2.5"></circle>
          <line x1="8" y1="14" x2="16" y2="14"></line>
          <line x1="8" y1="17" x2="13" y2="17"></line>
        </svg>
      `;
    case 'glasses':
      return `
        <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="6" cy="14" r="4"></circle>
          <circle cx="18" cy="14" r="4"></circle>
          <path d="M10 14h4"></path>
          <path d="M2 14l2-8 3-1"></path>
          <path d="M22 14l-2-8-3-1"></path>
        </svg>
      `;
    case 'speaker':
      return `
        <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="10" rx="2"></rect>
          <circle cx="8" cy="12" r="2"></circle>
          <circle cx="16" cy="12" r="2"></circle>
        </svg>
      `;
    case 'camera':
      return `
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
          <circle cx="12" cy="13" r="3"></circle>
        </svg>
      `;
    case 'earbuds':
      return `
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="9" r="4"></circle>
          <path d="M8 13v6"></path>
          <circle cx="16" cy="9" r="4"></circle>
          <path d="M16 13v6"></path>
        </svg>
      `;
    default:
      return `
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.3">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      `;
  }
}

// 2. Application State
const State = {
  cart: JSON.parse(localStorage.getItem('nayla_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('nayla_wishlist') || '[]'),
  currentCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  discountPercent: 0,
  activeCoupon: null
};

// 3. Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistCount();
  setupEventListeners();
  setupAIChat();
});

// 4. Products Rendering Engine
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchesCat = State.currentCategory === 'all' || p.category === State.currentCategory;
    const query = State.searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) || 
      p.specs.some(s => s.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (State.sortBy === 'price-low') return a.price - b.price;
    if (State.sortBy === 'price-high') return b.price - a.price;
    if (State.sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured default
  });
}

function renderProducts() {
  const container = document.getElementById('products-container');
  const countDisplay = document.getElementById('product-count-display');
  const resetBtn = document.getElementById('reset-filters');
  const filtered = getFilteredProducts();

  countDisplay.textContent = `Showing ${filtered.length} device${filtered.length === 1 ? '' : 's'}`;
  resetBtn.style.display = (State.currentCategory !== 'all' || State.searchQuery !== '') ? 'inline-block' : 'none';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <h3 style="font-size: 1.4rem; margin-bottom: 8px;">No devices found matching your search</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Try adjusting your keywords or category filters.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetAllFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isWishlisted = State.wishlist.includes(product.id);
    const badgeClass = `badge-${product.badge || 'new'}`;

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="card-top">
          <span class="card-badge ${badgeClass}">${product.badgeText}</span>
          <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${product.id}" title="Add to Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="card-media" onclick="openQuickView('${product.id}')" title="Click for details">
          ${getProductSvg(product.iconType, product.color)}
        </div>

        <div class="card-details">
          <span class="card-brand">${product.brand}</span>
          <h3 class="card-name" onclick="openQuickView('${product.id}')">${product.name}</h3>
          
          <div class="card-rating">
            <span>★ ${product.rating.toFixed(1)}</span>
            <span class="card-rating-count">(${product.reviews})</span>
          </div>

          <ul class="card-specs-list">
            ${product.specs.slice(0, 3).map(s => `<li>${s}</li>`).join('')}
          </ul>

          <div class="card-bottom">
            <div class="card-price-group">
              <span class="card-price">$${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              ${product.oldPrice ? `<span class="card-strike-price">$${product.oldPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>` : ''}
            </div>

            <button class="add-cart-btn" onclick="addToCart('${product.id}')" title="Add to Bag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Cart Management
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = State.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    State.cart.push({ id: product.id, qty });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${product.name} to shopping bag!`, '🛒');
}

function updateCartQty(productId, change) {
  const item = State.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    State.cart = State.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  State.cart = State.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('nayla_cart', JSON.stringify(State.cart));
}

function updateCartUI() {
  const cartCount = State.cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cart-count').textContent = cartCount;
  document.getElementById('drawer-item-count').textContent = `(${cartCount} item${cartCount === 1 ? '' : 's'})`;

  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('empty-cart-state');
  const footer = document.getElementById('cart-footer');

  if (State.cart.length === 0) {
    container.innerHTML = '';
    container.appendChild(emptyState);
    emptyState.style.display = 'block';
    footer.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  footer.style.display = 'block';

  let subtotal = 0;

  const itemsHtml = State.cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return '';
    const itemTotal = prod.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <div class="cart-item-media">
          ${getProductSvg(prod.iconType, prod.color)}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-title">${prod.name}</div>
          <div class="cart-item-price">$${prod.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="updateCartQty('${prod.id}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${prod.id}', 1)">+</button>
            <button class="item-remove-btn" onclick="removeFromCart('${prod.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = itemsHtml;

  // Calculate totals
  const discount = subtotal * State.discountPercent;
  const total = subtotal - discount;

  document.getElementById('cart-subtotal').textContent = `$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  
  const discountRow = document.getElementById('discount-row');
  if (State.discountPercent > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('cart-discount').textContent = `-$${discount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('cart-total').textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  document.getElementById('checkout-total-val').textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
}

// 6. Quick View Modal
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const body = document.getElementById('quickview-body');
  body.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-media">
        ${getProductSvg(prod.iconType, prod.color)}
      </div>
      <div class="quickview-details">
        <span class="card-brand">${prod.brand}</span>
        <h2>${prod.name}</h2>
        <div class="card-rating" style="margin-bottom: 12px;">
          <span>★ ${prod.rating.toFixed(1)}</span>
          <span class="card-rating-count">(${prod.reviews} customer ratings)</span>
        </div>
        <div class="quickview-price">$${prod.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
        <p class="quickview-desc">${prod.description}</p>
        
        <table class="specs-table">
          ${prod.specs.map(spec => `
            <tr>
              <td>Spec Feature</td>
              <td><strong>${spec}</strong></td>
            </tr>
          `).join('')}
        </table>

        <button class="btn btn-primary btn-full" onclick="addToCart('${prod.id}'); closeQuickView();">
          Add to Shopping Bag
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickview-modal').classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickview-modal').classList.remove('active');
}

// 7. Wishlist System
function toggleWishlist(productId) {
  const index = State.wishlist.indexOf(productId);
  const prod = PRODUCTS.find(p => p.id === productId);
  if (index > -1) {
    State.wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`, '💔');
  } else {
    State.wishlist.push(productId);
    showToast(`Saved ${prod ? prod.name : 'item'} to Wishlist!`, '❤️');
  }

  localStorage.setItem('nayla_wishlist', JSON.stringify(State.wishlist));
  updateWishlistCount();
  renderProducts();
}

function updateWishlistCount() {
  document.getElementById('wishlist-count').textContent = State.wishlist.length;
}

// 8. Event Listeners
function setupEventListeners() {
  // Category tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      State.currentCategory = e.target.dataset.category;
      renderProducts();
    });
  });

  // Footer category links
  document.querySelectorAll('.footer-cat').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = e.target.dataset.category;
      const targetBtn = document.querySelector(`.tab-btn[data-category="${cat}"]`);
      if (targetBtn) {
        targetBtn.click();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');

  searchInput.addEventListener('input', (e) => {
    State.searchQuery = e.target.value;
    clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    State.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderProducts();
  });

  // Sort select
  document.getElementById('sort-select').addEventListener('change', (e) => {
    State.sortBy = e.target.value;
    renderProducts();
  });

  // Reset filters
  document.getElementById('reset-filters').addEventListener('click', resetAllFilters);

  // Cart Drawer open/close
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');

  document.getElementById('open-cart').addEventListener('click', () => {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  });

  document.getElementById('close-cart').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Quickview close
  document.getElementById('close-quickview').addEventListener('click', closeQuickView);
  document.getElementById('quickview-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quickview-modal') closeQuickView();
  });

  // Wishlist toggle listener on container (delegation)
  document.getElementById('products-container').addEventListener('click', (e) => {
    const btn = e.target.closest('.wishlist-toggle');
    if (btn) {
      e.stopPropagation();
      toggleWishlist(btn.dataset.id);
    }
  });

  // Wishlist navbar button
  document.getElementById('open-wishlist').addEventListener('click', () => {
    if (State.wishlist.length === 0) {
      showToast('Your wishlist is currently empty. Tap the heart on any device to save it!', '💡');
    } else {
      showToast(`You have ${State.wishlist.length} saved devices in your wishlist.`, '✨');
    }
  });

  // Promo code
  document.getElementById('apply-promo-btn').addEventListener('click', applyPromoCode);

  // Checkout Modal
  document.getElementById('proceed-checkout-btn').addEventListener('click', () => {
    closeCart();
    document.getElementById('checkout-modal').classList.add('active');
  });
  document.getElementById('close-checkout').addEventListener('click', () => {
    document.getElementById('checkout-modal').classList.remove('active');
  });
  document.getElementById('checkout-modal').addEventListener('click', (e) => {
    if (e.target.id === 'checkout-modal') {
      document.getElementById('checkout-modal').classList.remove('active');
    }
  });

  // Checkout Form Submission
  document.getElementById('checkout-form').addEventListener('submit', handleCheckoutSubmit);
  document.getElementById('continue-shopping-btn').addEventListener('click', () => {
    document.getElementById('checkout-modal').classList.remove('active');
    document.getElementById('checkout-form').style.display = 'block';
    document.getElementById('order-success-state').style.display = 'none';
  });

  // Empty cart browse
  document.getElementById('empty-cart-browse').addEventListener('click', () => {
    closeCart();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  });

  // Hero Quick Add
  document.querySelector('.quick-add-btn').addEventListener('click', (e) => {
    const id = e.target.dataset.productId;
    addToCart(id);
    document.getElementById('cart-drawer').classList.add('active');
    document.getElementById('cart-overlay').classList.add('active');
  });

  // Newsletter
  document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    showToast(`Welcome! Tech drop coupon sent to ${email}`, '🎁');
    e.target.reset();
  });
}

function resetAllFilters() {
  State.currentCategory = 'all';
  State.searchQuery = '';
  document.getElementById('search-input').value = '';
  document.getElementById('clear-search').style.display = 'none';
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
  });
  renderProducts();
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('active');
  document.getElementById('cart-overlay').classList.remove('active');
}

function applyPromoCode() {
  const input = document.getElementById('promo-input');
  const msg = document.getElementById('promo-message');
  const code = input.value.trim().toUpperCase();

  if (code === 'NAYLA10') {
    State.discountPercent = 0.10;
    State.activeCoupon = 'NAYLA10';
    msg.className = 'promo-msg success';
    msg.textContent = '✓ Coupon NAYLA10 applied! 10% discount deducted.';
    updateCartUI();
    showToast('10% Discount applied to your bag!', '🎉');
  } else {
    msg.className = 'promo-msg error';
    msg.textContent = 'Invalid promo code. Try "NAYLA10" for 10% off.';
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const orderId = '#NE-' + Math.floor(100000 + Math.random() * 900000);
  
  document.getElementById('confirmed-order-id').textContent = orderId;
  document.getElementById('checkout-form').style.display = 'none';
  document.getElementById('order-success-state').style.display = 'block';

  // Clear cart
  State.cart = [];
  State.discountPercent = 0;
  saveCart();
  updateCartUI();
  showToast(`Order ${orderId} placed successfully!`, '🚀');
}

// 9. Toast Notification Utility
function showToast(text, emoji = '⚡') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${emoji}</span> <span>${text}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 10. Smart AI Tech Advisor Assistant
function setupAIChat() {
  const widget = document.getElementById('ai-chat-widget');
  const openBtn = document.getElementById('open-ai-chat');
  const heroAiBtn = document.getElementById('hero-ai-btn');
  const launchAdvisorBtn = document.getElementById('launch-advisor-btn');
  const closeBtn = document.getElementById('close-ai-widget');
  const form = document.getElementById('ai-chat-form');
  const input = document.getElementById('ai-user-input');
  const messages = document.getElementById('ai-messages');

  function openAI() {
    widget.classList.add('active');
    input.focus();
  }

  function closeAI() {
    widget.classList.remove('active');
  }

  openBtn.addEventListener('click', openAI);
  heroAiBtn.addEventListener('click', openAI);
  launchAdvisorBtn.addEventListener('click', openAI);
  closeBtn.addEventListener('click', closeAI);

  // Quick prompt chips
  document.querySelectorAll('.prompt-chip, .quick-q').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.dataset.prompt || chip.dataset.q;
      openAI();
      askAI(q);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    input.value = '';
    askAI(query);
  });

  function askAI(question) {
    appendMessage(question, 'user');

    // Simulate smart AI response tailored to our products
    setTimeout(() => {
      const response = generateAIResponse(question);
      appendMessage(response, 'bot');
    }, 450);
  }

  function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `ai-msg ${sender}`;
    msg.innerHTML = `<div class="msg-bubble">${text}</div>`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function generateAIResponse(q) {
    const lower = q.toLowerCase();

    if (lower.includes('laptop') || lower.includes('macbook') || lower.includes('coding') || lower.includes('render') || lower.includes('video')) {
      return `💻 For intensive 4K rendering or software development, I highly recommend our <strong>TitanBook Ultra M4 Max ($2,499)</strong>. It features a 32-core GPU and 64GB Unified RAM. Alternatively, if you need a featherweight powerhouse, check out the <strong>Zenith Blade 15 OLED ($1,899)</strong>.`;
    }

    if (lower.includes('phone') || lower.includes('camera') || lower.includes('battery')) {
      return `📱 Our #1 flagship smartphone is the <strong>Aether Phone 16 Pro Max ($1,199)</strong> with Grade 5 Titanium and a 48MP Quad sensor. If you prefer multitasking and foldable screens, take a look at the <strong>Nexus Nova Fold 7G ($1,799)</strong>!`;
    }

    if (lower.includes('headphone') || lower.includes('audio') || lower.includes('noise') || lower.includes('anc') || lower.includes('travel')) {
      return `🎧 For pure silence and spatial immersion, the <strong>SonicWave Spatial ANC 900 ($349)</strong> is unbeatable with 98% active noise cancellation. If you need gym-ready wireless earbuds, consider the <strong>Pulse Air Buds ($179)</strong> with IP68 waterproofing!`;
    }

    if (lower.includes('gaming') || lower.includes('fps') || lower.includes('rtx') || lower.includes('5090')) {
      return `🎮 The peak setup in our catalog is the <strong>Vortex RTX 5090 Super Rig ($3,899)</strong>, delivering 4K 240FPS with watercooled ray tracing. We also offer <strong>AeroLens AR Spatial Glasses ($799)</strong> for ultra-immersive virtual screens!`;
    }

    if (lower.includes('budget') || lower.includes('under') || lower.includes('cheap') || lower.includes('100') || lower.includes('200')) {
      return `💡 Looking for top value? The <strong>Lumina Smart Ambient Bar ($89)</strong> and <strong>Halo Smart Hub & Cam 360 ($149)</strong> are customer favorites under $200. Plus, you can use code <strong>NAYLA10</strong> for an extra 10% off!`;
    }

    if (lower.includes('discount') || lower.includes('coupon') || lower.includes('promo') || lower.includes('sale')) {
      return `🏷️ You can use coupon code <strong>NAYLA10</strong> in your shopping bag to receive an instant 10% discount on any order with free express shipping!`;
    }

    return `✨ I can definitely help with that! We offer 12 flagship devices spanning laptops, smartphones, acoustic sound systems, and smart home IoT. Would you like a recommendation based on your budget or specific daily tasks?`;
  }
}
