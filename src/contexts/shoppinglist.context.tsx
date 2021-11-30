import { createContext, useContext, useReducer } from 'react';
import { Book, Item } from '../interfaces/interfaces';

const ShoppingListContext = createContext<any>(null);

interface Props {
    children: React.ReactNode;
}

interface IDispatchShortlistAction {
    type: string;
    payload: Book[];
}

export const ShoppingListProvider = ({ children }: Props) => {
    const [shoppingList, dispatchShoppingList] = useReducer(
        (state: Book[], action: IDispatchShortlistAction): Item[] => {
            switch (action.type) {
                case 'add':
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
