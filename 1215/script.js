var form = document.querySelector("form");
var submitBtn = document.querySelector(".modal .modal-footer > .btn-primary");
var closeBtn = document.querySelector(".modal .modal-footer > .btn-default");
const albumListElement = document.querySelector(".album-list");
var artistInput = document.getElementById("artist");
var albumInput = document.getElementById("album");
var dateInput = document.getElementById("releaseDate");
var imageInput = document.getElementById("image");

let albums = [];


function Album(artist, name, date, image) {
    this.artist = artist;
    this.name = name;
    this.date = date;
    this.image = image;
}

submitBtn.addEventListener("click", function(){
    let data = collectData();
    pushAlbum(data);
});

(function () {
    let renderArray = [];
    if (localStorage) {
        for(let x = 1; x <= localStorage.length; x++){
        
            renderArray.push(JSON.parse(localStorage[x]));
        }
    }
    render(renderArray);
})()

function collectData() {
    artistInput = artistInput.value || "";
    albumInput = albumInput.value || "";
    dateInput = dateInput.value || "";
    imageInput = imageInput.files[0] ? imageInput.files[0].name : "";
    return new Album(artistInput, albumInput, dateInput, imageInput);
}

function pushAlbum(newAlbum) {
    let albumID = localStorage.length + 1;
    newAlbum = JSON.stringify(newAlbum);
    localStorage.setItem(albumID, newAlbum);
}

function render(album){
    let htmlRender ="";
    album.forEach(function(item){
        htmlRender += `
        <div class="album clearfix panel panel-default">
            <div class="panel-body">
                <img src="img/${item.image}" alt="" class="pull-left">
                <div class="album-info">
                <h1>${item.artist}</h1>
                <h3>${item.name}</h3>
                Date: ${item.date}
                </div>
            </div>
        </div>`
    })
    albumListElement.innerHTML = htmlRender;
}