import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton,
    Typography,
    useTheme,
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect, useState } from 'react';
import { Book } from '../interfaces/interfaces';
import mockBooks from '../data/booklist';
import { useShoppingList } from '../contexts/shoppinglist.context';

const BookStore = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const { dispatchShoppingList } = useShoppingList();
    const theme = useTheme();

    const addBookToList = (b: Book): void => {
        dispatchShoppingList({ type: 'add', payload: b });
    };

    useEffect(() => {
        setBooks(mockBooks);
    }, []);

    return (
        <Card
            sx={{
                width: 600,
                margin: theme.spacing(2),
                marginRight: theme.spacing(8),
            }}>
            <CardContent sx={{ margin: 0, paddingLeft: theme.spacing(0.5) }}>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>
                    Books
                </Typography>
                <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                    {books.map((b: Book) => (
                        <ListItem
                            key={b.title}
                            disableGutters
                            secondaryAction={
                                <IconButton
                                    onClick={() => {
                                        addBookToList(b);
                                    }}
                                    edge='end'>
                                    <AddBoxIcon sx={{ transform: 'scale(1.5)' }} color='success' />
                                </IconButton>
                            }>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
                                    <LibraryBooksIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={b.title} secondary={`Author: ${b.author}`} />
                            <Typography sx={{ paddingX: theme.spacing(1) }}>{b.price}</Typography>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default BookStore;
