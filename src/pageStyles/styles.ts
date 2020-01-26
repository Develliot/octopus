import styled from 'styled-components';

export const TilesWrapper = styled.div`
    width: 100%;
`;

export const FlexWrapRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${({
        theme: {
            spacing: { small },
        },
    }) => `-${small}`};
`;

export const ColorTileWrapper = styled.div`
    padding: ${({
        theme: {
            spacing: { small },
        },
    }) => small};
`;

export const ColorTile = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
    padding: ${({
        theme: {
            spacing: { small, extraLarge },
        },
    }) => `${extraLarge} ${small} ${small} ${small}`};
    background-color: ${({ color }) => color};
    width: 180px;
`;

export const ColorLabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    padding: ${({
        theme: {
            spacing: { tiny },
        },
    }) => tiny};
`;
