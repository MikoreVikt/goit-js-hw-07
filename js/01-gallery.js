import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.innerHTML = galleryMarkup;

galleryContainerRef.addEventListener(`click`, clickOnImgElGallery);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

let instance;

function clickOnImgElGallery(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.dataset.alt}">`
  );

  instance.show();

  document.addEventListener(`keydown`, clickOnEsc);
}

function clickOnEsc(event) {
  if (event.code !== `Escape`) {
    return;
  }
  instance.close();
  document.removeEventListener(`keydown`, clickOnEsc);
}
