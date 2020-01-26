import styled from 'styled-components';
import { H3 } from 'src/components/Typography';

export const OverviewImage = styled.img`
    width: 3em;
    height: 3rem;
`;
export const OverviewWrapper = styled.div`
    padding: 1em;
`;

export const OverviewText = styled(H3)`
    transition: color 0.3s ease;
    margin: 0 1em;
`;

export const OverviewLink = styled.a`
    text-decoration: none;
    cursor: pointer;

    &:focus,
    &:hover {
        ${OverviewText} {
            color: ${({
                theme: {
                    colors: { pink },
                },
            }) => pink};
        }
    }
`;
