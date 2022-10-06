// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    gallery: document.querySelector('.gallery'),
};


refs.gallery.insertAdjacentHTML('beforeend', createCardImageMarkup(galleryItems));

function createCardImageMarkup (images) {
    return images.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
                 src="${preview}" 
                 alt="${description}"/>
        </a>  
        `}).join('');
};

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});