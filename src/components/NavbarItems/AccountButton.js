import Button  from '@mui/material/Button';
import { useColorMode } from '@docusaurus/theme-common/internal';
import LogoutIcon from '@mui/icons-material/Logout'
import { Link as RouterLink } from 'react-router-dom';
import SignIn from '../../pages/SignIn';


export default function AccountButton() {
    const isLoggedIn = false;
    // const { colorMode } = useColorMode();  
    // const isDarkMode = colorMode === 'dark';

    // const handleLogout = (event) => {
        
    // };


    // const loginButton = <Button size='small' variant="text" component={RouterLink} to="SignIn" startIcon = { <LoginIcon/> }>{ 'Login' }</Button>;
    // const logoutButton = <Button size='small' variant="text" component={RouterLink} to="SignIn" startIcon = { <LogoutIcon/> }>{ 'Logout' }</Button>;

    const loginButton = <SignIn/>;
    
    const logoutButton = <Button variant='text' component={RouterLink} to="" startIcon={ <LogoutIcon/> }>Logout</Button>;
    return (
        (isLoggedIn ? logoutButton : loginButton)
    );
}