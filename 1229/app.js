"use strict";

let app = new Vue({
    el: "#app",
    data: {
        serverName: "http://localhost:1981",
        albums: [],
        searchInput: "",
        yearSelected: "all",
        newAlbum: {
            releaseDate: "",
            artist: "",
            album: "",
            image: "",
            tags: "",
            id: ""
        },
        modalMode: {
            edit: false,
            new: false
        }
    },
    methods: {
        init: function () {
            fetch(app.serverName + "/albums")
                .then(function (response) {
                    response.json()
                        .then(function (albums) {
                            // Išsisaugom visus albumus
                            app.albums = albums;
                        });
                })
        },
        getTags: function (tags) {
            return tags.split(",");
        },
        editAlbum: function (album) {
            this.modalMode.edit = true;
            this.modalMode.new = false;
            this.newAlbum.releaseDate = album.releaseDate;
            this.newAlbum.artist = album.artist;
            this.newAlbum.album = album.album;
            this.newAlbum.tags = album.tags;
            this.newAlbum.id = album.id;
            this.newAlbum.image = album.image;
        },
        saveEditedAlbum: function () {
            fetch(app.serverName + "/albums/" + this.newAlbum.id, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.newAlbum)
            }).then(function (response) {
                app.albums.forEach(function (album, index) {
                    if (album.id == app.newAlbum.id) {
                        Vue.set(app.albums, index, app.newAlbum);
                    }
                    console.log("Album edited");
                })

            })
        },
        deleteAlbum: function (album) {
            let confirmation = window.confirm("Ar tikrai norite ištrinti albumą?");
            if (confirmation) {
                fetch(app.serverName + "/albums/" + album.id, {
                    method: "DELETE",
                }).then(function (response) {
                    app.albums = app.albums.filter(function (item) {
                        return item.id !== album.id;
                    })
                    console.log("Albumas ištrintas");
                })
            }
        },
        processFile: function (event) {
            this.newAlbum.image = event.target.files[0] ? event.target.files[0].name : "";
        },
        saveAlbum: function () {
            let album = {
                artist: this.newAlbum.artist,
                album: this.newAlbum.album,
                releaseDate: this.newAlbum.releaseDate,
                tags: this.newAlbum.tags,
                image: this.newAlbum.image
            }
            // Saugom į serverį
            fetch(app.serverName + "/albums", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(album)
            }).then(function (response) {
                response.json().then(function (result) {
                    album.id = result.id;
                    app.albums.push(album);
                })
            })
        },
        clearForm: function () {
            let image = document.getElementById("fileInput");
            image.value = "";
            this.newAlbum = {
                releaseDate: "",
                artist: "",
                album: "",
                tags: ""
            }
        }
    },
    computed: {
        filteredAlbums: function () {
            return this.albums.filter(function (album) {
                let yearFiltered = false
                let searchInput = app.searchInput.toLowerCase();
                let searchList = album.album.toLowerCase() + album.artist.toLowerCase();
                if (app.yearSelected == "all" || album.releaseDate == app.yearSelected) {
                    yearFiltered = true;
                }
                return searchList.includes(searchInput) && yearFiltered;
            })

        },
        albumYears: function () {
            let yearArray = [];
            this.albums.forEach(function (album) {
                if (yearArray.indexOf(album.releaseDate) == -1) {
                    yearArray.push(album.releaseDate);
                }
            })
            return yearArray.sort();
        }
    }
})
app.init();

$('#newAlbum').on('hidden.bs.modal', function (e) {
    app.clearForm();
})