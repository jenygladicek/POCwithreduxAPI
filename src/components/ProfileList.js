import React, {Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import { List, ListItem} from "react-native-elements";
import {connect} from 'react-redux';

class ProfileList extends Component{
  constructor(props){
    super(props);
   }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  }; 
  render() {
    const {loading,profileData,newText,newMale,newFemale} = this.props;
    let renderData = [];
    if(profileData != undefined){
      profileData.forEach((element) => {
        if (newText != undefined && element.name.first.indexOf(newText) === -1) {
          return;
        }
        if (newMale && element.gender ==='male') {
          return;
        }
        if (newFemale && element.gender ==='female') {
          return;
        }
        renderData.push(element);
    })
    }
    return (
      <View style={{flex:9,flexWrap:'wrap'}}>
         {loading ? (<Text>Loading...</Text>) : 
         (<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
           <FlatList data={renderData}
                   renderItem={({ item }) => (
                    <ListItem 
                      containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
                      roundAvatar
                      title={`${item.name.first} ${item.name.last}`}
                      subtitle={item.email}
                      avatar={{ uri: item.picture.thumbnail }}
                    />
                  )}
                  keyExtractor={item => item.email}
                  ItemSeparatorComponent={this.renderSeparator}
                  ></FlatList>
         </List>)}
      </View>
    );
  }
}
const mapStateToProps = (state) =>({
    loading : state.ListReducer.loading,
    profileData : state.ListReducer.profileData,
    newText : state.SearchTextReducer.searchText,
    newMale : state.MaleReducer.checkedMale,
    newFemale : state.FemaleReducer.checkedFemale
})
export default connect(mapStateToProps)(ProfileList);
