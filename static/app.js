/* ─── GANTAL STORE — App JS (Static / Cloudflare Pages) ──── */

const WA_NUMBER = '51920994032';

/* ── Product catalog (no backend needed) ───────────────── */
const PRODUCTS = [
  // ─── CAMISAS SPORT (Busa Pima) — S/ 65 ──────────────────
  { id:'bp-azul-acero',    name:'Camisa Sport - Azul Acero',     price:65, category:'camisas-sport',    description:'Camisa Busa Pima de primera calidad en tono azul acero. Tela suave al tacto, perfecta para el día a día.',           images:['/images/busa-pima/camisa azul acero1.jpeg','/images/busa-pima/camisa azul acero2.jpeg','/images/busa-pima/camisa azul acero3.jpeg','/images/busa-pima/camisa azul acero4.jpeg'] },
  { id:'bp-azul-jean',     name:'Camisa Sport - Azul Jean',      price:65, category:'camisas-sport',    description:'Camisa Busa Pima en azul jean, el tono perfecto para looks casuales y modernos.',                                    images:['/images/busa-pima/camisa azul jean1.jpeg','/images/busa-pima/camisa azul jean2.jpeg','/images/busa-pima/camisa azul jean3.jpeg','/images/busa-pima/camisa azul jean4.jpeg'] },
  { id:'bp-azul-marino',   name:'Camisa Sport - Azul Marino',    price:65, category:'camisas-sport',    description:'Clásica camisa Busa Pima en azul marino. Versátil y elegante para cualquier ocasión.',                              images:['/images/busa-pima/camisa azul marino1.jpeg','/images/busa-pima/camisa azul marino2.jpeg','/images/busa-pima/camisa azul marino3.jpeg','/images/busa-pima/camisa azul marino4.jpeg'] },
  { id:'bp-azul-tornasol', name:'Camisa Sport - Azul Tornasol',  price:65, category:'camisas-sport',    description:'Camisa Busa Pima en azul tornasol con destellos únicos. Un look que destaca.',                                       images:['/images/busa-pima/camisa azul tornasol1.jpeg','/images/busa-pima/camisa azul tornasol2.jpeg','/images/busa-pima/camisa azul tornasol3.jpeg','/images/busa-pima/camisa azul tornasol4.jpeg','/images/busa-pima/camisa azul tornasol5.jpeg'] },
  { id:'bp-azulino',       name:'Camisa Sport - Azulino',        price:65, category:'camisas-sport',    description:'Camisa Busa Pima en azulino, un celeste profundo que transmite frescura y estilo.',                                  images:['/images/busa-pima/camisa azulino1.jpeg','/images/busa-pima/camisa azulino2.jpeg','/images/busa-pima/camisa azulino3.jpeg','/images/busa-pima/camisa azulino4.jpeg'] },
  { id:'bp-beige',         name:'Camisa Sport - Beige',          price:65, category:'camisas-sport',    description:'Camisa Busa Pima en beige neutro. Un tono atemporal que combina con todo.',                                         images:['/images/busa-pima/camisa beige1.jpeg','/images/busa-pima/camisa beige2.jpeg','/images/busa-pima/camisa beige3.jpeg','/images/busa-pima/camisa beige4.jpeg'] },
  { id:'bp-blanca',        name:'Camisa Sport - Blanca',         price:65, category:'camisas-sport',    description:'La clásica camisa blanca Busa Pima. Indispensable en todo armario masculino.',                                       images:['/images/busa-pima/camisa blanca1.jpeg','/images/busa-pima/camisa blanca2.jpeg','/images/busa-pima/camisa blanca3.jpeg','/images/busa-pima/camisa blanca4.jpg','/images/busa-pima/camisa blanca5.jpg'] },
  { id:'bp-celeste',       name:'Camisa Sport - Celeste',        price:65, category:'camisas-sport',    description:'Camisa Busa Pima en celeste, fresca y luminosa. Perfecta para el verano.',                                          images:['/images/busa-pima/camisa celeste1.jpeg','/images/busa-pima/camisa celeste2.jpeg','/images/busa-pima/camisa celeste3.jpeg','/images/busa-pima/camisa celeste4.jpeg'] },
  { id:'bp-coral',         name:'Camisa Sport - Coral',          price:65, category:'camisas-sport',    description:'Camisa Busa Pima en coral vibrante. Un tono que proyecta energía y originalidad.',                                  images:['/images/busa-pima/camisa coral1.jpeg','/images/busa-pima/camisa coral2.jpeg','/images/busa-pima/camisa coral3.jpeg','/images/busa-pima/camisa coral4.jpeg'] },
  { id:'bp-lila',          name:'Camisa Sport - Lila',           price:65, category:'camisas-sport',    description:'Camisa Busa Pima en lila, un tono sofisticado que marca tendencia.',                                                images:['/images/busa-pima/camisa lila1.jpeg','/images/busa-pima/camisa lila2.jpeg','/images/busa-pima/camisa lila3.jpeg','/images/busa-pima/camisa lila4.jpeg'] },
  { id:'bp-negra',         name:'Camisa Sport - Negra',          price:65, category:'camisas-sport',    description:'Camisa Busa Pima negra. Elegante, versátil e infalible para cualquier look.',                                        images:['/images/busa-pima/camisa negra1.jpeg','/images/busa-pima/camisa negra2.jpeg','/images/busa-pima/camisa negra3.jpeg','/images/busa-pima/camisa negra4.jpeg'] },
  { id:'bp-perla',         name:'Camisa Sport - Perla',          price:65, category:'camisas-sport',    description:'Camisa Busa Pima en perla, un blanco cálido y refinado para ocasiones especiales.',                                 images:['/images/busa-pima/camisa perla1.jpeg','/images/busa-pima/camisa perla2.jpeg','/images/busa-pima/camisa perla3.jpeg','/images/busa-pima/camisa perla4.jpeg'] },
  { id:'bp-ploma',         name:'Camisa Sport - Ploma',          price:65, category:'camisas-sport',    description:'Camisa Busa Pima en plomo suave. Un gris equilibrado que aporta sobriedad.',                                        images:['/images/busa-pima/camisa ploma1.jpeg','/images/busa-pima/camisa ploma2.jpeg','/images/busa-pima/camisa ploma3.jpeg','/images/busa-pima/camisa ploma4.jpg'] },
  { id:'bp-plomo-plata',   name:'Camisa Sport - Plomo Plata',    price:65, category:'camisas-sport',    description:'Camisa Busa Pima en plomo plateado con efecto metalizado sutil. Look premium.',                                     images:['/images/busa-pima/camisa plomo plata1.jpeg','/images/busa-pima/camisa plomo plata2.jpeg','/images/busa-pima/camisa plomo plata3.jpeg','/images/busa-pima/camisa plomo plata4.jpeg'] },
  { id:'bp-rosado',        name:'Camisa Sport - Rosado',         price:65, category:'camisas-sport',    description:'Camisa Busa Pima en rosado, fresco y actual. Para el hombre que no teme al estilo.',                               images:['/images/busa-pima/camisa rosado1.jpeg','/images/busa-pima/camisa rosado2.jpeg','/images/busa-pima/camisa rosado3.jpeg','/images/busa-pima/camisa rosado4.jpeg'] },
  { id:'bp-verde-agua',    name:'Camisa Sport - Verde Agua',     price:65, category:'camisas-sport',    description:'Camisa Busa Pima en verde agua, fresca y relajada. El tono perfecto del verano.',                                  images:['/images/busa-pima/camisa verde agua1.jpeg','/images/busa-pima/camisa verde agua2.jpeg','/images/busa-pima/camisa verde agua3.jpeg','/images/busa-pima/camisa verde agua4.jpeg'] },
  { id:'bp-verde-fox',     name:'Camisa Sport - Verde Fox',      price:65, category:'camisas-sport',    description:'Camisa Busa Pima en verde fox. Un tono terroso con carácter y personalidad.',                                       images:['/images/busa-pima/camisa verde fox1.jpeg','/images/busa-pima/camisa verde fox2.jpeg','/images/busa-pima/camisa verde fox3.jpeg','/images/busa-pima/camisa verde fox4.jpeg'] },
  { id:'bp-vino',          name:'Camisa Sport - Vino',           price:65, category:'camisas-sport',    description:'Camisa Busa Pima en vino, profundo y elegante. Ideal para eventos nocturnos.',                                     images:['/images/busa-pima/camisa vino1.jpeg','/images/busa-pima/camisa vino2.jpeg','/images/busa-pima/camisa vino3.jpeg','/images/busa-pima/camisa vino4.jpeg'] },
  { id:'bp-vino-tornasol', name:'Camisa Sport - Vino Tornasol',  price:65, category:'camisas-sport',    description:'Camisa Busa Pima en vino tornasol con destellos únicos. Elegancia con distinción.',                                 images:['/images/busa-pima/camisa vino tornasol1.jpeg','/images/busa-pima/camisa vino tornasol2.jpeg','/images/busa-pima/camisa vino tornasol3.jpeg','/images/busa-pima/camisa vino tornasol4.jpeg','/images/busa-pima/camisa vino tornasol5.jpeg'] },

  // ─── CAMISAS DE LINO — S/ 79 ────────────────────────────
  { id:'lino-azul-acero',  name:'Camisa de Lino - Azul Acero',  price:79, category:'camisas-lino',     description:'Camisa de lino premium en azul acero. Transpirable y sofisticada, perfecta para el calor.',                          images:['/images/lino/camisa lino azul acero1.jpeg','/images/lino/camisa lino azul acero2.jpeg','/images/lino/camisa lino azul acero3.jpeg','/images/lino/camisa lino azul acero4.jpeg','/images/lino/camisa lino azul acero5.jpeg'] },
  { id:'lino-azul-marino', name:'Camisa de Lino - Azul Marino', price:79, category:'camisas-lino',     description:'Camisa de lino en azul marino. La combinación perfecta de elegancia y comodidad.',                                  images:['/images/lino/camisa lino azul marino1.jpeg','/images/lino/camisa lino azul marino2.jpeg','/images/lino/camisa lino azul marino3.jpeg','/images/lino/camisa lino azul marino4.jpeg','/images/lino/camisa lino azul marino5.jpeg'] },
  { id:'lino-beige',       name:'Camisa de Lino - Beige',       price:79, category:'camisas-lino',     description:'Camisa de lino en beige natural. El look mediterráneo que siempre triunfa.',                                        images:['/images/lino/camisa lino beige1.jpeg','/images/lino/camisa lino beige2.jpeg','/images/lino/camisa lino beige3.jpeg','/images/lino/camisa lino beige4.jpeg','/images/lino/camisa lino beige5.jpeg'] },
  { id:'lino-blanco',      name:'Camisa de Lino - Blanca',      price:79, category:'camisas-lino',     description:'Camisa de lino blanca pura. Frescura total, el básico indispensable del verano.',                                   images:['/images/lino/camisa lino blanco1.jpeg','/images/lino/camisa lino blanco2.jpeg','/images/lino/camisa lino blanco3.jpeg','/images/lino/camisa lino blanco4.jpeg','/images/lino/camisa lino blanco5.jpeg'] },
  { id:'lino-celeste',     name:'Camisa de Lino - Celeste',     price:79, category:'camisas-lino',     description:'Camisa de lino en celeste suave. Ligereza y estilo para días soleados.',                                           images:['/images/lino/camisa lino celeste1.jpeg','/images/lino/camisa lino celeste2.jpeg','/images/lino/camisa lino celeste3.jpeg','/images/lino/camisa lino celeste4.jpeg'] },
  { id:'lino-negro',       name:'Camisa de Lino - Negro',       price:79, category:'camisas-lino',     description:'Camisa de lino negra. Elegancia minimalista en su máxima expresión.',                                              images:['/images/lino/camisa lino negro1.jpeg','/images/lino/camisa lino negro2.jpeg','/images/lino/camisa lino negro3.jpeg','/images/lino/camisa lino negro4.jpeg'] },
  { id:'lino-perla',       name:'Camisa de Lino - Perla',       price:79, category:'camisas-lino',     description:'Camisa de lino en perla, cálida y refinada. Para momentos que exigen distinción.',                                  images:['/images/lino/camisa lino perla1.jpeg','/images/lino/camisa lino perla2.jpeg','/images/lino/camisa lino perla3.jpeg','/images/lino/camisa lino perla4.jpeg'] },
  { id:'lino-verde',       name:'Camisa de Lino - Verde',       price:79, category:'camisas-lino',     description:'Camisa de lino en verde natural. Conecta con la naturaleza sin sacrificar el estilo.',                             images:['/images/lino/camisa lino verde1.jpeg','/images/lino/camisa lino verde2.jpeg','/images/lino/camisa lino verde3.jpeg','/images/lino/camisa lino verde4.jpeg'] },
  { id:'lino-vino',        name:'Camisa de Lino - Vino',        price:79, category:'camisas-lino',     description:'Camisa de lino en vino profundo. Sofisticación y carácter en cada detalle.',                                       images:['/images/lino/camisa lino vino1.jpeg','/images/lino/camisa lino vino2.jpeg','/images/lino/camisa lino vino3.jpeg','/images/lino/camisa lino vino4.jpeg'] },

  // ─── CAMISAS LABRADAS — S/ 85 ───────────────────────────
  { id:'lab-azul',         name:'Camisa Labrada - Azul',        price:85, category:'camisas-labradas', description:'Camisa labrada en azul con textura artesanal. Un acabado único que marca la diferencia.',                           images:['/images/labradas/camisa azul labrada1.jpeg','/images/labradas/camisa azul labrada2.jpeg','/images/labradas/camisa azul labrada3.jpeg','/images/labradas/camisa azul labrada4.jpeg','/images/labradas/camisa azul labrada5.jpeg'] },
  { id:'lab-beige',        name:'Camisa Labrada - Beige',       price:85, category:'camisas-labradas', description:'Camisa labrada en beige con diseño artesanal. Elegancia peruana hecha a mano.',                                   images:['/images/labradas/camisa beige labrada1.jpeg','/images/labradas/camisa beige labrada2.jpeg','/images/labradas/camisa beige labrada3.jpeg','/images/labradas/camisa beige labrada4.jpeg','/images/labradas/camisa beige labrada5.jpeg'] },
  { id:'lab-blanca',       name:'Camisa Labrada - Blanca',      price:85, category:'camisas-labradas', description:'Camisa labrada en blanco con textura en relieve. Clásico con un toque artesanal.',                                images:['/images/labradas/camisa blanca labrada1.jpeg','/images/labradas/camisa blanca labrada2.jpeg','/images/labradas/camisa blanca labrada3.jpeg','/images/labradas/camisa blanca labrada4.jpeg','/images/labradas/camisa blanca labrada5.jpeg','/images/labradas/camisa blanca labrada6.jpeg'] },
  { id:'lab-celeste',      name:'Camisa Labrada - Celeste',     price:85, category:'camisas-labradas', description:'Camisa labrada en celeste con texturas decorativas. Frescura y artesanía peruana.',                               images:['/images/labradas/camisa celeste labrada1.jpeg','/images/labradas/camisa celeste labrada2.jpeg','/images/labradas/camisa celeste labrada3.jpeg','/images/labradas/camisa celeste labrada4.jpeg','/images/labradas/camisa celeste labrada5.jpeg'] },
  { id:'lab-negra',        name:'Camisa Labrada - Negra',       price:85, category:'camisas-labradas', description:'Camisa labrada negra con relieve artesanal. Elegancia oscura con detalles únicos.',                               images:['/images/labradas/camisa negra labrada1.jpeg','/images/labradas/camisa negra labrada2.jpeg','/images/labradas/camisa negra labrada3.jpeg','/images/labradas/camisa negra labrada4.jpeg','/images/labradas/camisa negra labrada5.jpeg','/images/labradas/camisa negra labrada6.jpeg'] },
  { id:'lab-plomo-plata',  name:'Camisa Labrada - Plomo Plata', price:85, category:'camisas-labradas', description:'Camisa labrada en plomo plata con textura en relieve. Un look que impresiona.',                                   images:['/images/labradas/camisa plomo plata labrada1.jpeg','/images/labradas/camisa plomo plata labrada2.jpeg','/images/labradas/camisa plomo plata labrada3.jpeg','/images/labradas/camisa plomo plata labrada4.jpeg','/images/labradas/camisa plomo plata labrada5.jpeg'] },
  { id:'lab-vino',         name:'Camisa Labrada - Vino',        price:85, category:'camisas-labradas', description:'Camisa labrada en vino con relieve artesanal. Intensidad y elaboración en cada hilo.',                            images:['/images/labradas/camisa vino labrada1.jpeg','/images/labradas/camisa vino labrada2.jpeg','/images/labradas/camisa vino labrada3.jpeg','/images/labradas/camisa vino labrada4.jpeg','/images/labradas/camisa vino labrada5.jpeg','/images/labradas/camisa vino labrada6.jpeg'] },
];

