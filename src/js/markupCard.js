import { refs } from './refs';

const apiKey = '9247604179ba4f8029cfb34035e24946';

async function fetchTrending() {
    return await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=uk`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        });
}

function fetchGeres() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=uk`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        });
}

fetchGeres()
    .then(data => console.log(data))
    .catch(error => console.log(error))

fetchTrending()
    .then(data => {
        console.log(data);

        const galleryItems = data.results
            .map(({ title, vote_average, release_date, poster_path }) =>
                `<div class="films-gallery__item">
            <a href="#!" class="films-gallery__link gallery-card">
            <div class="gallery-card__image-container" style="background-color:#455643;">
            <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" class="gallery-card__image" />
            </div>
            <div class="gallery-card__container">
            <p class="gallery-card__title">${title}</p>
            <p class="gallery-card__text">Drama, Comedy | ${release_date.slice(0, 4)} 

            ${vote_average ? `<span class="gallery-card__rating">${vote_average}</span>` : ''}
            </p>
            </div>
        </a>
        </div>`)
            .join('');

        refs.galleryRef.insertAdjacentHTML("beforeend", galleryItems);
    })
    .catch(error => console.log(error))

////////////////////////////////////////////////////////////////

// const galleryItems = colorsCard
//     .map(({ hex, rating }) =>
//         `<div class="films-gallery__item">
//           <a href="#!" class="films-gallery__link gallery-card">
//             <div class="gallery-card__image" style="background-color:${hex};">
//               <img src="#!" alt="test" />
//             </div>
//             <div class="gallery-card__container">
//               <p class="gallery-card__title">ONCE UPON A TIME... IN HOLLYWOOD</p>
//               <p class="gallery-card__text">Drama, Comedy | 2019

//               ${rating ? `<span class="gallery-card__rating">${rating}</span>` : ''}
//                </p>
//             </div>
//           </a>
//         </div>`)
//     .join('');

// galleryRef.insertAdjacentHTML("beforeend", galleryItems);