import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.innerHTML = galleryMarkup;

galleryContainerRef.addEventListener(`click`, (event) =>
  event.preventDefault()
);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  docClose: true,
});

// ===========================================================================================================================
// The code below allows you to implement `loading="lazy"` provided that the browser does not natively support such a function.
// ===========================================================================================================================

if ("loading" in HTMLImageElement.prototype) {
  console.log("Браузер поддерживает lazyload ");
  addSrcToLazyImg();
} else {
  console.log("Браузер не поддерживает lazyload ");
  addScriptLazyImg();
}

function addSrcToLazyImg() {
  const imageSrc = document.querySelectorAll(`img[data-src]`);
  imageSrc.forEach((img) => {
    img.src = img.dataset.src;
  });
}

function addScriptLazyImg() {
  const script = document.createElement(`script`);
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossorigin = "anonymous";
  script.referrerpolicy = "no-referrer";

  body.insertAdjacentHTML(`beforend`, script);
}
