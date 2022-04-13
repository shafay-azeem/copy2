import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image,SafeAreaView}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctorApp from './DATA/doctorApp.json';
import { ScrollView } from 'react-native-gesture-handler';



function Item({ item }) {
    const navigation = useNavigation();   
  
      return (

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('SelectSlot')}
        >
          <View style={{flex:1}}>
            
     
          <View style = {styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/slots.png')}
            />

         

          </View>

            <Text style={{ textAlign: 'left', fontSize: 25, color:"#3FB39B", textAlign: 'center'   , fontFamily:"Montserrat-Regular"}}>{item.date}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text style={{ textAlign: 'center', fontSize: 17,  color: 'grey',  fontFamily:"Montserrat-Regular"}}>{item.time}</Text>
            
        
        <View style= {{justifyContent: 'flex-end' }}> 
        <View style= {{flexDirection: 'row', justifyContent:'center' }}>
            
 
                  <Text style={{ color: 'grey',marginTop:20,fontSize:15,  fontFamily:"Montserrat-Regular"}}>Available Slots:{'\n'}</Text>
                  <Text style={{ color:"#3FB39B",marginTop:20,fontWeight:'bold',fontSize:16 , fontFamily:"Montserrat-Regular"}}>{item.availableSlots}</Text>
                  
             
           


              </View>
              </View>


              </View>
          </View>
          <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}
        >
          
        </TouchableOpacity>
        </TouchableOpacity>
            );
    }


export default class SelectSchedule extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "Family Medicine";
   constructor(props){
   super(props);
   }
   numColumns = 4

  render(){
    

    
    const formatData = (data, numColumns) => {

      
      
  
      const numberOfFullRows = Math.floor(data.length / numColumns);
 
    
      let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }
      // const [isScrollEnabled, setIsScrollEnabled] = useState(false);
 return data;
    
    };
    doctorName = "Dr Ahmed Khan";
    specality = "Medicine";

    
    return (

        <View style={styles.container}>
          <Header name="Select Schedule" class= ""/>
          
         
            <UnitClerkHeader/>
            <PatientHeader/>
         {/* <View style= {{ height: '100%', width: '100%', alignSelf: 'center'}}> */}
         <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
             <View style={{alignSelf: 'center',height: 120, width: 150,borderRadius: 150/2,justifyContent: 'center', }}>
             <Image
              style={styles.bigLogo}
              source={require('../images/doctor.png')}
            />             
            </View>
            <View>
             <Text style= {styles.cardText30}>{this.doctorName}</Text>
             <Text style= {[styles.cardText, {alignSelf: 'flex-start'}]}>{this.specality}</Text>
             </View>
             </View>

             <View style= {{flex:1 , height:"100%",width: '100%', alignSelf: 'center'}}>
             <SafeAreaView style={{flex:1}}>
        <FlatList
  
          style={{flex:1, marginTop: 30, marginRight:30,marginLeft:30}}
          data={ formatData(doctorApp, this.numColumns)}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
          numColumns = {this.numColumns}
         
        />

</SafeAreaView>
</View>
       

        </View>
       
    
    );
  }
}
