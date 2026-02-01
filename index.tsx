// --------------------------------------------------------------------------------
// TRANSLATIONS & STATE
// --------------------------------------------------------------------------------

const translations: Record<string, any> = {
    en: {
        nav_home: 'Home', nav_about: 'About', nav_products: 'Products', nav_location: 'Location', nav_contact: 'Contact', nav_taqueria: 'Taquería', nav_testimonials: 'Testimonials',
        hero_welcome: 'Welcome to Supermercado', hero_subtitle: 'Your neighborhood Mexican grocery store. Fresh produce, authentic meats, and imported favorites.', hero_call: 'Call Now',
        home_extra_title: 'Freshness in Every Aisle', home_read_more: 'Read Our Story',
        home_cta_title: 'Ready to Experience Authenticity?', home_cta_sub: 'Stop by today for the freshest ingredients and the best tacos in Greenville.',
        about_desc: 'Supermercado is a family-owned Mexican grocery store dedicated to bringing the authentic taste of Mexico to your home.',
        about_desc_long: 'Supermercado is a family-owned Mexican grocery store dedicated to bringing the authentic taste of Mexico to your home. From fresh produce to specialty snacks, we pride ourselves on quality and service.',
        about_values: 'Family Owned • Community Focused • Authenticity First',
        cat_1_name: 'Produce', cat_1_desc: 'Fresh fruits and vegetables delivered daily.',
        cat_2_name: 'Meat Market', cat_2_desc: 'Premium cuts of beef, pork, and chicken.',
        cat_3_name: 'Bakery & Tortillas', cat_3_desc: 'Freshly made tortillas and sweet breads.',
        cat_4_name: 'Dairy & Cheese', cat_4_desc: 'Authentic queso fresco and crema.',
        cat_5_name: 'Snacks & Drinks', cat_5_desc: 'Imported Mexican chips, sodas, and candies.',
        cat_6_name: 'Spices & Chiles', cat_6_desc: 'Everything you need for authentic recipes.',
        taq_hero_sub: 'Traditional street tacos made fresh in-store.',
        taq_menu_title: 'Taquería Menu', 
        taq_addon: 'Add Mozzarella Cheese to any dish for $0.25',
        taq_tacos_title: 'Tacos', taq_tacos_desc: 'Includes: Onion & Cilantro. With choice of meat:',
        taq_burritos_title: 'Burritos', taq_burritos_desc: 'Includes: Lettuce, Pico de Gallo, Melted Cheese. With choice of meat:',
        taq_quesadillas_title: 'Quesadillas', taq_quesadillas_desc: 'Cheese and Meat. Served with choice of meat:',
        taq_tortas_title: 'Tortas', taq_tortas_desc: 'Includes: Lettuce, Mozzarella, Tomato, Avocado. With choice of meat:',
        taq_tortas_specialty: 'Specialty Styles',
        taq_hot_title: 'Specialty Dishes', taq_pound_title: 'Per Pound',
        meat_al_pastor: 'Al Pastor – Marinated Pork', meat_asada: 'Asada – Steak', meat_pollo: 'Pollo – Chicken', meat_tripa: 'Tripa – Tripe', 
        meat_birria: 'Birria', meat_carnitas: 'Carnitas – Marinated Pork', meat_lengua: 'Lengua – Beef Tongue', meat_bar_b_q: 'Barbacoa – Barbecue',
        meat_cabeza: 'Cabeza – Beef Head', 
        torta_cubana: 'Cubana', torta_hawaiana: 'Hawaiana – Ham & Pineapple',
        dish_roast_chicken: 'Pollo Rostizado – Roast Chicken', dish_wings: 'Fried Wings & Ripe Plantains',
        meat_barbacoa_beef: 'Barbacoa de Res – Beef Barbecue', meat_barbacoa_lamb: 'Barbacoa de Borrego – Lamb Barbecue', 
        meat_carnitas_long: 'Carnitas – Fried Pork', meat_chicharron: 'Chicharron – Pork Skin',
        taq_cta_title: 'Hungry Now?', taq_cta_sub: 'Our Taquería is open for dine-in or take-out during regular store hours. No reservation needed!',
        test_hero_sub: 'What our community is saying about us.',
        test_1_text: '"Great place, full of surprises, everything from latin food to great butchery, very friendly people and team."',
        test_2_text: '"Great store Coustmer service was amazing"',
        test_3_text: '"Awesome service great food!!"',
        test_4_text: '"Me & a friend girl went in today and the food was amazing. The people had amazing customer service."',
        test_5_text: '"I love the experience at this store, everything looks great, clean, super good prices and the customer service is the most delightful thing!! 5 start for this store!!!"',
        test_6_text: '"Lovely store, they were really helpful when I asked for help... The produce here is really good and the prices for them and chiles are great."',
        test_cta_title: 'Loved Your Visit?', test_cta_sub: 'Share your experience and photos with us on Facebook!',
        test_cta_btn: 'Leave a Review',
        loc_addr_title: 'Address', loc_addr_text: '3039 White Horse Rd., Greenville, SC 29611',
        loc_hours_title: 'Store Hours', loc_directions: 'Get Directions',
        loc_hours_ms: 'Everyday', loc_hours_sun: '8:00 AM - 10:00 PM',
        loc_map_placeholder: 'Google Maps Placeholder',
        cont_call_sub: 'Call us anytime', cont_fb: 'Facebook', cont_fb_sub: 'News & Special Deals', cont_email_sub: 'Send an inquiry',
        footer_bio: 'Your favorite neighborhood spot for authentic Mexican products, fresh produce, and quality service.',
        footer_nav_title: 'Navigation', footer_rights: '© 2024 Supermercado. All rights reserved.',
        lang_btn: 'ES'
    },
    es: {
        nav_home: 'Inicio', nav_about: 'Nosotros', nav_products: 'Productos', nav_location: 'Ubicación', nav_contact: 'Contacto', nav_taqueria: 'Taquería', nav_testimonials: 'Reseñas',
        hero_welcome: 'Bienvenidos a Supermercado', hero_subtitle: 'Tu tienda mexicana del barrio. Frutas frescas, carnes auténticas y tus productos favoritos importados.', hero_call: 'Llamar Ahora',
        home_extra_title: 'Frescura en cada pasillo', home_read_more: 'Nuestra Historia',
        home_cta_title: '¿Listo para una Experiencia Auténtica?', home_cta_sub: 'Visítanos hoy para los ingredientes más frescos y los mejores tacos en Greenville.',
        about_desc: 'Supermercado es una tienda familiar dedicada a traer el sabor auténtico de México a tu hogar.',
        about_desc_long: 'Supermercado es una tienda familiar dedicada a traer el sabor auténtico de México a tu hogar. Desde frutas frescas hasta botanas tradicionales, nos enorgullecemos de nuestra calidad y servicio.',
        about_values: 'Empresa Familiar • Comunidad • Autenticidad',
        cat_1_name: 'Frutas y Verduras', cat_1_desc: 'Frutas y vegetales frescos todos los días.',
        cat_2_name: 'Carnicería', cat_2_desc: 'Cortes premium de res, puerco y pollo.',
        cat_3_name: 'Panadería y Tortillas', cat_3_desc: 'Tortillas calientes y pan dulce recién hecho.',
        cat_4_name: 'Lácteos y Quesos', cat_4_desc: 'Auténtico queso fresco y cremas.',
        cat_5_name: 'Botanas y Bebidas', cat_5_desc: 'Papas, refrescos y dulces mexicanos.',
        cat_6_name: 'Especias y Chiles', cat_6_desc: 'Todo lo necesario para tus recetas auténticas.',
        taq_hero_sub: 'Tacos de calle tradicionales hechos frescos en la tienda.',
        taq_menu_title: 'Menú de la Taquería', 
        taq_addon: 'Agregue Queso Mozzarella a cualquier plato por $0.25',
        taq_tacos_title: 'Tacos', taq_tacos_desc: 'Incluye: Cebolla y Cilantro. Con la carne de su elección:',
        taq_burritos_title: 'Burritos', taq_burritos_desc: 'Incluye: Lechuga, Pico de Gallo, Queso Derretido. Con carne de su elección:',
        taq_quesadillas_title: 'Quesadillas', taq_quesadillas_desc: 'Queso y Carne. Servido con la carne de su elección:',
        taq_tortas_title: 'Tortas', taq_tortas_desc: 'Incluye: Lechuga, Mozzarella, Tomate, Aguacate. Con carne de su elección:',
        taq_tortas_specialty: 'Estilos Especiales',
        taq_hot_title: 'Platos Especiales', taq_pound_title: 'Por Libra',
        meat_al_pastor: 'Al Pastor – Cerdo Marinado', meat_asada: 'Asada – Bistec', meat_pollo: 'Pollo', meat_tripa: 'Tripa', 
        meat_birria: 'Birria', meat_carnitas: 'Carnitas – Cerdo Frito', meat_lengua: 'Lengua de Res', meat_bar_b_q: 'Barbacoa',
        meat_cabeza: 'Cabeza de Res', 
        torta_cubana: 'Cubana', torta_hawaiana: 'Hawaiana – Jamón y Piña',
        dish_roast_chicken: 'Pollo Rostizado', dish_wings: 'Alitas Fritas y Plátano Maduro',
        meat_barbacoa_beef: 'Barbacoa de Res', meat_barbacoa_lamb: 'Barbacoa de Borrego', 
        meat_carnitas_long: 'Carnitas de Puerco', meat_chicharron: 'Chicharrón de Puerco',
        taq_cta_title: '¿Tienes hambre?', taq_cta_sub: 'Nuestra Taquería está abierta para comer aquí o para llevar durante las horas regulares de la tienda. ¡No necesitas reserva!',
        test_hero_sub: 'Lo que nuestra comunidad dice de nosotros.',
        test_1_text: '"Excelente lugar, lleno de sorpresas, desde comida latina hasta excelente carnicería, gente y equipo muy amables."',
        test_2_text: '"Gran tienda, el servicio al cliente fue increíble."',
        test_3_text: '"¡Servicio increíble, comida genial!"',
        test_4_text: '"Mi amiga y yo fuimos hoy y la comida estuvo increíble. La gente tuvo un servicio al cliente increíble."',
        test_5_text: '"Me encanta la experiencia en esta tienda, todo se ve genial, limpio, súper buenos precios y el servicio al cliente es lo más encantador!! ¡5 estrellas para esta tienda!"',
        test_6_text: '"Tienda encantadora, fueron de gran ayuda cuando pedí ayuda... Los productos aquí son realmente buenos y los precios de ellos y de los chiles son geniales."',
        test_cta_title: '¿Le gustó su visita?', test_cta_sub: '¡Comparta su experiencia y fotos con nosotros en Facebook!',
        test_cta_btn: 'Escribir una Reseña',
        loc_addr_title: 'Dirección', loc_addr_text: '3039 White Horse Rd., Greenville, SC 29611',
        loc_hours_title: 'Horario', loc_directions: 'Cómo llegar',
        loc_hours_ms: 'Todos los días', loc_hours_sun: '8:00 AM - 10:00 PM',
        loc_map_placeholder: 'Mapa de Google',
        cont_call_sub: 'Llámanos cuando quieras', cont_fb: 'Facebook', cont_fb_sub: 'Noticias y Ofertas', cont_email_sub: 'Envía una consulta',
        footer_bio: 'Tu lugar favorito para productos mexicanos auténticos, frutas frescas y un servicio de calidad.',
        footer_nav_title: 'Navegación', footer_rights: '© 2024 Supermercado. Todos los derechos reservados.',
        lang_btn: 'EN'
    }
};

