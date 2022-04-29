
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
    const instance = basicLightbox.create(html, {
        onShow: () => 
            {
            this.addEventListener("keydown", event => {
                if (event.code === 'Escape') {
                    instance.close(
                };
            });
                    
            console.log('onShow', instance); 
            // console.log(this); 
            
            
        },
        onClose: () => {
            window.removeEventListener('keydown', event);
            console.log('onClose', instance);
        }
	})

	instance.show()

	// setTimeout(() => {
	// 	instance.close()
    // }, 3000)
    
    //  onShow: (instance) => {
    //     instance.element().querySelector('a').onclick = instance.close
    // }
}

// function onImgClick(evt) {
//     console.log(evt.target)
// }



document.querySelector('.modal').addEventListener('click', () => {console.log('hrehh')});



import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let modalWindow;

const handleGalleryClick = (e) => {
  e.preventDefault();

  const srcImage = e.target.getAttribute("data-source");

  if (srcImage) {
    modalWindow = basicLightbox.create(`<img id="preview" src="${srcImage}">`, {
      onShow: () => gallery.addEventListener("keydown", handleToggler),
      onClose: () => gallery.removeEventListener("keydown", handleToggler),
    });
    modalWindow.show();
  }
};

const handleToggler = (e) => {
  if (e.key === "Escape") modalWindow.close();
};

const renderGallery = () => {
  const imagesHTML = galleryItems.map(
    (item) =>
      `
          <li class="gallery__item">
              <a class="gallery__link" href="${item.original}">
                  <img 
                      class="gallery__image" 
                      src="${item.preview}" 
                      alt="${item.description}" 
                      data-source="${item.original}"
                  >
              </a>
          </li>
          `
  );

  gallery.innerHTML = imagesHTML.join("");
};

renderGallery();

gallery.addEventListener("click", handleGalleryClick);