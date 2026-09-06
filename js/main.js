// ==============================
// Travik Tech Main JavaScript
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // Mobile Navigation
    // ==============================

    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            navToggle.classList.toggle("active");
        });
    }

    // ==============================
    // Header Scroll Effect
    // ==============================

    const header = document.querySelector(".site-header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // ==============================
    // Scroll Reveal Animation
    // ==============================

    const revealElements = document.querySelectorAll(
        ".section, .hero-copy, .hero-visual, .service-card, .feature-card, .testimonial-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ==============================
    // Smooth Scrolling
    // ==============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    // ==============================
    // Animated Counters
    // ==============================

    const counters = document.querySelectorAll("[data-count]");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = parseInt(counter.dataset.count);

            let current = 0;

            const increment = Math.ceil(target / 100);

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 20);

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    // ==============================
    // Active Navigation Link
    // ==============================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-menu a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

    // ==============================
    // Back To Top Button
    // ==============================

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});
// ==============================
// WhatsApp Popup
// ==============================

function toggleWhatsApp() {

    const popup = document.getElementById("whatsappPopup");

    if (!popup) return;

    popup.classList.toggle("show");

}

// Close popup when clicking outside
document.addEventListener("click", function(event) {

    const popup = document.getElementById("whatsappPopup");
    const button = document.querySelector(".whatsapp-button");

    if (!popup || !button) return;

    if (
        !popup.contains(event.target) &&
        !button.contains(event.target)
    ) {

        popup.classList.remove("show");

    }

});
/*=========================================================
                SERVICE MODAL
=========================================================*/

