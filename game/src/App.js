import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Text from './Components/Text/Text';
import Card from './Ui/Card/Card';
import Wrapper from './Ui/Wrapper/Wrapper';
import classes from './Ui/Global.module.css'


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
      randomComputerNumber: Math.ceil(Math.random() * 25)
    })
    if(Number( this.guessNumRef.current.value) === Number(this.state.randomComputerNumber)) {
      this.setState({
        balance: this.state.balance + (this.coinRef.current.value * 20)
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Card className={classes.conteiner}>
         <Text className={classes.text}> Your balance is  </Text>
         <Text  className={classes.text1}> {this.state.balance}</Text>
         <Card className={classes.divone}>
            <Text className={classes.textinput}> Guess number 0 - 25 </Text>
            <Input propsRef={this.guessNumRef} className={classes.inputdesign} placeholder='num' type='number'/>
            <Text className={classes.textinput}> Choose bet </Text>
            <Input propsRef={this.coinRef} className={classes.inputdesign1} placeholder='bet' type='number'/>
            <Button className={classes.button} onClick={this.playHandler}> play </Button>
         </Card>
            <Card>
          <Text className={classes.textinput}> Computer number </Text> 
          <Text className={classes.randomnumber}> {this.state.randomComputerNumber} </Text> 
            </Card>
         </Card>
      </Wrapper>
    )
  }
}
export default App