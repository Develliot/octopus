import { useState, useContext, memo } from 'react';

import { BasketContext } from 'src/contexts/BasketContext';
import { BasketReducer } from 'src/reducers/BasketReducer';

import { Button } from 'src/components/Button';
import { H1, Paragraph } from 'src/components/Typography';
import {
    VerticalSpacer,
    RowCenter,
    ColorBlock,
    ContentWrapper,
    RowStretch,
} from 'src/components/Layout';
import Price from './Price';
import QuantityCounter from 'src/components/QuantityCounter';

import { CoverColor, ImageWrapper, ImageContainer } from './styles';

import { ProductType } from 'src/types';

type Props = {
    product: ProductType;
};

const MIN_QUANTITY = 1;

export const Product = ({
    product: { id, imageUrl, title, wattage, packetSize, price },
}: Props) => {
    const [count, setCount] = useState(MIN_QUANTITY);
    const [state, setState] = useContext(BasketContext);

    const handleQuantityChanged = (value: number) => {
        setCount(value);
    };

    const handleAddToCart = () => {
        const newState = BasketReducer(state, {
            type: 'addProducts',
            payload: { id: id, value: count },
        });
        setState(newState);
    };

    return (
        <>
            <RowCenter>
                <CoverColor>
                    <RowCenter>
                        <ImageWrapper>
                            <ImageContainer src={imageUrl} alt={title} />
                        </ImageWrapper>
                    </RowCenter>
                </CoverColor>
            </RowCenter>
            <ColorBlock padding={false}>
                <ContentWrapper>
                    <VerticalSpacer size='large' />
                    <H1>{title}</H1>
                    <VerticalSpacer size='tiny' />
                    <Paragraph color='blueGrey'>
                        {`${wattage}W // Packet of ${packetSize}`}
                    </Paragraph>
                </ContentWrapper>
                <VerticalSpacer size='small' />
            </ColorBlock>
            <ColorBlock color='darkBlue' padding={false}>
                <ContentWrapper>
                    <VerticalSpacer size='small' />
                    <RowStretch>
                        <Price price={price} />
                        <QuantityCounter
                            minValue={MIN_QUANTITY}
                            onChange={handleQuantityChanged}
                        />
                    </RowStretch>
                    <VerticalSpacer size='small' />
                    <Button
                        isShiny={true}
                        color='pink'
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </Button>
                    <VerticalSpacer size='large' />
                </ContentWrapper>
            </ColorBlock>
        </>
    );
};

export default memo(Product);
