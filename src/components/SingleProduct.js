class Product extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({ mode: 'open' }); 
        
        // Producto
        const HTML = `<div class="contenedor">
                            <img id="imagen" src="../img/${localStorage.getItem("nombre")}.jpg">
                            <div id="contenedor-info">
                                <p class="titulo">${localStorage.getItem("nombre").toUpperCase()}</p>
                                <slot class="descripcion" name="descripcion">${localStorage.getItem("descripcion")}</slot>
                                <slot class="precio" name="precio">${localStorage.getItem("precio")}</slot>
                                <button id="boton">
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
                padding: 30px;
                margin: 40px;
                gap: 6px;
                border: 2px solid #000;
            }
            
            #imagen {
                height: 300px;
                width: 300px;
                
            }

            .titulo {
                font-size: 2rem;
                margin: 10px;
                font-weight: bold;
            }

            .descripcion {
                text-align: justify;
                display: flex;
                margin: 20px;
            }

            .precio{
                font-weight: bold;
                display: flex;
                margin: 20px;
            }
            
            #boton{
                display: flex;
                list-style: none;
                background-color: #000;
                color: #ffffff;
                cursor: pointer;
                padding: 20px;
                margin: 10px;
                border-radius: 50px;
                width: 50%;
            }
        `;
        this.shadowRoot.appendChild(container);
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('single-product', Product);