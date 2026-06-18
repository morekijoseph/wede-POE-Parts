// script.js - Karabo Nail Bar & Hair Salon
document.addEventListener('DOMContentLoaded', () => {

    // Mobile Hamburger Menu
    const header = document.querySelector('header');
    const navUl = document.querySelector('nav ul');

    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    header.insertBefore(hamburger, header.querySelector('nav'));

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburger.textContent = navUl.classList.contains('active') ? '✕' : '☰';
    });

    // Gallery Lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:1000;align-items:center;justify-content:center;flex-direction:column;`;
    document.body.appendChild(lightbox);

    let currentImageIndex = 0;
    let galleryImages = [];

    window.closeLightbox = () => lightbox.style.display = 'none';
    window.prevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(galleryImages[currentImageIndex], '');
    };
    window.nextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        openLightbox(galleryImages[currentImageIndex], '');
    };

    function openLightbox(imgSrc, alt) {
        currentImageIndex = galleryImages.findIndex(src => src === imgSrc);
        lightbox.innerHTML = `
            <button onclick="closeLightbox()" style="position:absolute;top:20px;right:30px;font-size:2rem;color:white;background:none;border:none;cursor:pointer;">✕</button>
            <img src="${imgSrc}" style="max-width:90%;max-height:80vh;border-radius:15px;" alt="${alt}">
            <div style="margin-top:15px;color:white;">
                <button onclick="prevImage()" style="margin:0 15px;font-size:1.2rem;background:#9b6a4b;color:white;border:none;padding:8px 16px;border-radius:30px;cursor:pointer;">← Previous</button>
                <button onclick="nextImage()" style="margin:0 15px;font-size:1.2rem;background:#9b6a4b;color:white;border:none;padding:8px 16px;border-radius:30px;cursor:pointer;">Next →</button>
            </div>
        `;
        lightbox.style.display = 'flex';
    }

    document.querySelectorAll('img').forEach(img => {
        if (img.closest('.gallery-grid') || img.closest('.services-grid')) {
            galleryImages.push(img.src);
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openLightbox(img.src, img.alt));
        }
    });

    // Booking Form Validation
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `background:#d4edda;color:#155724;padding:15px;border-radius:10px;margin:20px 0;text-align:center;`;
            successMsg.innerHTML = `✅ Appointment request received! We will confirm shortly.`;
            bookingForm.appendChild(successMsg);
            setTimeout(() => bookingForm.reset(), 3000);
        });
    }

    // Active nav link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.background = '#9b6a4b';
            link.style.color = 'white';
        }
    });
});