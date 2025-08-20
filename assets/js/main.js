(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

})()


document.addEventListener("DOMContentLoaded", () => {
    renderAboutMe();
    renderInsignias();
});

function renderAboutMe() {
    // Referencias a los contenedores
    const personalInfoContainer = document.getElementById('personal-info-container');
    const skillsContainer = document.getElementById('skills-container');
    const idiomasContainer = document.getElementById('idiomas-container');
    const informaticaContainer = document.getElementById('informatica-container');
    const experienciaContainer = document.getElementById('experiencia-container');
    const formacionContainer = document.getElementById('formacion-container');
    const certificacionesContainer = document.getElementById('certificaciones-container');
    const certificadosContainer = document.getElementById('certificados-container');
    const diplomadosContainer = document.getElementById('diplomados-container');
    const constanciasContainer = document.getElementById('constancias-container');

    // 1. Generar la información personal
    personalInfoContainer.innerHTML = '';
    for (const key in resumeData.personalInfo) {
        personalInfoContainer.innerHTML += `<p><span class="title-s">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: </span> <span>${resumeData.personalInfo[key]}</span></p>`;
    }

    // 2. Generar habilidades
    skillsContainer.innerHTML = '';
    resumeData.habilidades.forEach(skill => {
        skillsContainer.innerHTML += `
            <span>${skill.nombre}</span> <span class="float-right">${skill.porcentaje}%</span>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${skill.porcentaje}%;" aria-valuenow="${skill.porcentaje}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `;
    });

    // 3. Generar idiomas
    idiomasContainer.innerHTML = '';
    resumeData.idiomas.forEach(idioma => {
        idiomasContainer.innerHTML += `
        <li>${idioma.nombre}: ${idioma.nivel}</li>`;
    });

    // 4. Generar Informática
    informaticaContainer.innerHTML = '';
    resumeData.informatica.forEach(item => {
        informaticaContainer.innerHTML += `<li>${item}</li>`;
    });

    // 5. Generar Experiencia Laboral
    experienciaContainer.innerHTML = `<div class="title-box-2"><h5 class="title-left">Experiencia Laboral</h5></div> <br>`;
    resumeData.experiencia.forEach(exp => {
        experienciaContainer.innerHTML += `
            <article class="experiencia">
                <p><b>Cargo:</b> ${exp.cargo}</p>
                <p><b>Institución:</b> ${exp.institucion}</p>
                <p>${exp.ubicacion}</p>
                <p><b>Fecha:</b> ${exp.fecha}</p>
                <p><b>Descripción:</b> ${exp.descripcion}</p>
            </article>
        `;
    });
    
    // 6. Generar Formación Académica
    formacionContainer.innerHTML = `<div class="title-box-2"><h5 class="title-left">Formación Académica</h5></div> <br>`;
    resumeData.formacion.forEach(item => {
        const linkHTML = item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.titulo}</a>` : item.titulo;
        formacionContainer.innerHTML += `
            <article>
                <h6><b>${linkHTML}</b></h6>
                <ul>
                    <li>Institución: ${item.institucion}</li>
                    <li>Fecha de Finalización: ${item.fecha}</li>
                </ul>
            </article>
        `;
    });

    // 7. Generar Certificaciones
    certificacionesContainer.innerHTML = `<div class="title-box-2"><h5 class="title-left">Certificaciones</h5></div> <br>`;
    resumeData.certificaciones.forEach(item => {
        const linkHTML = item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.titulo}</a>` : item.titulo;
        certificacionesContainer.innerHTML += `
            <article>
                <h6><b>${linkHTML}</b></h6>
                <ul>
                    <li>Institución: ${item.institucion}</li>
                    <li>Fecha de Finalización: ${item.fecha}</li>
                </ul>
            </article>
        `;
    });

    // 8. Generar Certificados
    certificadosContainer.innerHTML = `<div class="title-box-2"><h5 class="title-left">Certificados</h5></div> <br>`;
    resumeData.certificados.forEach(item => {
        const linkHTML = item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.titulo}</a>` : item.titulo;
        certificadosContainer.innerHTML += `
            <article>
                <h6><b>${linkHTML}</b></h6>
                <ul>
                    <li>Institución: ${item.institucion}</li>
                    <li>Fecha de Finalización: ${item.fecha}</li>
                </ul>
            </article>
        `;
    });

    // 9. Generar Diplomados
    diplomadosContainer.innerHTML = `<div class="title-box-2"><h5 class="title-left">Diplomados</h5></div> <br>`;
    resumeData.diplomados.forEach(item => {
        const linkHTML = item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.titulo}</a>` : item.titulo;
        diplomadosContainer.innerHTML += `
            <article>
                <h6><b>${linkHTML}</b></h6>
                <ul>
                    <li>Institución: ${item.institucion}</li>
                    <li>Fecha de Finalización: ${item.fecha}</li>
                </ul>
            </article>
        `;
    });

    // 10. Generar Constancias
    constanciasContainer.innerHTML = `<div class="title-box-2"><h5 class="title-left">Constancias</h5></div> <br>`;
    resumeData.constancias.forEach(item => {
        const linkHTML = item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.titulo}</a>` : item.titulo;
        constanciasContainer.innerHTML += `
            <article>
                <h6><b>${linkHTML}</b></h6>
                <ul>
                    <li>Institución: ${item.institucion}</li>
                    <li>Fecha de Finalización: ${item.fecha}</li>
                </ul>
            </article>
        `;
    });

}

function renderInsignias() {
    const insigniasContainer = document.getElementById('insignias-container');
    insigniasContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    resumeData.insignias.forEach(insignia => {
        const cardHtml = `
            <article class="card" onclick="toggleCard(this)">
                <div class="card-front">
                    <img src="${insignia.imagen}" onload="setCardBackground(this)" alt="${insignia.alt}">
                </div>
                <div class="card-back">
                    <p>${insignia.descripcion}</p>
                </div>
            </article>
        `;
        insigniasContainer.innerHTML += cardHtml;
    });
}