const modal = document.getElementById("serviceModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const serviceData = {
website:{

title:"Website Development",

description:"At Travik Tech, we design and develop premium websites that help businesses build credibility, attract customers and generate more leads. Every website is tailored to your brand, fully responsive across all devices and optimized for speed, security and search engines. Whether you need a corporate website, landing page, booking system or custom web platform, our team delivers modern digital experiences that convert visitors into loyal customers and support long-term business growth.",

features:[
"Custom UI & UX Design",
"Responsive on All Devices",
"SEO Optimised Structure",
"Lightning Fast Performance",
"Secure Development",
"CMS Integration",
"Contact Forms",
"Google Analytics",
"SSL Security",
"Ongoing Maintenance"
],

technologies:[
"HTML5",
"CSS3",
"JavaScript",
"React",
"Node.js",
"WordPress",
"MySQL"
],

timeline:"2 – 6 Weeks",

ideal:[
"Startups",
"Corporate Businesses",
"Restaurants",
"Medical Clinics",
"Law Firms",
"Construction Companies"
]

},
ecommerce:{

title:"E-Commerce Solutions",

description:"We build secure, scalable and user-friendly e-commerce websites that help businesses sell products online with confidence. Our online stores are designed to deliver seamless shopping experiences, increase conversions and simplify business management. From secure payment gateways to inventory control and customer accounts, every solution is tailored to support long-term business growth.",

features:[
"Secure Online Payments",
"Inventory Management",
"Order Tracking",
"Customer Accounts",
"Advanced Product Search",
"Discount & Coupon System",
"Shipping Integration",
"Sales Analytics Dashboard",
"Mobile Optimised Design",
"Scalable Store Architecture"
],

technologies:[
"Shopify",
"WooCommerce",
"Stripe",
"JavaScript",
"MySQL",
"React"
],

timeline:"3 – 8 Weeks",

ideal:[
"Retail Stores",
"Fashion Brands",
"Electronics Businesses",
"Beauty & Cosmetics",
"Wholesalers",
"Local Businesses"
]

},
software:{

title:"Custom Software",

description:"Every business has unique processes and challenges, which is why off-the-shelf software isn't always the right solution. At Travik Tech, we design and develop custom software tailored to your business goals, helping you automate workflows, improve efficiency and support long-term growth. Whether you need a management system, CRM, ERP, booking platform or internal business application, we deliver secure, scalable and reliable software built specifically for your organisation.",

features:[
"Custom Business Systems",
"Workflow Automation",
"CRM & ERP Solutions",
"Real-Time Dashboards",
"Reporting & Analytics",
"Secure Authentication",
"Cloud Integration",
"Database Management",
"Third-Party API Integration",
"Scalable Architecture"
],

technologies:[
"Java",
"Python",
"SQL",
"React",
"Node.js",
"REST APIs",
"MySQL"
],

timeline:"4 – 12 Weeks",

ideal:[
"Corporate Companies",
"Healthcare",
"Educational Institutions",
"Financial Services",
"Manufacturing",
"Logistics & Supply Chain"
]

},
mobile:{

title:"Mobile Applications",

description:"Travik Tech develops high-performance mobile applications that deliver exceptional user experiences across Android and iOS devices. Whether you're launching a customer-facing app or an internal business solution, we create secure, scalable and intuitive applications designed to improve engagement, streamline operations and support your long-term business goals.",

features:[
"Android App Development",
"iOS App Development",
"Cross-Platform Solutions",
"Modern UI & UX Design",
"Push Notifications",
"Secure User Authentication",
"Cloud Synchronisation",
"In-App Payments",
"Location & Maps Integration",
"App Store Deployment"
],

technologies:[
"Flutter",
"React Native",
"Firebase",
"Java",
"Kotlin",
"Swift"
],

timeline:"6 – 14 Weeks",

ideal:[
"Startups",
"E-Commerce Businesses",
"Healthcare",
"Education",
"Restaurants",
"Corporate Organisations"
]

},
ai:{

title:"AI & Automation",

description:"Artificial Intelligence is transforming the way modern businesses operate. At Travik Tech, we develop intelligent AI-powered solutions that automate repetitive tasks, improve decision-making and enhance customer experiences. Whether you need AI chatbots, workflow automation, predictive analytics or smart business assistants, our solutions are designed to increase productivity, reduce operational costs and help your business stay ahead in a rapidly evolving digital landscape.",

features:[
"AI Chatbots",
"Workflow Automation",
"Business Process Automation",
"Machine Learning Solutions",
"Predictive Analytics",
"Natural Language Processing (NLP)",
"AI Assistants",
"Document Processing",
"Data Analysis & Insights",
"API & System Integration"
],

technologies:[
"Python",
"OpenAI",
"TensorFlow",
"LangChain",
"REST APIs",
"SQL"
],

timeline:"3 – 10 Weeks",

ideal:[
"E-Commerce Businesses",
"Customer Support Teams",
"Healthcare",
"Financial Services",
"Educational Institutions",
"Enterprise Organisations"
]

},
cloud:{

title:"Cloud Solutions",

description:"Travik Tech delivers secure, scalable and high-performance cloud solutions that help businesses modernise their IT infrastructure and improve operational efficiency. Whether you're migrating existing systems to the cloud, deploying business applications or building cloud-native platforms, we provide reliable solutions designed for performance, security and future growth.",

features:[
"Cloud Migration",
"Secure Cloud Hosting",
"Infrastructure Management",
"Automated Backups",
"Disaster Recovery",
"Server Monitoring",
"Performance Optimisation",
"Load Balancing",
"Cloud Security",
"24/7 Maintenance & Support"
],

technologies:[
"Amazon Web Services (AWS)",
"Microsoft Azure",
"Docker",
"Kubernetes",
"Linux",
"Cloudflare"
],

timeline:"2 – 8 Weeks",

ideal:[
"Growing Businesses",
"Corporate Organisations",
"SaaS Companies",
"E-Commerce Platforms",
"Healthcare Providers",
"Financial Institutions"
]

}
};
const projectData = {

    clinic: {
        title: "Bright Path Clinic",
        category: "Website",
        description: "A modern healthcare website designed to improve patient experience through online appointment booking, doctor profiles and responsive design.",

        features: [
            "Online Appointment Booking",
            "Doctor Profiles",
            "Responsive Design",
            "Contact Forms",
            "SEO Optimised",
            "Fast Performance"
        ],

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "PHP",
            "MySQL"
        ],

        timeline: "3 Weeks",

        results: [
            "Professional online presence",
            "Faster appointment booking",
            "Mobile-friendly experience",
            "Improved customer trust"
        ]
    },

    store: {
        title: "UrbanStyle Store",
        category: "E-Commerce",
        description: "A complete fashion e-commerce platform with secure checkout, inventory management and an intuitive shopping experience.",

        features: [
            "Product Catalogue",
            "Secure Checkout",
            "Customer Accounts",
            "Order Tracking",
            "Inventory Management",
            "Mobile Optimised"
        ],

        technologies: [
            "Shopify",
            "JavaScript",
            "Stripe",
            "HTML5",
            "CSS3"
        ],

        timeline: "5 Weeks",

        results: [
            "Secure online sales",
            "Easy inventory management",
            "Improved shopping experience",
            "Higher conversion rates"
        ]
    },

    taskflow: {
        title: "TaskFlow App",
        category: "Mobile App",
        description: "A productivity application that helps teams organise tasks, collaborate efficiently and monitor project progress in real time.",

        features: [
            "Task Management",
            "Team Collaboration",
            "Push Notifications",
            "Progress Tracking",
            "Cloud Sync",
            "User Authentication"
        ],

        technologies: [
            "Flutter",
            "Firebase",
            "REST API"
        ],

        timeline: "8 Weeks",

        results: [
            "Improved productivity",
            "Better team communication",
            "Real-time updates",
            "Cross-platform support"
        ]
    },

    inventory: {
        title: "Inventory Pro",
        category: "Software",
        description: "A business inventory management system that helps organisations track stock levels, generate reports and improve operational efficiency.",

        features: [
            "Stock Management",
            "Analytics Dashboard",
            "Supplier Management",
            "Sales Reports",
            "Role-Based Access",
            "Cloud Backup"
        ],

        technologies: [
            "Java",
            "MySQL",
            "React",
            "REST API"
        ],

        timeline: "6 Weeks",

        results: [
            "Accurate inventory tracking",
            "Reduced stock errors",
            "Faster reporting",
            "Improved business efficiency"
        ]
    }

};
document.querySelectorAll(".service-link").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const service = serviceData[this.dataset.service];

        modalContent.innerHTML = `
<div class="modal-container">
<div class="modal-badge">
    ${service.title}
</div>

<h2 class="modal-title">
    ${service.title}
</h2>

<p class="modal-text">
    ${service.description}
</p>

<hr class="modal-divider" />

<h3 class="modal-heading">
    What We Deliver
</h3>

<div class="modal-features">

${service.features.map(item=>`

