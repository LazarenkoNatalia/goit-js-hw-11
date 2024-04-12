import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api";

import { createMarkup } from "./js/render-functions";

const PIXABAY_URL = "https://pixabay.com/api/"

const form = document.querySelector(".ask-form");
const container = document.querySelector(".container");
const load = document.querySelector(".loader");
 load.style.display = "none";

// const container = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);
//

// async function fetchData(url, options = {}) {
//     const response = await fetch(url, options);
//     if(!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return await response.json();
// }

function handleSubmit(event) {
    event.preventDefault();
 container.innerHTML = "";
    let ligthBox;

    load.style.display = "flex";
   
    const searchOption = event.target.elements.askChoice;
    const serh = searchOption.value;
    // console.log(searchOption);
    // console.log(serh);
    const API_KEY = "43258927-612e11e8a955b04f9334ad244"
    const pixOption = new URLSearchParams({
        key: "43258927-612e11e8a955b04f9334ad244",
        q: serh,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });
    
   
    fetchData(`${PIXABAY_URL}?${pixOption}`)
        .then(data => {
            load.style.display = "none";
            if (!data.total) {
                iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    backgroundColor: 'yellow',
                    color: 'white',
                    position: 'topRight',
                    close: true,
                    timeout: 5000
                })
            }
            container.insertAdjacentHTML("beforeend", createMarkup(data.hits))

            ligthBox = new SimpleLightbox('.container a', {
                captionsData: "alt", captionPosition: "bottom",
                captionDelay: 250
            });

            ligthBox.refresh();
        })

        
        .catch(error => alert(error))
        .finally(() => {
             load.style.display = "none";
            form.reset();
        })
}

// function createMarkup(arr) {
//     return arr.map(({id, largeImageURL, webformatURL, tags, likes, views, comments, downloads }
// ) => `
//         <li class="list-card">
//         <a class="gallery-link" href="${largeImageURL}">
//             <img src="${webformatURL}" alt="${tags}" class="short-card" >
//             <ul class="list-item" >
//             <li class="card-foot">
//             <div class="item" >
//             <p class="item-div">Likes</p>
//             <p class="item-div">${likes}</p>
//             </div> 
//             </li>
//             <li class="card-foot">
//             <div class="item" >
//             <p class="item-div">Views</p>
//             <p class="item-div">${views}</p>
//             </div> 
//             </li>
//             <li class="card-foot">
//             <div class="item" >
//             <p class="item-div">Comments</p>
//             <p class="item-div">${comments}</p>
//             </div> 
//             </li>
  
//             <li class="card-foot">
//             <div class="item" >
//             <p class="item-div">Downloads</p>
//             <p class="item-div">${downloads}</p>
//             </div> 
//             </li>
            
//             </ul>
//             </a>
//         </li>
//     `).join("")
// }