import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className='pad-b-40'>
        <h1>SEMRush API</h1>
        <NavLink className='txt-decor-none pad-r-20' to='/backlinks'> Backlinks </NavLink>
        <NavLink className='txt-decor-none' to='/organic-keywords'> Organic-Keywords </NavLink>
    </div>
);

export default Header;