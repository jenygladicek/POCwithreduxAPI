import React, {Component} from 'react';
import {View} from 'react-native';
import {SearchBar,CheckBox } from "react-native-elements";
import {connect} from 'react-redux';

class SearchBarScreen extends Component{
  constructor(props){
    super(props);
    this.state ={
      checkedFemale : false,
      checkedMale : false
    }
  }
  changeSearchText = (text) =>{
    this.props.searchText(text);
  } 
  changeToMale = () =>{
    this.setState({checkedMale : !this.state.checkedMale},()=>{
      this.props.checkedMale(this.state.checkedMale);
    });
  }
  changeToFemale = () =>{
    this.setState({checkedFemale : !this.state.checkedFemale},()=>{
      this.props.checkedFemale(this.state.checkedFemale);
    });
  }
  render() {
    return (
      <View style={{flex:3,backgroundColor:'#393E42',flexWrap:'wrap'}}>
        <SearchBar placeholder="Search Here..." onChangeText={this.changeSearchText}/>
        <View style={{flexDirection:'row',flex:1}}>
            <View style={{flex:1}}><CheckBox title='Female' checked={this.props.updatedFemale} onPress={this.changeToFemale}/></View>
            <View style={{flex:1}}><CheckBox title='Male' checked={this.props.updatedMale} onPress={this.changeToMale}/></View>
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) =>({
  searchText : (text) =>{
    dispatch({ type: 'SEARCH_TEXT',searchText :text })
  },
  checkedMale : (val) =>{
    dispatch({ type: 'CHECKED_MALE',checkedMale :val })
  },
  checkedFemale : (val) =>{
    dispatch({ type: 'CHEACKED_FEMALE',checkedFemale :val })
  }
})
const mapStateToProps = (state) =>({
  updatedFemale : state.FemaleReducer.checkedFemale,
  updatedMale : state.MaleReducer.checkedMale
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchBarScreen);
