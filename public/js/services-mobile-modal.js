/**
 * Services Mobile 2x2 Grid Modal Controller
 * Opens service details in a dedicated popup tab on mobile (<= 768px).
 */
(function initServicesMobileModal() {
    const serviceData = {
        1: {
            eyebrow: "01 / Engineering Scope",
            title: "Full-Stack Web Development",
            image: "/hero-images/1.png",
            points: [
                "Next.js 16 & React 19 Architecture",
                "Tailwind CSS Responsive Design",
                "Server-Side Rendering & SEO",
                "High-Speed Performance Optimization",
                "Edge Deployment on Vercel"
            ]
        },
        2: {
            eyebrow: "02 / Engineering Scope",
            title: "Backend & Database Systems",
            image: "/hero-images/5.png",
            points: [
                "Laravel 11 & Node.js REST APIs",
                "Supabase & PostgreSQL Integrations",
                "Role-Based Access Control (RBAC)",
                "Database Schema & Migrations",
                "Payment Gateway & Webhook Pipelines"
            ]
        },
        3: {
            eyebrow: "03 / Engineering Scope",
            title: "Mobile & Android Applications",
            image: "/hero-images/2.png",
            points: [
                "Native Kotlin Android Development",
                "ExoPlayer Media & Video Streaming",
                "Offline Caching & State Management",
                "APK Packaging & Production Builds",
                "API-driven Mobile Sync"
            ]
        },
        4: {
            eyebrow: "04 / Engineering Scope",
            title: "UI/UX & Creative Engineering",
            image: "/hero-images/3.png",
            points: [
                "Interactive WebGL & Three.js 3D",
                "Lenis Smooth Scrolling & Motion",
                "Figma Wireframing & Design Systems",
                "Accessibility & Performance Auditing",
                "Brutalist & Minimalist Interfaces"
            ]
        }
    };

    function setup() {
        const backdrop = document.getElementById('serviceModalBackdrop');
        const closeBtn = document.getElementById('serviceModalClose');
        const modalEyebrow = document.getElementById('serviceModalEyebrow');
        const modalTitle = document.getElementById('serviceModalTitle');
        const modalImg = document.getElementById('serviceModalImage');
        const modalList = document.getElementById('serviceModalList');
        const modalCta = document.getElementById('serviceModalCta');
        const tabs = document.querySelectorAll('.services-mobile-tab');

        if (!backdrop || !tabs.length) return;

        function openModal(id) {
            const data = serviceData[id];
            if (!data) return;

            modalEyebrow.textContent = data.eyebrow;
            modalTitle.textContent = data.title;
            modalImg.src = data.image;
            modalImg.alt = data.title;
            modalList.innerHTML = data.points
                .map(p => `<li><span class="bullet" aria-hidden="true"></span><span>${p}</span></li>`)
                .join('');

            backdrop.classList.add('is-open');
            backdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            backdrop.classList.remove('is-open');
            backdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const id = tab.getAttribute('data-service');
                openModal(id);
            });
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const id = tab.getAttribute('data-service');
                    openModal(id);
                }
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeModal();
            });
        }

        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                closeModal();
            }
        });

        if (modalCta) {
            modalCta.addEventListener('click', () => {
                closeModal();
            });
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
                closeModal();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
})();
