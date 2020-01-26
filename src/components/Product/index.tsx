import { useState, useEffect, memo, useRef } from 'react';

import { useBasketContext } from 'src/contexts/BasketContext';
import { BasketReducer } from 'src/reducers/BasketReducer';

import { Button } from 'src/components/Button';
import { H1, H2, Paragraph } from 'src/components/Typography';
import {
    VerticalSpacer,
    RowCenter,
    ColorBlock,
    ContentWrapper,
    RowStretch,
} from 'src/components/Layout';
import Price from 'src/components/Price';
import QuantityCounter from 'src/components/QuantityCounter';
import ShowMore from 'src/components/ShowMore';

import {
    CoverColor,
    ImageWrapper,
    ImageContainer,
    SpecTable,
    SpecRow,
} from './styles';

import { ProductType } from 'src/types';

type Props = {
    product: ProductType;
};

const MIN_QUANTITY = 1;

export const Product = ({
    product,
    product: {
        imageUrl,
        title,
        wattage,
        packetSize,
        price,
        description,
        specifications,
    },
}: Props) => {
    const [count, setCount] = useState(MIN_QUANTITY);
    const [hasBeenAddedToBasket, setHasBeenAddedToBasket] = useState(false);
    const [state, setState] = useBasketContext();
    const ref = useRef();

    // hide added to basket message after a few seconds
    useEffect(() => {
        if (hasBeenAddedToBasket) {
            setTimeout(() => {
                // we need to check ref incase component unmounts during timeout
                if (ref) {
                    setHasBeenAddedToBasket(false);
                }
            }, 3000);
        }
    }, [ref, hasBeenAddedToBasket, setHasBeenAddedToBasket]);

    const handleQuantityChanged = (value: number) => {
        setCount(value);
    };

    const handleAddToCart = () => {
        const newState = BasketReducer(state, {
            type: 'addProducts',
            payload: { product: product, value: count },
        });
        setState(newState);
        setHasBeenAddedToBasket(true);
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
                        <div>
                            <VerticalSpacer size='medium' />
                            <Price price={price} />
                        </div>
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
                    <VerticalSpacer size='large'>
                        {hasBeenAddedToBasket && (
                            <Paragraph color='pink'>
                                ...added to basket
                            </Paragraph>
                        )}
                    </VerticalSpacer>
                </ContentWrapper>
            </ColorBlock>
            <ColorBlock>
                <ContentWrapper>
                    <H2>Description</H2>
                    <VerticalSpacer size='medium' />
                    <ShowMore color='blue' closeHeight='4em'>
                        <Paragraph ellipsis={true}>{description}</Paragraph>
                    </ShowMore>
                </ContentWrapper>
            </ColorBlock>

            <ColorBlock color='darkBlue'>
                <ContentWrapper>
                    <H2>Specifications</H2>
                    <VerticalSpacer size='medium' />
                    <ShowMore color='darkBlue' closeHeight='4em'>
                        <SpecTable>
                            <tbody>
                                <SpecRow>
                                    <td>Brand</td>
                                    <td>{specifications.brand}</td>
                                </SpecRow>
                                <SpecRow>
                                    <td>Item weight</td>
                                    <td>{specifications.weight}</td>
                                </SpecRow>
                                <SpecRow>
                                    <td>Dimensions</td>
                                    <td>{specifications.dimensions}</td>
                                </SpecRow>
                                <SpecRow>
                                    <td>Item model number</td>
                                    <td>{specifications.modelNumber}</td>
                                </SpecRow>
                                <SpecRow>
                                    <td>Colour</td>
                                    <td>{specifications.colour}</td>
                                </SpecRow>
                            </tbody>
                        </SpecTable>
                    </ShowMore>
                </ContentWrapper>
            </ColorBlock>
        </>
    );
};

export default memo(Product);
