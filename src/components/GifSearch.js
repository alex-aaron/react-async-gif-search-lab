import React, { Component } from 'react';

export default class GifSearch extends Component {

    constructor() {
        super()
            this.state = {
                searchInput: ""
            }
        }

    handleSearchInput = event => {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.searchInput)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchInput} onChange={event => this.handleSearchInput(event)}></input>
                    <button type="submit">Search</button><br></br>
                </form>
            </div>
        )
    }
}