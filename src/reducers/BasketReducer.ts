import { BasketContextStateType } from 'src/contexts/BasketContext';
import { ProductType, ProductQuantityType } from 'src/types';

export const BasketReducer = (
    state: BasketContextStateType,
    action: { type: string; payload: { product: ProductType; value?: number } }
): BasketContextStateType => {
    if (!action.payload.product) {
        throw new Error(
            'to add or remove products a product must exist in the payload'
        );
    }

    //assume increment by one if no value is sent
    const payloadValue: number = action.payload?.value || 1;
    const payLoadProduct: ProductType = action.payload.product;

    let newState: BasketContextStateType = {
        ...state,
        basket: state.basket || {},
    };

    // if item exits we want to find it and increment/decrement the existing quantity
    const existingBasketItem: ProductQuantityType | null =
        newState.basket.find(
            (basketItem: ProductQuantityType) =>
                basketItem.product.id === action.payload.product.id
        ) || null;

    switch (action.type) {
        case 'addProducts':
            if (!!existingBasketItem) {
                existingBasketItem.quantity =
                    existingBasketItem.quantity + payloadValue;
            } else {
                newState.basket = [
                    ...newState.basket,
                    { product: payLoadProduct, quantity: payloadValue },
                ];
            }
            return newState;

        case 'removeProducts':
            if (!existingBasketItem) {
                return newState;
            }
            if (existingBasketItem.quantity - payloadValue <= 0) {
                newState.basket = newState.basket.filter(
                    (basketItem: ProductQuantityType) =>
                        basketItem.product.id !== existingBasketItem.product.id
                );
            } else {
                existingBasketItem.quantity =
                    existingBasketItem.quantity - payloadValue;
            }
            return newState;

        default:
            throw new Error('action type incorrect');
    }
};
