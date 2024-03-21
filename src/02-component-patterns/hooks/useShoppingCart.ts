import { useState } from "react";
import { Product } from "../interfaces/prodInterfaces";

interface ProductInCart extends Product {
    count: number;
}

const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [ key:string ]: ProductInCart}>({});


    const onChangeProductCount = ({ count, product }: { count: number, product: Product }) => {
        //console.log('Cambio en el contador', count, product);

        // Eliminar del carrito, si el contador es 0
        if ( count === 0 ) {
            const newShoppingCart = { ...shoppingCart };
            delete newShoppingCart[ product.id ];
            setShoppingCart( newShoppingCart );
            return;
        }

        // Agregar al carrito
        setShoppingCart({
            ...shoppingCart,
            [ product.id ]: {
                ...product,
                count
            }
        });
    };

    return {
        shoppingCart,
        onChangeProductCount
    };
}

export default useShoppingCart;