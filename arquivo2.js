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
  
 // Código para a página de Detalhes (detalhes.html)
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Belts')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(item => item.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('item');
        if (detalhes) { // Verifica se o elemento existe na página
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));

    fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Jewellery')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(item => item.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('item');
        if (detalhes) { // Verifica se o elemento existe na página
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));

    fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Headwear')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(item => item.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('item');
        if (detalhes) { // Verifica se o elemento existe na página
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));