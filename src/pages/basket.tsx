import { useContext } from 'react';
import { BasketContext } from 'src/contexts/BasketContext';

import {
    ColorBlock,
    ContentWrapper,
    VerticalSpacer,
    PageWrapper,
} from 'src/components/Layout';
import { H1, Span } from 'src/components/Typography';

import { ProductQuantityType } from 'src/types';

export const Basket = () => {
    const [state] = useContext(BasketContext);

    const { basket } = state;

    return (
        <PageWrapper>
            <ColorBlock>
                <ContentWrapper>
                    <VerticalSpacer size='extraExtraLarge' />
                    <H1>Basket</H1>
                    <VerticalSpacer size='medium' />
                    {!basket.length && <Span>Empty Basket</Span>}
                    {basket.length
                        ? basket.map((basketItem: ProductQuantityType) => (
                              <div key={basketItem.product.id}>
                                  <Span>
                                      {basketItem.product.title} :{' '}
                                      {basketItem.quantity}
                                  </Span>
                              </div>
                          ))
                        : null}
                </ContentWrapper>
            </ColorBlock>
        </PageWrapper>
    );
};

export default Basket;
