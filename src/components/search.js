import React from 'react'
import DataWrapper from './data-wrapper.js'
import employees from '../data.js'


class SearchBox extends React.Component {
    constructor() {
        super()
        this.state = {
            search: '',
            results: employees
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        if (this.state.search.length <= 1) {
            this.setState({
                results: employees
            })
        } else if (this.state.search.length >= 2) {
            let results = []

            employees.map(item => {
                if (item.name.toLowerCase().includes(this.state.search.toLowerCase()) 
                || item.email.toLowerCase().includes(this.state.search.toLowerCase()) 
                || item.position.toLowerCase().includes(this.state.search.toLowerCase())) {
                    results.push(item)
                }
            })

            // const { name, value } = event.target
            this.setState({ 
                search: event.target.value,
                results: results
            })
        }

        this.setState({ 
            search: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleChange}
                    placeholder="Search"
                />
                <DataWrapper employees={this.state.results} />
            </div>
        );
    }
    
}
export default SearchBox;
  