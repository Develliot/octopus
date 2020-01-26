import React, {
    FunctionComponent,
    useState,
    Dispatch,
    SetStateAction,
    useContext,
} from 'react';

import { ProductQuantityType } from 'src/types';

export type BasketContextStateType = {
    basket: ProductQuantityType[];
};

const defaultState: BasketContextStateType = {
    basket: [],
};

export type BasketProviderType = [
    BasketContextStateType,
    Dispatch<SetStateAction<BasketContextStateType>>
];

export const BasketContext = React.createContext<BasketProviderType>([
    { ...defaultState },
    () => [],
]);

export const useBasketContext = () => useContext(BasketContext);

export const BasketProvider: FunctionComponent = ({ children }) => {
    // TODO figure out middleware for dispatch saving to local storage
    // lol probably should have used redux as I seem to be re-writing redux
    // If this was a logged in user or even cookie based I would be pulling this from server anyway not local storage

    // SSR safe check for existence of window first
    // const localState =
    //     typeof window !== undefined &&
    //     window.localStorage.getItem('basketState')
    //         ? window.localStorage.getItem('basketState')
    //         : null;
    // const stateFromStorage = localState ? JSON.parse(localState) : null;
    // const initialState = stateFromStorage || {
    //     ...defaultState,
    // };

    const [state, setState] = useState({
        ...defaultState,
    });

    return (
        <BasketContext.Provider value={[state, setState]}>
            {children}
        </BasketContext.Provider>
    );
};
