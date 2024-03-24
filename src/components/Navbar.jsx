import * as React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../images/logo.jpg';

const navLinks = [
    { to: '/AboutUs', text: 'About Us' },
    { to: '/Services', text: 'Services' },
    { to: '/Contact', text: 'Contact Us' },
    { to: '/Resources', text: 'Resources' }
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <nav class='navbar-fixed navbar-dark navbar-expand Appbar' style={{ backgroundColor: '' }}>
            {/* BIG */}
            <Box sx={{ px: 1, justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <div class='navbar-nav align-items-center d-flex justify-content-between' style={{ width: '100%' }}>
                    <div className=' d-flex align-items-center' style={{ minWidth: '25%' }}>
                        <Link className='nav-link' to='/'>
                            <img src={Logo} className='p-1' alt='' style={{ backgroundColor: 'white', borderRadius: '10px' }} />
                        </Link>
                        <Link class=' mt-2 nav-link h5' to='/'>
                            24/7 Assure Care
                        </Link>
                    </div>
                    <div class='d-flex flex-wrap justify-content-center ' style={{ minWidth: '50%' }}>
                        {navLinks.map((link, index) => (
                            <Link key={index} className='nav-link mx-2' to={link.to}>
                                {link.text}
                            </Link>
                        ))}
                    </div>
                    <div className='d-flex justify-content-end px-3' style={{ minWidth: '25%' }}>
                        <Link className='nav-link' to='/'>847-483-8999</Link>
                    </div>
                </div>
            </Box>

            {/* SMALL */}
            <Box sx={{ justifyContent: 'between', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <div className='navbar-nav d-flex justify-content-between' style={{ width: '100%' }}>
                    <div className=' d-flex align-items-center' style={{ minWidth: '57%' }}>
                        <Link className='nav-link' to='/'>
                            <img src={Logo} className='' alt='' style={{ backgroundColor: 'white', borderRadius: '10px' }} />
                        </Link>
                        <Link class=' mt-2 nav-link h5' style={{}} to='/'>24/7 Assure Care
                        </Link>
                    </div>
                    <div className='d-flex justify-content-end align-items-center' style={{ width: '50%' }}>
                        <div className='' style={{ width: '115px' }}>
                            <Link class='mt-2 nav-link h6' style={{ width: '100%', height: '100%' }} to='/'> * 847-483-8999
                            </Link>
                        </div>
                        <div class=''>
                            <MenuItem aria-controls="menu-appbar" onClick={handleOpenNavMenu} color='#1B8C79' sx={{ borderRadius: '10px' }}>
                                <MenuIcon style={{ height: '25px', width: '25px', color: 'white', border: 'none' }} />
                            </MenuItem>
                            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                                MenuListProps={{ style: { background: '#1B8C79' } }} sx={{ display: { xs: 'block', md: 'none' } }}>
                                {navLinks.map((link, index) => (
                                    <MenuItem key={index}>
                                        <Link onClick={handleCloseNavMenu} className="h4" style={{ color: 'white', textDecoration: 'none' }} to={link.to}>
                                            {link.text}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </div>
                </div>
            </Box>
        </nav>
    )
}

export default Navbar;