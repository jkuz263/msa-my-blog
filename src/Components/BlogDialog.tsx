import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
interface IProps{
    open: boolean,
    close: any
}


class BlogDialog extends React.Component<IProps, {}> {
    constructor(props: any){
        super(props);
    } 
    public render() {
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.props.close} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Blog Entry</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Blog Content
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="title"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="content"
                        label="Content"
                        type="content"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="image"
                        label="ImageUrl"
                        type="url"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.props.close} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.props.close} color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default BlogDialog;