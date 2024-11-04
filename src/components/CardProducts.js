class Product extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({ mode: 'open' }); 
        
        // Producto
        const HTML = `<div class="contenedor">
            <img class="imagen" src="../img/${this.getAttribute("name")}.jpg">
            <p class="titulo">${this.getAttribute("name").toUpperCase()}</p>
            <slot name="descripcion"></slot>
            <slot class="precio" name="precio"></slot>
            <button id="comprar">
                COMPRAR
            </button>
        </div>
        `;

        const container = document.createElement('div');
        container.innerHTML = HTML;

        // Funcionalidades del producto
        container.querySelector('#comprar').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('button-click', { bubbles: true, composed: true }));
        });

        // Estilos del producto
        const style = document.createElement('style');
        style.textContent = `
            .contenedor {
                display: flex;
                flex-direction: column;
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

customElements.define('card-product', Product);

