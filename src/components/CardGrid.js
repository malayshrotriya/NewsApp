import React, { Component } from 'react';
import CardItem from './CardItem'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import * as actionCreators from '../store/Actions'

class CardGrid extends Component {

    componentDidMount() {
        this.props.fetch()
    }

    onChangeHandler = (e) => {
        this.props.searchStory(e.target.value)
    }

    render() {

        let filteredStories = this.props.items.filter(str => {
            return str.story.headline.toLowerCase().indexOf(this.props.search) !== -1;
        });
        return (
            <div>
                <form style={formStyles}>
                    <input style={inputStyles} type="text" onChange={this.onChangeHandler} placeholder="Search via Headline" />
                </form>
                <Grid container spacing={3} style={gridStyles}>
                    {filteredStories.map(item => {
                        return (
                            <Grid item md={3} sm={4} xs={6}>
                                <CardItem items={item}></CardItem>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

const inputStyles = {
    width: "100%",
    padding: "12px 20px",
    textAlign: "center",
}

const formStyles = {
    margin: "auto",
    width: "50%"
}

const gridStyles = {
    margin: "auto"
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