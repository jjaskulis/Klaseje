"use sctrict"

//formos elementai
const albumListElement = document.querySelector(".album-list");
let artistInput = document.getElementById("artist");
let albumInput = document.getElementById("album");
let dateInput = document.getElementById("releaseDate");
let imageInput = document.getElementById("image");

//mygtukai ir fomra
const submitBtn = document.querySelector(".modal .modal-footer > .btn-primary");
const closeBtn = document.querySelector(".modal .modal-footer > .btn-default");
const form = document.querySelector("form");

let albums = [];
let url ="http://localhost:1987/albums"
//albumo kontruktorius
function Album(artist, name, date, image) {
    this.artist = artist;
    this.name = name;
    this.date = date;
    this.image = image;
    this.id = id;
}

submitBtn.addEventListener("click", function () {
    let data = collectData();
    pushAlbum(data);
    render(albums);
});

(function () {
    // if(localStorage.length){
        //local storage duomenys
        //albums = JSON.parse(localStorage["albums"]);
        //duomenys iš serverio
        fetch(url).then(function(response){
            response.json().then(function(data){
                albums = data;
                render(albums);
            })
        });
     
    // }
})()

function collectData() {
    let artist,
        album,
        date,
        image,
        id;
    artist = artistInput.value || "";
    album = albumInput.value || "";
    date = dateInput.value || "";
    image = imageInput.files[0] ? imageInput.files[0].name : "";
    return new Album(artist, album, date, image, id);
}

function pushAlbum(newAlbum) {
    albums.push(newAlbum);
    //saugom i serverį
    fetch(url,{
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: albums
        })
    }).then(function(response){
        console.log("success");
    })
    // localStorage.setItem("albums", JSON.stringify(albums));
}

function render(albums) {
    let htmlRender = "";
    albums.forEach(function (item) {
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