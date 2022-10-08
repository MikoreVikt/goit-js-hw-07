import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.innerHTML = galleryMarkup;

let lightbox;

galleryContainerRef.addEventListener(`click`, clickOnImgElGallery);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img loading="lazy" class="gallery__image lazyload" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

function clickOnImgElGallery(event) {
  event.preventDefault();

  lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
