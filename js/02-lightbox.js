import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryItemsList = document.querySelector(".gallery") 


 let galleryList = [];

    galleryItems.forEach(item => {
        const galleryLink = document.createElement('a');
        galleryLink.classList.add('gallery__item');
        galleryLink.href = `${item.original}`;

        const galleryImage = document.createElement('img');
        galleryImage.classList.add('gallery__image');
        galleryImage.src = `${item.preview}`;
        galleryImage.alt = `${item.description}`;

        galleryLink.append(galleryImage);
        
        galleryList.push(galleryLink);
    }
    )

galleryItemsList.append(...galleryList)    
    
galleryItemsList.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();

    new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});
}