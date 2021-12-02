import { createContext, useContext, useReducer } from 'react';
import { Book } from '../interfaces/interfaces';

const ShoppingListContext = createContext<any>(null);

interface Props {
    children: React.ReactNode;
}

interface IDispatchShortlistAction {
    type: string;
    payload: Book;
}

export const ShoppingListProvider = ({ children }: Props) => {
    const [shoppingList, dispatchShoppingList] = useReducer(
        (state: any[], action: IDispatchShortlistAction): any[] => {
            switch (action.type) {
                case 'add':
                    console.log('inside reducer, action = ', action);

                    //
                    // challenge 2 - implement this action
                    //

                    return [];
                default:
                    throw new Error(`Unsupported action type: ${action.type}`);
            }
        },
        []
    );

    return (
        <ShoppingListContext.Provider value={{ shoppingList, dispatchShoppingList }}>
            {children}
        </ShoppingListContext.Provider>
    );
};

export const useShoppingList = () => useContext(ShoppingListContext);

export default ShoppingListContext;
