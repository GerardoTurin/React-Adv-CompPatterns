//import ProductCard from "../components/ProductCard";
import ProductCard, { ProductImage, ProductTitle, ProductsButtons } from '../components';
import { Product } from '../interfaces/prodInterfaces';
import '../styles/custom-styles.css';
import { products } from '../data/productsData';
import useShoppingCart from '../hooks/useShoppingCart';





const ShoppingPage = () => {
    const { shoppingCart, onChangeProductCount } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
            }}>
                {/* Estructura 1 */}
                {/* <ProductCard product={ product } className='bg-dark text-white'>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white' />
                    <ProductsButtons className='custom-buttons' />
                </ProductCard> */}
                
                {/* <ProductCard product={ product } style={{ backgroundColor: 'lightblue', textAlign: 'center' }}>
                    <ProductImage style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)' }} />
                    <ProductTitle title='Cerveza' style={{ fontWeight: 'bold'}} />
                    <ProductsButtons style={{ display: 'flex', justifyContent: 'center' }} />
                </ProductCard> */}

                {/* Estructura 2 */}
                {/* <ProductCard product={ product_2 } >
                    <ProductCard.Image  className='custom-image' />
                    <ProductCard.Title title='Jarra Coca' className='text-dark' />
                    <ProductCard.Buttons />
                </ProductCard> */}

                {/* Estructura 3 */}
                {
                    products.map( ( product: Product ) => {
                        return (
                            <ProductCard 
                                key={ product.id } 
                                product={ product } 
                                className='bg-dark text-white'
                                onChange={ onChangeProductCount }
                                value={ shoppingCart[ product.id ]?.count || 0}  // Si el producto no existe, el valor es 0.
                                >
                                <ProductImage className='custom-image' />
                                <ProductTitle className='text-white' />
                                <ProductsButtons className='custom-buttons' />
                            </ProductCard>
                        )
                    })
                }
            </div>
            <div className="shoppng-cart">
                {
                    Object.entries(shoppingCart).map( ([ key, product ]) => {

                        return (
                            <ProductCard 
                                key={ key }
                                product={ product } 
                                className='bg-dark text-white'
                                style={{ width: '100px', margin: 'auto' }}
                                onChange={ onChangeProductCount }
                                value={ product.count }>
                                <ProductImage className='custom-image' />
                                <ProductsButtons className='custom-buttons' />
                            </ProductCard>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ShoppingPage;