/* ── State ─────────────────────────────────────────────── */
let currentCategory = null;
let cart            = JSON.parse(localStorage.getItem('gantal_cart') || '[]');
let selectedProduct = null;
let selectedSize    = null;

/* ── Boot ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  document.getElementById('cart-btn').addEventListener('click', openCart);
  document.getElementById('hamburger').addEventListener('click', () =>
    document.getElementById('mobile-menu').classList.toggle('open')
  );
  updateCounts();
  renderProducts(PRODUCTS);
  renderCart();
});

/* ── Navbar scroll ──────────────────────────────────────── */
function setupNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () =>
    nav.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ── Category counts ────────────────────────────────────── */
function updateCounts() {
  const bycat = cat => PRODUCTS.filter(p => p.category === cat).length;
  document.getElementById('count-all').textContent      = PRODUCTS.length;
  document.getElementById('count-sport').textContent    = bycat('camisas-sport');
  document.getElementById('count-lino').textContent     = bycat('camisas-lino');
  document.getElementById('count-labradas').textContent = bycat('camisas-labradas');
}

/* ── Filter ─────────────────────────────────────────────── */
function filterCategory(cat) {
  currentCategory = cat;

  document.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.cat === (cat || 'all')));
  document.querySelectorAll('.nav-link').forEach(l =>
    l.classList.toggle('active', l.dataset.cat === (cat || 'all')));

  const titles = {
    null:               ['Toda la Colección',   'Elige tu camisa perfecta'],
    'camisas-sport':    ['Camisas Sport',        'Busa Pima — S/ 65'],
    'camisas-lino':     ['Camisas de Lino',      'Lino Premium — S/ 79'],
    'camisas-labradas': ['Camisas Labradas',     'Tejido Artesanal — S/ 85'],
  };
  const [title, sub] = titles[cat] || titles[null];
  document.getElementById('catalog-title').textContent    = title;
  document.getElementById('catalog-subtitle').textContent = sub;

  renderProducts(cat ? PRODUCTS.filter(p => p.category === cat) : PRODUCTS);
}

