let container = document.getElementById('container')
// creo una lista de objetos que representaran los valores de los productos 
let listaobj = [
    {
        id:'uno', 
        name:'producto 1',
        desc:'cold waller',
        img :'multimedia/img/perfume-4718455_1280.jpg', 
        price:50000,
        cantidad : 0
    },
    {
        id:'dos',
        name:'producto 2',
        desc:'cristal',
        img:'multimedia/img/perfume-1433727_1280.jpg',
        price:65000,
        cantidad : 0
    },
    {
        id:'tres',
        name:'producto 3',
        desc:'after shave',
        img:'multimedia/img/perfume-1042712_1280.jpg',
        price:9000,
        cantidad : 0
    },
    {
        id:'cuatro',
        name:'producto 4',
        desc:'one electric',
        img:'multimedia/img/perfume-893475_1280.jpg',
        price:40000,
        cantidad : 0
    },
    {
        id:'cinco',
        name:'producto 5',
        desc:'pinkstore',
        img:'multimedia/img/fragrance-4706809_1280.jpg',
        price:105000,
        cantidad : 0
    },
    {
        id:'seis',
        name:'producto 6',
        desc:'CKi',
        img:'multimedia/img/ck-4713393_1280.jpg',
        price:55000,
        cantidad : 0
    },
    {
        id:'siete',
        name:'producto 7',
        desc:'mandarons',
        img:'multimedia/img/ai-generated-8622570_1280.png',
        price:70600,
        cantidad : 0
    },
    {
        id:'ocho',
        name:'producto 8',
        desc:'purpless',
        img:'multimedia/img/ai-generated-8622564_1280.png',
        price:85000,
        cantidad : 0
    }
]

let generarobjetos = () =>{
    container.innerHTML = listaobj.map((x)=>{
        let cantidad = localStorage.getItem(x.id) ? parseInt(localStorage.getItem(x.id)) : 0;
        return `
        <div id='product-id-${x.id}' class="products">
        <img src="${x.img}" alt="imagen1">
        <div class="description">
          <h3 class="nombre">${x .name}</h3>
          <p class="desc">${x.desc}</p>
          <p class = 'precio'>$${x.price}</p>
          <div class="precios">
            <i onclick = 'incrementar("${x.id}")' class="bi bi-plus"></i>
            <p class="cantidad" id="cantidad-${x.id}">${x.cantidad}</p>
            <i onclick = 'decrementar("${x.id}")' class="bi bi-dash"></i>
          </div>
        </div>
    </div>
        `
    }).join('')
}
generarobjetos()


let incrementar = (id)=>{
    let producto = listaobj.find((item)=>item.id === id)
    if(producto){
        producto.cantidad++;
        generarobjetos()
        localStorage.setItem(id, producto.cantidad); 

    }
}

let decrementar = (id) => {
    let producto = listaobj.find(item => item.id === id);
    if (producto && producto.cantidad > 0) {
        producto.cantidad -= 1;
        generarobjetos()
        localStorage.setItem(id, producto.cantidad); 
    }
};