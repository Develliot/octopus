import { NextPageContext } from 'next';
// import isoFetch from 'isomorphic-unfetch';

import data from 'src/data/lightBulbs.json';

import { H1, Paragraph } from 'src/components/Typography';
import {
    PageWrapper,
    PageContent,
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';

import ProductOverview from 'src/components/ProductOverview';

import { ProductType } from 'src/types';

type Props = {
    isError: boolean;
    products: ProductType[] | null;
};
export const Shop = ({ isError, products }: Props) => {
    if (isError) {
        // TODO show error component, possibly with a retry button
    }
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock>
                    <ContentWrapper>
                        <VerticalSpacer size='extraExtraLarge' />
                        <H1>Light bulbs</H1>
                        <VerticalSpacer size='large' />
                        <Paragraph>
                            Here are some amazing light bulbs.
                        </Paragraph>
                        <VerticalSpacer size='large' />
                        {products && products.length
                            ? products.map(lightBulb => (
                                  <ProductOverview
                                      product={lightBulb}
                                      key={lightBulb.id}
                                  />
                              ))
                            : null}
                    </ContentWrapper>
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

// This bit is how next.js inject data for SSR
Shop.getInitialProps = async (context: NextPageContext) => {
    let products: ProductType[] | null = null;
    let isError: boolean = false;

    try {
        // For get request
        // const url = `https://somthing.api/products/`;
        // const res = await isoFetch(url);
        // const json = await res.json();
        // product = json.results[0];
        // isError = res.status > 299 ? true : false;

        // TODO: A way to retry functions on the client if they fail in ssr hooks can't be used in ssr
        // TODO: consider pagination, totally dependent on the API
        // TODO: Do we want to store these locally or keep requesting on each page
        // incase of live changes in price and stock availability
        // Does the API cache these requests in memory until the data changes

        // this bit doesn't need to be async
        // it's all set up async for the non-existent api call
        const lightBulbs: ProductType[] | null = await data;
        products = lightBulbs || null;
    } catch (error) {
        isError = true;
    }

    return { products, isError };
};

export default Shop;
