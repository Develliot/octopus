import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useScrollPosition } from 'src/hooks/useScrollPosition';
import urls from 'src/urls';

import { RowStretch } from 'src/components/Layout';
import { HeaderNavLink } from 'src/components/HeaderNavLink';
import { MenuButton } from './MenuButton';

import {
    HeaderWrapper,
    HeaderInner,
    Links,
    LogoSVGStyled,
    ResponsiveSpacer,
} from './styles';

export const Header = ({
    visible,
    currentRoute,
}: {
    visible: boolean;
    currentRoute: string;
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isSelected = (url: string): boolean => url === currentRoute;
    const handleOnClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <HeaderWrapper visible={visible}>
            <HeaderInner>
                <RowStretch>
                    <Link href={urls.home}>
                        <a title='home' tabIndex={0}>
                            <LogoSVGStyled />
                        </a>
                    </Link>
                    <MenuButton onClick={handleOnClick} />
                </RowStretch>
                <ResponsiveSpacer menuOpen={isMenuOpen} />
                <nav>
                    <Links menuOpen={isMenuOpen}>
                        <HeaderNavLink
                            to={urls.home}
                            title='Shop'
                            selected={isSelected(urls.home)}
                            onClick={closeMenu}
                        />
                        <HeaderNavLink
                            to={urls.basket}
                            title='Basket'
                            selected={isSelected(urls.basket)}
                            onClick={closeMenu}
                        />
                        <HeaderNavLink
                            to={urls.designSystem}
                            title='Design System'
                            selected={isSelected(urls.designSystem)}
                            onClick={closeMenu}
                        />
                    </Links>
                </nav>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export const HideOnScroll = () => {
    const [hideOnScroll, setHideOnScroll] = useState(true);
    const router = useRouter();

    useScrollPosition(
        ({
            prevPos,
            currPos,
        }: {
            prevPos: { x: number; y: number };
            currPos: { x: number; y: number };
        }) => {
            const isShow = currPos.y >= prevPos.y;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow);
        },
        [hideOnScroll],
        null,
        false,
        300
    );

    return <Header visible={hideOnScroll} currentRoute={router.route} />;
};

export default HideOnScroll;
