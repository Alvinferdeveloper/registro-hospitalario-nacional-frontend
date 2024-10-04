import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import '@/app/styles/carousel.css';

export default function Carousel({images}: { images: ReactImageGalleryItem[] }) {
    if(images.length == 0) return;
    return (
            <ImageGallery items={images}/>
    )
}