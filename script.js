// fetch('https://api.spotify.com/v1/search?query=five+finger+death+punch&type=artist', {
//             method: 'GET', headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + "BQCSI5DVJEs--iiJtkhtZt9ClR1-cEi56wEqhTk9QYiQIVuNptGw7cum2wa7eS99G8jWkevFzznSZXPOe18Le1VzEXXKQrIg27duqkAKeXaNSYf3uxHLpRdR_HqGiiIEAMb9zlq3qfLSxNCS"
//             }
//         })
//             .then((response) => {
//                 console.log(response.json().then(
//                     (data) => { console.log(data) }
//                 ));
//             });


fetch('https://api.genius.com/search?q=Kendrick%20Lamar', {

    method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + "7A9b7GcTBshdtsCU0K4_t5Ea4-o9VIONdcTpylb2s-tVZNy3G50NO1bWLV5fCkIp"
    }
})
    .then((response) => {
        console.log(response.json().then(
            (data) => { console.log(data) }
        ));
    });

