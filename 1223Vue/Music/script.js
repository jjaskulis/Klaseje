"use strict";

// Forma ir mygtukai
const formElement = document.querySelector("form");
const submitBtn = document.querySelector(".modal .modal-footer > .btn-primary");
const submitEditBtn = document.querySelector(".modal .edit-modal > .btn-primary");
const closeBtn = document.querySelector(".modal .modal-footer > .btn-default");
//search
const searchBtn = document.querySelector(".btn-search");
const searchInput = document.getElementById("search");


// Formos laukai
const artistInput = document.getElementById("artist");
const albumInput = document.getElementById("album");
const releaseDateInput = document.getElementById("releaseDate");
const imageInput = document.getElementById("image");
// Edit formos laukai
const artistInputEdit = document.getElementById("artist-edit");
const albumInputEdit = document.getElementById("album-edit");
const releaseDateInputEdit = document.getElementById("releaseDate-edit");
const imageInputEdit = document.getElementById("image-edit");

const albumListElement = document.querySelector(".album-list");

let allAlbums = [];
let selectedAlbum = "";
const serverUrl = "http://localhost:1987";

// Patikriname ar turime išsaugotą albumą localStorage
// Jei turime, tada atvaizduojame HTML'e
// if (localStorage.albums) {

// duomenys iš localStorage
// allAlbums = JSON.parse(localStorage.albums);


// duomenys iš serverio
fetch(serverUrl + "/albums")
    .then(function (response) {
        response.json()
            .then(function (albums) {
                // Išsisaugom visus albumus
                allAlbums = albums;
                // Spausdinam į HTML
                renderAlbums(albums);
            });
    })

// }

// Registruojam mygtuko paspausimą ant "Pridėti"
searchBtn.addEventListener("click", filterAlbums);
submitBtn.addEventListener("click", saveAlbum);

submitEditBtn.addEventListener("click", editAlbum);

// Funkcija, kuri saugo albumą
function saveAlbum() {
    let imageName = imageInput.files[0] ? imageInput.files[0].name : "";

    let album = {
        "artist": artistInput.value,
        "album": albumInput.value,
        "releaseDate": releaseDateInput.value,
        "image": imageName
    };

    // Išsaugome albumą į localStorage

    // Saugom į serverį
    fetch(serverUrl + "/albums", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(album)
    }).then(function (response) {
        response.json().then(function (newAlbum) {
            album.id = newAlbum.id;
            // Išsisaugom albumą į bendrą sąrašą
            allAlbums.push(album);
            // Atvaizduojame albumą HTML'e
            renderAlbums(allAlbums);
        })
    })
}

function deleteAlbum(id) {
    fetch(serverUrl + "/albums/" + id, {
        method: "DELETE"
    }).then(function (response) {
        console.log('istrinta is serverio');
    })
    allAlbums = allAlbums.filter(function (item, index, array) {
        return id != item.id;
    })
    renderAlbums(allAlbums);
}

function showAlbum(album) {
    artistInputEdit.value = album.artist;
    albumInputEdit.value = album.album;
    releaseDateInputEdit.value = album.releaseDate;
}

function editAlbum() {
    let album = selectedAlbum[0];
    album.artist = artistInputEdit.value;
    album.album = albumInputEdit.value
    album.releaseDate = releaseDateInputEdit.value;
    album.image = imageInputEdit.files[0] ? imageInputEdit.files[0].name : album.image;
    fetch(serverUrl + "/albums/" + album.id, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(album)
    }).then(function (response) {
        renderAlbums(allAlbums);
        console.log("Albumas pakoreguotas");
    });
}

function filterAlbums() {
    let searchItem = searchInput.value.toLowerCase();

    renderAlbums(allAlbums.filter(function (album) {
        let searchList = album.artist + album.album;
        return searchList.toLowerCase().includes(searchItem);
    }))
}

function renderAlbums(albums) {
    let resultHtml = '';

    // Išsisaugom kiekvieno albumo html
    albums.forEach(function (album) {
        resultHtml += `
            <div class="album clearfix panel panel-default" ">
                <div class="panel-body">
                    <img src="upload/${album.image}" alt="" class="pull-left" width="150">
                    <h3>${album.artist} - ${album.album}</h3>
                    Date: ${album.releaseDate}
                    <div class="panel-delete" data-id="${album.id}"> 
                    <button type="button" class="btn btn-sm btn-info"><a href="https://www.youtube.com/results?search_query=${album.artist.split(' ').join('+')}+${album.album.split(' ').join('+')}">Klausytis</a></button>
                    <button class="btn btn-sm btn-secondary btn-edit" data-toggle="modal" data-target="#editAlbum">Redaguoti</button>
                    <button class="btn btn-sm btn-danger btn-delete">Pašalinti</button></div>
                </div>
            </div>
        `;
    });

    // Viena operacija - įrašau visą rezultatą
    albumListElement.innerHTML = resultHtml;

    let deleteBtns = document.querySelectorAll(".btn-delete");
    let editBtns = document.querySelectorAll(".btn-edit");

    deleteBtns.forEach(function (button, nr) {
        button.addEventListener("click", function () {
            let id = button.parentElement.getAttribute("data-id");
            deleteAlbum(id);
        });
    })

    editBtns.forEach(function (button, nr) {
            button.addEventListener("click", function () {
                    let id = button.parentElement.getAttribute("data-id");
                    selectedAlbum = allAlbums.filter(function (album) {
                            return album.id == id;
                        })
                        showAlbum(selectedAlbum[0]);
                    });
            })
    }