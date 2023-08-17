import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGalleryRef = document.querySelector(".gallery");


const createRef = () =>
  galleryItems
    .map(
      (obj) => `<li class="gallery__item">
        <img src="${obj.preview}" alt="${obj.description}"data-original ="${obj.original}" class="gallery__image"/>
        </li>`
    )
    .join("");

listGalleryRef.insertAdjacentHTML("beforeend", createRef())



const currentClick = (event) => {
  if (event.target === event.currentTarget) {
    return
  }

  const basicEl = basicLightbox.create(`<div class="modal">
  <li class="gallery__item">
        <img src="${event.target.dataset.original}" alt="${event.target.description}"data-original ="${event.target.original}" class="gallery__image"/>
        </li></div>`)
  

  basicEl.show()


  const divLightbox = document.querySelector(".basicLightbox")
  
divLightbox.addEventListener("click", () => {
  divLightbox.classList.toggle("basicLightbox--visible")
})
  
  document.addEventListener("keyup", (evn) => {
  console.log(evn.key);
  if (evn.key === "Escape") {
     divLightbox.classList.remove("basicLightbox--visible")
  }
  })
  
}

  
listGalleryRef.addEventListener("click", currentClick)
 
 
