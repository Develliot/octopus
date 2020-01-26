import React from 'react';

import { colors } from 'src/theme';
import { camelCaseToCapitalisedCase } from 'src/utils/StringUtils';
import {
    PageWrapper,
    PageContent,
    ContentWrapper,
    VerticalSpacer,
    ColorBlock,
} from 'src/components/Layout';
import { H1, H2, H3, Paragraph, Span } from 'src/components/Typography';
import Button from 'src/components/Button';
import QuantityCounter from 'src/components/QuantityCounter';
import ErrorMessage from 'src/components/ErrorMessage';
import Price from 'src/components/Price';
import ProductOverview from 'src/components/ProductOverview';
import Product from 'src/components/Product';

import { ProductType } from 'src/types';

import {
    TilesWrapper,
    ColorTile,
    ColorLabelWrapper,
    ColorTileWrapper,
    FlexWrapRow,
} from '../pageStyles/styles';

const colorLabelList = Object.keys(colors);

const mockProduct: ProductType = {
    id: 1,
    title: 'Energy saving light bulb',
    wattage: 25,
    packetSize: 4,
    price: 12.99,
    description:
        'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches instantly, no wait around with a warm start and flicker free features. Light up your life with this swirly wonder!',
    imageUrl: 'https://picsum.photos/500/500',
    specifications: {
        brand: 'Philips',
        weight: '77g',
        dimensions: '12.6x6.2x6.2cm',
        modelNumber: 'E27 ES',
        colour: 'Cool daylight',
    },
};

export const DesignSystem = () => {
    return (
        <PageWrapper>
            <PageContent>
                <ColorBlock color='white'>
                    <VerticalSpacer size='extraExtraLarge' />
                    <ContentWrapper>
                        <H1 color='darkBlue'>Design System</H1>
                        <VerticalSpacer size='large' />
                        <H2 color='darkBlue'>Colours</H2>
                        <VerticalSpacer size='large' />
                        <TilesWrapper>
                            <FlexWrapRow>
                                {colorLabelList.map(color => (
                                    <ColorTileWrapper key={color}>
                                        <ColorTile color={colors[`${color}`]}>
                                            <ColorLabelWrapper>
                                                <Span color='darkBlue'>
                                                    {camelCaseToCapitalisedCase(
                                                        color
                                                    )}
                                                    :
                                                </Span>
                                                <Span color='darkBlue'>
                                                    {colors[`${color}`]}
                                                </Span>
                                            </ColorLabelWrapper>
                                        </ColorTile>
                                    </ColorTileWrapper>
                                ))}
                            </FlexWrapRow>
                        </TilesWrapper>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='blue'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H2>Colour Sections</H2>
                        <VerticalSpacer size='large' />
                        <H3>Blue</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph>Example section text</Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='white'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='darkBlue'>White</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='darkBlue'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='darkBlue'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3>Dark Blue</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph>Example section text</Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='pink'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='darkBlue'>Pink</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='darkBlue'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='lightGrey'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='darkBlue'>Light grey</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='darkBlue'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='lightBlue'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H3 color='darkBlue'>Light blue</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph color='darkBlue'>
                            Example section text
                        </Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='blue'>
                    <VerticalSpacer size='medium' />
                    <ContentWrapper>
                        <H2>Typography</H2>
                        <VerticalSpacer size='large' />
                        <H1>H1 Example text</H1>
                        <VerticalSpacer size='large' />
                        <H2>H2 Example text</H2>
                        <VerticalSpacer size='large' />
                        <H3>H3 Example text</H3>
                        <VerticalSpacer size='large' />
                        <Paragraph>Paragraph example text</Paragraph>
                    </ContentWrapper>
                </ColorBlock>

                <ColorBlock color='darkBlue' padding={false}>
                    <VerticalSpacer size='extraLarge' />
                    <ContentWrapper>
                        <VerticalSpacer size='medium' />
                        <H2>Controls</H2>
                        <VerticalSpacer size='large' />
                        <H3>Buttons</H3>
                        <VerticalSpacer size='large' />
                        <Button color='pink'>Pink Button (Default)</Button>
                        <VerticalSpacer size='small' />
                        <Button color='pink' isShiny={true}>
                            Button with isShiny
                        </Button>
                        <VerticalSpacer size='small' />
                        <Button color='white'>white Button</Button>
                        <VerticalSpacer size='small' />
                        <Button color='lightBlue'>Light blue Button</Button>
                        <VerticalSpacer size='tiny' />
                    </ContentWrapper>
                </ColorBlock>
                <ColorBlock color='white' padding={false}>
                    <VerticalSpacer size='tiny' />
                    <ContentWrapper>
                        <Button color='darkBlue'>Dark blue Button</Button>
                        <VerticalSpacer size='small' />
                        <Button>Blue button</Button>
                    </ContentWrapper>
                    <VerticalSpacer size='large' />
                </ColorBlock>

                <ColorBlock color='blue' padding={false}>
                    <VerticalSpacer size='extraLarge' />
                    <ContentWrapper>
                        <VerticalSpacer size='medium' />
                        <H2 color='white'>Components</H2>
                        <VerticalSpacer size='large' />
                        <H3 color='white'>Error message</H3>
                        <VerticalSpacer size='medium' />
                        <ErrorMessage
                            errorMessage='This is an error message'
                            retry={() => {}}
                        />

                        <VerticalSpacer size='large' />
                        <H3 color='white'>Quantity counter</H3>
                        <VerticalSpacer size='medium' />
                        <QuantityCounter minValue={1} onChange={() => {}} />

                        <VerticalSpacer size='large' />
                        <H3 color='white'>Price</H3>
                        <VerticalSpacer size='medium' />
                        <Price price={20.44} />

                        <VerticalSpacer size='large' />
                        <H3 color='white'>ProductOverview</H3>
                        <VerticalSpacer size='medium' />
                        <ProductOverview product={mockProduct} />

                        <VerticalSpacer size='large' />
                        <H3 color='white'>Product</H3>
                        <VerticalSpacer size='medium' />
                        <Product product={mockProduct} />
                    </ContentWrapper>
                    <VerticalSpacer size='extraExtraLarge' />
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default DesignSystem;
