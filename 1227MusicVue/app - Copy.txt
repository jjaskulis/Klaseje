"use strict";

let app = new Vue({
    el: "#app",
    data: {
        albums: [],
        searchInput: "",
        newAlbum: {
            year: "",
            artist: "",
            name: "",
            image: "",
            tags: "",
            id: ""
        }
    },
    methods: {
        getTags: function (tags) {
            return tags.split(",");
        },
        deleteAlbum: function (album) {
            fetch(serverName + "/albums/" + album.id, {
                method: "DELETE",
            }).then(function (response) {
                app.albums = app.albums.filter(function (item) {
                    return item.id !== album.id;
                })
                console.log("Albumas ištrintas");
            })
        },
        processFile: function (event) {
            this.newAlbum.image = event.target.files[0] ? event.target.files[0].name : "";
        },
        saveAlbum: function () {
            // Saugom į serverį
            fetch(serverName + "/albums", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.newAlbum)
            }).then(function (response) {
                response.json().then(function (result) {
                    app.newAlbum.id = result.id;
                    app.albums.push(app.newAlbum);

                })
            })
        }
    },
    computed: {
        filteredAlbums: function () {
        
            if (this.searchInput !== "") {
                return this.albums.filter(function (album) {
                    let searchInput = app.searchInput.toLowerCase();
                    let searchList = album.name.toLowerCase()+album.artist.toLowerCase();
                    return searchList.includes(searchInput);
                })
            } else {
                return this.albums
            };
        },
        albumYears: function(){
            let yearArray = [];
             this.albums.forEach(function(album){
                yearArray.push(album.year);
            })
            console.log(yearArray);
            return yearArray;
        }
    }
})