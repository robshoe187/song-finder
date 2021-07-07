var nameEl = document.querySelector("#song-name")
var searchBtnEl = document.querySelector("#searchBtn")
var songlistEl = document.querySelector("#songlist")
var lyricListEl = document.querySelector("#lyriclist")
var searchHistory =  JSON.parse(localStorage.getItem("searches")) || {}

var searchHandler = function() {
    
    var search = nameEl.value
    if (search){
        getSpotify(search)
        getGenius(search)
        
        searchHistory[search] = null
        console.log(searchHistory)
        localStorage.setItem("searches",JSON.stringify(searchHistory))
        nameEl.value = ""
    } else {
        alert("Please enter a song name")
    }
}

var getSpotify = function(searchTerm) {
fetch('https://api.spotify.com/v1/search?query='+searchTerm+'&type=track&expires_in=600000', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + "BQAvVbbJrv6KLR27da7Dx7soq8XZ9r9QZw_UvlqDvKVn4J8K4035yo0yptbYwi53WC7gSpT3bYVIAyczS-R5Mc1gZBVaFCOhYPyCEotDay2UzwHl4-I4juRpVz5Nd0Lr5TdUG2Fo1zH2r6rq",
                // 'expires_in': 3600
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
        songlistEl.innerHTML += `<a href="${spotifyData.tracks.items[i].external_urls.spotify}" target="_blank">${spotifyData.tracks.items[i].name + " by " + spotifyData.tracks.items[i].artists[0].name}</a><br>`
    }
}

//Display search results from Genius
var displayGenius = function(geniusData) {
    for (let i = 0; i < geniusData.response.hits.length; i++) {
        lyricListEl.innerHTML += `<a href="${geniusData.response.hits[i].result.url}" target="_blank">${geniusData.response.hits[i].result.full_title}</a><br>`
    }

}

searchBtnEl.addEventListener("click", searchHandler)

$(document).ready(function(){

   

    $('#song-name').autocomplete({
      data:searchHistory,
    });
  });