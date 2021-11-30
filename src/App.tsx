import { Box, Container, Typography, useTheme } from '@mui/material';
import { ShoppingListProvider } from './contexts/shoppinglist.context';
import { BookStore, ShoppingList } from './components/';

function App() {
    const theme = useTheme();
    return (
        <Container sx={{ bgcolor: theme.palette.primary.light }}>
            <Typography sx={{ textAlign: 'center' }} variant='h4'>
                Bastiaan, Mouade and Timon's bestest bookshop ever
            </Typography>
            <Box display='flex' justifyContent='center' sx={{ minHeight: '600px' }}>
                <ShoppingListProvider>
                    <BookStore />
                    <ShoppingList />
                </ShoppingListProvider>
            </Box>
        </Container>
    );
}

export default App;
