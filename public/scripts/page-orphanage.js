const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false,
}

//create map
const map = L.map('mapid', options).setView([-23.9524935, -46.4029801], 13);

//create and addd tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create and add marker
L.marker([-23.9524935, -46.4029801], { icon }).addTo(map)


//image galery

function selectImage(event) {
    const button = event.currentTarget;
    console.log(button.children)

    //Remover todas as classes ativas
    const buttons = document.querySelectorAll(".images button")
        //console.log(buttons)

    buttons.forEach((button) => {
        button.classList.remove("active");
    })

    // OU...

    // buttons.forEach(removeActiveClass)

    // function removeActiveClass(button){
    //     button.classList.remove("active");
    // }

    //Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details>img");

    //Atualizar o container de imagem
    imageContainer.src = image.src;

    //Adicionar a classe .active para este botão clicado
    button.classList.add("active")
}