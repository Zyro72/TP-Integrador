var coll = document.getElementsByClassName("collapsible");
var prod = [];


let contProd = document.getElementById('items');

document.addEventListener("DOMContentLoaded", (event) => {
    fetch('./JS/productos.json')
        .then(response => response.json())
        .then(data => {
            prod = data;
            sarasa(prod, contProd);
            /*   prod.forEach(producto => {
                   let contenedorIndividual = document.createElement('div');
   
   
                   contenedorIndividual.classList.add('item_flex');
   
                   contenedorIndividual.innerHTML += `
                 
            <img src=${producto.img} width="150" height="100" alt="">
            <h2>${producto.nombre}</h2>
            <h3>$ ${producto.precio}</h3>
            <button type="button">
              Comprar
            </button>
           
            <button type="button" class="collapsible">+ Info </button>
    <div class="content">
      <p>${producto.descripcion}</p>
    </div>      
                
                 
                 `;
                   contenedorProductos.append(contenedorIndividual);
               });*/
            cosalpsar();
            console.log(prod);
        })
        .catch(error => console.error('Error fetching the JSON file:', error));

});

function cosalpsar() {
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}
function sarasa(p1, c1) {
    p1.forEach(producto => {
        let contenedorIndividual = document.createElement('div');


        contenedorIndividual.classList.add('item_flex');

        contenedorIndividual.innerHTML += `
      
 <img src=${producto.img} width="150" height="100" alt="">
 <h2>${producto.nombre}</h2>
 <h3>$ ${producto.precio}</h3>
 <button type="button">
   Comprar
 </button>

 <button type="button" class="collapsible">+ Info </button>
<div class="content">
<p>${producto.descripcion}</p>
</div> 
       
      `;
        c1.append(contenedorIndividual);
    });
}