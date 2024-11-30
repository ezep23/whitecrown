if(localStorage.getItem("nombre") == null){
    location.href = 'index.html'
} else {

    let producto = `<single-product name="${localStorage.getItem("nombre")}">  
                        <span>${localStorage.getItem("descripcion")}</span>
                        <span>${localStorage.getItem("precio")}</span>
                    </single-product>
    `;

    document.querySelector('#container-product').innerHTML = producto;
}

