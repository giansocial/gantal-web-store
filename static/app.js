/* ═══════════════════════════════════════════════════════════
   GANTAL STORE — app.js (static, Cloudflare Pages)
   Precios desde BD Supabase · Fotos ordenadas por mejor pose
═══════════════════════════════════════════════════════════ */

const WA_NUMBER = '51920994032';

/* ── Precios por talla (fuente: BD Supabase "Productos Carlitos")
   Busa Pima → Camisa Sport:   S/48 (S/M/L) | S/55 (XL) | S/58 (XXL)
   Lino      → Camisa Lino:   S/65 (S/M/L) | S/70 (XL/XXL)
   Labradas  → Camisa Rayas:  S/50 (S/M/L) | S/56 (XL/XXL)
──────────────────────────────────────────────────────────── */
const PRICE_SPORT    = { S:48, M:48, L:48, XL:55, XXL:58 };
const PRICE_LINO     = { S:65, M:65, L:65, XL:70, XXL:70 };
const PRICE_LABRADAS = { S:50, M:50, L:50, XL:56, XXL:56 };
const TABLA = '/images/tabla-medidas.jpeg';

/* ══════════════════════════════════════════════════════════
   CATÁLOGO — 36 productos
   Busa Pima: foto 2 primero (mejor pose editorial), luego foto 1
   Lino/Labradas: foto 1 primero (ya son las mejores)
══════════════════════════════════════════════════════════ */
const PRODUCTS = [

  /* ─── CAMISAS SPORT / BUSA PIMA — Desde S/35 ───────── */
  {
    id:'bp-azul-acero', name:'Camisa Sport - Azul Acero', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima azul acero, confeccionada con orgullo en Perú. Tela suave al tacto, fresca y duradera — hecha por manos peruanas para el hombre que exige calidad. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa azul acero2.jpeg',
      '/images/busa-pima/camisa azul acero1.jpeg',
      '/images/busa-pima/camisa azul acero3.jpeg',
      '/images/busa-pima/camisa azul acero4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-azul-jean', name:'Camisa Sport - Azul Jean', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima azul jean — industria peruana en su máxima expresión. Tela de primera calidad, ideal para el día a día con estilo. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa azul jean2.jpeg',
      '/images/busa-pima/camisa azul jean1.jpeg',
      '/images/busa-pima/camisa azul jean3.jpeg',
      '/images/busa-pima/camisa azul jean4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-azul-marino', name:'Camisa Sport - Azul Marino', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima azul marino, fabricada en Perú con tela de primera selección. Versátil, fresca y duradera. El clásico que nunca falla. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa azul marino2.jpeg',
      '/images/busa-pima/camisa azul marino1.jpeg',
      '/images/busa-pima/camisa azul marino3.jpeg',
      '/images/busa-pima/camisa azul marino4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-azul-tornasol', name:'Camisa Sport - Azul Tornasol', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima azul tornasol con destellos únicos — 100% industria peruana. Confeccionada con los mejores materiales para un look que realmente impresiona. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa azul tornasol2.jpeg',
      '/images/busa-pima/camisa azul tornasol1.jpeg',
      '/images/busa-pima/camisa azul tornasol3.jpeg',
      '/images/busa-pima/camisa azul tornasol4.jpeg',
      '/images/busa-pima/camisa azul tornasol5.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-azulino', name:'Camisa Sport - Azulino', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima azulino, elaborada en Perú con tela premium de la más alta calidad. Frescura y estilo peruano en cada detalle. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa azulino2.jpeg',
      '/images/busa-pima/camisa azulino1.jpeg',
      '/images/busa-pima/camisa azulino3.jpeg',
      '/images/busa-pima/camisa azulino4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-beige', name:'Camisa Sport - Beige', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima beige, confeccionada en Perú con tela de primer nivel. Un tono atemporal que combina con todo, hecha para durar. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa beige2.jpeg',
      '/images/busa-pima/camisa beige1.jpeg',
      '/images/busa-pima/camisa beige3.jpeg',
      '/images/busa-pima/camisa beige4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-blanca', name:'Camisa Sport - Blanca', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'La clásica camisa blanca Busa Pima — fabricada en Perú con los más altos estándares de calidad. Indispensable, versátil y de confección peruana impecable. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa blanca2.jpeg',
      '/images/busa-pima/camisa blanca1.jpeg',
      '/images/busa-pima/camisa blanca3.jpeg',
      '/images/busa-pima/camisa blanca4.jpg',
      '/images/busa-pima/camisa blanca5.jpg',
    TABLA,
    ],
  },
  {
    id:'bp-celeste', name:'Camisa Sport - Celeste', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima celeste, hecha en Perú con tela premium suave al tacto. Fresca, luminosa y de calidad garantizada para el clima peruano. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa celeste2.jpeg',
      '/images/busa-pima/camisa celeste1.jpeg',
      '/images/busa-pima/camisa celeste3.jpeg',
      '/images/busa-pima/camisa celeste4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-coral', name:'Camisa Sport - Coral', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima coral — industria peruana con estilo propio. Un tono vibrante que proyecta energía, confeccionado con materiales de primera selección. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa coral2.jpeg',
      '/images/busa-pima/camisa coral1.jpeg',
      '/images/busa-pima/camisa coral3.jpeg',
      '/images/busa-pima/camisa coral4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-lila', name:'Camisa Sport - Lila', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima lila, elaborada en Perú con tela de la mejor calidad. Un tono sofisticado que marca tendencia — diseñada para el hombre de gusto. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa lila2.jpeg',
      '/images/busa-pima/camisa lila1.jpeg',
      '/images/busa-pima/camisa lila3.jpeg',
      '/images/busa-pima/camisa lila4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-negra', name:'Camisa Sport - Negra', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima negra — fabricada en Perú con materiales premium. Elegante, versátil e infalible. La base perfecta de cualquier armario masculino. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa negra2.jpeg',
      '/images/busa-pima/camisa negra1.jpeg',
      '/images/busa-pima/camisa negra3.jpeg',
      '/images/busa-pima/camisa negra4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-perla', name:'Camisa Sport - Perla', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima perla, confeccionada en Perú con tela de primera calidad. Un blanco cálido y refinado para ocasiones que merecen lo mejor. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa perla2.jpeg',
      '/images/busa-pima/camisa perla1.jpeg',
      '/images/busa-pima/camisa perla3.jpeg',
      '/images/busa-pima/camisa perla4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-ploma', name:'Camisa Sport - Ploma', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima plomo — hecha en Perú con los más altos estándares de calidad. Un gris equilibrado y sobrio, ideal para looks formales y casuales. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa ploma2.jpeg',
      '/images/busa-pima/camisa ploma1.jpeg',
      '/images/busa-pima/camisa ploma3.jpeg',
      '/images/busa-pima/camisa ploma4.jpg',
    TABLA,
    ],
  },
  {
    id:'bp-plomo-plata', name:'Camisa Sport - Plomo Plata', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima plomo plata con efecto metalizado — industria peruana premium. Confeccionada con tela de primera selección para un look que distingue. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa plomo plata2.jpeg',
      '/images/busa-pima/camisa plomo plata1.jpeg',
      '/images/busa-pima/camisa plomo plata3.jpeg',
      '/images/busa-pima/camisa plomo plata4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-plomo-rata', name:'Camisa Sport - Plomo Rata', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima plomo rata — fabricada en Perú con calidad garantizada. Gris sobrio con personalidad, perfecta para el hombre urbano y moderno. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa plomo rata2.jpeg',
      '/images/busa-pima/camisa plomo rata1.jpeg',
      '/images/busa-pima/camisa plomo rata3.jpeg',
      '/images/busa-pima/camisa plomo rata4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-rosado', name:'Camisa Sport - Rosado', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima rosado — elaborada en Perú con tela premium de la mejor calidad. Fresca y actual, para el hombre seguro que no teme al estilo. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa rosado2.jpeg',
      '/images/busa-pima/camisa rosado1.jpeg',
      '/images/busa-pima/camisa rosado3.jpeg',
      '/images/busa-pima/camisa rosado4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-verde-agua', name:'Camisa Sport - Verde Agua', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima verde agua — industria peruana de primer nivel. Fresca y relajada, con tela suave al tacto ideal para el clima peruano. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa verde agua2.jpeg',
      '/images/busa-pima/camisa verde agua1.jpeg',
      '/images/busa-pima/camisa verde agua3.jpeg',
      '/images/busa-pima/camisa verde agua4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-verde-fox', name:'Camisa Sport - Verde Fox', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima verde fox, confeccionada en Perú con materiales de primera calidad. Un tono terroso con carácter — para el hombre que marca su propio estilo. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa verde fox2.jpeg',
      '/images/busa-pima/camisa verde fox1.jpeg',
      '/images/busa-pima/camisa verde fox3.jpeg',
      '/images/busa-pima/camisa verde fox4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-vino', name:'Camisa Sport - Vino', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima vino — fabricada en Perú con tela premium de alta selección. Profunda y elegante, la elección perfecta para eventos y noches especiales. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa vino2.jpeg',
      '/images/busa-pima/camisa vino1.jpeg',
      '/images/busa-pima/camisa vino3.jpeg',
      '/images/busa-pima/camisa vino4.jpeg',
    TABLA,
    ],
  },
  {
    id:'bp-vino-tornasol', name:'Camisa Sport - Vino Tornasol', category:'camisas-sport',
    priceBySize: PRICE_SPORT,
    description:'Camisa Busa Pima vino tornasol con destellos únicos — industria peruana en su máxima expresión. Elegancia y distinción confeccionadas con los mejores materiales. Corte: Slim Fit',
    images:[
      '/images/busa-pima/camisa vino tornasol2.jpeg',
      '/images/busa-pima/camisa vino tornasol1.jpeg',
      '/images/busa-pima/camisa vino tornasol3.jpeg',
      '/images/busa-pima/camisa vino tornasol4.jpeg',
      '/images/busa-pima/camisa vino tornasol5.jpeg',
    TABLA,
    ],
  },

  /* ─── CAMISAS DE LINO — Desde S/42 ─────────────────── */
  {
    id:'lino-azul-acero', name:'Camisa de Lino - Azul Acero', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano en azul acero. Transpirable, fresca y sofisticada — hecha con orgullo en Perú para el hombre que valora la calidad. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino azul acero1.jpeg',
      '/images/lino/camisa lino azul acero2.jpeg',
      '/images/lino/camisa lino azul acero3.jpeg',
      '/images/lino/camisa lino azul acero4.jpeg',
      '/images/lino/camisa lino azul acero5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-azul-marino', name:'Camisa de Lino - Azul Marino', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano en azul marino. Frescura y elegancia en un solo tejido — confeccionada con los mejores materiales de la industria peruana. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino azul marino1.jpeg',
      '/images/lino/camisa lino azul marino2.jpeg',
      '/images/lino/camisa lino azul marino3.jpeg',
      '/images/lino/camisa lino azul marino4.jpeg',
      '/images/lino/camisa lino azul marino5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-beige', name:'Camisa de Lino - Beige', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano en beige natural. El clásico que nunca pasa de moda — hecha en Perú con tela fresca y de primera calidad. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino beige1.jpeg',
      '/images/lino/camisa lino beige2.jpeg',
      '/images/lino/camisa lino beige3.jpeg',
      '/images/lino/camisa lino beige4.jpeg',
      '/images/lino/camisa lino beige5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-blanco', name:'Camisa de Lino - Blanca', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano blanca pura. Frescura total y calidad garantizada — el básico indispensable confeccionado con orgullo en Perú. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino blanco1.jpeg',
      '/images/lino/camisa lino blanco2.jpeg',
      '/images/lino/camisa lino blanco3.jpeg',
      '/images/lino/camisa lino blanco4.jpeg',
      '/images/lino/camisa lino blanco5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-celeste', name:'Camisa de Lino - Celeste', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano en celeste. Ligereza y estilo peruano para días soleados — tejido fresco de la más alta calidad. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino celeste1.jpeg',
      '/images/lino/camisa lino celeste2.jpeg',
      '/images/lino/camisa lino celeste3.jpeg',
      '/images/lino/camisa lino celeste4.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-negro', name:'Camisa de Lino - Negro', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano negra. Elegancia minimalista en su máxima expresión — industria peruana con acabados impecables. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino negro1.jpeg',
      '/images/lino/camisa lino negro2.jpeg',
      '/images/lino/camisa lino negro3.jpeg',
      '/images/lino/camisa lino negro4.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-perla', name:'Camisa de Lino - Perla', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano en perla. Cálida, refinada y confeccionada en Perú con materiales de primera selección — para momentos que exigen distinción. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino perla1.jpeg',
      '/images/lino/camisa lino perla2.jpeg',
      '/images/lino/camisa lino perla3.jpeg',
      '/images/lino/camisa lino perla4.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-verde', name:'Camisa de Lino - Verde', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano en verde natural. Hecha en Perú con tela fresca de alta calidad — conecta con la naturaleza sin sacrificar el estilo. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino verde1.jpeg',
      '/images/lino/camisa lino verde2.jpeg',
      '/images/lino/camisa lino verde3.jpeg',
      '/images/lino/camisa lino verde4.jpeg',
    TABLA,
    ],
  },
  {
    id:'lino-vino', name:'Camisa de Lino - Vino', category:'camisas-lino',
    priceBySize: PRICE_LINO,
    description:'Camisa de lino 100% peruano en vino. Sofisticación y carácter peruano en cada detalle — confeccionada con los mejores materiales de la industria nacional. Corte: Slim Fit',
    images:[
      '/images/lino/camisa lino vino1.jpeg',
      '/images/lino/camisa lino vino2.jpeg',
      '/images/lino/camisa lino vino3.jpeg',
      '/images/lino/camisa lino vino4.jpeg',
    TABLA,
    ],
  },

  /* ─── CAMISAS LABRADAS — Desde S/42 ─────────────────── */
  {
    id:'lab-azul', name:'Camisa Labrada - Azul', category:'camisas-labradas',
    priceBySize: PRICE_LABRADAS,
    description:'Camisa labrada artesanal en azul — tejida a mano en Perú con técnicas tradicionales. Textura en relieve única, confeccionada por artesanos peruanos con los mejores materiales. Corte: Slim Fit',
    images:[
      '/images/labradas/camisa azul labrada1.jpeg',
      '/images/labradas/camisa azul labrada2.jpeg',
      '/images/labradas/camisa azul labrada3.jpeg',
      '/images/labradas/camisa azul labrada4.jpeg',
      '/images/labradas/camisa azul labrada5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lab-beige', name:'Camisa Labrada - Beige', category:'camisas-labradas',
    priceBySize: PRICE_LABRADAS,
    description:'Camisa labrada artesanal en beige — elegancia peruana hecha a mano con técnicas tradicionales. Cada detalle refleja la calidad y el orgullo de la industria artesanal del Perú. Corte: Slim Fit',
    images:[
      '/images/labradas/camisa beige labrada1.jpeg',
      '/images/labradas/camisa beige labrada2.jpeg',
      '/images/labradas/camisa beige labrada3.jpeg',
      '/images/labradas/camisa beige labrada4.jpeg',
      '/images/labradas/camisa beige labrada5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lab-blanca', name:'Camisa Labrada - Blanca', category:'camisas-labradas',
    priceBySize: PRICE_LABRADAS,
    description:'Camisa labrada artesanal en blanco con textura en relieve — confeccionada a mano en Perú. Clásico reinventado con el sello de calidad de la artesanía peruana. Corte: Slim Fit',
    images:[
      '/images/labradas/camisa blanca labrada1.jpeg',
      '/images/labradas/camisa blanca labrada2.jpeg',
      '/images/labradas/camisa blanca labrada3.jpeg',
      '/images/labradas/camisa blanca labrada4.jpeg',
      '/images/labradas/camisa blanca labrada5.jpeg',
      '/images/labradas/camisa blanca labrada6.jpeg',
    TABLA,
    ],
  },
  {
    id:'lab-celeste', name:'Camisa Labrada - Celeste', category:'camisas-labradas',
    priceBySize: PRICE_LABRADAS,
    description:'Camisa labrada artesanal en celeste — tejida a mano en Perú con texturas decorativas únicas. Frescura y artesanía peruana de la más alta calidad en cada hilo. Corte: Slim Fit',
    images:[
      '/images/labradas/camisa celeste labrada1.jpeg',
      '/images/labradas/camisa celeste labrada2.jpeg',
      '/images/labradas/camisa celeste labrada3.jpeg',
      '/images/labradas/camisa celeste labrada4.jpeg',
      '/images/labradas/camisa celeste labrada5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lab-negra', name:'Camisa Labrada - Negra', category:'camisas-labradas',
    priceBySize: PRICE_LABRADAS,
    description:'Camisa labrada artesanal negra con relieve único — hecha a mano en Perú por artesanos especializados. Elegancia oscura con acabados que solo la industria peruana puede ofrecer. Corte: Slim Fit',
    images:[
      '/images/labradas/camisa negra labrada1.jpeg',
      '/images/labradas/camisa negra labrada2.jpeg',
      '/images/labradas/camisa negra labrada3.jpeg',
      '/images/labradas/camisa negra labrada4.jpeg',
      '/images/labradas/camisa negra labrada5.jpeg',
      '/images/labradas/camisa negra labrada6.jpeg',
    TABLA,
    ],
  },
  {
    id:'lab-plomo-plata', name:'Camisa Labrada - Plomo Plata', category:'camisas-labradas',
    priceBySize: PRICE_LABRADAS,
    description:'Camisa labrada artesanal plomo plata con textura en relieve — confeccionada a mano en Perú. Un look que impresiona, con el sello de calidad de la artesanía peruana. Corte: Slim Fit',
    images:[
      '/images/labradas/camisa plomo plata labrada1.jpeg',
      '/images/labradas/camisa plomo plata labrada2.jpeg',
      '/images/labradas/camisa plomo plata labrada3.jpeg',
      '/images/labradas/camisa plomo plata labrada4.jpeg',
      '/images/labradas/camisa plomo plata labrada5.jpeg',
    TABLA,
    ],
  },
  {
    id:'lab-vino', name:'Camisa Labrada - Vino', category:'camisas-labradas',
    priceBySize: PRICE_LABRADAS,
    description:'Camisa labrada artesanal en vino — tejida a mano en Perú con técnicas tradicionales. Intensidad, elaboración y calidad peruana en cada hilo. Corte: Slim Fit',
    images:[
      '/images/labradas/camisa vino labrada1.jpeg',
      '/images/labradas/camisa vino labrada2.jpeg',
      '/images/labradas/camisa vino labrada3.jpeg',
      '/images/labradas/camisa vino labrada4.jpeg',
      '/images/labradas/camisa vino labrada5.jpeg',
      '/images/labradas/camisa vino labrada6.jpeg',
    TABLA,
    ],
  },
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
    document.getElementById('mobile-menu').classList.toggle('open'));
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

/* ── Counts ─────────────────────────────────────────────── */
function updateCounts() {
  const n = cat => PRODUCTS.filter(p => p.category === cat).length;
  document.getElementById('count-all').textContent      = PRODUCTS.length;
  document.getElementById('count-sport').textContent    = n('camisas-sport');
  document.getElementById('count-lino').textContent     = n('camisas-lino');
  document.getElementById('count-labradas').textContent = n('camisas-labradas');
}

/* ── Filter ─────────────────────────────────────────────── */
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.cat === (cat || 'all')));
  document.querySelectorAll('.nav-link').forEach(l =>
    l.classList.toggle('active', l.dataset.cat === (cat || 'all')));

  const info = {
    null:               ['Toda la Colección',   'Elige tu camisa perfecta'],
    'camisas-sport':    ['Camisas Sport',        'Busa Pima — Desde S/ 48'],
    'camisas-lino':     ['Camisas de Lino',      'Lino Premium — Desde S/ 65'],
    'camisas-labradas': ['Camisas Labradas',     'Tejido Artesanal — Desde S/ 50'],
  };
  const [title, sub] = info[cat] || info[null];
  document.getElementById('catalog-title').textContent    = title;
  document.getElementById('catalog-subtitle').textContent = sub;
  renderProducts(cat ? PRODUCTS.filter(p => p.category === cat) : PRODUCTS);
}

