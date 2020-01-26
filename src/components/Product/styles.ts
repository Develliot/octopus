import styled from 'styled-components';

export const CoverColor = styled.div`
    background-color: ${({
        theme: {
            colors: { darkBlue },
        },
    }) => darkBlue};
    width: 100%;
    height: 300px;
    position: relative;

    @media screen and (min-width: ${({
            theme: {
                breakpoints: { small },
            },
        }) => small}) {
        height: 400px;
    }
`;

export const ImageWrapper = styled.div`
    height: 300px;
    width: 300px;
    overflow: hidden;
    position: absolute;
    bottom: -40px;
`;

export const ImageContainer = styled.img`
    height: 300px;
    width: 300px;
`;

export const SpecRow = styled.tr`
    padding: 1em 0;
    line-height: 2em;
    border-bottom: ${({
        theme: {
            colors: { blue },
        },
    }) => `solid 0.3em ${blue}`};
`;

export const SpecTable = styled.table`
    width: 100%;
    color: ${({
        theme: {
            colors: { white },
        },
    }) => white};

    ${SpecRow} {
        &:last-child {
            border-bottom: none;
        }
    }
`;
