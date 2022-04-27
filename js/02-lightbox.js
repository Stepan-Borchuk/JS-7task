import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryItemsList = document.querySelector(".gallery") 


//  let galleryList = [];

//     galleryItems.forEach(item => {
//         const galleryLink = document.createElement('a');
//         galleryLink.classList.add('gallery__item');
//         galleryLink.href = `${item.original}`;

//         const galleryImage = document.createElement('img');
//         galleryImage.classList.add('gallery__image');
//         galleryImage.src = `${item.preview}`;
//         galleryImage.alt = `${item.description}`;

//         galleryLink.append(galleryImage);
        
//         galleryList.push(galleryLink);
//     }
//     )

// galleryItemsList.append(...galleryList)    

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