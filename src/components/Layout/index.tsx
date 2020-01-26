import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SpacingType, ColorType } from 'src/theme';

const Block = styled.div`
    background-color: ${({
        color,
        theme: {
            colors,
            colors: { blue },
        },
    }: {
        theme: any;
        color: ColorType;
    }) => (color ? colors[`${color}`] : blue)};
`;

type BlockProps = {
    color?: ColorType;
    padding?: boolean;
};

export const ColorBlock: FunctionComponent<BlockProps> = ({
    color,
    padding = true,
    children,
}) => {
    return (
        <Block color={color || 'blue'}>
            {padding && <VerticalSpacer size='extraLarge' />}
            {children}
            {padding && <VerticalSpacer size='extraExtraLarge' />}
        </Block>
    );
};

export const PageWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${({
        theme: {
            colors: { lightGrey },
        },
    }) => lightGrey};
`;

export const PageContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const RowCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const RowStretch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const ColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    padding: ${({ theme: { globalPadding } }) => `0 ${globalPadding}`};
`;

export const VerticalSpacer = styled.div`
    height: ${({
        size,
        theme: {
            spacing,
            spacing: { medium },
        },
    }: {
        size: SpacingType;
        theme: any;
    }) => (size ? spacing[`${size}`] : medium)};
`;
