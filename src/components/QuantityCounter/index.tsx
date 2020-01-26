import { useState } from 'react';

import { RowCenter } from 'src/components/Layout';
import { Counter, CounterLabel, CounterButton, CounterValue } from './styles';

type Props = {
    minValue: number;
    onChange: (value: number) => void;
};

export const QuantityCounter = ({ minValue, onChange }: Props) => {
    const [count, setCount] = useState(1);

    const handleDecrementClicked = () => {
        const newCount = Math.max(minValue, count - 1);
        // we don't want the count to drop below minValue
        setCount(newCount);
        onChange(newCount);
    };

    const handleIncrementClicked = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(newCount);
    };

    return (
        <Counter>
            <CounterLabel color='blueGrey' bold={true}>
                QTY
            </CounterLabel>
            <RowCenter>
                <CounterButton
                    title='decrement item count'
                    aria-label='decrement item count'
                    onClick={handleDecrementClicked}
                >
                    -
                </CounterButton>
                <CounterValue bold={true} aria-live='assertive'>
                    {count}
                </CounterValue>
                <CounterButton
                    title='increment item count'
                    aria-label='increment item count'
                    onClick={handleIncrementClicked}
                >
                    +
                </CounterButton>
            </RowCenter>
        </Counter>
    );
};

export default QuantityCounter;
