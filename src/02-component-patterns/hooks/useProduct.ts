import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/prodInterfaces";


interface useProductProps {
    product:Product;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
}


const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {
    const [counter, setCounter] = useState( value );

    const handleAdd = ( value: number ) => {
        const newValues = Math.max( 0, counter + value );

        setCounter( newValues );
        onChange && onChange({ count: newValues, product });
    };

    const handleMinus = ( value: number ) => {
        if ( counter > 0 ) {
            setCounter( prevCounter => prevCounter - value );
            onChange && onChange({ count: counter - value, product });
        }
    };


    // Actualizar el contador si el valor cambia
    useEffect(() => {
        setCounter( value );
    }, [value]);



    return {
        counter,
        handleAdd,
        handleMinus
    };
};

export default useProduct;