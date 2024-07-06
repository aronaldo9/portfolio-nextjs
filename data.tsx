import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  Instagram,
  Facebook,
  Contact,
  Code,
  Database,
  BarChart,
  ClipboardList,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/aronaldo9",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/aar%C3%B3n-pesqueira-fari%C3%B1a-126057a4/",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "https://x.com/aronconcola",
  },
  {
    id: 4,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/aronconcola/",
  },
  {
    id: 5,
    logo: <Facebook size={30} strokeWidth={1} />,
    src: "https://www.facebook.com/calandracas/",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Contact size={25} color="#fff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Frontend en Prácticas",
    subtitle: "Tertius Informática, S.L",
    description:
      "Contribuí en el desarrollo de aplicaciones clave utilizando Laravel, colaborando con un equipo dinámico y mejorando la eficiencia de los proyectos de la empresa.",
    date: "Junio 2024",
  },
  {
    id: 2,
    title: "Graduado en Desarrollo de Aplicaciones Web",
    subtitle: "IES Hermenegildo Lanz, Granada",
    description:
      "Obtuve el título de Técnico Superior en Desarrollo de Aplicaciones Web, adquiriendo habilidades avanzadas en programación y desarrollo web.",
    date: "Junio 2024",
  },
  {
    id: 3,
    title: "Desarrollador Web en Prácticas",
    subtitle: "Clece, S.A",
    description:
      "Participé en la mejora de la aplicación de gestión interna, aplicando los conocimientos adquiridos en el certificado de profesionalidad IFCD0210 (Desarrollo de Aplicaciones con Tecnología Web).",
    date: "Junio 2022",
  },
  {
    id: 4,
    title: "Certificado en Desarrollo de Aplicaciones Web",
    subtitle: "Academia Grupo Futuro, Granada",
    description:
      "Completé el certificado de profesionalidad IFCD0210, especializándome en tecnologías web y mejorando mis competencias técnicas en desarrollo de aplicaciones.",
    date: "Junio 2022",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de formación reglada en DAW",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 2,
    text: "Años llevando a cabo proyectos web",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 3,
    text: "Años realizando cursos de desarrollo web online",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 2,
    text: "Años trabajando con tecnologías web",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <CodeSquare size={30} />,
    title: "Desarrollo Frontend",
    description:
      "Diseño y desarrollo de interfaces de usuario con HTML, CSS, JavaScript, ReactJS y Tailwind",
  },
  {
    icon: <Code size={30} />,
    title: "Desarrollo Backend",
    description:
      "Lógica del servidor y bases de datos usando PHP, Laravel y MySQL.",
  },
  {
    icon: <Database size={30} />,
    title: "Gestión de Bases de Datos",
    description: "Diseño y optimización de bases de datos relacionales.",
  },
  {
    icon: <BarChart size={30} />,
    title: "Marketing Digital",
    description:
      "Estrategias y fundamentos de marketing digital para mejorar la presencia online.",
  },
  {
    icon: <ClipboardList size={30} />,
    title: "Gestión de Proyectos",
    description: "Coordinación y gestión de proyectos de desarrollo web.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Proyecto Final DAW",
    image: "/image-1.png",
    urlGithub: "https://github.com/aronaldo9/client",
    urlDemo: "https://rosant-frontend.netlify.app/",
  },
  {
    id: 2,
    title: "Préstamos VueJS",
    image: "/image-2.png",
    urlGithub: "https://github.com/aronaldo9/cotizador-prestamos-vue",
    urlDemo: "https://proyecto-prestamos-vue-apf.netlify.app/",
  },
  {
    id: 3,
    title: "Administrador de Citas",
    image: "/image-3.png",
    urlGithub: "https://github.com/aronaldo9/apv-frontend",
    urlDemo: "https://proyecto-citas-veterinaria-apf.netlify.app/",
  },
  {
    id: 4,
    title: "Cotizador Cripto",
    image: "/image-4.png",
    urlGithub: "https://github.com/aronaldo9/39-PROYECTO-Criptomonedas",
    urlDemo: "https://cotizador-criptomonedas-apf.netlify.app/",
  },
  {
    id: 5,
    title: "Plataforma Cursos",
    image: "/image-5.png",
    urlGithub: "https://github.com/aronaldo9/15-PROYECTO-Carrito",
    urlDemo: "https://cursos-apf.netlify.app/",
  },
  {
    id: 6,
    title: "Festival Rock",
    image: "/image-6.png",
    urlGithub: "https://github.com/aronaldo9/festivalMusica",
    urlDemo: "https://festivalrock-apf.netlify.app/",
  },
  {
    id: 7,
    title: "Blog de Café",
    image: "/image-7.png",
    urlGithub: "https://github.com/aronaldo9/BlogDeCafe",
    urlDemo: "https://blog-de-cafe-apf.netlify.app/",
  },
  {
    id: 8,
    title: "Proyecto FCT",
    image: "/image-8.png",
    urlGithub: "#!",
    urlDemo: "https://cristaleriajosma.es/",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
