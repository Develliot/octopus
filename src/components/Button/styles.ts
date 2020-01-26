import styled from 'styled-components';

export const ButtonStyled = styled.button`
    position: relative;
    font-size: ${({
        theme: {
            fontSizes: { extraExtraLarge },
        },
    }) => extraExtraLarge};
    padding: ${({
        theme: {
            spacing: { small, large },
        },
    }) => `${small} ${large}`};
    font-weight: 800;
    transition: color 0.3s ease, background-color 0.3s ease;
    background-color: ${({
        color,
        theme: {
            colors,
            colors: { pink },
        },
    }) => (color ? colors[`${color}`] : pink)};
    border-width: 0.12rem;
    border-style: solid;
    border-radius: 0.5rem;
    border-color: ${({
        color,
        theme: {
            colors,
            colors: { pink },
        },
    }) => (color ? colors[`${color}`] : pink)};
    color: ${({
        color,
        theme: {
            colors: { white, darkBlue },
        },
    }) => {
        switch (color) {
            case 'white':
                return darkBlue;
            case 'lightBlue':
                return darkBlue;
            case 'blue':
                return white;
            case 'pink':
                return white;
            case 'darkGrey':
                return white;
            case undefined:
                return white;
            default:
                return white;
        }
    }};

    width: 100%;

    @media screen and (min-width: ${({
            theme: {
                breakpoints: { small },
            },
        }) => small}) {
        width: auto;
    }

    &:hover,
    &:focus {
        background-color: ${({
            color,
            theme: {
                colors: { white },
            },
        }) => {
            switch (color) {
                case 'white':
                    return `rgba(0, 0, 0, 0.4)`;
                case 'lightBlue':
                    return `rgba(0, 0, 0, 0.4)`;
                case 'blue':
                    return white;
                case 'pink':
                    return white;
                case 'darkGrey':
                    return white;
                case undefined:
                    return white;
                default:
                    return white;
            }
        }};
        color: ${({
            color,
            theme: {
                colors,
                colors: { pink },
            },
        }) => (color ? colors[`${color}`] : pink)};
    }

    &::after {
        content: '';
        display: ${({ isShiny }: { isShiny: boolean }) =>
            isShiny ? `block` : `none`};
        position: absolute;
        top: 0.05%;
        left: 0.05%;
        width: calc(100% - 0.1%);
        height: 50%;
        border-radius: 0.5rem;
        background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.2)
        );
    }
`;
