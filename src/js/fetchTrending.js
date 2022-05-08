const apiKey = '9247604179ba4f8029cfb34035e24946';

function fetchTrending() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        });
}


// fetchTrending()
//     .then(data => { console.log(data) })
//     .catch(error => console.log(error))
