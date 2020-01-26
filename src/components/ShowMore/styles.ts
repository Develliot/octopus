import styled from 'styled-components';
// import { colors } from 'src/theme';

export const ShowMoreText = styled.div`
    position: relative;
    overflow: hidden;
    height: ${({
        isOpen,
        closeHeight,
    }: {
        isOpen: boolean;
        closeHeight: string;
    }) => (isOpen ? `auto` : closeHeight)};

    &.is-open {
        height: auto;
    }

    &::after {
        content: '';
        display: ${({ isOpen }: { isOpen: boolean }) =>
            isOpen ? `none` : `block`};
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.5em;
        background: ${({
            color,
            theme: {
                colors,
                colors: { blue },
            },
        }) => `linear-gradient(
            transparent,
            ${color ? colors[color] : blue}
        )`};
    }
`;

export const ShowMoreButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({
        theme: {
            colors: { pink },
        },
    }) => pink};
    text-decoration: underline;
    padding: 0;

    cursor: pointer;
`;
