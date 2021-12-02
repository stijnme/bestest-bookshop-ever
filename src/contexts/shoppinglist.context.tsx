import { createContext, useContext, useReducer } from 'react';
import { Book, isBook, Item } from '../interfaces/interfaces';

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
        (state: Item[], action: IDispatchShortlistAction): Item[] => {
            switch (action.type) {
                case 'add':
                    const b = action.payload;
                    if (isBook(b)) {
                        const index = state.findIndex((i: Item) => i.isbn === b.isbn);
                        if (index > -1)
                            return [
                                ...state.slice(0, index),
                                { ...state[index], quantity: state[index].quantity + 1 },
                                ...state.slice(index + 1),
                            ];
                        return [...state, { ...b, quantity: 1 }];
                    }
                    throw new Error('can only add a single book');
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
