import React, { Component } from 'react';
import CardItem from './CardItem'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { connect } from 'react-redux'
import * as actionCreators from '../store/Actions'

class CardGrid extends Component {



    // componentDidMount() {
    //     axios.get('https://cors-anywhere.herokuapp.com/ace.qtstage.io/api/v1/collections/entertainment').then(res => {
    //         return this.setState({ items: res.data.items })
    //     });
    // }

    componentDidMount() {
        this.props.fetch()
    }

    onChangeHandler = (e) => {
        this.props.searchStory(e.target.value)
    }

    render() {
        let filteredStories = this.props.items.filter(story => {
            return story.story.headline.indexOf(this.props.search) !== -1;
        });
        return (
            <div>
                <form>
                    <input type="text" onChange={this.onChangeHandler} />
                </form>
                <Grid container spacing={3}>
                    {filteredStories.map(item => {
                        return (
                            <Grid item xs={3}>
                                <CardItem items={item}></CardItem>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: () => dispatch(actionCreators.fetchItems()),
        searchStory: (value) => dispatch({ type: "SEARCH", payload: value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid);