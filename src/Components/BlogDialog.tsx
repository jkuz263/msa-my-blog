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
    close: any,
    refresh: any
}


class BlogDialog extends React.Component<IProps, {}> {
    constructor(props: any){
        super(props);
    } 
    public createBlogEntry = () =>{
        const titleElement = document.getElementById("name") as HTMLInputElement;
        const descrpElement = document.getElementById("content") as HTMLInputElement;
        const urlElement = document.getElementById("image") as HTMLInputElement;

        const table = { 
            title: titleElement.value,
            description: descrpElement.value,
            imageUrl: urlElement.value
        }
        fetch ("https://myblog-api.azurewebsites.net/api/BlogEntries",{
            body: JSON.stringify(table),
            headers:{
                Accept: "text/plain",
                "Content-Type":"application/json"
            },
            method: 'POST'}) 
        .then ((response: any)=>{
            this.props.close()
            this.props.refresh();
        });

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
                    <Button onClick={this.createBlogEntry} color="primary">
                        Create
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default BlogDialog;