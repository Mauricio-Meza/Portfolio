
const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto',
        },
        home: {
            greeting: 'Hola, soy Mauricio',
            role: 'Desarrollador Frontend Junior',
            projectsBtn: 'Proyectos',
            contactBtn: 'Contacto',
            cvBtn: 'Descargar Cv'
        },
        about: {  // ✅ ahora está dentro de "es"
            title: 'Sobre mí',
            p1: 'Me llamo Mauricio, tengo 27 años y soy de Buenos Aires, Argentina. Soy desarrollador Frontend Junior, me apasiona la tecnología y estoy enfocado en crear aplicaciones web claras, funcionales y bien estructuradas.',
            p2: 'Me interesa seguir aprendiendo nuevas tecnologías, frameworks y librerías. Actualmente estoy buscando mi primera oportunidad en el área IT, donde pueda crecer profesionalmente y aportar valor mediante el desarrollo web.',
            highlights: [
                "🚀 Código eficiente y optimizado",
                "⚡ Aprendizaje constante",
                "🧩 Pensamiento lógico",
                "🤝 Trabajo en equipo"
            ]
        },
        skills: {
            title: 'Habilidades'
        },
        projects: {
            title: 'Proyectos',
            viewDemo: 'Ver Demo',
            items: [{
                id: 1,
                title: 'Pokemon App',
                description: "Aplicación para buscar y filtrar pokemones desde la PokeAPI.",
                github: "https://github.com/Mauricio-Meza/pokemon-app",
                demo: "https://pokemon-app-86gx.vercel.app/"
            },
            {
                id: 2,
                title: 'Calculadora Web',
                description: 'Calculadora web con operaciones básicas de matematicas.',
                github: "https://github.com/Mauricio-Meza/Calculadora-Web",
                demo: "https://calculadora-web-pink.vercel.app/"
            },
            {
                id: 3,
                title: 'Portafolio',
                description: 'Portafolio Web personal en donde muestro mis habilidades, proyectos, y contacto.',
                github: "https://github.com/Mauricio-Meza/Portfolio",
                demo: "https://portfolio-mauricio-bay.vercel.app/"
            },
            {
                id: 4,
                title: "E-commerce",
                description: "Aplicación de tienda online construida con React, JavaScript y Tailwind CSS, que integra una API externa de productos, manejo de estado global para el carrito, agregar a favoritos, filtrado por categorías y búsqueda dinámica.",
                github: "https://github.com/Mauricio-Meza/store-global",
                demo: "https://store-global.vercel.app/"
            }
            ]


        },
        contact: {
            title: 'Contacto',
            name: 'Nombre',
            email: 'Email',
            message: 'Mensaje',
            submit: 'Enviar Mensaje'
        }


    },


    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        home: {
            greeting: "Hi, I'm Mauricio",
            role: "Frontend Developer Junior",
            projectsBtn: "View Projects",
            contactBtn: "Contact Me",
            cvBtn: 'Download Cv'
        },
        about: {  // ✅ también dentro de "en"
            title: 'About Me',
            p1: 'My name is Mauricio, I am 27 years old and I am from Buenos Aires, Argentina. I am a Junior Frontend Developer passionate about technology and focused on building clean, functional, and well-structured web applications.',
            p2: 'I am interested in continuing to learn new technologies, frameworks, and libraries. I am currently seeking my first opportunity in the IT field, where I can grow professionally and contribute value through web development.',
            highlights: [
                "🚀 Efficient and optimized code",
                "⚡ Constant learning",
                "🧩 Logical thinking",
                "🤝 Teamwork"
            ]
        },
        skills: {
            title: 'Skills'
        },
        projects: {
            title: 'Projects',
            viewDemo: 'View Demo',
            items: [
                {
                    id: 1,
                    title: 'Pokemon App',
                    description: 'Application to search and filter Pokémon using the PokeAPI.',
                    github: "https://github.com/Mauricio-Meza/pokemon-app",
                    demo: "https://pokemon-app-86gx.vercel.app/"
                },
                {
                    id: 2,
                    title: 'Web Calculator',
                    description: 'Web calculator with basic math operations.',
                    github: "https://github.com/Mauricio-Meza/Calculadora-Web",
                    demo: "https://calculadora-web-pink.vercel.app/"

                },
                {
                    id: 3,
                    title: 'Portfolio',
                    description: 'Personal portfolio web where I showcase my skills, projects, and contact.',
                    github: "https://github.com/Mauricio-Meza/Portfolio",
                    demo: "https://portfolio-mauricio-bay.vercel.app/"
                },
                {
                    id: 4,
                    title: "E-commerce",
                    description: "Online store application built with React, JavaScript and Tailwind CSS, integrating an external product API, global state management for the cart, add to favorites, category filtering and dynamic search",
                    github: "https://github.com/Mauricio-Meza/store-global",
                    demo: "https://store-global.vercel.app/"
                }
            ]
        },
        contact: {
            title: 'Contact',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            submit: 'Message Submit'
        }
    },


}

export default translations;



