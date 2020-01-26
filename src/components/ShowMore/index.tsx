import React, { FunctionComponent, useState } from 'react';

import { VerticalSpacer } from 'src/components/Layout';
import { ShowMoreText, ShowMoreButton } from './styles';

import { ColorType } from 'src/theme';

type Props = {
    closeHeight?: string;
    color?: ColorType;
};

export const ShowMore: FunctionComponent<Props> = ({
    children,
    closeHeight,
    color,
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <ShowMoreText
                color={color || 'blue'}
                closeHeight={closeHeight || '3em'}
                isOpen={isOpen}
            >
                {children}
            </ShowMoreText>
            <VerticalSpacer size='small' />
            <ShowMoreButton onClick={handleClick}>{`${
                isOpen ? 'Show less' : 'Show more'
            }`}</ShowMoreButton>
        </div>
    );
};

export default ShowMore;
