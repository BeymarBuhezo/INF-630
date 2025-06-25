document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const viewProductButtons = document.querySelectorAll('.view-product-btn');
    const productDetailModal = document.getElementById('product-detail-modal');
    const closeModalButton = productDetailModal.querySelector('.close-button');
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalProductPrice = document.getElementById('modal-product-price');

    const btnManageProducts = document.getElementById('btn-manage-products');
    const btnViewOrders = document.getElementById('btn-view-orders');
    const artisanProductsManagementSection = document.getElementById('artisan-products-management');
    const artisanOrdersManagementSection = document.getElementById('artisan-orders-management');
    const backToStoreButtons = document.querySelectorAll('.back-to-store-btn');
    const mainStoreSection = document.getElementById('bolivian-hands-store');

    // Datos de ejemplo para los productos (normalmente vendrían de un backend)
    const productsData = {
        1: {
            name: "Tejido de Alpaca Ancestral",
            image: "assets/images/tejido_andino.jpg",
            description: "Hermoso tejido artesanal andino, cálido, suave y con diseños únicos que reflejan la rica cultura boliviana. Ideal para cualquier estación del año, una verdadera obra de arte hecha a mano por expertos artesanos.",
            price: "Bs. 150"
        },
        2: {
            name: "Aretes de Plata Pura 950",
            image: "assets/images/joyeria_plata.jpg",
            description: "Diseño exclusivo y elegante, elaborados a mano con plata 950 boliviana y un toque de piedra semipreciosa. Perfectos para cualquier ocasión, añaden un brillo único a tu estilo.",
            price: "Bs. 220"
        },
        3: {
            name: "Vasija de Cerámica Tradicional",
            image: "assets/images/ceramica_tradicional.jpg",
            description: "Pieza única de cerámica con motivos ancestrales pintados a mano, ideal para la decoración de tu hogar o como regalo especial que evoca la historia y el arte boliviano.",
            price: "Bs. 90"
        },
        4: {
            name: "Poncho de Lana de Llama",
            image: "assets/images/tejido_andino.jpg", // Reutilizando imagen para el ejemplo
            description: "Cálido y auténtico poncho tejido a mano con lana de llama. Una prenda tradicional que te mantendrá abrigado y con estilo, ideal para climas fríos.",
            price: "Bs. 300"
        },
        5: {
            name: "Anillo de Plata con Turquesa",
            image: "assets/images/joyeria_plata.jpg", // Reutilizando imagen
            description: "Delicado anillo de plata 950 con una incrustación de turquesa. Una joya única que destaca por su belleza natural y acabado artesanal.",
            price: "Bs. 180"
        },
        6: {
            name: "Plato Decorativo de Arcilla",
            image: "assets/images/ceramica_tradicional.jpg", // Reutilizando imagen
            description: "Plato artesanal de arcilla con detalles pintados a mano. Ideal para dar un toque cultural y rústico a tu mesa o como pieza decorativa.",
            price: "Bs. 60"
        }
    };

    // --- Funcionalidad "Ver Producto" (Modal) ---
    viewProductButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            const product = productsData[productId];

            if (product) {
                modalProductImage.src = product.image;
                modalProductImage.alt = product.name;
                modalProductName.textContent = product.name;
                modalProductDescription.textContent = product.description;
                modalProductPrice.textContent = product.price;
                productDetailModal.style.display = 'flex'; // Usar flex para centrado CSS
            }
        });
    });

    closeModalButton.addEventListener('click', () => {
        productDetailModal.style.display = 'none';
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target == productDetailModal) {
            productDetailModal.style.display = 'none';
        }
    });

    // --- Funcionalidad Paneles de Artesano ---
    function showSection(sectionToShow) {
        // Ocultar todas las secciones de gestión y la tienda principal
        artisanProductsManagementSection.classList.remove('visible');
        artisanProductsManagementSection.classList.add('hidden');
        artisanOrdersManagementSection.classList.remove('visible');
        artisanOrdersManagementSection.classList.add('hidden');
        mainStoreSection.style.display = 'none'; // Oculta la sección principal de la tienda
        
        // Mostrar la sección deseada
        sectionToShow.classList.remove('hidden');
        sectionToShow.classList.add('visible');
    }

    function showMainStore() {
        // Ocultar todas las secciones de gestión
        artisanProductsManagementSection.classList.remove('visible');
        artisanProductsManagementSection.classList.add('hidden');
        artisanOrdersManagementSection.classList.remove('visible');
        artisanOrdersManagementSection.classList.add('hidden');
        
        // Mostrar la sección principal de la tienda
        mainStoreSection.style.display = 'block'; // Asegúrate de que tenga el display correcto
    }

    btnManageProducts.addEventListener('click', () => {
        showSection(artisanProductsManagementSection);
    });

    btnViewOrders.addEventListener('click', () => {
        showSection(artisanOrdersManagementSection);
    });

    backToStoreButtons.forEach(button => {
        button.addEventListener('click', showMainStore);
    });

    // Asegurarse de que la tienda principal esté visible al cargar
    showMainStore();
});