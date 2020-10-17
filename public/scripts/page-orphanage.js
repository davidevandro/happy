const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//create map
const map = L.map('mapid', options).setView([-22.9697343,-43.1848931], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


//create and add marker
L.marker([-22.9697343,-43.1848931], {icon})
    .addTo(map)


/*image fallery*/
function selectImage(event){
    const button = event.currentTarget;

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button)=>{
        button.classList.remove("active");
    })

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");


    //atualizar o container de image
    imageContainer.src = image.src;


    //adicionar .active para o botao clicado
    button.classList.add('active');
}