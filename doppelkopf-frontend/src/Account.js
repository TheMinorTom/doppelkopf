/*
Copyright 2019 MinorTom <me@minortom.net>, DaJaBe
https://go.minortom.net/doppelkopf

This file is part of Doppelkopf.

Doppelkopf is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Doppelkopf is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with Doppelkopf.  If not, see <https://www.gnu.org/licenses/>.
*/
import React from 'react';
import './Account.css';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function handleManage() {
    window.open("https://v1.api.minortom.net/sso/manage.php","_blank")
}

function handleLogout() {
    window.open("https://doppelkopf.minortom.net/apiv1/logout.php","_self")
}

function handleLogin() {
    window.open("http://v1.api.minortom.net/sso/start_flow.php?auth_client=3&auth_redir-id=4","_blank")
}

function LoggedInMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Account
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleManage}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Global Settings" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

function LoggedOutMenu() {
    return(
        <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        >
        Log in
        </Button>
    )
}

class Account extends React.Component {

state = {
    ran: false,
    err: false,
    loggedIn: false,
    ranCheck: false
};

componentDidMount() {
    /*console.log("prexhr");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/apiv1/userinfo.php", true);
    xhr.onload = function (e) {
        console.log("xhronload");
        if (xhr.readyState === 4) {
            console.log("xhrstate4");
            if (xhr.status === 200) {
                console.log("XHR Response: " + xhr.responseText);
            } else {
                console.error("XHR Non404: " + xhr.statusText);
                this.setState({ran: true, err: true, loggedIn: false, ranCheck: false})
                this.props.enqueueSnackbar("Account server connection failure", {variant: 'error'});
            }
        }
    };
    xhr.onerror = function (e) {
        console.error("XHR Error: " + xhr.statusText);
        this.props.enqueueSnackbar("Account server connection failure", {variant: 'error'});
        this.setState({ran: true, err: true, loggedIn: false, ranCheck: false})
    };
    xhr.send(null);*/
    
    fetch("/apiv1/userinfo.php")
      .then(res => res.json())
      .then(
        (result) => {
            console.log("xhrres: "+result);
            if(result.logged_in){
                console.log("logged in");
                this.setState({ran: true, err: false, loggedIn: true, ranCheck: false, user: result.user, secret: result.secret})
            } else {
                console.log("not logged in");
                this.setState({ran: true, err: false, loggedIn: false, ranCheck: false})
            }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log("xhrerr: "+error);
            this.props.enqueueSnackbar("Account server connection failure", {variant: 'error'});
            this.setState({ran: true, err: true, loggedIn: false, ranCheck: false})
        }
      )
};

render() {

if(this.state.loggedIn){
    return (
        <div className="Account">
            <LoggedInMenu />
        </div>
    );
}else{
    return (
        <div className="Account">
            <LoggedOutMenu />
        </div>
    );
}

};
}

export default withSnackbar(Account);
