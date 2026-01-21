// 1. Inicializar AOS (Animaciones de entrada)
AOS.init({
    duration: 1000,
    offset: 100,
});

// 2. Efecto de escritura automática (Typed.js)
// Cambia las palabras dentro de 'strings' por lo que quieras
var typed = new Typed('.typing', {
    strings: ['Desarrollador Web', 'Técnico de PC', 'Gamer', 'Estudiante'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// 3. Efecto Tilt 3D para las tarjetas
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 15,          // Inclinación máxima
    speed: 400,       // Velocidad
    glare: true,      // Brillo
    "max-glare": 0.2, // Opacidad del brillo
});

// 4. Agregar proyectos dinámicamente
const projects = [
{
    title: "Swipe Cleaner",
    description: "Una app, como Tinder pero para borrar fotos de tu galería.",
    image: "img/swipe_cleaner_so.webp",
    tags: ["C++", "Dart", "Flutter", "CMake"],
    repo: "https://github.com/matiasfralasco/swipe_cleaner",
    aosDelay: 0
},
{
    title: "Sistema de Gestión de reparación de PC",
    description: "Un programa que sirve para administrar clientes e historial de pagos, asi tambien para generar PDF del trabajo.",
    image: "img/sistema_gestion_so.webp",
    tags: ["Python", "SQL"],
    repo: "https://github.com/matiasfralasco/MatiFix-Sistema",
    aosDelay: 200
},
{
    title: "MatiFix Toolkit",
    description: "Un programa en Batch pensado para optimizar y agilizar la optimizacion de una PC, todo unificado en un solo lugar (Cuenta tambien con las herramientas de ChrisTitus y el MassGrave).",
    image: "img/toolkit_so.webp",
    tags: ["Batchfile"],
    repo: "https://github.com/matiasfralasco/Mati-Fix-Toolkit",
    aosDelay: 0
},
{
    title: "MatiSpecs",
    description: "Una herramienta portátil de diagnóstico y monitoreo de hardware desarrollada en Python. Diseñada para técnicos y entusiastas, ofrece una interfaz moderna y oscura para visualizar el estado de la PC en tiempo real.",
    image: "img/MatiSpecs_so.webp",
    tags: ["Python"],
    repo: "https://github.com/matiasfralasco/Mati-Specs",
    aosDelay: 0
}
];

const projectsGrid = document.querySelector(".projects-grid");

projects.forEach(project => {
projectsGrid.innerHTML += `
    <div class="project-card" data-tilt data-aos="fade-up" data-aos-delay="${project.aosDelay}">
    <div class="card-img">
        <img src="${project.image}" alt="Captura de pantalla del proyecto ${project.title}">
    </div>

    <div class="card-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <a href="${project.repo}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-small">
        Link al Repo <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
    </div>
`;
});

/* Re-inicializar efectos */
VanillaTilt.init(document.querySelectorAll(".project-card"), {
max: 15,
speed: 400,
glare: true,
"max-glare": 0.2,
});

AOS.refresh();

