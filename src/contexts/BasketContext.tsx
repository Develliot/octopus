import React, {
    FunctionComponent,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';

export type BasketContextStateType = {
    basket: {
        [key: string]: number;
    };
};

const defaultState: BasketContextStateType = {
    basket: {},
};

export type BasketProviderType = [
    BasketContextStateType,
    Dispatch<SetStateAction<BasketContextStateType>>
];

export const BasketContext = React.createContext<BasketProviderType>([
    { ...defaultState },
    () => {},
]);

// making a provider HOC here so I can keep all the state code in this
// and not where ever this provider is used
export const BasketProvider: FunctionComponent = ({ children }) => {
    const [state, setState] = useState({ ...defaultState });
    return (
        <BasketContext.Provider value={[state, setState]}>
            {children}
        </BasketContext.Provider>
    );
};
