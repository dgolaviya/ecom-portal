import React from 'react';
import './Layout.css';
const Layout = (props) => (
    <main className="layout">
        {props.children}
    </main>
);

export default Layout;