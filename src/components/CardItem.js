import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

class CardItem extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.items.story.headline}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </Card >

            </div>
        )
    }
}

export default CardItem;