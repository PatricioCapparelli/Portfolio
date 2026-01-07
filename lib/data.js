export const projects = [
    
    {
        num: '01',
        category: 'Java Full Stack',
        title: 'Sistema de Gestión de Cine',
        description: "Plataforma robusta diseñada con arquitectura MVC y API RESTful. El núcleo utiliza Spring Boot 3 para la lógica de negocio y Spring Security para autenticación/autorización segura. La capa de persistencia implementa Hibernate/JPA con MySQL 8, optimizando transacciones y consultas complejas. Integra un frontend responsivo mediante consumo asíncrono de APIs.",
        stack: [
            { name: "Java 17" },
            { name: "Spring Boot 3" },
            { name: "Hibernate/JPA" },
            { name: "MySQL 8" },
            { name: "Spring Security" },
        ],
        image: '/cine.png', 
        live: "",
        github: "https://github.com/PatricioCapparelli/Sistema-Cine-Web",
    },
    {
        num: '02',
        category: 'Full-Stack',
        title: 'project 8',
        description:
            'Desarrollé una app movil de estacionamiento, en el mapa se renderizan las zonas que esta permitido estacionar y las que esta prohibido, pasandole las coordenadas a la API de BA Transportes, que devuelve los datos de la ciudad. Actualmente esta funcionando, pero sigue en desarrollo.',
        stack: [{ name: "Java, Kotlin"}],
        image: '/estacionapp.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/EstacionApp'
    },
    
    {
        num: '03',
        category: 'frontend',
        title: 'project 2',
        description:
            'E-commerce utilizando React y Firestore para el manejo de productos y compras.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "React"}],
        image: '/react.png',
        live: 'https://react-js-ecommerce-three.vercel.app/',
        github: 'https://github.com/PatricioCapparelli/ReactJs-Ecommerce'
    },
    {
        num: '04',
        category: 'frontend',
        title: 'project 3',
        description:
            'Paint windows 95, utilizando javascript vanilla.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/paintjs.png',
        live: 'https://paint-js-seven.vercel.app/',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
    {
        num: '05',
        category: 'fullstack',
        title: 'project 4',
        description:
            'Implementación de un CRUD para la API utilizando SSR con Node.js, Express, Handlebars y MongoDB como base de datos para el manejo de los productos.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}, { name: "MongoDB" }, { name: "Mongoose" }],
        image: '/fullstack.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/ProyectoFinal-backend'
    },
    {
        num: '06',
        category: 'frontend',
        title: 'project 1',
        description:
            ' E-commerce utilizando javascript vanilla.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}],
        image: '/jswork.png',
        live: 'https://js-ecommerce-jsovl37wj-patriciocapparellis-projects.vercel.app/',
        github: 'https://github.com/PatricioCapparelli/JS-Ecommerce'
    },
    {
        num: '07',
        category: 'backend',
        title: 'project 5',
        description:
            'Sistema de autenticación de usuarios utilizando un servidor basado en capas, JSON Web Tokens (JWT) y Mongoose para manejar la base de datos. permite a los usuarios registrarse, iniciar sesión, y acceder a recursos protegidos de manera segura mediante tokens de autenticación. Ademas tiene un sistema de carritos para añadir o eliminar productos dependiendo el rol del usuario.',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}, { name: "MongoDB"}, { name: "Mongoose"}],
        image: '/backend.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/proyectoFinal-Backend2'
    },
    {
        num: '08',
        category: 'Python Backend & Data',
        title: 'Sistema de Optimización Logística',
        description: "Solución integral desarrollada en Python para la gestión y optimización de envíos. Implementa algoritmos de cálculo de rutas eficientes y análisis de datos históricos con Pandas para predecir tiempos de entrega. Cuenta con una API construida con Flask/FastAPI que conecta con MySQL para gestionar flotas y pedidos en tiempo real, reduciendo costos operativos mediante automatización.",
        stack: [
            { name: "Python" },
            { name: "Flask / FastAPI" },
            { name: "Pandas/NumPy" },
            { name: "MySQL" },
            { name: "Docker" },
        ],
        image: '/logistica.png',
        live: "https://urbanoapi-udmqj6flfvtrnfsg3d5sm9.streamlit.app/",
        github: "https://github.com/PatricioCapparelli/UrbanoAPI", 
    },
    {
        num: '09',
        category: 'Backend',
        title: 'project 6',
        description:
            'Desarrollé un sistema de gestión educativa que permite administrar estudiantes y sus calificaciones a través de un menú interactivo por consola. El programa maneja una matriz de calificaciones junto a listas paralelas (nombres, géneros, legajos), e incluye múltiples funcionalidades, a travez de unicamente logica y algoritmia, sin metodos.',
        stack: [{ name: "Python"}],
        image: '/parcial.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/I-Parcial-Programacion-UTN'
    },
    {
        num: '10',
        category: 'Full-Stack',
        title: 'project 7',
        description:
            'Desarrollé un juego de Batalla Naval creado con el modulo Pygame, para el segundo parcial de la Tecnicatura en Programación de la UTN.',
        stack: [{ name: "Python"}],
        image: '/batalla-naval.png',
        live: '',
        github: 'https://github.com/PatricioCapparelli/PROGRAMACION_I_SP'
    },
    
]