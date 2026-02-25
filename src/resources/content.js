// src/resources/content.js
// NO usar sintaxis TypeScript aquí

const person = {
    firstName: "Berkley",
    lastName: "Felix",
    name: "Berkley Felix",
    role: "CEO & Ingeniero Industrial",
    avatar: "/images/avatar.jpg",
    email: "berkley.felixf@latamprovider.com",
    location: "America/Lima",
    languages: ["Español", "English"]
};

const social = [
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/berkleyfelix/",
        essential: true
    },
    {
        name: "TikTok",
        icon: "tiktok",
        link: "https://www.tiktok.com/@berkleyfelix",
        essential: true
    },
    {
        name: "Whatsapp",
        icon: "whatsapp",
        link: "https://wa.me/51946866969",
        essential: true
    },
    {
        name: "Instagram",
        icon: "instagram",
        link: "https://www.instagram.com/berkleyfelix_/",
        essential: false
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:berkley.felixf@latamprovider.com",
        essential: true
    }
];

const home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Inicio",
    title: "Berkley Felix - Partner Estratégico para Latinoamérica",
    description: "Portfolio de Berkley Felix, CEO de LATAM Provider y experto en soluciones sostenibles.",
    headline: "Conectando Innovación Global con Mercados Emergentes",
    featured: {
        display: true,
        title: "LATAM Provider - Ecosistema Empresarial",
        href: "https://latamprovider.com/"
    },
    subline: "Partner Estratégico para Latinoamérica. Impulsando el crecimiento regional a través de soluciones sostenibles e innovación global."
};

const about = {
    path: "/about",
    label: "Sobre mí",
    title: "Sobre mí – Berkley Felix",
    description: "Líder estratégico en importación tecnológica y movilidad sostenible.",
    tableOfContent: { 
        display: true, 
        subItems: false 
    },
    avatar: { 
        display: true 
    },
    calendar: {
        display: true,
        link: "https://cal.com"
    },
    intro: {
        display: true,
        title: "Misión Estratégica",
        description: "Conectamos innovación global y soluciones sostenibles con los mercados de Latinoamérica. Nuestra visión es liderar la importación tecnológica y la movilidad sostenible en la región hacia el 2030."
    },
    work: {
        display: true,
        title: "Ecosistema de Negocios",
        experiences: [
            {
                company: "LATAM Provider S.A.C.",
                timeframe: "Presente",
                role: "CEO & Founder",
                achievements: [
                    "Partner estratégico especializado en conectar soluciones globales con LATAM.",
                    "Liderazgo en la ejecución de misiones estratégicas de importación y logística."
                ],
                images: []
            },
            {
                company: "LATAM Fragrances",
                timeframe: "En Operación",
                role: "Unidad de Negocio Retail",
                achievements: [
                    "Especialistas en la importación y distribución de fragancias de alta gama.",
                    "Gestión de plataforma e-commerce dedicada al sector de lujo: latamfragrances.com."
                ],
                images: []
            },
            {
                company: "LATAM Provider Mobility",
                timeframe: "En Desarrollo (Hacia 2030)",
                role: "División de Sostenibilidad",
                achievements: [
                    "Enfoque en movilidad sostenible para transformar el transporte en Latinoamérica.",
                    "Desarrollo de infraestructura y soluciones de transporte eco-amigables."
                ],
                images: []
            },
            {
                company: "LATAM Provider Tech",
                timeframe: "En Desarrollo",
                role: "División Tecnológica",
                achievements: [
                    "Liderazgo en la importación de hardware y soluciones tecnológicas de última generación.",
                    "Conectando los principales centros de innovación global con el mercado regional."
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: "Formación",
        institutions: [
            {
                name: "Ingeniería Industrial",
                description: "Especialización en optimización de procesos y cadena de suministro global."
            }
        ]
    },
    technical: {
        display: true,
        title: "Habilidades Directivas",
        skills: [
            {
                title: "Estrategia Global",
                description: "Capacidad para conectar mercados internacionales con necesidades locales sostenibles.",
                tags: [
                    { name: "Importación", icon: "archive" }, 
                    { name: "Sostenibilidad", icon: "refresh" }
                ],
                images: []
            },
            {
                title: "Desarrollo de Negocios",
                description: "Visión para identificar y liderar nuevas unidades de negocio tecnológicas y de movilidad.",
                tags: [
                    { name: "Tech", icon: "grid" }, 
                    { name: "Mobility", icon: "share" }
                ],
                images: []
            }
        ]
    }
};

const blog = {
    path: "/blog",
    label: "Blog",
    title: "Pensamiento Estratégico",
    description: "Perspectivas de Berkley Felix sobre el futuro de LATAM."
};

const work = {
    path: "/work",
    label: "Proyectos",
    title: "Portafolio Empresarial",
    description: "Soluciones y misiones estratégicas ejecutadas por LATAM Provider."
};

const gallery = {
    path: "/gallery",
    label: "Galería",
    title: "Impacto Regional",
    description: "Registro visual de nuestras misiones y unidades de negocio.",
    images: [
        { 
            src: "/images/gallery/horizontal-1.jpg", 
            alt: "Logística LATAM", 
            orientation: "horizontal" 
        }
    ]
};

const newsletter = {
    display: true,
    title: "Únete a la Red Estratégica",
    description: "Recibe actualizaciones sobre movilidad sostenible y tecnología en LATAM."
};

// Exportaciones (Se eliminó contactHub de aquí)
export { 
    person, 
    social, 
    newsletter, 
    home, 
    about, 
    blog, 
    work, 
    gallery
};