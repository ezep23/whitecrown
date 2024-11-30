class Products extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({ mode: 'open' }); 
        
        // Producto
        const HTML = `<div class="contenedor">
            <img class="imagen" src="./src/img/${this.getAttribute("name")}.jpg">
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

        // Estilos 
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

            .precio {
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

    connectedCallback() {
        const descripcionSlot = this.shadowRoot.querySelector('slot[name="descripcion"]');
        const precioSlot = this.shadowRoot.querySelector('slot[name="precio"]');
    
        // Obtenemos el contenido del slot
        const descripcionNodes = descripcionSlot.assignedNodes({ flatten: true });
        const precioNodes = precioSlot.assignedNodes({ flatten: true });
    
        const descripcion = descripcionNodes.length > 0 
            ? descripcionNodes.map(node => node.textContent.trim()).join(' ') 
            : 'Sin descripción';
    
        const precio = precioNodes.length > 0 
            ? precioNodes.map(node => node.textContent.trim()).join(' ') 
            : 'Sin precio';
    
        // Funcionalidad del botón
        this.shadowRoot.querySelector('#comprar').addEventListener('click', () => {
            localStorage.setItem("nombre", this.getAttribute("name"));
            localStorage.setItem("descripcion", descripcion);
            localStorage.setItem("precio", precio);

            window.location.href = './src/product/product.html';
        });
    }
}
customElements.define('card-product', Products);

