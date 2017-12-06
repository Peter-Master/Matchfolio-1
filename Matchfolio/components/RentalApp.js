import React, { Component } from 'react';
import {AppRegistry, Alert, CheckBox, Dimensions, FlatList, Image, Picker, ScrollView, StyleSheet, Switch, TextInput} from 'react-native';
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
import { Ionicons } from '@expo/vector-icons'; // 6.1.0

const instructions =
  "We'll use this information to run a\n" + "background check so we can make sure you\n" + "qualify for every property we show you.\n";

class TextInputWithTitle extends Component {
	static navigationOptions = {
		header: null,
	}
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
				<Text style={{flex: 1, textAlign: 'center', fontSize: 20}}>{this.props.title}</Text>
				<TextInput style={{flex: 1, textAlign: 'center', fontSize: 20}} placeholder={this.props.placeholder}/>
			</View>
		);
	}
}

function onPressSubmit() {
  {this.props.navigation.navigate('backgroundcheck')};
  return;
}

export default class App extends Component<{}> {
	static navigationOptions = {
		header: null,
		drawerLabel: 'Rental App',
		drawerIcon: ({ tintColor }) => (<Icon name="ios-list-box-outline" size={15} style={{ color: tintColor }} />),
	}

	render() {
		return (
			<ScrollView>
				<Header
					style= {{backgroundColor: 'transparent',
					borderBottomWidth: 0}}>
					<Left>
						<Button transparent
						onPress={() => this.props.navigation.navigate('DrawerToggle')}>
							<Icon name='menu' />
						</Button>
					</Left>
          <Body style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
           <Text style={styles.header}><Ionicons name="ios-list-box-outline" size={30} color="skyblue" padding = {40}/> Rental Application</Text>
          </Body>
          <Right style={{flex: 1}} />
				</Header>
				<View style={styles.container}>
					<Text style={styles.welcome}>
						Welcome to MatchFolio!
					</Text>
					<Text style={styles.instructions}>
						To get started, input your information.
					</Text>
					<Text
						style={styles.instructions}>
						{instructions}
					</Text>
				</View>
				<View style={styles.fields}>
					<TextInputWithTitle title="First Name" placeholder="John"/>
					<TextInputWithTitle title="Last Name" placeholder="Smith"/>
					<TextInputWithTitle title="Date of Birth" placeholder="MM/DD/YY"/>
					<TextInputWithTitle title="Phone Number" placeholder="555-555-5555"/>
					<TextInputWithTitle title="Driver's License Number" placeholder="A1234567"/>
					<TextInputWithTitle title="Social Security Number" placeholder="123-45-6789"/>
					<TextInputWithTitle title="Previous Address, First Line" placeholder="123 Street Dr."/>
					<TextInputWithTitle title="Previous Address, Second Line" placeholder="New York, NY 13579"/>
					<TextInputWithTitle title="Previous Monthly Rent" placeholder="$700"/>
					<TextInputWithTitle title="Employer" placeholder="Starbucks"/>
					<TextInputWithTitle title="Job Position" placeholder="555-555-5555"/>
					<TextInputWithTitle title="Annualized Salary" placeholder="$27000"/>
					<TextInputWithTitle title="Years Worked" placeholder="3"/>
					<TextInputWithTitle title="Pets" placeholder="none / 2 dogs 1 cat"/>
					<TextInputWithTitle title="Number of Housemates" placeholder="2"/>
					<TextInputWithTitle title="Have you ever fought with a landlord?" placeholder="yes/no"/>
					<TextInputWithTitle title="Have you ever been convicted of a crime?" placeholder="yes/no"/>
					<TextInputWithTitle title="Have you ever filed a lawsuit against your landlord?" placeholder="yes/no"/>
					<TextInputWithTitle title="Are you working with a leasing agent?" placeholder="yes/no"/>
          <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
  				    <Button bordered onPress={() => {this.props.navigation.navigate('backgroundcheck')} } >
  					       <Text> Save </Text>
  				    </Button>
          </View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  fields: {
    flex: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    textAlign: 'center',
    color: 'skyblue',
    fontSize: 20,
  },
});