function showAll()          { filterCategory(null); }
function scrollToProducts() { document.getElementById('catalog').scrollIntoView({ behavior:'smooth' }); }

/* ── Category label ─────────────────────────────────────── */
function catLabel(cat) {
  return { 'camisas-sport':'Sport · Busa Pima', 'camisas-lino':'Lino Premium', 'camisas-labradas':'Labrada Artesanal' }[cat] || cat;
}

/* ── Encode image path ──────────────────────────────────── */
function enc(path) {
  return path.split('/').map((s, i) => i === 0 ? s : encodeURIComponent(s)).join('/');
}

/* ── Render grid ────────────────────────────────────────── */
function renderProducts(products) {
  const grid = document.getElementById('product-grid');
  if (!products.length) {
    grid.innerHTML = '<div class="loading-state"><p style="color:var(--muted)">No hay productos.</p></div>';
    return;
  }
  grid.innerHTML = products.map((p, i) => `
    <article class="product-card" onclick="openModal('${p.id}')" style="animation-delay:${i*0.04}s">
      <div class="card-img-wrap">
        <img class="card-img"   src="${enc(p.images[0])}" alt="${p.name}" loading="lazy" />
        <img class="card-img-2" src="${enc(p.images[1]||p.images[0])}" alt="${p.name}" loading="lazy" />
        <div class="card-overlay">
          <button class="card-add-btn" onclick="event.stopPropagation();openModal('${p.id}')">Agregar al carrito</button>
        </div>
      </div>
      <div class="card-info">
        <p class="card-cat-badge">${catLabel(p.category)}</p>
        <p class="card-name">${p.name}</p>
        <div class="card-meta">
          <span class="card-price">S/ ${p.price}</span>
          <span class="card-sizes">S · M · L · XL · XXL</span>
        </div>
      </div>
    </article>`).join('');
}

