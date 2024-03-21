import { ProductImageProps, ProductTitleProps, ProductsButtonsProps } from "../components";
import { ProductCardProps } from "../components/ProductCard";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps  {
    counter: number;
    handleAdd: ( value: number ) => void;
    handleMinus: ( value: number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element;
    Title: ( Props: ProductTitleProps ) => JSX.Element;
    Image: ( Props: ProductImageProps ) => JSX.Element;
    Buttons: ( Props: ProductsButtonsProps ) => JSX.Element;
}


export interface onChangeArgs {
    product: Product;
    count: number;
}



