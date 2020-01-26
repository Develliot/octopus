import React, { FunctionComponent } from 'react';
import { ColorType } from 'src/theme';

import { ButtonStyled } from './styles';

type Props = {
    color?: ColorType;
    isShiny?: boolean;
    onClick?: () => void;
};

export const Button: FunctionComponent<Props> = ({
    color = 'blue',
    isShiny = false,
    onClick = () => null,
    children,
}) => {
    return (
        <ButtonStyled onClick={onClick} color={color} isShiny={isShiny}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
