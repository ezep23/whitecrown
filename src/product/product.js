
if(localStorage.getItem("nombre") == null){
    location.href = '/index.html'
} else {
    const product = `<card-product name="${localStorage.getItem("nombre")}" class="p-4">
                        <span slot="descripcion">Descripción personalizada del producto.</span>
                        <span slot="precio">$18000</span>
                    </card-product>`

    document.querySelector('#container-product').innerHTML = product
    console.log(localStorage.getItem("nombre"))
}

localStorage.removeItem("nombre")