
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Pressable,SafeAreaView,alignItems,justifyContent,alignSelf} from 'react-native';
import CheckBox from 'react-native-check-box';


import Patientinfo from '../DATA/patient.json';

export default class PatientHeader extends Component {
  
 

      render(){
          return (
            <View style={{backgroundColor:'#FFFFFF',marginTop:10,padding:8,borderRadius:10}} >
            <View style= {{flexDirection: "row"}}>
            <View style = {{flexDirection: 'row',width: '5%' , alignItems: 'center',justifyContent: 'flex-start'}}>
            <View style={{ width: 50 ,height: 50,marginRight: 6}}>
                    { <Image
                    style={{   width: '100%',height: '100%',alignSelf: 'center'}}
                    source={require('../user.png')}
                    /> }
                  </View>
            </View>


            <View style = {{flexDirection: 'row',width: '45%' , alignItems: 'center',justifyContent: 'flex-start'}}>
            <Text style={{ lineHeight: 20,color: 'black',alignSelf: 'flex-start',fontFamily:"Montserrat-Regular"}}>PatientName:{'\n'}Day:</Text>
            <Text style={{color:"#3FB39B",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.patientName}{'\n'}{Patientinfo.Day}</Text>
       
            </View>


<View style = {{flexDirection: 'row', width: '50%',justifyContent: 'flex-end',alignSelf:'flex-start'}}>
            <Text style={{lineHeight: 20, color: 'black',alignSelf:'flex-end',fontFamily:"Montserrat-Regular"}}>MRNumber : {"\n"}PhoneNumber: </Text>
              <Text style={{color:"#3FB39B",lineHeight: 20, alignSelf: 'flex-start',fontFamily:"Montserrat-SemiBold"}}>{Patientinfo.MRNumber}{'\n'}{Patientinfo.PhoneNumber}</Text>
            </View>
          </View>
          </View>
          );
        }
      }




const styles = StyleSheet.create({
    header: {
        width:"100%",
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#3FB39B",

    },
    headerText: {
        fontSize: 20,
        fontWeight:'bold',
       color:'#FFFFFF',
    }
})