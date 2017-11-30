/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Drawer,
         Container,
         Header,
         View,
         DeckSwiper,
         Card,
         CardItem,
         Thumbnail,
         Text,
         Left,
         Right,
         Body,
         Title,
         Button,
         Content,
         Footer,
         FooterTab,
         Icon,
         Spinner } from 'native-base';
import { NavigationActions } from 'react-navigation';


const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({routeName: 'main'})
  ]
})

export class Login extends Component<{}> {

  static navigationOptions = {
		title: 'Login',
	};

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
	this._onLoginButtonPress = this._onLoginButtonPress.bind(this);
	this._onSignupButtonPress = this._onSignupButtonPress.bind(this);
	this.checkUserLoggedIn = this.checkUserLoggedIn.bind(this);
  }

  componentDidMount()
  {
  		this.checkUserLoggedIn();
  }

  async checkUserLoggedIn()
  {
  	try {
  		var value = await AsyncStorage.getItem('userData');
  		if (value !== null)
  		{
  			this.setState(JSON.parse(value));
  			this._onLoginButtonPress();
  		}
  		else
  		{
  			console.log("No data!")
  		}
  	}
	catch (error)
	{
		console.log(error);
	}

  }

  async _onLoginButtonPress(){

  	if (true)
  	{
  		try	{
  			await AsyncStorage.setItem('userData', JSON.stringify(this.state));
  			console.log("Saved data!")
  		}
  		catch (error) {
  			console.log(error);
  		}
 	}

	Alert.alert('Logged In!', 'Username: ' + this.state.username + '\nPassword: ' + this.state.password,
	  	[{text: 'OK', onPress: () => this.props.navigation.dispatch(resetAction) }]);
  }

  _onSignupButtonPress(){
	this.props.navigation.navigate('signup', {username: this.state.username, password: this.state.password});
  }


  render() {
    return (
      <View style={styles.container}>
		<Text style={{height:40}} />
		<Text style={{color: 'steelblue', fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}>
			{'MatchFolio'}
		</Text>
        <View style={styles.buttonContainer}>
			<TextInput
				placeholder="Username"
				onChangeText={(text) => this.setState({ username: text })}
			/>
			<TextInput
				placeholder="Password"
				onChangeText={(text) => this.setState({ password: text })}
				secureTextEntry={true}
			/>
			<Text style={{height:25}}>
			</Text>
			<Button
				onPress={this._onLoginButtonPress}
				title='Log In'
			/>
			<Text style={{height:35}}>
			</Text>
			<Text style={{textAlign: 'center'}}>
				{'Don\'t have an account? '}
				<Text style={{	//fontWeight: 'bold',
								color: 'blue'}}
					  onPress={this._onSignupButtonPress}>
					{'Sign up'}
				</Text>
			</Text>

        </View>
      </View>
    );
  }
}


export class Signup extends Component<{}> {

  static navigationOptions = {
		title: 'Signup',
	};

  constructor(props) {
    super(props);
	this.state = {username: "", password: ""};
	this._onSignupButtonPress = this._onSignupButtonPress.bind(this);
  }

  _onSignupButtonPress(){
	  Alert.alert('Registered!', 'Username: ' + this.state.username + '\nPassword: ' + this.state.password,
	  [{text: 'OK', onPress: () => this.props.navigation.goBack() }]);
  }

  componentWillMount()
  {
    uname = this.props.navigation.state.params.username;
	pword = this.props.navigation.state.params.password;

	if(!uname)
		uname = "";
	if(!pword)
		pword = "";

	this.setState({username: uname, password: pword});
  }

  render() {
    return (
      <View style={styles.container}>
		<Text style={{height:40}} />
		<Text style={{color: 'steelblue', fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}>
			{'MatchFolio'}
		</Text>
        <View style={styles.buttonContainer}>
			<TextInput
				placeholder="Username"
				onChangeText={(text) => this.setState({username: text})}
				value={this.state.username}
			/>
			<TextInput
				placeholder="Password"
				onChangeText={(text) => this.setState({password: text})}
				secureTextEntry={true}
				value={this.state.password}
			/>
			<Text style={{height:25}}>
			</Text>
			<Button
				onPress={this._onSignupButtonPress}
				title='Register'
			/>
        </View>
      </View>
    );
  }
}

export default class App extends Component<{}> {

	render() {
		return <MainScreen />;
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	//backgroundColor: 'skyblue'
  },
  buttonContainer: {
	flex: 2,
	justifyContent: 'center',
	margin: 20,
  }

});
