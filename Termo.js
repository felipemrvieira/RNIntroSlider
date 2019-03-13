import React, {Component} from 'react';
import TermoComponent from './TermoComponent';
import Intro from './Intro';

export default class Termo extends Component {
    constructor(props){
        super(props);
        this.state = {
            showIntro: false
        }
    }

    _acceptTerm = () => {
        this.setState({ showIntro: true });
    }

  render() {
    if (this.state.showIntro) {
        return <Intro />;
    } else {
        return <TermoComponent acceptTerm={this._acceptTerm}  />
    }
  }

}
