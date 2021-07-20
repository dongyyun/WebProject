import React from 'react';
import './Header.css';
import NavItem from './NavItem/NavItem';


// icons

import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import AddIcon from '@material-ui/icons/Add';
// import ForumIcon from '@material-ui/icons/Forum';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
// import { IconButton } from '@material-ui/core'

import { ReactComponent as BellIcon } from "./../img/icons/bell.svg";
import { ReactComponent as MessengerIcon } from './../img/icons/messenger.svg';
import { ReactComponent as CaretIcon } from './../img/icons/caret.svg';
import { ReactComponent as PlusIcon } from './../img/icons/plus.svg';


// context api
import { useStateValue } from '../../state/Provider'

const Header = () => {
    const { user } = useStateValue();

    return (
        <div className="header">


            <div className="headerCenter">
                <div className="headerOption headerOptionActive">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>


                {/* <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton> */}

            </div>

    )
}

export default Header;