

import React, {Component, useState,useEffect } from 'react';
import { Text, View, TouchableOpacity,TextInput, FlatList, Image}  from 'react-native';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';
import PatientHeader from './AllHeaders/PatientHeader';
import Header from './Header';

import styles from './Styles/CompleteStyling';
// import GradientButton from 'react-native-gradient-buttons';
import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../styles/colors';
import doctors from './DATA/selectdoc.json';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



function Item({ item }) {
    const navigation = useNavigation();   
  
      return (
        

        <TouchableOpacity style={styles.listItemBox}
        onPress={() => navigation.navigate('CreateSlot')}
        >
          <View style={{flex:1,marginTop:30}}>
            
      {/* <View style = {{flexDirection: 'row', width: 80, height: 25,borderColor: 'orange' ,borderWidth:2, borderRadius: 25, alignSelf: 'flex-end', alignItems: 'center'}}>
             <View style = {styles.dollarIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/dollar.png')}
            />
            </View> 
             <Text style= {{textAlign: 'right',color: 'black'}}>500 PKR</Text> 
            
            
            
            </View> */}
          <View style = {[styles.roundIcon]}>
            <Image
              style={styles.tinyLogo}
              source={require('../images/doctor.png')}
            />

         

          </View>

            <Text numberOfLines={1} style={{ textAlign: 'left', fontSize: 25, color:"#075430", textAlign: 'center',fontFamily:"Montserrat-Regular"}}>Dr. {item.name}</Text>

            
            <View style = {{padding: 5, width: '100%', height: '100%'}}>
            <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: 17,  color: 'grey',fontFamily:"Montserrat-Regular"}}>{item.profession}</Text>
            
        
        <View style= {{flex: 1,justifyContent: 'flex-end', marginBottom: 80 }}> 
        <View style= {{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', }}>
            {/* <View style={styles.circleView}>
                <Text style = {styles.enabled}>M</Text>
              </View> */}
           
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


export default class selectDocbooking extends Component {
   doctorName = "Dr Ahmed Khan";
   specality = "Family Medicine";
   
   constructor(props){
   super(props);
   }

   numColumns = 4
   isScrollEnabled=true
  render(){
    

    
    const formatData = (data, numColumns) => {
      // const [isScrollEnabled, setIsScrollEnabled] = useState(false);
      const numberOfFullRows = Math.floor(data.length / numColumns);
      
    
      let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }

      // useEffect(() => {
      //   setTimeout(() => {
      //     setIsScrollEnabled(true);
      //   }, 3000);
      // }, []);
   
 return data;
    
    };
    doctorName = "Dr Ahmed Khan";
    specality = "Medicine";
    
    
    return (
    
        <View style={styles.container}>
          <Header name="Select Doctor" class= ""/>
          
          
            <UnitClerkHeader/>
            <PatientHeader/>
         <View style= {{flex:1 ,width: '100%', alignSelf: 'center'}}>
         <SafeAreaView style={{flex:1}} >
        <FlatList
  
          style={{flex:1, marginTop: 30, marginRight:30,marginLeft:30}}
          data={ formatData(doctors, this.numColumns)}
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
