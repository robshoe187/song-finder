var nameEl = document.querySelector("#song-name")
var searchBtnEl = document.querySelector("#searchBtn")
var search = nameEl.value

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
                'Authorization': 'Bearer ' + "BQBwCOk42eVvBpHWj2kaUR-Iwwrb3I7MgJa7NsJ63LWYw5cMRoThah07wDHD_vTen2MZqqcr3HO1D20BCZofYkwuw23oOmySoJtW35yA8qYKpMa4XH6Emtar_yMkA8hoGqmb4iFa6ADEp9DY"
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
        console.log(spotifyData.tracks.items[i].name + " by " + spotifyData.tracks.items[i].artists[0].name)
    }
}

//Display search results from Genius
var displayGenius = function(geniusData) {
    for (let i = 0; i < geniusData.response.hits.length; i++) {
        console.log(geniusData.response.hits[i].result.full_title)
        
    }
}

searchBtnEl.addEventListener("click", searchHandler)