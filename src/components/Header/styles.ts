import styled from 'styled-components';
const LogoSVG = require('src/assets/svg/logo.svg');
const MenuSVG = require('src/assets/svg/menu.svg');

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100vw;
    transition: margin ease 0.2s, opacity ease 0.3s;
    margin-top: ${({ visible }: { visible: boolean }) =>
        visible ? `0` : `-100px`};
    opacity: ${({ visible }: { visible: boolean }) => (visible ? `1` : `0`)};
    z-index: 10;
    border-top: ${({
        theme: {
            colors: { pink },
        },
    }) => `solid 0.001rem ${pink}`};
    background-color: ${({
        theme: {
            colors: { darkBlue },
        },
    }) => darkBlue};
`;

export const HeaderInner = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    background-color: ${({
        theme: {
            colors: { darkBlue },
        },
    }) => darkBlue};
    padding: ${({
        theme: {
            spacing: { small },
            globalPadding,
        },
    }) => `${small} ${globalPadding}`};
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};
    margin: 0 auto;
    border-top: ${({
        theme: {
            colors: { pink },
        },
    }) => `solid 0.001rem ${pink}`};
`;

export const Links = styled.ul`
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};

    display: flex;
    flex-direction: column;
    list-style-type: none;
    justify-content: flex-start;

    overflow: hidden;
    transition: height 0.3s ease;
    height: ${({ menuOpen }: { menuOpen: boolean }) =>
        menuOpen ? '100vh' : '0'};

    @media screen and (min-width: ${({
            theme: {
                breakpoints: { small },
            },
        }) => small}) {
        flex-direction: row;
        list-style-type: none;
        height: auto;
        padding: 0;
    }
`;

export const LogoSVGStyled = styled(LogoSVG)`
    fill: white;
    height: 2rem;
    width: auto;

    @media screen and (min-width: ${({
            theme: {
                breakpoints: { small },
            },
        }) => small}) {
        height: 3rem;
    }
`;

export const MenuIconStyled = styled(MenuSVG)`
    fill: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    height: 100%;
    width: 100%;
    transition: fill 0.3s ease;
`;

export const MenuButtonStyled = styled.button`
    height: 2rem;
    width: 2rem;
    background: transparent;
    border: none;
    padding: 0;

    &:hover,
    &:focus {
        ${MenuIconStyled} {
            fill: ${({
                theme: {
                    colors: { pink },
                },
            }) => pink};
        }
    }

    @media screen and (min-width: ${({
            theme: {
                breakpoints: { small },
            },
        }) => small}) {
        display: none;
    }
`;

export const ResponsiveSpacer = styled.div`
    transition: height 0.3s ease;
    height: ${({ menuOpen }: { menuOpen: boolean }) =>
        menuOpen ? '1em' : '0'};
    @media screen and (min-width: ${({
            theme: {
                breakpoints: { small },
            },
        }) => small}) {
        height: 1em;
    }
`;
