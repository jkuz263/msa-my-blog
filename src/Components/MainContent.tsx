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
            blogEntries: [{
                title: "yoyo",
                content: "potato",
                imageUrl: "https://i.imgur.com/F2pWRya.jpg"
            },{
                title: "b obo",
                content: "potato",
                imageUrl: "https://i.imgur.com/F2pWRya.jpg"
            }, {
                title: "dodo",
                content: "potato",
                imageUrl: "https://i.imgur.com/F2pWRya.jpg"
            }
        ],
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

    public render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggleDialog}> Create a blog entry </Button>
                {
                    this.state.blogEntries.map((blogEntry: any) => {
                        return <BlogCard title = {blogEntry.title} content = {blogEntry.content} imageUrl = {blogEntry.imageUrl} />
                    })
                }

                <BlogDialog open = {this.state.open} close = {this.toggleDialog} />
            </React.Fragment>
        )
    }
}

export default MainContent;