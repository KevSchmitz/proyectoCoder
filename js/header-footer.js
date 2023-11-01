const pathname = window.location.pathname;
const path = pathname === "/" ? "/pages" : "";

// Header
const header = document.querySelector("#header");
header.innerHTML = `
<div class="container">
<a href="/"><img src="" alt="Logo" /></a>
<nav>
<ul class="flex">
<li><a href="/">Inicio</a></li>
<li><a href=".${path}/cursos.html">Cursos</a></li>
<li><a href=".${path}/contacto.html">Contacto</a></li>
<li><a href=".${path}/nosotros.html">Nosotros</a></li>
<li><a href=".${path}/blog.html">Blog</a></li>
</ul>
</nav>
</div>
`;

// Footer
const footer = document.querySelector("#footer");
footer.innerHTML = `
<p>&copy; 2023 Tu Sitio de Cursos de Farmacia</p>
`;
