import { ReactElement, createContext } from 'react';
import useProduct from '../hooks/useProduct';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/prodInterfaces';
import styles from '../styles/styles.module.css';



export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];    // Se le dice que puede recibir un elemento o varios elementos de React
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
}


export const ProductContext = createContext( {} as ProductContextProps );   // Se crea el contexto con un valor inicial vacio
const { Provider } = ProductContext;    // Se extrae el provider del contexto



const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {
    const { counter, handleAdd, handleMinus } = useProduct({ onChange, product, value });


    return (
        <Provider value={{ counter, handleAdd, handleMinus, product }}>
            <div className={ `${ styles.productCard } ${ className }` } style={ style }>
                { children }
            </div>
        </Provider>
    )
};


export default ProductCard;