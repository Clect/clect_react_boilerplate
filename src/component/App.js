import React from 'react';
import Hello from './Hello';
import Change from './Change';
import { changeText, buttonClick } from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const { actions, text} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return { text: state.text }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({
            changeText: changeText,
            buttonClick: buttonClick
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)