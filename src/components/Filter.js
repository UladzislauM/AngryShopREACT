import React, { Component } from 'react'

export class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'towel_rails',
                    name: 'Towel rails'
                }
            ]
        }
    }
    render() {
        return (
            <div className='filter'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseFilter(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Filter