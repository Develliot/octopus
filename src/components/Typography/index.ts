import styled from 'styled-components';
import { colors, fontSizes } from 'src/theme';

type BaseTextProps = {
    color?: string;
    textAlign?: 'left' | 'right' | 'center';
    fontSize?:
        | 'extraTiny'
        | 'tiny'
        | 'small'
        | 'medium'
        | 'large'
        | 'extraLarge'
        | 'extraExtraLarge'
        | 'extraExtraExtraLarge';
    bold?: boolean;
    ellipsis?: boolean;
};

const baseText = (props: BaseTextProps) => `
    font-family: "Gotham SSm A", sans-serif;
    color: ${props.color ? colors[`${props.color}`] : colors.white};
    text-align: ${props.textAlign ? props.textAlign : 'left'};
    font-size: ${
        props.fontSize ? fontSizes[`${props.fontSize}`] : fontSizes.medium
    };
    line-height: 1.5em;
    font-weight: ${!!props.bold ? 700 : 400};
    overflow: ${!!props.ellipsis ? 'hidden' : 'visible'};
    text-overflow: ${!!props.ellipsis ? 'ellipsis' : 'unset'};
`;

export const Span = styled.span`
    ${(props: BaseTextProps) => baseText(props)}
`;

export const Paragraph = styled.p`
    ${(props: BaseTextProps) => baseText(props)}
    max-width: 600px;
`;

export const H1 = styled.h1`
    ${(props: BaseTextProps) => baseText(props)}
    line-height: 1.2em;
    font-weight: 700;
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }) => (fontSize ? fontSizes[`${fontSize}`] : extraExtraExtraLarge)};
`;

export const H2 = styled.h2`
    ${(props: BaseTextProps) => baseText(props)}

    letter-spacing: -0.03rem;
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraLarge },
        },
    }: any) => (fontSize ? fontSizes[`${fontSize}`] : extraExtraLarge)};
    font-weight: 700;
`;

export const H3 = styled.h3`
    ${(props: BaseTextProps) => baseText(props)}

    letter-spacing: -0.03rem;
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraLarge },
        },
    }: any) => (fontSize ? fontSizes[`${fontSize}`] : extraLarge)};
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 700;
`;
