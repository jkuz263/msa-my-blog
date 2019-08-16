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
    currentTitle: string,
    currentDescription: string,
    currentUrl: string,
    id: number,
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
            entryId: this.props.id,
            title: titleElement.value,
            description: descrpElement.value,
            imageUrl: urlElement.value
        }
        fetch ("https://myblog-api.azurewebsites.net/index.html" + this.props.id,{
            body: JSON.stringify(table),
            headers:{
                Accept: "text/plain",
                "Content-Type":"application/json"
            },
            method: 'PUT'}) 
        .then ((response: any)=>{
            this.props.close();
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
                        defaultValue = {this.props.currentTitle}
                        type="title"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="content"
                        defaultValue = {this.props.currentDescription}
                        label="Content"
                        type="content"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="image"
                        defaultValue = {this.props.currentUrl}
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
                        Update
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default BlogDialog;