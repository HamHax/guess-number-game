import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Text from './Components/Text/Text';
import Card from './Ui/Card/Card';
import Wrapper from './Ui/Wrapper/Wrapper';


class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 1000,
      randomComputerNumber: ''
    }

    this.guessNumRef = React.createRef('');
    this.coinRef = React.createRef('')
  }



  playHandler = () => {
    this.setState({
      balance: this.state.balance - this.coinRef.current.value,
      randomComputerNumber: Math.ceil(Math.random() * 10)
    })
    if(this.guessNumRef.current.value == this.state.randomComputerNumber) {
      this.setState({
        balance: this.state.balance + (this.coinRef.current.value * 10)
      })
    }
  }

  render() {
    return (
      <Wrapper>
         <Text> Your balance is {this.state.balance} </Text>
         <Card>
            <Text> guess number </Text>
            <Input propsRef={this.guessNumRef} type='number'/>
            <Text> choose bet </Text>
            <Input propsRef={this.coinRef} type='number'/>
            <Button onClick={this.playHandler}> play </Button>
         </Card>
         <Card>
          <Text> {this.state.randomComputerNumber} </Text>
         </Card>
      </Wrapper>
    )
  }
}
export default App