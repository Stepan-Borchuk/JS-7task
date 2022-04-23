
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryItemsList = document.querySelector(".gallery") 





    let galleryList = [];

    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery__item');

        const galleryLink = document.createElement('a');
        galleryLink.classList.add('gallery__link');
        galleryLink.href = `${item.original}`;

        const galleryImage = document.createElement('img');
        galleryImage.classList.add('gallery__image');
        galleryImage.src = `${item.preview}`;
        galleryImage.dataSource = `${item.original}`;
        galleryImage.alt = `${item.description}`;
      
        galleryLink.append(galleryImage);
        galleryItem.append(galleryLink);
        // console.log(galleryItem);
        galleryList.push(galleryItem);
    }
    )
    galleryItemsList.append(...galleryList)    


galleryItemsList.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();

    // console.log(evt.target.dataSource)

    const instance = basicLightbox.create(`<div class="modal"><img width=100%" height="100%" src = ${evt.target.dataSource} ></div>`)

instance.show()
}

window.addEventListener("keydown", event => {

    const isModal = document.querySelector('.basicLightbox')

    if (event.code === 'Escape' && isModal) {
        isModal.remove();
  }
});



