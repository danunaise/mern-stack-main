import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const NavbarComponent = () => {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>                
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>

                
                  <Typography
                    noWrap
                    component="a"
                    href="/create   "
                    sx={{
                    display: { xs: 'none', md: 'flex' },
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    POST
                </Typography>   


                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </>
     
    )
}

export default NavbarComponent;