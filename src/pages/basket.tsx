import { useContext } from 'react';
import { BasketContext } from 'src/contexts/BasketContext';

import {
    ColorBlock,
    ContentWrapper,
    VerticalSpacer,
} from 'src/components/Layout';
import { H1 } from 'src/components/Typography';

export const Basket = () => {
    const [state] = useContext(BasketContext);

    return (
        <ColorBlock>
            <ContentWrapper>
                <VerticalSpacer size='extraExtraLarge' />
                <H1>Basket</H1>
                <p>{JSON.stringify(state)}</p>
            </ContentWrapper>
        </ColorBlock>
    );
};

export default Basket;
