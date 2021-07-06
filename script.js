var nameEl = document.querySelector("#song-name")
var searchBtnEl = document.querySelector("#searchBtn")
var songlistEl = document.querySelector("#songlist")
var lyricListEl = document.querySelector("#lyriclist")

var searchHandler = function() {
    
    var search = nameEl.value
    if (search){
        getSpotify(search)
        getGenius(search)
        nameEl.value = ""
    } else {
        alert("Please enter a song name")
    }
}

var getSpotify = function(searchTerm) {
fetch('https://api.spotify.com/v1/search?query='+searchTerm+'&type=track', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + "BQAtZBs33K3DiY-z_JFsKf12zKjOj2u5y9FCeVNTGwy8_-B_Ph7QeXF86FfgRWShqUHQezjXZNAp8TzdQHpTVdLohmcEQyTe-78Y79On1NE6GiEBDWOtskD933ZYiNIkyJL0K4bSnfjcZA42"
            }
        })
            .then((response) => {
                console.log(response.json().then(
                    (data) => { console.log(data)
                    displaySpotify(data)
                }
                ));
            });
}
var getGenius = function(searchTerm){
fetch("https://api.genius.com/search?q="+searchTerm+"&access_token=7A9b7GcTBshdtsCU0K4_t5Ea4-o9VIONdcTpylb2s-tVZNy3G50NO1bWLV5fCkIp")
    .then((response) => {
        console.log(response.json().then(
            (data) => { console.log(data) 
            displayGenius(data)}
        ));
    });
}
//Display Search Results from Spotify    
var displaySpotify = function(spotifyData) {
    for (let i = 0; i < spotifyData.tracks.limit; i++) {
        songlistEl.innerHTML += `<a href="${spotifyData.tracks.items[i].external_urls.spotify}">${spotifyData.tracks.items[i].name + " by " + spotifyData.tracks.items[i].artists[0].name}</a><br>`
    }
}

//Display search results from Genius
var displayGenius = function(geniusData) {
    for (let i = 0; i < geniusData.response.hits.length; i++) {
        lyricListEl.innerHTML += `<a href="${geniusData.response.hits[i].result.url}">${geniusData.response.hits[i].result.full_title}</a><br>`
    }

}

searchBtnEl.addEventListener("click", searchHandler)