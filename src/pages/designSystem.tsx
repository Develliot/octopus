import React from 'react';

import { colors } from 'src/theme';
import { camelCaseToCaptilalisedCase } from 'src/utils/StringUtils';
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

import {
    TilesWrapper,
    ColorTile,
    ColorLabelWrapper,
    ColorTileWrapper,
    FlexWrapRow,
} from '../pageStyles/styles';

const colorLabelList = Object.keys(colors);

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
                                                    {camelCaseToCaptilalisedCase(
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

                <ColorBlock>
                    <ContentWrapper>
                        <H3>Form inputs</H3>
                        <VerticalSpacer size='medium' />
                        <QuantityCounter minValue={1} onChange={() => {}} />
                    </ContentWrapper>
                    <VerticalSpacer size='extraExtraLarge' />
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
                    </ContentWrapper>
                    <VerticalSpacer size='extraExtraLarge' />
                </ColorBlock>
            </PageContent>
        </PageWrapper>
    );
};

export default DesignSystem;
