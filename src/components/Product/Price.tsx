import { memo } from 'react';
import { Pounds, Pence } from './styles';
import { VerticalSpacer } from 'src/components/Layout';

type Props = {
    price: number;
};

export const Price = ({ price }: Props) => {
    const numberString = price.toFixed(2).toString();
    const currencyArray = numberString.split('.');

    return (
        <div>
            <VerticalSpacer size='medium' />
            <Pounds bold={true}>{`£${currencyArray[0]}`}</Pounds>
            <Pence bold={true}>{`.${currencyArray[1] || '00'}`}</Pence>
        </div>
    );
};

export default memo(Price);
