// Funcionalidad del menú hamburguesa para El Buen Comer
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const navbarLinks = document.querySelectorAll('.navbar__link');

    // Función para alternar el menú
    function toggleMenu() {
        navbarMenu.classList.toggle('active');
        
        // Cambiar el icono del botón hamburguesa
        if (navbarMenu.classList.contains('active')) {
            navbarToggle.innerHTML = '✕'; // Cambiar a X cuando está abierto
        } else {
            navbarToggle.innerHTML = '☰'; // Cambiar a hamburguesa cuando está cerrado
        }
    }

    // Evento click en el botón hamburguesa
    navbarToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú cuando se hace click en un enlace (para navegación suave)
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                navbarToggle.innerHTML = '☰';
            }
        });
    });

    // Cerrar el menú cuando se hace click fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
        
        if (!isClickInsideNav && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            navbarToggle.innerHTML = '☰';
        }
    });

    // Cerrar el menú cuando se redimensiona la ventana a pantalla grande
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbarMenu.classList.remove('active');
            navbarToggle.innerHTML = '☰';
        }
    });

    // Funcionalidad adicional para navegación suave
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de scroll para la navbar
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Funcionalidad para el modal de platos (si decides agregarlo más adelante)
function openModal(dishName, dishDescription, dishPrice, dishImage) {
    // Esta función puede ser usada para mostrar detalles de los platos en un modal
    console.log(`Abriendo modal para: ${dishName}`);
}