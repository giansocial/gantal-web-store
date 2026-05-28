/* ─── GANTAL STORE — App JS ──────────────────────────────── */

const WA_NUMBER   = '51920994032';
const API_BASE    = ''; // same origin

/* ── State ─────────────────────────────────────────────── */
let allProducts       = [];
let currentCategory   = null;
let cart              = JSON.parse(localStorage.getItem('gantal_cart') || '[]');
let selectedProduct   = null;
let selectedSize      = null;

/* ── Boot ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  setupNavbar();
  setupCartBtn();
  setupHamburger();
  await loadProducts();
  renderCart();
});

/* ── Navbar scroll effect ──────────────────────────────── */
function setupNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── Cart button ───────────────────────────────────────── */
function setupCartBtn() {
  document.getElementById('cart-btn').addEventListener('click', openCart);
}

/* ── Hamburger ─────────────────────────────────────────── */
function setupHamburger() {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ── Load products from API ────────────────────────────── */
async function loadProducts() {
  try {
    const res  = await fetch(`${API_BASE}/api/products`);
    allProducts = await res.json();
    updateCounts();
    renderProducts(allProducts);
  } catch (err) {
    console.error('Error cargando productos:', err);
    document.getElementById('product-grid').innerHTML =
      `<div class="loading-state"><p style="color:var(--muted)">Error al cargar productos. Recarga la página.</p></div>`;
  }
}

/* ── Update tab counts ─────────────────────────────────── */
function updateCounts() {
  const sport    = allProducts.filter(p => p.category === 'camisas-sport').length;
  const lino     = allProducts.filter(p => p.category === 'camisas-lino').length;
  const labradas = allProducts.filter(p => p.category === 'camisas-labradas').length;
  document.getElementById('count-all').textContent       = allProducts.length;
  document.getElementById('count-sport').textContent     = sport;
  document.getElementById('count-lino').textContent      = lino;
  document.getElementById('count-labradas').textContent  = labradas;
}

/* ── Filter by category ────────────────────────────────── */
function filterCategory(cat) {
  currentCategory = cat;

  // Update active tab
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === (cat || 'all'));
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.cat === (cat || 'all'));
  });

  // Update heading
  const titles = {
    null: ['Toda la Colección', 'Elige tu camisa perfecta'],
    'camisas-sport': ['Camisas Sport', 'Busa Pima — S/ 65'],
    'camisas-lino':  ['Camisas de Lino', 'Lino Premium — S/ 79'],
    'camisas-labradas': ['Camisas Labradas', 'Tejido Artesanal — S/ 85'],
  };
  const [title, sub] = titles[cat] || titles[null];
  document.getElementById('catalog-title').textContent    = title;
  document.getElementById('catalog-subtitle').textContent = sub;

  const filtered = cat ? allProducts.filter(p => p.category === cat) : allProducts;
  renderProducts(filtered);

  // Don't scroll - user just clicked a tab
}

function showAll() {
  filterCategory(null);
  scrollToProducts();
}

