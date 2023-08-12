import * as React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../images/logo.jpg';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <nav class='navbar-fixed navbar-dark navbar-expand' style={{ backgroundColor: '#1B8C79' }}>
            {/* BIG */}
            <Box sx={{ px: 1, justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                <div class='navbar-nav align-items-center d-flex justify-content-between' style={{ width: '100%' }}>

                    <div className=' d-flex align-items-center' style={{ minWidth: '25%' }}>
                        <Link className='nav-link' to='/'>
                            <img src={Logo} className='p-1' alt='' style={{ backgroundColor: 'white', boxShadow: '50px -165px 40px 160px rgba(30, 158, 130, 1)', borderRadius: '10px' }} />
                        </Link>
                        <Link class=' mt-2 nav-link h5' to='/'>
                            24/7 Assure Care
                        </Link>
                    </div>

                    <div class='d-flex flex-wrap justify-content-center ' style={{ minWidth: '50%' }}>
                        <Link class='nav-link mx-2' to='/AboutUs'>About Us</Link>
                        <Link class='nav-link mx-2 ' to='/Services'>Services</Link>
                        <Link class='nav-link mx-2 ' to='/Contact'>Contact Us</Link>
                        <Link class='nav-link mx-2' to='/Resources'>Resources</Link>
                    </div>

                    <div className='d-flex justify-content-end px-3' style={{ minWidth: '25%' }}>
                        <Link className='nav-link' to='/'>847-483-8999</Link>
                    </div>

                </div>

            </Box>

            {/* SMALL */}
            <Box sx={{ px: 1, justifyContent: 'between', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <div className='navbar-nav d-flex justify-content-between' style={{ width: '100%' }}>
                    <div className=' d-flex align-items-center' style={{ minWidth: '25%' }}>
                        <Link className='nav-link' to='/'>
                            <img src={Logo} className='p-1' alt='' style={{ backgroundColor: 'white', boxShadow: '50px -165px 40px 160px rgba(30, 158, 130, 1)', borderRadius: '10px' }} />
                        </Link>
                        <Link class=' mt-2 nav-link h5' to='/'> 24/7 Assure Care
                        </Link>

                    </div>

                    <div className='d-flex align-items-center'>
                        <div>
                            <Link class='mt-2 nav-link h6' style={{ width: '125px', height: '100%' }} to='/'> * 847-483-8999
                            </Link>
                        </div>

                        <div>
                            <MenuItem aria-controls="menu-appbar" onClick={handleOpenNavMenu} color='#1B8C79' sx={{ border: 'none', borderColor: '#007F52', borderRadius: '15px' }}>
                                <MenuIcon style={{ height: '40px', width: '40px', color: 'white', border: 'none' }} />
                            </MenuItem>
                            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                                PaperProps={{ style: { background: '#1B8C79' } }} sx={{ display: { xs: 'block', md: 'none' } }}>
                                <div className=''>
                                    <MenuItem>
                                        <Link onClick={handleCloseNavMenu} class='h4' style={{ color: 'white', textDecoration: 'none' }} to='/AboutUs'>About Us</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link onClick={handleCloseNavMenu} class='h4' style={{ color: 'white', textDecoration: 'none' }} to='/Services'>Services</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link onClick={handleCloseNavMenu} class='h4' style={{ color: 'white', textDecoration: 'none' }} to='/Contact'>Contact Us</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link onClick={handleCloseNavMenu} class='h4' style={{ color: 'white', textDecoration: 'none' }} to='/Resources'>Resources</Link>
                                    </MenuItem>
                                </div>
                            </Menu>
                        </div>

                    </div>
                </div>



            </Box>
        </nav>
    )
}

export default Navbar;