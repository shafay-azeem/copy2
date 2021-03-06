import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput,Image} from 'react-native';
// import DoctorDetailHeader from '../shared/doctorDetailHeader';
import styles from './Styles/CompleteStyling';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';
// import DropDownPicker from 'react-native-dropdown-picker';
import invoice from './DATA/Invoice.json';
import drinfo from './DATA/data.json';


export default class ConsultationPayment extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "Medicine";
   doctorEmail = "abc@gmail.com"
   doctorPhone = "090078601"
   Fees = 500
   Location = "AKU, Karachi"

  render(){
    let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
    return (
      <View style={styles.container}>
          <Header name="Payment By Credit/Debit Card" class= ""/>
          <UnitClerkHeader/>
            <PatientHeader/>
     
  
            <View style = {[styles.cardView90,{maxHeight:'65%'}]}>
         
            <View style={{width:'100%',padding:20,height:'30%'}} >
            <View style= {{flexDirection: "row",justifyContent:'center',padding:10}}>
            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>


            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  fontFamily:"Montserrat-Regular"}}>Profile Image </Text>
 
            <View style={{ width: 40 ,height: 40}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../images/doctor.png')}
                    /> }
                  </View>
            </View>



            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  fontFamily:"Montserrat-Regular"}}>DrName </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.doctorName}</Text>
       
            </View>


            <View style = {{flexDirection: 'column' ,alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,  fontFamily:"Montserrat-Regular"}}>Speciality </Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.specality}</Text>
       
            </View>
          
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20, fontFamily:"Montserrat-Regular"}}>Email</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.doctorEmail}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20,fontFamily:"Montserrat-Regular"}}>PhoneNo</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.doctorPhone}</Text>
       
            </View>
            <View style = {{flexDirection: 'column',alignItems: 'center',marginRight:10}}>
            <Text style={{ color: 'black',alignSelf: 'flex-start',fontSize:20 ,fontFamily:"Montserrat-Regular"}}>Fee</Text>
            <Text style={{color: 'black', alignSelf: 'flex-start',fontFamily:"Montserrat-Regular",fontSize:18,color:'#3FB39B',marginRight:20}}>{drinfo.Fees}</Text>
       
            </View>
         

            </View>
            
            
            
            </View>

        
         
            
          <View style={{flex:1}}>
              
            <View style = {{flexDirection:'row',alignSelf:'center',marginTop:40}}>

            <TextInput  
             style={[styles.Edittext,{width:200}]}
              placeholder="Transaction ID" 
           keyboardType = 'numeric'

              placeholderTextColor="#3FB39B"
              onChangeText={text => this.setState({Transaction_ID:text})}/>
           

            <TextInput  
           style={[styles.Edittext,{width:200}]}
              placeholder="Amount" 
           keyboardType = 'numeric'

              placeholderTextColor="#3FB39B"
              onChangeText={text => this.setState({Amount:text})}/>


            <TextInput  
         style={[styles.Edittext,{width:200}]}
              placeholder="Payee's Name" 
              placeholderTextColor="#3FB39B"
              onChangeText={text => this.setState({Payees_Name:text})}/>
 </View>


<View style = {{flexDirection:'row',alignSelf:'center',marginTop:40}}>

            <TextInput  
            style={[styles.Edittext,{width:200}]}
              placeholder="Bank's Name" 
              placeholderTextColor="#3FB39B"
              onChangeText={text => this.setState({Bank_Name:text})}/>
               

       
            <TextInput  
              style={[styles.Edittext,{width:200}]}
              placeholder="Card's Name" 
              placeholderTextColor="#3FB39B"
              onChangeText={text => this.setState({Card_Name:text})}/>
                     
                     </View>

                     <View style={{marginTop:20}}>
            <TouchableOpacity style={[styles.buttonGeneral,{width:"30%"}]}
              onPress={() =>this.props.navigation.navigate("PaymentSuccessfull")}
              > 
              <Text style={styles.Button_text_styling}>
              PAY </Text>
             
            </TouchableOpacity>
             </View>
            </View>
      </View>


   
</View>
    );
  }
}
