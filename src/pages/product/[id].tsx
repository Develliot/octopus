// import isoFetch from 'isomorphic-unfetch';
import { NextPageContext } from 'next';

import data from 'src/data/lightBulbs.json';
import { ColorBlock, PageWrapper } from 'src/components/Layout';
import Product from 'src/components/Product';

import { ProductType } from 'src/types';

type Props = {
    isError: boolean;
    product: ProductType | null;
};

export const ProductPage = ({ product, isError }: Props) => {
    if (isError) {
        // TODO error page
    }

    if (!product) {
        // TODO empty state
        return null;
    }

    return (
        <PageWrapper>
            <ColorBlock color='darkBlue' padding={false}>
                <Product product={product} />
            </ColorBlock>
        </PageWrapper>
    );
};

ProductPage.getInitialProps = async (context: NextPageContext) => {
    const queryId: number = parseInt(context.query.id.toString());
    let product: ProductType | null = null;
    let isError: boolean = false;

    try {
        // For get request
        // const url = `https://somthing.api/product/${queryId}`;
        // const res = await isoFetch(url);
        // const json = await res.json();
        // product = json.results[0];
        // isError = res.status > 299 ? true : false;

        // this doesn't need to be async
        //it's just all prep for the potential api call
        const lightBulbs: ProductType[] | null = await data;
        const lightBulb = lightBulbs
            ? lightBulbs.find(lightBulb => lightBulb.id === queryId)
            : null;
        product = lightBulb || null;
    } catch (error) {
        isError = true;
    }

    return { product, isError };
};

export default ProductPage;
