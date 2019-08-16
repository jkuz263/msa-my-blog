import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

    
class Header extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" >
                        My Blog
                    </Typography>
                    <div id="google_translate_element"></div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;