function showAll()          { filterCategory(null); }
function scrollToProducts() { document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' }); }

/* ── Category label ─────────────────────────────────────── */
function catLabel(cat) {
  return {
    'camisas-sport':    'Sport · Busa Pima',
    'camisas-lino':     'Lino Premium',
    'camisas-labradas': 'Labrada Artesanal',
  }[cat] || cat;
}

/* ── Base price (S/M/L) for display ─────────────────────── */
function basePrice(p) { return p.priceBySize.S; }

/* ── Encode image path (handle spaces) ─────────────────── */
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
  // Filter out tabla-medidas from card display (it's only for the modal)
  grid.innerHTML = products.map((p, i) => {
    const img1 = enc(p.images[0]);
    const img2 = enc(p.images[1] || p.images[0]);
    const price = basePrice(p);
    const hasXLsurcharge = p.priceBySize.XL > price;
    return `
    <article class="product-card" onclick="openModal('${p.id}')" style="animation-delay:${i*0.04}s">
      <div class="card-img-wrap">
        <img class="card-img"   src="${img1}" alt="${p.name}" loading="lazy" />
        <img class="card-img-2" src="${img2}" alt="${p.name} — vista 2" loading="lazy" />
        <div class="card-overlay">
          <button class="card-add-btn" onclick="event.stopPropagation();openModal('${p.id}')">Agregar al carrito</button>
        </div>
      </div>
      <div class="card-info">
        <p class="card-cat-badge">${catLabel(p.category)}</p>
        <p class="card-name">${p.name}</p>
        <div class="card-meta">
          <span class="card-price">Desde S/ ${price}</span>
          <span class="card-sizes">S · M · L · XL · XXL</span>
        </div>
        <button class="card-add-mobile" onclick="event.stopPropagation();openModal('${p.id}')">Agregar al carrito</button>
      </div>
    </article>`;
  }).join('');
}

