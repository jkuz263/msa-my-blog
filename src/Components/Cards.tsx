import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IProps {
    title: string,
    content: string,
    imageUrl: string
}

class BlogCard extends React.Component<IProps, {}> {
    public render(){
        return (
            <Card>
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
                    {this.props.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          )
    }

}

export default BlogCard;