let currentLang = 'es';

// --------------------------------------------------------------------------------
// NAVIGATION LOGIC
// --------------------------------------------------------------------------------

function navigateTo(pageId: string) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    }
    updateActiveNav(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNav(pageId: string) {
    document.querySelectorAll('.nav-link-desktop').forEach(link => {
        const isPage = link.getAttribute('data-page') === pageId;
        link.classList.toggle('text-emerald-700', isPage);
        link.classList.toggle('dark:text-emerald-400', isPage);
        link.classList.toggle('font-bold', isPage);
        link.classList.toggle('text-gray-600', !isPage);
        link.classList.toggle('dark:text-zinc-400', !isPage);
        link.classList.toggle('font-semibold', !isPage);
    });

    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        const isPage = link.getAttribute('data-page') === pageId;
        link.classList.toggle('mobile-nav-active', isPage);
        link.classList.toggle('text-zinc-400', !isPage);
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateContent();
}

function toggleDarkMode() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const iconMobile = document.getElementById('theme-icon-mobile');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon?.classList.replace('fa-sun', 'fa-moon');
        iconMobile?.classList.replace('fa-sun', 'fa-moon');
    } else {
        html.classList.add('dark');
        icon?.classList.replace('fa-moon', 'fa-sun');
        iconMobile?.classList.replace('fa-moon', 'fa-sun');
    }
}

