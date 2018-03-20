import React, { Component } from 'react';

export class Box extends Component {
    render() {
        return (
            <div>
                <h3>Value: 1</h3>
                <button>Increase</button>
                <button>Descrease</button>
                <button>Reset</button>
            </div>
        );
    }
}
