class Product extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({ mode: 'open' }); 
        
        // Producto
        const HTML = `<div class="contenedor">
                            <img id="imagen" src="./img/${localStorage.getItem("nombre")}.jpg">
                            <div id="contenedor-info">
                                <p class="titulo">${localStorage.getItem("nombre").toUpperCase()}</p>
                                <slot name="descripcion"></slot>
                                <slot name="precio"></slot>
                                <button>
                                    ${localStorage.getItem("email") ? `<li href="./login">Iniciar sesión</li>` : `<li>Añadir al carrito</li>` }
                                </button>
                            </div>
                    </div>
        `;

        const container = document.createElement('div');
        container.innerHTML = HTML;

        // Estilos del producto
        const style = document.createElement('style');
        style.textContent = `
            .contenedor {
                display: flex;
                padding: 20px;
                gap: 6px;
                border: 2px solid #000;
            }
            
            .imagen {
                height: 300px;
                width: 300px;
                border: 2px solid grey;
            }

            .titulo {
                font-size: 1.2rem;
                font-weight: bold;
            }

            span {
                text-align: justify;
            }

            .precio{
                font-weight: bold;
            }

            button {
                background-color: #000;
                color: #ffffff;
                cursor: pointer;
                padding: 10px;
                border-radius: 50px;
                width: 50%;
            }
        `;
        this.shadowRoot.appendChild(container);
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('single-product', Product);