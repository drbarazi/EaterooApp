//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {createFoods} from '../actions'
import {connect} from 'react-redux'


// create a component
class Create extends Component {
  state={
      name:"",
      kitchen_name:"",
      price:"",
      description:"",
      image_url:"",
  }

  submit = () =>{
      this.props.createFoods(
        this.state.name,
        this.state.kitchen_name,
        this.state.price,
        this.state.image_url,
        this.state.description,
      );
      this.setState({
          name:"",
          kitchen_name:"",
          price:"",
          description:"",
          image_url:"",
      })
      this.props.navigation.navigate('NavStack')

  }

    render() {
        return (
    <View style={styles.container}>
        <Text>Add Food</Text>
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="Food Name" onChangeText={name => this.setState({name})} value={this.state.name} />
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="Kitchen Name" onChangeText={kitchen_name => this.setState({kitchen_name})} value={this.state.kitchen_name} />
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="Price" onChangeText={price => this.setState({price})} value={this.state.price} />
        <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="Image Url" onChangeText={image_url => this.setState({image_url})} value={this.state.image_url} />
        <TextInput style={{marginTop:20, marginBottom:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="Description" onChangeText={description => this.setState({description})} value={this.state.description} />
     <Button title="Submit" onPress={this.submit} />
    
    </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         padding:30,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default connect(null, {createFoods})(Create);
