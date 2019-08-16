import React from "react";
import BlogCard from './Cards'
import BlogDialog from './BlogDialog'
import { Button } from "@material-ui/core";
interface IState { 
    blogEntries: any,
    open: boolean
}


class MainContent extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            blogEntries: [],
        open: false 
    };
    }
    public toggleDialog = () => {
        this.setState((prevState: any) => {
            return ({
                open: !prevState.open
            })
        })
    }
    componentDidMount() {
        this.getBlogEntry();
    }
    public getBlogEntry = () =>{
        fetch ("https://localhost:44331/api/BlogEntries",{method: 'GET'})
        .then((response: any) => {
            // console.log(response)
            return response.json()
        }).then((response: any) => {
            // console.log(response);
            this.setState({
                blogEntries: response
            });
        })
    }

    public render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggleDialog}> Create a blog entry </Button>
                {
                    this.state.blogEntries.map((blogEntry: any) => {
                        return <BlogCard refresh = {this.getBlogEntry} id = {blogEntry.entryId} title = {blogEntry.title} description = {blogEntry.description} imageUrl = {blogEntry.imageUrl} />
                    })
                }
                <BlogDialog refresh = {this.getBlogEntry} open = {this.state.open} close = {this.toggleDialog} />
            </React.Fragment>
        )
    }
}

export default MainContent;