/* ── Modal ──────────────────────────────────────────────── */
function openModal(id) {
  selectedProduct = PRODUCTS.find(p => p.id === id);
  if (!selectedProduct) return;
  selectedSize = null;

  const mainImg = document.getElementById('modal-img');
  mainImg.src = enc(selectedProduct.images[0]);
  mainImg.alt = selectedProduct.name;
  document.getElementById('modal-cat').textContent   = catLabel(selectedProduct.category);
  document.getElementById('modal-name').textContent  = selectedProduct.name;
  document.getElementById('modal-price').textContent = `Desde S/ ${basePrice(selectedProduct)}`;
  // Separar descripción de "Corte: Slim Fit" para mostrarlo destacado
  const rawDesc = selectedProduct.description;
  const corteMatch = rawDesc.match(/Corte:\s*(Slim Fit)/i);
  const descSinCorte = rawDesc.replace(/\s*Corte:\s*Slim Fit/i, '').trim();

  const descEl = document.getElementById('modal-desc');
  if (corteMatch) {
    descEl.innerHTML = `${descSinCorte}<span class="modal-corte-badge">Corte: Slim Fit</span>`;
  } else {
    descEl.textContent = rawDesc;
  }

  // Thumbnails
  const thumbsEl = document.getElementById('modal-thumbs');
  thumbsEl.innerHTML = selectedProduct.images.map((img, i) => `
    <div class="modal-thumb ${i===0?'active':''}" data-idx="${i}" onclick="switchModalImg(${i},'${id}')" title="Foto ${i+1}">
      <img src="${enc(img)}" alt="foto ${i+1}" loading="lazy" />
    </div>`).join('');
  thumbsEl.style.display = selectedProduct.images.length > 1 ? 'flex' : 'none';

  // Reset size
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.getElementById('btn-add-cart');
  btn.disabled    = true;
  btn.textContent = 'Selecciona una talla';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchModalImg(idx, productId) {
  const p = PRODUCTS.find(p => p.id === productId);
  if (!p) return;
  document.getElementById('modal-img').src = enc(p.images[idx]);
  document.querySelectorAll('.modal-thumb').forEach((t, i) =>
    t.classList.toggle('active', i === idx));
  zoomImgIndex = idx; // keep zoom in sync
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Size selection ─────────────────────────────────────── */
function selectSize(size) {
  if (!selectedProduct) return;
  selectedSize = size;

  document.querySelectorAll('.size-btn').forEach(b =>
    b.classList.toggle('selected', b.textContent === size));

  const price = selectedProduct.priceBySize[size];
  document.getElementById('modal-price').textContent = `S/ ${price}`;

  const btn = document.getElementById('btn-add-cart');
  btn.disabled    = false;
  btn.textContent = `Agregar — Talla ${size} · S/ ${price}`;
}

/* ── Add to cart ────────────────────────────────────────── */
function addToCart() {
  if (!selectedProduct || !selectedSize) return;
  const price    = selectedProduct.priceBySize[selectedSize];
  const existing = cart.find(i => i.id === selectedProduct.id && i.size === selectedSize);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id:    selectedProduct.id,
      name:  selectedProduct.name,
      price: price,
      size:  selectedSize,
      image: selectedProduct.images[0],
      qty:   1,
    });
  }
  saveCart(); renderCart(); closeModal();
  showToast(`✓ ${selectedProduct.name} (Talla ${selectedSize} · S/ ${price}) agregado`);
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
  const count  = cart.reduce((a, i) => a + i.qty, 0);
  const total  = cart.reduce((a, i) => a + i.price * i.qty, 0);
  document.getElementById('cart-count').textContent = count;

  const itemsEl  = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');

  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p>Tu carrito está vacío</p>
        <span>Agrega productos para continuar</span>
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

