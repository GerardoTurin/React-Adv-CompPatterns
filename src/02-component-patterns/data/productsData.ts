import coffeeMug from '../../../public/coffee-mug.png';
import coffeeMug2 from '../../../public/coffeemug2.png';
import { Product } from '../interfaces/prodInterfaces';


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: coffeeMug
};


const product_2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: coffeeMug2
};


export const products: Product[] = [ product, product_2 ];