function scrollToProducts() {
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Category display name ─────────────────────────────── */
function catLabel(cat) {
  const map = {
    'camisas-sport': 'Sport · Busa Pima',
    'camisas-lino': 'Lino Premium',
    'camisas-labradas': 'Labrada Artesanal',
  };
  return map[cat] || cat;
}

/* ── Render product grid ───────────────────────────────── */
function renderProducts(products) {
  const grid = document.getElementById('product-grid');

  if (!products || products.length === 0) {
    grid.innerHTML = `<div class="loading-state"><p style="color:var(--muted)">No hay productos en esta categoría.</p></div>`;
    return;
  }

  grid.innerHTML = products.map((p, i) => {
    const img1 = p.images[0] || '';
    const img2 = p.images[1] || img1;
    const encodedImg1 = encodeImagePath(img1);
    const encodedImg2 = encodeImagePath(img2);

    return `
      <article class="product-card" onclick="openModal('${p.id}')" style="animation-delay:${i * 0.04}s">
        <div class="card-img-wrap">
          <img class="card-img" src="${encodedImg1}" alt="${p.name}" loading="lazy" decoding="async" />
          <img class="card-img-2" src="${encodedImg2}" alt="${p.name} - vista 2" loading="lazy" decoding="async" />
          <div class="card-overlay">
            <button class="card-add-btn" onclick="event.stopPropagation(); openModal('${p.id}')">
              Agregar al carrito
            </button>
          </div>
        </div>
        <div class="card-info">
          <p class="card-cat-badge">${catLabel(p.category)}</p>
          <p class="card-name">${p.name}</p>
          <div class="card-meta">
            <span class="card-price">S/ ${p.price.toFixed(0)}</span>
            <span class="card-sizes">S · M · L · XL · XXL</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ── Encode image path (handle spaces) ─────────────────── */
function encodeImagePath(path) {
  // Split on '/' and encode each segment
  return path.split('/').map((seg, i) => i === 0 ? seg : encodeURIComponent(seg)).join('/');
}

/* ── Open product modal ─────────────────────────────────── */
function openModal(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;
  selectedSize    = null;

  document.getElementById('modal-img').src     = encodeImagePath(product.images[0] || '');
  document.getElementById('modal-img').alt     = product.name;
  document.getElementById('modal-cat').textContent   = catLabel(product.category);
  document.getElementById('modal-name').textContent  = product.name;
  document.getElementById('modal-price').textContent = `S/ ${product.price.toFixed(0)}`;
  document.getElementById('modal-desc').textContent  = product.description;

  // Reset size selection
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  const addBtn = document.getElementById('btn-add-cart');
  addBtn.disabled = true;
  addBtn.textContent = 'Selecciona una talla';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Size selection ─────────────────────────────────────── */
function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => {
    b.classList.toggle('selected', b.textContent === size);
  });
  const addBtn = document.getElementById('btn-add-cart');
  addBtn.disabled = false;
  addBtn.textContent = `Agregar — Talla ${size}`;
}

/* ── Add to cart ────────────────────────────────────────── */
function addToCart() {
  if (!selectedProduct || !selectedSize) return;

  const existing = cart.find(
    i => i.id === selectedProduct.id && i.size === selectedSize
  );
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id:    selectedProduct.id,
      name:  selectedProduct.name,
      price: selectedProduct.price,
      size:  selectedSize,
      image: selectedProduct.images[0] || '',
      qty:   1,
    });
  }

  saveCart();
  renderCart();
  closeModal();
  showToast(`✓ ${selectedProduct.name} (Talla ${selectedSize}) agregado`);

  // Bump cart badge
  const badge = document.getElementById('cart-count');
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

/* ── Remove from cart ───────────────────────────────────── */
function removeFromCart(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  saveCart();
  renderCart();
}

/* ── Save cart ──────────────────────────────────────────── */
function saveCart() {
  localStorage.setItem('gantal_cart', JSON.stringify(cart));
}

/* ── Render cart drawer ─────────────────────────────────── */
function renderCart() {
  const count      = cart.reduce((acc, i) => acc + i.qty, 0);
  const total      = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const badge      = document.getElementById('cart-count');
  const itemsEl    = document.getElementById('cart-items');
  const footerEl   = document.getElementById('cart-footer');
  const totalEl    = document.getElementById('cart-total-price');

  badge.textContent = count;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Tu carrito está vacío</p>
        <span>Agrega productos para continuar</span>
      </div>`;
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${encodeImagePath(item.image)}" alt="${item.name}" loading="lazy" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-size">Talla: ${item.size} · Cant: ${item.qty}</p>
        <p class="cart-item-price">S/ ${(item.price * item.qty).toFixed(0)}</p>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}','${item.size}')" title="Eliminar">✕</button>
    </div>
  `).join('');

  totalEl.textContent    = `S/ ${total.toFixed(0)}`;
  footerEl.style.display = 'flex';
}

/* ── Open / Close cart ──────────────────────────────────── */
function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── WhatsApp checkout ──────────────────────────────────── */
function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  let msg = '¡Hola! Quiero hacer el siguiente pedido 🛍️\n\n';
  msg += '*━━━ MI PEDIDO — GANTAL STORE ━━━*\n\n';

  cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}*\n`;
    msg += `   Talla: ${item.size}  |  Cant: ${item.qty}\n`;
    msg += `   Precio: S/ ${(item.price * item.qty).toFixed(0)}\n\n`;
  });

  msg += `*━━━━━━━━━━━━━━━━━━━━━━━━━*\n`;
  msg += `*TOTAL: S/ ${total.toFixed(0)}*\n\n`;
  msg += `Por favor, necesito coordinar:\n`;
  msg += `📍 Dirección de entrega\n`;
  msg += `💳 Método de pago\n\n`;
  msg += `¡Gracias! 🙌`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

/* ── Size guide ─────────────────────────────────────────── */
function openSizeGuide() {
  document.getElementById('sg-overlay').classList.add('open');
}
function closeSizeGuide() {
  document.getElementById('sg-overlay').classList.remove('open');
}

/* ── Toast notification ─────────────────────────────────── */
let toastTimer;
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
