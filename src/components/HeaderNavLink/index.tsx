import React from 'react';
import { Paragraph } from 'src/components/Typography';
import { RowCenter } from 'src/components/Layout';
import { NavLinkStyled, HoverIndicator, HeaderLinkItem } from './styles';
import Link from 'next/link';

export const HeaderNavLink = ({
    to,
    title,
    selected,
    onClick,
}: {
    to: string;
    title: string;
    selected: boolean;
    onClick?: () => void;
}) => {
    const handleClick = !!onClick ? onClick : () => {};

    return (
        <HeaderLinkItem>
            <Link href={to} passHref>
                <NavLinkStyled
                    tabIndex={0}
                    title={title}
                    className={selected ? 'selected' : ''}
                    onClick={handleClick}
                >
                    <Paragraph color='white'>{title}</Paragraph>
                    <RowCenter>
                        <HoverIndicator selected={selected} />
                    </RowCenter>
                </NavLinkStyled>
            </Link>
        </HeaderLinkItem>
    );
};