<div class="modal-feature">

<i class="fa-solid fa-circle-check"></i>

<span>${item}</span>

</div>

`).join("")}

</div>

<hr class="modal-divider" />

<h3 class="modal-heading">
Technologies We Use
</h3>

<div class="modal-tech">

${service.technologies.map(item=>`

<span>${item}</span>

`).join("")}

</div>

<hr class="modal-divider" />

<div class="modal-bottom">

<div class="timeline-card">

<i class="fa-solid fa-clock"></i>

<div>

<h4>Estimated Delivery</h4>

<p>${service.timeline}</p>

</div>

</div>

<div class="ideal-card">

<h4>

Perfect For

</h4>

<div class="ideal-tags">

${service.ideal.map(item=>`

<span>${item}</span>

`).join("")}

</div>

</div>

</div>

<div class="modal-cta">

<h3>

Ready to Start Your Project?

</h3>

<p>

Let's discuss your requirements and build a solution tailored to your business.

</p>

<a href="contact.html" class="button button-primary">

Request a Free Quote

<i class="fa-solid fa-arrow-right"></i>

</a>

</div>
</div>
`;

// ...existing code...
        modal.classList.add("active");
    });
});
/*=========================================================
                CLOSE MODAL
=========================================================*/
if (modal && closeModal) {

    closeModal.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    window.addEventListener("click", function (e) {

        if (e.target === modal) {
            modal.classList.remove("active");
        }

    });

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {
            modal.classList.remove("active");
        }

    });

}
/*=========================================
        PORTFOLIO MODAL
=========================================*/

