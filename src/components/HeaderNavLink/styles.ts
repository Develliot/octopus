import styled from 'styled-components';
import { Paragraph } from 'src/components/Typography';

export const HeaderLinkItem = styled.li`
    padding: 0;
    margin: ${({
        theme: {
            spacing: { small },
        },
    }) => `0 ${small} 0 0`};
`;

export const HoverIndicator = styled.div`
    display: none;
    height: 3px;
    background-color: ${({
        theme: {
            colors: { pink },
        },
    }) => pink};
    margin-top: ${({
        theme: {
            spacing: { tiny },
        },
    }) => tiny};
    width: 100%;
    max-width: 0;
    transition: max-width ease 0.3s;

    max-width: ${({ selected }: { selected: boolean }) =>
        selected ? `150px` : 0};

    @media screen and (min-width: ${({
            theme: {
                breakpoints: { small },
            },
        }) => small}) {
        display: block;
    }
`;

export const RowCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const NavLinkStyled = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${Paragraph} {
        transition: color ease 0.3s, padding 0.3s ease, border 0.3s ease;
        font-weight: 600;
        font-size: ${({
            theme: {
                fontSizes: { extraExtraLarge },
            },
        }) => extraExtraLarge};
        @media screen and (min-width: ${({
                theme: {
                    breakpoints: { small },
                },
            }) => small}) {
            font-size: ${({
                theme: {
                    fontSizes: { medium },
                },
            }) => medium};
        }
    }
    cursor: pointer;

    &.selected {
        ${Paragraph} {
            border-left: ${({
                theme: {
                    colors: { pink },
                },
            }) => `solid 0.25rem ${pink}`};
            padding-left: 0.25em;

            /* we have underlines to indicate selected for large screen width so we don't need to change text color */
            @media screen and (min-width: ${({
                    theme: {
                        breakpoints: { small },
                    },
                }) => small}) {
                border-left: none;
                padding-left: 0;
            }
        }
    }

    &:hover,
    &:focus {
        outline: none;
        ${Paragraph} {
            color: ${({
                theme: {
                    colors: { pink },
                },
            }) => pink};
        }
    }
`;
