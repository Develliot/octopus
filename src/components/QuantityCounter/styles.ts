import styled from 'styled-components';
import { Paragraph, Span } from 'src/components/Typography';

export const Counter = styled.div`
    min-width: 100px;
`;

export const CounterLabel = styled(Paragraph)`
    max-width: 100%;
    text-align: center;
`;

export const CounterButton = styled.button`
    height: 2rem;
    width: 2rem;
    border-radius: 0.4rem;
    font-weight: 700;
    border: none;
    font-size: ${({
        theme: {
            fontSizes: { extraExtraLarge },
        },
    }) => extraExtraLarge};
    text-align: center;
    line-height: 1.9rem;
    /* adjust for wonky font */
    padding: 0 0 1.5rem 0.09rem;

    transition: color 0.3s ease, background-color 0.3s ease;
    background-color: ${({
        theme: {
            colors: { blueGrey },
        },
    }) => blueGrey};
    color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    background-color: ${({
        theme: {
            colors: { blueGrey },
        },
    }) => blueGrey};
    color: ${({
        theme: {
            colors: { white },
        },
    }) => white};

    &:focus,
    &:hover {
        background-color: ${({
            theme: {
                colors: { white },
            },
        }) => white};
        color: ${({
            theme: {
                colors: { blueGrey },
            },
        }) => blueGrey};
    }
`;

export const CounterValue = styled(Span)`
    padding: 0 0.5em;
    font-size: ${({
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }) => extraExtraExtraLarge};
    line-height: ${({
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }) => extraExtraExtraLarge};
`;