const portfolioModal = document.getElementById("portfolioModal");
const portfolioContent = document.getElementById("portfolioModalContent");
const portfolioClose = document.getElementById("portfolioClose");

const portfolioProjects = {

clinic:{

title:"Bright Path Medical Centre",

category:"Website",

client:"Bright Path Medical Centre",

industry:"Healthcare",

duration:"3 Weeks",

image:"images/bright-path-medical-centre.webp",

services:[
"Website Design",
"UI / UX Design",
"Responsive Development",
"Appointment Booking System",
"SEO Optimisation",
"Performance Optimisation"
],

technologies:[
"HTML5",
"CSS3",
"JavaScript",
"PHP",
"MySQL"
],

about:"Bright Path Medical Centre partnered with Travik Tech to develop a modern healthcare website that improves patient engagement while creating a professional online presence. The website allows patients to explore healthcare services, learn about medical professionals and request appointments through a simple, responsive and user-friendly interface.",

highlights:[
"Online Appointment Booking",
"Doctor Profiles",
"Responsive Design",
"Fast Loading Performance",
"Contact Forms",
"SEO Optimised Structure",
"Google Maps Integration",
"Secure Development"
]

},

store:{

title:"UrbanStyle Fashion",

category:"E-Commerce",

client:"UrbanStyle Fashion Ltd.",

industry:"Fashion & Retail",

duration:"5 Weeks",

image:"images/urbanstyle-fashion.webp",

services:[
"E-Commerce Development",
"Payment Integration",
"Customer Accounts",
"Inventory Management",
"UI / UX Design",
"Performance Optimisation"
],

technologies:[
"Shopify",
"JavaScript",
"Stripe",
"HTML5",
"CSS3"
],

about:"UrbanStyle Fashion required a premium online shopping experience that reflects its brand identity while providing customers with a fast, secure and intuitive purchasing process. Travik Tech designed a modern e-commerce platform that combines elegant design with powerful store management features.",

highlights:[
"Secure Checkout",
"Inventory Management",
"Customer Accounts",
"Product Search",
"Responsive Design",
"Discount System",
"Order Tracking",
"Sales Dashboard"
]

},

taskflow:{

title:"TaskFlow Workspace",

category:"Mobile App",

client:"Vertex Solutions",

industry:"Business Productivity",

duration:"8 Weeks",

image:"images/taskflow-workspace.webp",

services:[
"Mobile App Development",
"UI / UX Design",
"Cloud Integration",
"API Development"
],

technologies:[
"Flutter",
"Firebase",
"REST API"
],

about:"TaskFlow Workspace is a modern productivity application designed to simplify project management, improve collaboration and help teams stay organised through real-time updates and cloud synchronisation.",

highlights:[
"Task Management",
"Real-Time Collaboration",
"Push Notifications",
"Cloud Sync",
"User Authentication",
"Project Tracking",
"Team Dashboard",
"Cross Platform"
]

},

inventory:{

title:"InventoryPro Suite",

category:"Software",

client:"Prime Logistics Group",

industry:"Business Software",

duration:"6 Weeks",

image:"images/inventorypro-suite.webp",

services:[
"Custom Software Development",
"Dashboard Design",
"Database Development",
"Reporting System"
],

technologies:[
"Java",
"React",
"MySQL",
"REST API"
],

about:"InventoryPro Suite is a custom inventory management platform that helps businesses monitor stock levels, manage suppliers, analyse inventory performance and automate reporting from one central dashboard.",

highlights:[
"Stock Management",
"Supplier Management",
"Analytics Dashboard",
"Automated Reports",
"Role Permissions",
"Cloud Backup",
"Business Insights",
"Inventory Tracking"
]

}

};

document.querySelectorAll(".project-button").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const project = portfolioProjects[this.dataset.project];

        if(!project) return;
