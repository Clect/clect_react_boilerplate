import React from 'react';

class Change extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick} >变变变</button>
        );
    }
}

export default Change;