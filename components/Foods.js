//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {getFoods, deleteFood} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

class Foods extends Component {
  componentDidMount() {
    this.props.getFoods();
  }
  render() {
    const img_default = 'https://asset.kompas.com/crops/rPs9P_5XQyaC6LYhiDHWtAkF0tU=/0x0:1000x667/750x500/data/photo/2021/05/14/609df58009457.jpg';
    return (
      <View style={styles.container}>
        {this.props.loadingReducer ? (
          <Text>Loading Please Wait</Text>
        ) : (
          <FlatList
            style={{width: '100%'}}
            data={this.props.listOfFoods}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    elevation: 8,
                    marginBottom: 15,
                    borderRadius: 15,
                    backgroundColor: '#575FCF',
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#fff',
                      marginBottom: 10,
                      alignSelf: 'center',
                    }}>
                    {' '}
                    {item.name}
                  </Text>
                  <Image
                    source={{uri: item.image_url ?? img_default}}
                    style={{width: 100, height: 100, alignSelf: 'center'}}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      lineHeight: 30,
                      color: '#fff',
                      alignSelf: 'center',
                    }}>
                    {item.kitchen_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      lineHeight: 30,
                      color: '#fff',
                      alignSelf: 'center',
                    }}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      lineHeight: 30,
                      color: '#fff',
                      alignSelf: 'center',
                    }}>
                    Rp {item.price}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 25,
                    }}>
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate('Edit', {...item})
                      }>
                      <View style={{marginRight: 30}}>
                        <Image
                          source={require('../assets/edit.png')}
                          style={{width: 26, height: 26, tintColor: '#FFF'}}
                        />
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => this.props.deleteFood(item.key)}>
                      <View style={{marginRight: 5}}>
                        <Image
                          source={require('../assets/trash.png')}
                          style={{width: 26, height: 26, tintColor: '#FFF'}}
                        />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
});

function mapStateToProps(state) {
  const listOfFoods = _.map(state.foodsList.foodsList, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    listOfFoods,
    loadingReducer: state.loadingReducer.loadingReducer,
  };
}

export default connect(mapStateToProps, {getFoods, deleteFood})(Foods);
