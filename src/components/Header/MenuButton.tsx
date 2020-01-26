import { MenuButtonStyled, MenuIconStyled } from './styles';

type Props = {
    onClick: () => void;
};

export const MenuButton = ({ onClick }: Props) => (
    <MenuButtonStyled onClick={onClick}>
        <MenuIconStyled />
    </MenuButtonStyled>
);

export default MenuButton;
