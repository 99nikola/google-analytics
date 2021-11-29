import type { GetStaticProps, NextPage } from "next"

interface ProductsProps {
    products: string
}

const Products: NextPage<ProductsProps> = (props) => {
    return (
        <h1>Products page: {props.products}</h1>
    );
}

export const getStaticProps: GetStaticProps = () => {
    const props: ProductsProps = {
        products: "PRODUCTS"
    }
    return ({
        props
    });
}

export default Products
