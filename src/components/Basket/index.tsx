import { memo } from 'react';
import { Span } from 'src/components/Typography';
import { ProductQuantityType } from 'src/types';

type Props = {
    basket: ProductQuantityType[];
};

export const basketTotal = (basket: ProductQuantityType[]): number =>
    basket.reduce(
        (total, currentProduct) =>
            total + currentProduct.product.price * currentProduct.quantity,
        0
    );

export const Basket = ({ basket }: Props) => {
    return (
        <div>
            {!basket.length && <Span>Empty Basket</Span>}
            {basket.length
                ? basket.map((basketItem: ProductQuantityType) => (
                      <div key={basketItem.product.id}>
                          <Span>
                              {basketItem.product.title} : {basketItem.quantity}
                          </Span>
                      </div>
                  ))
                : null}
            <Span>Total cost: £{basketTotal(basket).toFixed(2)}</Span>
        </div>
    );
};

export default memo(Basket);
