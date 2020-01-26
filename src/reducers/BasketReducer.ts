import { BasketContextStateType } from 'src/contexts/BasketContext';

export const BasketReducer = (
    state: BasketContextStateType,
    action: { type: string; payload?: { id: number; value?: number } }
): BasketContextStateType => {
    const productId: number | undefined = action?.payload?.id;
    if (!productId) {
        throw new Error('to add products id must exist in the payload');
    }
    //assume increment by one if no value is sent
    const value: number = action?.payload?.value || 1;
    const currentValue: number = state.basket[`${productId}`]
        ? state.basket[`${productId}`]
        : 0;
    let newState: BasketContextStateType = {
        ...state,
        basket: state.basket || {},
    };
    switch (action.type) {
        case 'addProducts':
            newState.basket[`${productId}`] = currentValue + value;
            return newState;
        case 'removeProducts':
            if (currentValue - value <= 0) {
                delete newState.basket[`${productId}`];
            } else {
                newState.basket[`${productId}`] = currentValue - value;
            }
            return newState;
        default:
            throw new Error('action type incorrect');
    }
};
