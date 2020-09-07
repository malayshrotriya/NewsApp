import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';



class CardItem extends Component {

    state = {
        active: false
    }

    componentDidMount() {
        if (localStorage.getItem(`fav_id--${this.props.items.story.id}`)) {
            const currentState = this.state.active;

            this.setState({ active: !currentState });
        }
    }

    isActive = () => { return { color: "red" } }

    toggleFavorite = (id, event) => {
        const currentState = this.state.active;

        this.setState({ active: !currentState });
        if (!localStorage.getItem(`fav_id--${id}`)) {
            localStorage.setItem(`fav_id--${id}`, id);
        } else {
            localStorage.removeItem(`fav_id--${id}`)
        }
    }



    render() {
        return (
            <div>
                <Card>
                    <CardActionArea style={cardStyles}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.items.story.headline}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton style={this.state.active ? this.isActive() : null}
                            onClick={(event) => this.toggleFavorite(this.props.items.story.id, event)} aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </Card >

            </div>
        )
    }
}
const cardStyles = {
    height: "100px"
}



export default CardItem;