"use strict";

const serverName = "http://localhost:1987";

// duomenys iš serverio
    fetch(serverName + "/albums")
        .then(function(response){
            response.json()
                .then(function(albums) {
                    // Išsisaugom visus albumus
                    app.albums = albums;
                });
        })

// }

