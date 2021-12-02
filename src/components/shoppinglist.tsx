import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    useTheme,
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useShoppingList } from '../contexts/shoppinglist.context';

const ShoppingList = () => {
    const { shoppingList } = useShoppingList();
    const theme = useTheme();

    return (
        <Card
            sx={{
                width: 600,
                margin: theme.spacing(2),
                marginLeft: theme.spacing(8),
            }}>
            <CardContent>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>
                    Shopping basket
                </Typography>
                {shoppingList.length === 0 && (
                    <Typography sx={{ fontWeight: 'bold' }}>Add a good or bestest book!</Typography>
                )}
                {shoppingList.length > 0 && (
                <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                    {shoppingList.map((s: any) => (
                        <ListItem
                            key={s.title}
                            disableGutters
                            secondaryAction={
                                <Typography sx={{ paddingX: theme.spacing(1) }}>{`0x`}</Typography>
                            }>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
                                    <LibraryBooksIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={s.title} secondary={`Author: ${s.author}`} />
                            <Typography sx={{ paddingX: theme.spacing(1) }}>{s.price}</Typography>
                        </ListItem>
                    ))}
                </List>
                )}
            </CardContent>
            <CardActions>
                <Typography sx={{ fontWeight: 'bold' }}>{`Total price: € 0 (challenge-4)`}</Typography>
            </CardActions>
        </Card>
    );
};

export default ShoppingList;