/* ── Cart open/close ─────────────────────────────────────── */
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
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);

  let msg = '¡Hola! Quiero hacer el siguiente pedido 🛍️\n\n';
  msg += '*━━━ MI PEDIDO — GANTAL STORE ━━━*\n\n';
  cart.forEach((item, idx) => {
    msg += `${idx+1}. *${item.name}*\n`;
    msg += `   Talla: ${item.size}  |  Cant: ${item.qty}\n`;
    msg += `   Precio: S/ ${item.price * item.qty}\n\n`;
  });
  msg += `*━━━━━━━━━━━━━━━━━━━━━━━━━*\n`;
  msg += `*TOTAL: S/ ${total}*\n\n`;
  msg += `Por favor, necesito coordinar:\n`;
  msg += `📍 Dirección de entrega\n`;
  msg += `💳 Método de pago\n\n`;
  msg += `¡Gracias! 🙌`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ── Size guide modal ───────────────────────────────────── */
function openSizeGuide()  { document.getElementById('sg-overlay').classList.add('open'); }
function closeSizeGuide() { document.getElementById('sg-overlay').classList.remove('open'); }

/* ── ZOOM LIGHTBOX ──────────────────────────────────────── */
let zoomScale    = 1;
let zoomPanX     = 0;
let zoomPanY     = 0;
let zoomDragging = false;
let zoomDragStart = { x:0, y:0 };
let zoomImgIndex = 0;

