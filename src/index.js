class Producto extends HTMLElement {
    static name = "card-producto"
    constructor(){ 
        super();
        const name = this.getAttribute("name");
        const html = `<div class="">
        <img src="./img/${name}.jpg" alt="${name}">
        <p>${name.toUpperCase()}</p>
    </div>`;
    this.insertAdjacentHTML("beforeend", html);
    }
    
}

customElements.define(Producto.name, Producto)