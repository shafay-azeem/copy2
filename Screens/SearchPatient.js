import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

export default class SearchPatient extends Component {
  constructor(props){
    super(props)

   }
    state={
        Mr_Number:"",
        CNIC:"",
        QR_code:"",
        Phone_Number:""
  }
   render(){
    return (
  
      <SafeAreaView style={[styles.container,{flex: 1}]}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="Search Patient " class= ""/>
           <UnitClerkHeader/>


           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>SEARCH PATIENT BY:</Text>
           <Text style={styles.EdittextHeading}>Mr Number </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient's MR Number" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Mr_Number:text})}/>
         
           <Text style={styles.EdittextHeading}>CNIC</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient's CNIC Number" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({CNIC:text})}/>
          
           
           <Text style={styles.EdittextHeading}>QRcode</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter Patient 16 digit QR code" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({QR_code:text})}/>


<Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Search by Phone Number" 
              placeholderTextColor="#30A28C"
              keyboardType = 'numeric'
              onChangeText={text => this.setState({Phone_Number:text})}/>
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>this.props.navigation.navigate("SelectPatient")}
             > 
             <Text style={styles.Button_text_styling}>
             SEARCH </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
     
     );
     }
}
