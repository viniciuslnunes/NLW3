//create map

const map = L.map("mapid").setView([-23.9524935, -46.4029801], 13);
//create and addd tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

let marker;

//Create and add marker
map.on("click", (event) => {
  // console.log(event)
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name = lat]").value = lat;
  document.querySelector("[name = lng]").value = lng;

  //Remove icon
  marker && map.removeLayer(marker);

  //Add icon tileLayer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// photos uploader
function addPhotoField() {
  //Pegar o container de fotos #images
  const container = document.querySelector("#images");
  //Pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //Realizar o clone da última imagem adicionada.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //Limpar o campo antes de adicionar ao container de imagens
  input.value = "";
  //Adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  //Verifica onde está sendo acionado o evento (SPAN)
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length < 2) {
    //Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  // Deletar o campo
  span.parentNode.remove();
}

//Select yes or no
function toggleSelect(event) {
  //Retirar a class .active (dos botões)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //Colocar a class .active nesse botão clicado
  const button = event.currentTarget;
  button.classList.add("active");
  //Pegar o botão clicado

  //Atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
  //Retirar a class .active (dos botões)
}
