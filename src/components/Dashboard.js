import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {connect} from 'react-redux';

import SearchBarScreen from './SearchBarScreen';
import ProfileList from './ProfileList';

class Dashboard extends Component{
  constructor(props){
    super(props);
  }

componentDidMount() {
  this.props.initialLoad(true);
  fetch('https://randomuser.me/api/?results=75').then(results=>{
      return results.json();
  }).then(data =>{
        this.props.initialState({profileData : data.results,
          error: data.error,
          loading : false,
          searchText : '',
          checkedFemale : false,
          checkedMale : false});
  }).catch(error => {
    this.props.initialError({error:error,loading:false});
  });

}
  render() {
    return (
      <View style={styles.conntainer}>
          <SearchBarScreen/>
          <ProfileList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conntainer : {
    flex : 1,
    backgroundColor : '#FFFFFF',
    flexDirection:'column',
    flexWrap:'wrap'
  }
});
const mapDispatchToProps = (dispatch) =>({
  initialState : (data) =>{
    dispatch({ type: 'INITIAL_LIST',payload:data })
  },
  initialLoad : (val)=>{
    dispatch({type : 'INITIAL_LOAD',payload:val})
  },
  initialError : (obj) =>{
    dispatch({type:'INITIAL_ERROR',payload:obj});
  }
})
export default connect(null,mapDispatchToProps)(Dashboard);
