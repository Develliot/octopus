import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    background-color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    padding: ${({
        theme: {
            spacing: { medium },
        },
    }) => medium};
    border-radius: 1rem;
`;
