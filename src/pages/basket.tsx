import { useContext } from 'react';
import { BasketContext } from 'src/contexts/BasketContext';

import {
    ColorBlock,
    ContentWrapper,
    VerticalSpacer,
    PageWrapper,
} from 'src/components/Layout';
import { H1 } from 'src/components/Typography';
import Basket from 'src/components/Basket';

export const BasketPage = () => {
    const [state] = useContext(BasketContext);
    const { basket } = state;

    return (
        <PageWrapper>
            <ColorBlock>
                <ContentWrapper>
                    <VerticalSpacer size='extraExtraLarge' />
                    <H1>Basket</H1>
                    <VerticalSpacer size='medium' />
                    <Basket basket={basket} />
                </ContentWrapper>
            </ColorBlock>
        </PageWrapper>
    );
};

export default BasketPage;