portfolioContent.innerHTML = `

<div class="project-hero">

   <img
    src="${project.image}"
    alt="${project.title}">

</div>

<div class="project-header">

    <span class="project-category">
        ${project.category}
    </span>

    <h1 class="project-title">
        ${project.title}
    </h1>

    <div class="project-divider">
        <i class="fa-solid fa-wave-square"></i>
    </div>

    <p class="project-intro">
        ${project.about}
    </p>

    <div class="project-meta">

        <div class="project-meta-card">

            <div class="project-meta-icon">
                <i class="fa-solid fa-building"></i>
            </div>

            <div>

                <span class="project-meta-label">
                    Industry
                </span>

                <div class="project-meta-value">
                    ${project.industry}
                </div>

            </div>

        </div>

        <div class="project-meta-card">

            <div class="project-meta-icon">
                <i class="fa-solid fa-code"></i>
            </div>

            <div>

                <span class="project-meta-label">
                    Services
                </span>

                <div class="project-meta-value">
                    ${project.services.length} Services
                </div>

            </div>

        </div>

        <div class="project-meta-card">

            <div class="project-meta-icon">
                <i class="fa-solid fa-desktop"></i>
            </div>

            <div>

                <span class="project-meta-label">
                    Platform
                </span>

                <div class="project-meta-value">
                    Responsive Web
                </div>

            </div>

        </div>

        <div class="project-meta-card">

            <div class="project-meta-icon">
                <i class="fa-solid fa-calendar-days"></i>
            </div>

            <div>

                <span class="project-meta-label">
                    Duration
                </span>

                <div class="project-meta-value">
                    ${project.duration}
                </div>

            </div>

        </div>

    </div>

</div>

<div class="portfolio-modal-content">

<div class="project-section">

<h2 class="project-section-title">

<i class="fa-solid fa-layer-group"></i>

Services Delivered

</h2>

<div class="project-services">

${project.services.map(service=>`

<div class="project-service">

<i class="fa-solid fa-circle-check"></i>

<span>${service}</span>

</div>

`).join("")}

</div>

</div>
<div class="project-section">

<h2 class="project-section-title">

<i class="fa-solid fa-code"></i>

Technologies Used

</h2>

<div class="project-technologies">

${project.technologies.map(tech=>`

<span>${tech}</span>

`).join("")}

</div>

</div>

<div class="project-section">

<h2 class="project-section-title">

<i class="fa-solid fa-star"></i>

Project Highlights

</h2>

<div class="project-highlights">

${project.highlights.map(item=>`

<div class="project-highlight">

<h4>${item}</h4>

<p>
Designed and implemented using modern development practices to deliver excellent performance, usability and long-term reliability.
</p>

</div>

`).join("")}

</div>

</div>

<div class="project-section">

<h2 class="project-section-title">

<i class="fa-solid fa-circle-info"></i>

About This Project

</h2>

<div class="project-about">

<p>

${project.about}

</p>

<p>

Every solution delivered by Travik Tech is carefully planned, professionally designed and developed using modern technologies to ensure outstanding performance, security and scalability. From user experience to responsive layouts and long-term maintainability, every detail is crafted to help businesses establish a strong digital presence while delivering measurable business value.

</p>

</div>

</div>

<div class="project-cta">

<h2>

Ready to Build Something Similar?

</h2>

<p>

Whether you're looking for a professional website, custom software, mobile application or AI solution, Travik Tech is ready to bring your vision to life.

</p>

<a href="contact.html" class="button button-primary">

Request a Free Quote

<i class="fa-solid fa-arrow-right"></i>

</a>

</div>

</div>

`;
        portfolioModal.classList.add("active");

    });

});

portfolioClose.addEventListener("click", () => {
    portfolioModal.classList.remove("active");
});

portfolioModal.addEventListener("click", function(e){

    if(e.target === portfolioModal){
        portfolioModal.classList.remove("active");
    }

});

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){
        portfolioModal.classList.remove("active");
    }

});
// Mobile menu
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
    });
}
/* ==========================================
   MOBILE MENU
========================================== */
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    console.log("navToggle:", navToggle);
    console.log("navMenu:", navMenu);

    if (!navToggle || !navMenu) return;

    navToggle.onclick = function () {
        navMenu.classList.toggle("active");
    };
});
