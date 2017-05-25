import React from 'react';
import Hello from './Hello';
import Change from './Change';
import { changeText, buttonClick, buttonIncrease } from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.ins = this.ins.bind(this);
    }
    ins() {
        this.props.actions.buttonIncrease();
    }

    render() {
        const { actions, text, counter} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
                <br />
                <button onClick={this.ins}>+++</button>
                <p>{counter}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        text: state.text,
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators({
            changeText: changeText,
            buttonClick: buttonClick,
            buttonIncrease: buttonIncrease
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
