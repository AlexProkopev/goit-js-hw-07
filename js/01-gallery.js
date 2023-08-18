import { galleryItems } from "./gallery-items.js";
// Change code below this line

//? Создание элементов

const listGalleryRef = document.querySelector(".gallery");

const createRef = () =>
  galleryItems
    .map(
      ({preview,description,original}) => `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
       <img src="${preview}" alt="${description}"data-original ="${original}" class="gallery__image"/>
       </a>
        
        </li>`
    )
    .join("");

listGalleryRef.insertAdjacentHTML("beforeend", createRef());

//? Функция открытия модалки

const currentClick = (event) => {
  event.preventDefault()
  if (event.target === event.currentTarget) {
    return;
  }
  
  const {dataset,description,original} = event.target
  const basicEl = basicLightbox.create(`<div class="modal">
  <li class="gallery__item">
        <img src="${dataset.original}" alt="${description}"data-original ="${original}" class="gallery__image"/>
        </li></div>`);

  basicEl.show();

  //? Обработчик события закрытия модалки по клику на Escape

  const ESC = (evn) => {
    if (evn.key === "Escape") {
      console.log(evn.key);
      basicEl.close()
       document.removeEventListener("keyup", ESC)
    }
  }
  document.addEventListener("keyup", ESC);
  
  
};



listGalleryRef.addEventListener("click", currentClick);

