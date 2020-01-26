import styled from 'styled-components';
import { Span } from 'src/components/Typography';

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

export const Pounds = styled(Span)`
    display: inline-block;
    font-size: ${({
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }) => extraExtraExtraLarge};
    line-height: ${({
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }) => `calc(${extraExtraExtraLarge} - 0.25em)`};
`;

export const Pence = styled(Span)`
    display: inline-block;
    font-size: ${({
        theme: {
            fontSizes: { large },
        },
    }) => large};
    line-height: ${({
        theme: {
            fontSizes: { large },
        },
    }) => large};
    vertical-align: top;
`;

