import React, { Component } from 'react'
import './style.css'

export class NoladPortfolio extends Component {


    static slug = 'noex_portfolio';

    render() {
        const Content = this.props.content;

        console.log('content', this.props.content);
        console.log('props', this.props);

        return (
            <div style={{ width: '100%', backgroundColor: 'green', height: '500px' }}>
                <h2>The Portfolio goes here</h2>
                <p>No preview yet in the builder</p>
                <div className="content">
                    <Content />
                </div>
            </div>
        )
    };
}

export default NoladPortfolio;
