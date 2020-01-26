import { useContext } from 'react';
import { BasketContext } from 'src/contexts/BasketContext';

import {
    ColorBlock,
    ContentWrapper,
    VerticalSpacer,
} from 'src/components/Layout';
import { H1, Span } from 'src/components/Typography';

export const Basket = () => {
    const [state] = useContext(BasketContext);

    const { basket } = state;
    const productKeys: string[] = Object.keys(basket);

    return (
        <ColorBlock>
            <ContentWrapper>
                <VerticalSpacer size='extraExtraLarge' />
                <H1>Basket</H1>
                <VerticalSpacer size='medium' />
                {!productKeys.length && <Span>Empty Basket</Span>}
                {productKeys.map((key: string) => (
                    <div key={key}>
                        <Span>{`Product ID: ${key} Quantity ${basket[key]}`}</Span>
                    </div>
                ))}
            </ContentWrapper>
        </ColorBlock>
    );
};

export default Basket;
