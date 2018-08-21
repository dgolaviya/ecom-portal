import React from 'react'
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TopHeader.css';
import logo from '../../assets/images/all-in-one.png';
const TopHeader = () => {
    return (
        <div className="top-header">
            <Image className="logo" src={logo} rounded />
            <div className="right-section">
                <FontAwesomeIcon size="2x" icon="comments" />
                <FontAwesomeIcon size="2x" icon="bell" />
                <FontAwesomeIcon size="3x" icon="user-circle" />
                <div>superadmin@allinone.com</div>
            </div>
        </div>
    )
}

export default TopHeader
