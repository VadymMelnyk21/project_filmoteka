const apiKey = '9247604179ba4f8029cfb34035e24946';

export async function fetchTrending() {
    return await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=uk`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        });
}

export function fetchGeres() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=uk`)
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
