import { galleryItems } from "./gallery-items.js";

const galleryItemsList = document.querySelector(".gallery");

let modalImg;

const onEscKeyPress = (e) => {
  if (e.key === "Escape") modalImg.close();
};
// console.log(galleryItems.original)

const listItems = galleryItems
    .map(galleryItems =>            
      `<div class="gallery__item">
        <a class="gallery__link" href=${galleryItems.original}>
          <img
            class="gallery__image"
            src=${galleryItems.preview} 
            data-source = ${galleryItems.original} 
            alt ='${galleryItems.description}'
          >
        </a>
      </div>`)
    .join("")

galleryItemsList.insertAdjacentHTML("afterbegin", listItems)

galleryItemsList.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  const modalHtml =
    `<img
        width=100%"
        height="100%"
        src = ${e.target.dataset.source}
      >`;

     modalImg = basicLightbox.create(modalHtml, {
      onShow: () => galleryItemsList.addEventListener("keydown", onEscKeyPress),
      onClose: () => galleryItemsList.removeEventListener("keydown", onEscKeyPress),
    });
  modalImg.show();
  
  	// setTimeout(() => {
		// modalImg.close()
    // }, 5000)
};

