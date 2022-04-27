
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryItemsList = document.querySelector(".gallery") 





    // let galleryList = [];

// galleryItems.forEach(item => {
        
//         const galleryItem = document.createElement('div');
//         galleryItem.classList.add('gallery__item');

//         const galleryLink = document.createElement('a');
//         galleryLink.classList.add('gallery__link');
//         galleryLink.href = `${item.original}`;

//         const galleryImage = document.createElement('img');
//         galleryImage.classList.add('gallery__image');
//         galleryImage.src = `${item.preview}`;
//         galleryImage.dataSource = `${item.original}`;
//         galleryImage.alt = `${item.description}`;
      
//         galleryLink.append(galleryImage);
//         galleryItem.append(galleryLink);
//         // console.log(galleryItem);
//         galleryList.push(galleryItem);
//     }
//     )
//     galleryItemsList.append(...galleryList)

    
const listItems = galleryItems
    .map(galleryItems =>            
      `<div class="gallery__item"><a class="gallery__link" href=${galleryItems.original}><img class="gallery__image" src=${galleryItems.preview} data-source = ${galleryItems.original} alt ='${galleryItems.description}'/></a></div>`)
    
    .join("")

galleryItemsList.insertAdjacentHTML("afterbegin", listItems)


galleryItemsList.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
     if (evt.target.nodeName !== 'IMG') {
         return
     }
    
    	const html = `<div class="modal"><img width=100%" height="100%" src = ${evt.target.dataset.source} ></div>`
		const instance = basicLightbox.create(html, {onShow: (instance) => console.log('onShow', instance),
		onClose: (instance) => console.log('onClose', instance)
	})

	instance.show()

	// setTimeout(() => {
	// 	instance.close()
	// }, 3000)


    window.addEventListener("keydown", event => {

    if (event.code === 'Escape') {
        instance.close()
  }
});

}