function openZoom() {
  if (!selectedProduct) return;
  zoomImgIndex = parseInt(
    document.querySelector('.modal-thumb.active')?.dataset?.idx ?? '0'
  );
  _zoomLoad(selectedProduct.images[zoomImgIndex]);
  zoomScale = 1; zoomPanX = 0; zoomPanY = 0;
  _zoomApply();
  document.getElementById('zoom-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeZoom() {
  document.getElementById('zoom-overlay').classList.remove('open');
  zoomScale = 1; zoomPanX = 0; zoomPanY = 0;
  _zoomApply();
}

function zoomNav(dir) {
  if (!selectedProduct) return;
  zoomImgIndex = (zoomImgIndex + dir + selectedProduct.images.length) % selectedProduct.images.length;
  _zoomLoad(selectedProduct.images[zoomImgIndex]);
  zoomScale = 1; zoomPanX = 0; zoomPanY = 0;
  _zoomApply();
}

function _zoomLoad(src) {
  document.getElementById('zoom-img').src = enc(src);
}

function _zoomApply() {
  const img  = document.getElementById('zoom-img');
  const wrap = document.getElementById('zoom-img-wrap');
  img.style.transform = `translate(${zoomPanX}px, ${zoomPanY}px) scale(${zoomScale})`;
  wrap.classList.toggle('zoomed', zoomScale > 1);
}

/* Mouse wheel zoom */
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('zoom-img-wrap');
  if (!wrap) return;

  // Scroll to zoom
  wrap.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    zoomScale = Math.min(4, Math.max(1, zoomScale + delta));
    if (zoomScale === 1) { zoomPanX = 0; zoomPanY = 0; }
    _zoomApply();
  }, { passive: false });

  // Mouse drag
  wrap.addEventListener('mousedown', e => {
    if (zoomScale <= 1) return;
    zoomDragging = true;
    zoomDragStart = { x: e.clientX - zoomPanX, y: e.clientY - zoomPanY };
    wrap.classList.add('grabbing');
  });
  window.addEventListener('mousemove', e => {
    if (!zoomDragging) return;
    zoomPanX = e.clientX - zoomDragStart.x;
    zoomPanY = e.clientY - zoomDragStart.y;
    _zoomApply();
  });
  window.addEventListener('mouseup', () => {
    zoomDragging = false;
    document.getElementById('zoom-img-wrap')?.classList.remove('grabbing');
  });

  // Touch pinch-to-zoom
  let lastDist = 0;
  let lastTouchPan = null;
  wrap.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDist = Math.hypot(dx, dy);
    } else if (e.touches.length === 1 && zoomScale > 1) {
      lastTouchPan = { x: e.touches[0].clientX - zoomPanX, y: e.touches[0].clientY - zoomPanY };
    }
  }, { passive: true });
  wrap.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const ratio = dist / lastDist;
      zoomScale = Math.min(4, Math.max(1, zoomScale * ratio));
      lastDist = dist;
      if (zoomScale === 1) { zoomPanX = 0; zoomPanY = 0; }
      _zoomApply();
    } else if (e.touches.length === 1 && zoomScale > 1 && lastTouchPan) {
      e.preventDefault();
      zoomPanX = e.touches[0].clientX - lastTouchPan.x;
      zoomPanY = e.touches[0].clientY - lastTouchPan.y;
      _zoomApply();
    }
  }, { passive: false });
  wrap.addEventListener('touchend', () => { lastTouchPan = null; });

  // Click to toggle zoom 1x / 2x
  wrap.addEventListener('click', e => {
    if (zoomDragging) return;
    if (zoomScale === 1) {
      zoomScale = 2;
    } else {
      zoomScale = 1; zoomPanX = 0; zoomPanY = 0;
    }
    _zoomApply();
  });

  // Keyboard ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeZoom();
    if (e.key === 'ArrowRight') zoomNav(1);
    if (e.key === 'ArrowLeft')  zoomNav(-1);
  });
});

/* ── Toast ──────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}
