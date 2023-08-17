import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listGalleryRef = document.querySelector(".gallery");

const createRef = () => {
   return galleryItems
    .map(
      (obj) => `<li class="gallery__item">
   <a class="gallery__link" href="${obj.original}">
      <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
   </a>
</li>`
    )
    .join("");
}
    

listGalleryRef.insertAdjacentHTML("beforeend", createRef());

const gallery = new SimpleLightbox(`.gallery__item a`, {
    captionsData: "alt",
    captionDelay: 250
})
    





