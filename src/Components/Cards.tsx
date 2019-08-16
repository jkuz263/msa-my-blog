import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UpdateDialog from './UpdateDialog';

interface IProps {
    title: string,
    description: string,
    imageUrl: string,
    id: number,
    refresh: any
}

interface IState { 
  open: boolean;
}

class BlogCard extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false
    }
  }
public delete = () => {
  fetch("https://localhost:44331/api/BlogEntries/" + this.props.id,{
    method: 'DELETE'}).then((response: any) => this.props.refresh());
}
  public toggleOpen = () => {
    this.setState((prevState: any) => {return ({open: !prevState.open})});
  }
    public render(){
        return (
          <React.Fragment>
            <Card style={{ maxWidth: "500px"}}>
              <CardActionArea>
                <CardMedia
                  image={this.props.imageUrl}
                  title= {this.props.title}
                  style = {{minHeight: "300px",maxWidth:"500px"}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button onClick = {this.toggleOpen}>Edit</Button>
              <Button onClick = {this.delete}> Delete </Button>
            </Card>
            <UpdateDialog refresh = {this.props.refresh} id = {this.props.id}  open = {this.state.open} close = {this.toggleOpen} currentTitle = {this.props.title} currentDescription = {this.props.description} currentUrl = {this.props.imageUrl}/>
            </React.Fragment>
          )
    }

}

export default BlogCard;