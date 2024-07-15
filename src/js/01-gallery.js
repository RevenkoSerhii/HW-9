import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const gallery = document.querySelector(".gallery");

makeItemGallery(galleryItems);
function makeItemGallery (galleryItems){
    const items = galleryItems.map(({original, preview, description}) => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}" />
        </a>
        </li>`
    ).join("");
    
    gallery.innerHTML = items;
};

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  console.log(lightbox)
  
console.log(galleryItems);
