import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryItemsList = document.querySelector(".gallery") 


const listItems = galleryItems
    .map(galleryItems => 
       `<a class="gallery__item" href=${galleryItems.original}><img class="gallery__image" src=${galleryItems.preview} alt = '${galleryItems.description}'/></a>`           
      )
    
    .join("")

galleryItemsList.innerHTML = listItems
    
galleryItemsList.addEventListener('click', onClick);

new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

function onClick(evt) {
    evt.preventDefault();  
}