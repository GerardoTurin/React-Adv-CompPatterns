import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface ProductsButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}



export const ProductsButtons = ({ className, style }: ProductsButtonsProps) => {
    const { counter, handleAdd, handleMinus } = useContext( ProductContext );   // Se extraen las funciones del contexto

    return (
        <div className={ `${ styles.buttonsContainer } ${ className }` } style={ style }>
            <button className={ styles.buttonMinus } onClick={ () => handleMinus( 1 ) }>
                -
            </button>

            <div className={ styles.countLabel }>
                { counter }
            </div>

            <button className={ styles.buttonAdd } onClick={ () => handleAdd( 1 ) }>
                +
            </button>
        </div>
    )
};