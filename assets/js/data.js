const resumeData = {
    personalInfo: {
      nombre: "Eduardo Oswaldo Quintana Estefan",
      perfil: "Ingeniero en Tecnologías de cómputo y comunicaciones",
      estadoCivil: "Soltero",
      email: "eduar27.estefan@gmail.com",
      telefono: "9811249019",
    },

    habilidades: [
      { nombre: "Hardware", porcentaje: 65 },
      { nombre: "Sistema operativo de Windows", porcentaje: 75 },
      { nombre: "Otros sistemas operativos y Tecnologías", porcentaje: 65 },
      { nombre: "Resolución de problemas de software", porcentaje: 65 },
    ],

    idiomas: [
      { nombre: "Inglés", nivel: "A2" },
      { nombre: "Español", nivel: "Nativo" },
    ],

    informatica: [
      "Sistemas Operativos: Windows, Linux",
      "Lenguajes de Programación: C, JavaScript, Python básico",
      "Bases de Datos: MySQL, SQLite",
      "Ofimática: Microsoft Office",
      "Redes: Configuración básica de Router, Switch, Ap",
      "Otros: HTML, CSS, conocimientos básicos de ciberseguridad, IA básico",
    ],

    experiencia: [
      {
        cargo: "Auxiliar técnico",
        institucion: "Colegio del Golfo",
        ubicacion: "Ciudad del Carmen, Campeche",
        fecha: "15 Mayo, 2021 - 22 Febrero, 2022",
        descripcion: "Auxiliar técnico, me dediqué a mantener y optimizar el rendimiento de computadoras y sistemas informáticos. Desde diagnósticos y reparaciones de hardware hasta instalaciones y actualizaciones de software. Además, mi experiencia abarcaba la instalación de cámaras de seguridad y el tendido de cableado UTP para redes de datos.",
      },
      {
        cargo: "Docente de especialidades",
        institucion: "Colegio del Golfo",
        ubicacion: "Ciudad del Carmen, Campeche",
        fecha: "11 Febrero, 2023 - Presente",
        descripcion: "Docente especializado en soporte técnico y tecnologías de la información y comunicación (TICs), con enfoque en la enseñanza a niños. Apasionado por impartir conocimientos tecnológicos de manera accesible y dinámica, fomentando el desarrollo de habilidades digitales desde temprana edad.",
      },
    ],

    formacion: [
      {
        titulo: "Ingeniería en Tecnologías de Cómputo y Comunicaciones",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "Cursando",
        link: null,
      },
      {
        titulo: "Bachillerato Tecnológico",
        institucion: "Centro de Estudios Tecnológicos del Mar No. 29",
        fecha: "30 Junio, 2021",
        link:null,
        // link: "Documents/Certificado Escolares/Certificado de Preparatoria.pdf",
      },
    ],

    certificaciones: [
      {
        titulo: "Google Cloud Certified Associate Cloud Engineer",
        institucion: "Unacar",
        fecha: "15 Julio, 2025",
        link: null,
      },
      {
        titulo: "Microsoft Office Specialist (Excel 2019)",
        institucion: "Colegio del Golfo",
        fecha: "28 Julio, 2024",
        link: null,
      },
      {
        titulo: "Microsoft Office Specialist (Power Point 2019)",
        institucion: "Colegio del Golfo",
        fecha: "01 Abril, 2025",
        link: null,
      },
    ],

    certificados: [
      {
        titulo: "Curso de Cisco CCNA (Introducción a Redes)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "13 Junio, 2023",
        link: null,
      },
      {
        titulo: "Curso de Cisco CCNA (Switching, Routing and Wireless Essentials)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "21 Mayo, 2024",
        link: null,
      },
      {
        titulo: "Curso de Cisco CCNA (Redes empresariales, Seguridad y Automatización)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "12 Julio, 2024",
        link: null,
      },
      {
        titulo: "Curso de Cisco Ciberseguridad Essentials (Introducción a la Ciberseguridad)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "04 Septiembre, 2023",
        link: null,
      },
      {
        titulo: "Google Cloud Cybersecurity Certificate",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "26 Marzo, 2025",
        link: null,
      },
      {
        titulo: "Curso de Cisco (Networking Basics)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "27 Noviembre, 2023",
        link: null,
      },
      {
        titulo: "Curso de Cisco (Networking Devices and Initial Configuration)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "27 Noviembre, 2023",
        link: null,
      },
      {
        titulo: "Curso de Cisco (Computer Hardware Basics)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "18 Julio, 2024",
        link: null,
      },
      {
        titulo: "Curso de Cisco (Introduction to IoT)",
        institucion: "Universidad Autónoma del Carmen",
        fecha: "18 Julio, 2024",
        link: null,
      },
    ],

    diplomados: [
      {
        titulo: "Diploma de Soporte Técnico y Mantenimiento de Equipo de Cómputo",
        institucion: "Colegio del Golfo",
        fecha: "04 Abril, 2023",
        link: null,
      },
      {
        titulo: "Diplomado en Administración de Proyectos y Emprendimiento Comunitario",
        institucion: "EL INSTITUTO DE ESTUDIOS SUPERIORES PARA PROFESIONALES DE LA EDUCACIÓN",
        fecha: "22 Agosto, 2024",
        link: null,
      },
    ],

    constancias: [
      {
        titulo: "Constancia de Tecnología de la Información y Comunicación",
        institucion: "Computación del Golfo",
        fecha: "07 Diciembre, 2019",
        link: null,
      },
      {
        titulo: "Constancia de Soporte Técnico y Mantenimiento de Equipos de Cómputo",
        institucion: "Computación del Golfo",
        fecha: "22 Febrero, 2022",
        link: null,
      },
    ],

    insignias: [
        {
            imagen: "assets/insignias/associate-cloud-engineer-espanol.png",
            alt: "Insignia de Google Cloud",
            descripcion: "Issuing Date: 7/15/2025" +"<br>"+ "Expiration Date: 7/15/2028"
        },
        {
            imagen: "assets/insignias/microsoft-office-specialist-excel-associate-office-2019.png",
            alt: "Insignia de Microsoft Office Specialist Excel",
            descripcion: "Issuing Date: 7/28/2024" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/microsoft-office-specialist-powerpoint-associate-office-2019.png",
            alt: "Insignia de Microsoft Office Specialist Power point",
            descripcion: "Issuing Date: 4/1/2025" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/ccna-introduction-to-networks.png",
            alt: "Insignia de Cisco CCNA 1",
            descripcion: "Issuing Date: 6/13/2023" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/ccna2.png",
            alt: "Insignia de Cisco CCNA 2",
            descripcion: "Issuing Date: 5/21/2024" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/ccna-enterprise-networking-security-and-automation.png",
            alt: "Insignia de Cisco CCNA 3",
            descripcion: "Issuing Date: 7/19/2024" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/networking-basics.png",
            alt: "Insignia de Cisco",
            descripcion: "Issuing Date: 11/27/2023" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/networking-devices-and-initial-configuration.png",
            alt: "Insignia de Cisco",
            descripcion: "Issuing Date: 11/27/2023" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/computer-hardware-basics.png",
            alt: "Insignia de Cisco",
            descripcion: "Issuing Date: 7/18/2024" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/introduction-to-iot.png",
            alt: "Insignia de Cisco",
            descripcion: "Issuing Date: 7/18/2024" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/introduction-to-cybersecurity.png",
            alt: "Insignia de Cisco",
            descripcion: "Issuing Date: 9/4/2023" +"<br>"+ "Expiration Date: This credential does not expire"
        },
        {
            imagen: "assets/insignias/google-cloud-cybersecurity-certificate.png",
            alt: "Insignia de Google",
            descripcion: "Issuing Date: 3/26/2025" +"<br>"+ "Expiration Date: This credential does not expire"
        },
    ],
  };

