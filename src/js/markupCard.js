const colorsCard = [
    {
        hex: '#4287f5',
        rating: '8.0',
    },
    { hex: '#42f5d1' },
    {
        hex: '#7bf542',
        rating: '8.0',
    },
    { hex: '#f5ef42' },
    {
        hex: '#f58142',
        rating: '8.0',
    },
    { hex: '#f54242' },
    {
        hex: '#9342f5',
        rating: '8.0',
    },
    { hex: '#f542a4' },
    {
        hex: '#f542ef',
        rating: '8.0',
    },
    { hex: '#42daf5' },
];

const galleryRef = document.querySelector('[data-gallery]')

//////////////////////////////////////////////////////////////////

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

fetchTrending()
    .then(data => {
        console.log(data);
        const galleryItems = data.results
            .map(({ title, vote_average, release_date }) =>
                `<div class="films-gallery__item">
            <a href="#!" class="films-gallery__link gallery-card">
            <div class="gallery-card__image" style="background-color:#45564;">
            <img src="#!" alt="test" />
            </div>
            <div class="gallery-card__container">
            <p class="gallery-card__title">${title}</p>
            <p class="gallery-card__text">Drama, Comedy | ${release_date} 

            ${vote_average ? `<span class="gallery-card__rating">${vote_average}</span>` : ''}
            </p>
            </div>
        </a>
        </div>`)
            .join('');

        galleryRef.insertAdjacentHTML("beforeend", galleryItems);
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