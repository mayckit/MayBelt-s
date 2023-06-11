class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


  // carrosel:

  const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)



function search() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let x = document.getElementsByClassName('card');

  for (let i = 0; i < x.length; i++) {
    let title = x[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
    if (title.includes(input)) {
      x[i].style.display = 'block';
    } else {
      x[i].style.display = 'none';
    }
  }

  // Verifique se o campo de pesquisa está vazio e, em seguida, exiba todos os itens novamente
  if (input === '') {
    let allCards = document.getElementsByClassName('card');
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.display = 'block';
    }
  }
}

// Código para a página Home (index.html)
function exibirDetalhesProduto(id) {
  window.location.href = 'detalhes.html?id=' + id;
}

fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Belts')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 9; i++) {
      let ler = data.products[i];
      let title = data.products[i].title
      str += `<div class="card">
                <img class="img-card" src="${ler.image}" alt="${ler.id}">
                <h4> <a href="#">${title.length > 20 ? title.substring(0,19).concat('...'):title}</a> </h4>
                <span>${ler.baseColour}</span>
                <h5>R$${ler.price}</h5>
                <button onclick="exibirDetalhesProduto(${ler.id})">Detalhes</button>
              </div>`;
    }
    document.getElementById('tela').innerHTML = str;
  });

  fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Jewellery')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 4; i++) {
      let ler = data.products[i];
      let title = data.products[i].title
      str += `<div class="card">
                <img class="img-card" src="${ler.image}" alt="${ler.id}">
                <h4> <a href="#">${title.length > 20 ? title.substring(0,19).concat('...'):title}</a> </h4>
                <span>${ler.baseColour}</span>
                <h5>R$${ler.price}</h5>
                <button onclick="exibirDetalhesProduto(${ler.id})">Detalhes</button>
              </div>`;
    }
    document.getElementById('tela2').innerHTML = str;
  });

  fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Headwear')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 4; i++) {
      let ler = data.products[i];
      let title = data.products[i].title
      str += `<div class="card">
                <img class="img-card" src="${ler.image}" alt="${ler.id}">
                <h4> <a href="#">${title.length > 20 ? title.substring(0,19).concat('...'):title}</a> </h4>
                <span>${ler.baseColour}</span>
                <h5>R$${ler.price}</h5>
                <button onclick="exibirDetalhesProduto(${ler.id})">Detalhes</button>
              </div>`;
    }
    document.getElementById('tela3').innerHTML = str;
  });
  

 // Função para buscar todos os produtos de uma categoria em todas as páginas
async function fetchAllProductsByCategory(category) {
  let page = 1; // Inicializa a primeira página
  let products = []; // Array para armazenar os produtos encontrados

  while (true) {
    const response = await fetch(`https://diwserver.vps.webdock.cloud/products/category/${category}?page=${page}`);
    const data = await response.json();

    if (data.products.length > 0) {
      // Adiciona os produtos encontrados ao array
      products = products.concat(data.products);
    } else {
      // Não há mais produtos da categoria
      break;
    }

    if (data.nextPage) {
      // Incrementa o número da página
      page++;
    } else {
      // Todas as páginas foram buscadas
      break;
    }
  }

  return products;
}

// Função para buscar e exibir os produtos filtrados
async function fetchAndDisplayFilteredProducts(category, elementId) {
  const products = await fetchAllProductsByCategory(category);

  let str = '';
  for (let i = 0; i < products.length; i++) {
    let ler = products[i];
    let title = ler.title;
    str += `<div class="card">
              <img class="img-card" src="${ler.image}" alt="${ler.id}">
              <h4> <a href="#">${title.length > 20 ? title.substring(0, 19).concat('...') : title}</a> </h4>
              <h5>R$${ler.price}</h5>
              <button onclick="exibirDetalhesProduto(${ler.id})">Detalhes</button>
            </div>`;
  }

  // Limpar conteúdo do elemento antes de exibir os produtos filtrados
  document.getElementById(elementId).innerHTML = '';

  // Exibir os produtos filtrados
  document.getElementById(elementId).innerHTML = str;
}

// Função para lidar com a alteração do filtro de categorias
function handleCategoryFilterChange() {
  const category = document.getElementById('categoryFilter').value;
  if (category === 'All') {
    fetchAndDisplayFilteredProducts('Accessories - Belts', 'tela');
    fetchAndDisplayFilteredProducts('Accessories - Jewellery', 'tela2');
    fetchAndDisplayFilteredProducts('Accessories - Headwear', 'tela3');
  } else {
    fetchAndDisplayFilteredProducts(category, 'tela');
    document.getElementById('tela2').innerHTML = '';
    document.getElementById('tela3').innerHTML = '';
  }
}

// Adicionar evento para lidar com a alteração do filtro de categorias
document.getElementById('categoryFilter').addEventListener('change', handleCategoryFilterChange);

// Exibir todos os produtos inicialmente
fetchAndDisplayFilteredProducts('Accessories - Belts', 'tela');
fetchAndDisplayFilteredProducts('Accessories - Jewellery', 'tela2');
fetchAndDisplayFilteredProducts('Accessories - Headwear', 'tela3');
