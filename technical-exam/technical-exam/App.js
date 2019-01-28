import React from 'react';
import { Length, Alert, StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView, CheckBox, TouchableOpacity } from 'react-native';
import logo from './image/Logo.png'

const { width: WIDTH } = Dimensions.get('window')
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      check:false,
      email: '',
      text: '',
      texts: '',
    };
      this.validate = this.validates.bind(this);
      let text = this.state.email;
      let texts = this.state.pass;
  }
  
  CheckBoxText(){
      this.setState({
        check:!this.state.check,
      })
  }

  

  validates = () => { 
    
        const maxLength = 12;
        const minLength = 6;
        let text = this.state.email; 
        let texts = this.state.pass;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 

        if(texts == "" || text == ""){
          this.setState({msgPassword: "Input form is empty"});
          this.setState({msgEmail: "Input form is empty"});
        }
        if(text == ""){
          this.setState({msgEmail: "Input form is empty"});
        }
        else if(reg.test(text) === false) 
        { 
          this.setState({msgEmail: "Email text isn't email form."});
        }
        
    } 

  render() {
    return (
      
      <View showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo}/>
        </View>

        <View style = {styles.container2}>
          <Text style={styles.emailAdd}>
            Email
          </Text>
          <TextInput 
                onChangeText={(text) => this.setState({email:text})} 
                type='email'
                value={this.state.email} 
                keyboardType='email-address'
                style={styles.emailInput}
                placeholder={'Input Email Address'}
                underlineColorAndroid='transparent'/>
          <Text style = {styles.errorMsg}>
            {this.state.msgEmail}
          </Text>
        </View>
        <View style = {styles.container3}>
          <Text style={styles.password}>
            Password
          </Text>
        <TextInput 
              onChangeText={(texts) => this.setState({pass:texts})}
              style={styles.passwordInput}
              placeholder={'Input Password'}
              secureTextEntry={true}
              value={this.state.pass}
              underlineColorAndroid='transparent'
              type = 'password'
              keyboardType='password'
              />

        <Text style = {styles.errorMsg}>
          {this.state.msgPassword}
        </Text>
          
        </View>
        
        <View style = {styles.container4}>
              
              <View>
                <CheckBox value={this.state.check} onChange={()=>this.CheckBoxText()} style={styles.rememberMe}/>
              </View>
              <View>
                <Text style={styles.remember}>Remember me</Text>
              </View>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.validates} >
              <Text style={styles.txtLogin}>Sign In</Text>
        </TouchableOpacity>


        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 45
  },

  container2:{
    marginLeft: 25
  },

  container3:{
    marginTop: 20,
    marginLeft: 25
  },

  logo:{
    marginLeft: 32,
    alignItems: 'center',
    marginTop: 55,
    justifyContent: 'center'
  },
  emailAdd: {
    fontSize: 25,
    color: 'rgb(100, 54, 171)'
  },
  password: {
    fontSize: 25,
    color: 'rgb(100, 54, 171)'
  },

  emailInput:{
    width: WIDTH -55,
    height: 55,
    paddingLeft: 15,
    fontSize: 16,
    borderRadius: 5,
    borderColor: 'rgb(100, 54, 171)',
    borderWidth: 2,
    top: 10
  },
  passwordInput:{
    width: WIDTH -55,
    height: 55,
    paddingLeft: 15, 
    fontSize: 16,
    borderRadius: 5,
    borderColor: 'rgb(100, 54, 171)',
    borderWidth: 2,
    top: 10
  },

  container4: {
    marginTop: 33,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  
  btnLogin:{
    width: WIDTH -55,
    height: 55,
    borderRadius: 5,
    backgroundColor: 'rgb(100, 54, 171)',
    marginLeft: 28,
    top: 2,
    justifyContent: 'center'
  },

  txtLogin:{
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 10
  },

  errorMsg:{
    marginTop: 10,
    fontSize: 15,
    color: 'red'
  }
});