function updateContent() {
    const strings = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && strings[key]) {
            (el as HTMLElement).innerText = strings[key];
        }
    });
    const langText = document.getElementById('lang-text');
    const langTextMobile = document.getElementById('lang-text-mobile');
    if (langText) langText.innerText = currentLang === 'en' ? 'ES' : 'EN';
    if (langTextMobile) langTextMobile.innerText = currentLang === 'en' ? 'ES' : 'EN';
    document.documentElement.lang = currentLang;
}

// --------------------------------------------------------------------------------
// INIT
// --------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Nav Click Handlers
    document.querySelectorAll('.nav-link-desktop, .nav-link-mobile').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('data-page');
            if (page) navigateTo(page);
        });
    });

    document.getElementById('nav-logo')?.addEventListener('click', () => navigateTo('home'));
    
    // Theme
    document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);
    document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleDarkMode);

    // Language
    document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
    document.getElementById('lang-toggle-mobile')?.addEventListener('click', toggleLanguage);

    // Quick Navigation shortcuts
    document.querySelectorAll('.nav-to-location').forEach(btn => btn.addEventListener('click', () => navigateTo('location')));
    document.querySelectorAll('.nav-to-about').forEach(btn => btn.addEventListener('click', () => navigateTo('about')));
    document.querySelectorAll('.nav-to-products').forEach(btn => btn.addEventListener('click', () => navigateTo('products')));
    document.querySelectorAll('.nav-to-taqueria').forEach(btn => btn.addEventListener('click', () => navigateTo('taqueria')));
    document.querySelectorAll('.nav-to-home').forEach(btn => btn.addEventListener('click', () => navigateTo('home')));
    document.querySelectorAll('.nav-to-testimonials').forEach(btn => btn.addEventListener('click', () => navigateTo('testimonials')));

    // Default Language init
    updateContent();
});