/* ── Modal ──────────────────────────────────────────────── */
function openModal(id) {
  selectedProduct = PRODUCTS.find(p => p.id === id);
  if (!selectedProduct) return;
  selectedSize = null;

  document.getElementById('modal-img').src             = enc(selectedProduct.images[0]);
  document.getElementById('modal-img').alt             = selectedProduct.name;
  document.getElementById('modal-cat').textContent     = catLabel(selectedProduct.category);
  document.getElementById('modal-name').textContent    = selectedProduct.name;
  document.getElementById('modal-price').textContent   = `S/ ${selectedProduct.price}`;
  document.getElementById('modal-desc').textContent    = selectedProduct.description;

  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.getElementById('btn-add-cart');
  btn.disabled    = true;
  btn.textContent = 'Selecciona una talla';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Size ───────────────────────────────────────────────── */
function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b =>
    b.classList.toggle('selected', b.textContent === size));
  const btn = document.getElementById('btn-add-cart');
  btn.disabled    = false;
  btn.textContent = `Agregar — Talla ${size}`;
}

/* ── Add to cart ────────────────────────────────────────── */
function addToCart() {
  if (!selectedProduct || !selectedSize) return;
  const existing = cart.find(i => i.id === selectedProduct.id && i.size === selectedSize);
  if (existing) { existing.qty++; }
  else {
    cart.push({ id:selectedProduct.id, name:selectedProduct.name, price:selectedProduct.price,
                size:selectedSize, image:selectedProduct.images[0], qty:1 });
  }
  saveCart(); renderCart(); closeModal();
  showToast(`✓ ${selectedProduct.name} (Talla ${selectedSize}) agregado`);
  const badge = document.getElementById('cart-count');
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

function removeFromCart(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  saveCart(); renderCart();
}

function saveCart() { localStorage.setItem('gantal_cart', JSON.stringify(cart)); }

/* ── Render cart ────────────────────────────────────────── */
function renderCart() {
  const count   = cart.reduce((a,i) => a + i.qty, 0);
  const total   = cart.reduce((a,i) => a + i.price * i.qty, 0);
  document.getElementById('cart-count').textContent = count;

  const itemsEl  = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');

  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Tu carrito está vacío</p><span>Agrega productos para continuar</span>
      </div>`;
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${enc(item.image)}" alt="${item.name}" loading="lazy" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-size">Talla: ${item.size} · Cant: ${item.qty}</p>
        <p class="cart-item-price">S/ ${item.price * item.qty}</p>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}','${item.size}')" title="Eliminar">✕</button>
    </div>`).join('');

  document.getElementById('cart-total-price').textContent = `S/ ${total}`;
  footerEl.style.display = 'flex';
}

/* ── Cart drawer ────────────────────────────────────────── */
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
  if (!cart.length) return;
  const total = cart.reduce((a,i) => a + i.price * i.qty, 0);
  let msg = '¡Hola! Quiero hacer el siguiente pedido 🛍️\n\n';
  msg += '*━━━ MI PEDIDO — GANTAL STORE ━━━*\n\n';
  cart.forEach((item, idx) => {
    msg += `${idx+1}. *${item.name}*\n`;
    msg += `   Talla: ${item.size}  |  Cant: ${item.qty}\n`;
    msg += `   Precio: S/ ${item.price * item.qty}\n\n`;
  });
  msg += `*━━━━━━━━━━━━━━━━━━━━━━━━━*\n`;
  msg += `*TOTAL: S/ ${total}*\n\n`;
  msg += `Por favor, necesito coordinar:\n📍 Dirección de entrega\n💳 Método de pago\n\n¡Gracias! 🙌`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ── Size guide ─────────────────────────────────────────── */
function openSizeGuide()  { document.getElementById('sg-overlay').classList.add('open'); }
function closeSizeGuide() { document.getElementById('sg-overlay').classList.remove('open'); }

/* ── Toast ──────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
