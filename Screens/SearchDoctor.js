import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import styles from './Styles/CompleteStyling';
import { Picker } from "@react-native-picker/picker";

import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';

export default class SearchDoctor extends Component {
  constructor(props){
    super(props)

   }
    state={
        Location:"",
        Speciality:"",
        Specify_Doctor:"",
        Phone_Number:""
  }
   render(){
    return (
    
      <SafeAreaView style={[styles.container,{flex: 1}]}>
 
   
      <View style={{backgroundColor:'#38AB94'}}> 
           <Header style={{height:"20%"}} name="Search Doctor " class= ""/>
           <UnitClerkHeader/>
           <PatientHeader/>
           </View>
           <View style={styles.containerWithinScrollView} >
           <Text style = {[styles.mediumText,{alignSelf:'center'}]}>SEARCH DOCTOR BY:
           
           </Text>
           <Text style={styles.EdittextHeading}>Location </Text>
           <View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
          <Picker  
           selectedValue={this.state.PickerSelectedVal}
           placeholderTextColor="#30A28C"
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
  <Picker.Item color='#30A28C' label="Select" value="Select" />
           <Picker.Item color='#30A28C' label="AFMC" value="AFMC" />
 
           

           </Picker> 

       
     
     </View>
           <Text style={styles.EdittextHeading}>Speciality</Text>
           <View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
          <Picker  
           selectedValue={this.state.PickerSelectedVal}
           placeholderTextColor="#30A28C"
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
  <Picker.Item color='#30A28C' label="Select" value="Select" />
           <Picker.Item color='#30A28C' label="Family Medicine" value="Family Medicine" />
 
           

           </Picker> 

       
     
     </View>
          
           
           <Text style={styles.EdittextHeading}>Specify Doctor</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Specify Name of Desired Doctor" 
              placeholderTextColor="#30A28C"
              onChangeText={text => this.setState({Specify_Doctor:text})}/>


                         
           <Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Search by Phone Number" 
              placeholderTextColor="#30A28C"
              keyboardType = 'numeric'
              onChangeText={text => this.setState({Phone_Number:text})}/>
         
             <TouchableOpacity style={styles.buttonForSearchPatient}
             onPress={() =>this.props.navigation.navigate("SelectDoc")}
             > 
             <Text style={styles.Button_text_styling}>
             SEARCH </Text>
           </TouchableOpacity>
      



          
        
           </View>
         
           </SafeAreaView>
       
     );
     }
}
