import styled from 'styled-components';
import { Span } from 'src/components/Typography';

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
