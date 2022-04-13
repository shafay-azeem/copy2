import {SafeAreaView,ScrollView, Text,StatusBar, View, TouchableOpacity,TextInput,Alert} from 'react-native';
import React, {Component,Fragment,useEffect,useState,Image} from 'react';
import { Picker } from "@react-native-picker/picker";
import { openDatabase } from 'react-native-sqlite-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from 'react-native-check-box';
import Example from './Example';
import styles from './Styles/CompleteStyling';


import Header from './Header';
import UnitClerkHeader from './AllHeaders/UnitClerkHeader';

var db = openDatabase({ name: 'patient.db' });

const RegistrationScreen = ({ navigation }) => {
        
  
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Pr'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Pr', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Pr(user_id INTEGER PRIMARY KEY AUTOINCREMENT, CNIC_Number VARCHAR(30),FirstName VARCHAR(30),MiddleName VARCHAR(30),LastName VARCHAR(30),Phone_Number VARCHAR(30),Alternate_phone_Number VARCHAR(30),Email VARCHAR(30),HomeAddress VARCHAR(30),Age VARCHAR(30),CityTown VARCHAR(30),Province VARCHAR(30),MaritalStatus VARCHAR(30) , Visit VARCHAR(30),date VARCHAR(30))',
              []
            );
          }
        }
      );
    });
  }, []);


  let [CNIC_Number, setCNIC_Number] = useState('');
    let [FirstName, setFirstName] = useState('');
    let [MiddleName, setMiddleName] = useState('');
    let [LastName, setLastName] = useState('');
    let [Phone_Number, setPhone_Number] = useState('');
    let [Alternate_phone_Number, setAlternate_phone_Number] = useState('');
    let [Email, setEmail] = useState('');
    let[HomeAddress,setHomeAddress] = useState('')
    let [Age, setAge] = useState('');
    let [CityTown, setCityTown] = useState('');
    let [Province, setProvince] = useState('');
    let [Visit, setVisit] = useState('');
    let [MaritalStatus, setMaritalStatus] = useState('');
    let [checked, setChecked] = useState(false);

   
    let [date, setDate] = useState('');
    let [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setDate(date);
      hideDatePicker();
    };
  
    const getDate = () => {
      let tempDate = date.toString().split(' ');
      return date !== ''
        ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
        : '';
    };
   
   
    let register_user = () => {
     
     

      if (!CNIC_Number) {
        alert('Please fill CNIC_Number');
        return;
      }
      if (!FirstName) {
        alert('Please fill FirstName');
        return;
      }
      if (!MiddleName) {
        alert('Please fill MiddleName');
        return;
      }
      if (!LastName) {
        alert('Please fill LastName');
        return;
      }
      if (!Phone_Number) {
        alert('Please Phone_Number');
        return;
      }
      if (!Alternate_phone_Number) {
        alert('Please Alternate_phone_Number');
        return;
      }
      if (!Email) {
        alert('Please fill Email');
        return;
      }
      if (!Age) {
        alert('Please fill Address');
        return;
      }

      if (!CityTown) {
        alert('Please fill CityTown');
        return;
      }
      if (!Province) {
        alert('Please fill Province');
        return;
      }
     
      db.transaction(function (tx) {
        console.log(CNIC_Number, FirstName,MiddleName,LastName,Phone_Number,Alternate_phone_Number,HomeAddress,Email,Age,CityTown,Province,MaritalStatus,Visit,date);
        tx.executeSql(
          
          'INSERT INTO Pr (CNIC_Number, FirstName,MiddleName,LastName,Phone_Number,Alternate_phone_Number,HomeAddress,Email,Age,CityTown,Province,MaritalStatus,Visit,date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
          [CNIC_Number,FirstName,MiddleName,LastName,Phone_Number,Alternate_phone_Number,HomeAddress,Email,Age,CityTown,Province,MaritalStatus,Visit,date.toString()],
        
          (tx, results) => {
            console.log('Results', results.rowsAffected);
          
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'You are Registered Successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('HomeScreen'),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Registration Failed');
          }
        );
      });
    };
  



    return (
      <View style={{backgroundColor:'#3FB39B'}}  >
      <SafeAreaView >
 
      <View > 
      <Header name="Patient Registration" class= "" />
      <UnitClerkHeader/>
</View>

      <View style={[styles.containerForRegistration]}>
  
      <View style={[styles.containerWithinScrollViewforForm]}>


          <ScrollView> 
    <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>MR Number</Text>
          <TextInput style={styles.Edittext}
          placeholder="Auto Generate" 
          keyboardType = 'numeric'
          editable={false} 
          selectTextOnFocus={false}
          placeholderTextColor="#30A28C"
           onChangeText={text => this.setState({MRNumber:text})}/>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Family Number</Text>
          <TextInput style={styles.Edittext}
           placeholder="Auto Generate" 
           keyboardType = 'numeric'
           editable={false} 
           selectTextOnFocus={false}
           placeholderTextColor="#30A28C"
            onChangeText={text => this.setState({FamilyNumber:text})} />
        </View>
      </View>
    

   

      <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
          <Text style={styles.EdittextHeading}>Sehat Safar Number</Text>
          <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholderTextColor="#30A28C"
              editable={false} 
              selectTextOnFocus={false}
              placeholder="Enter Sehat Safar Number" 
              // onChangeText={(userName) => setCNIC_Number(userName)}
              />
               </View>
         

               <View style={styles.inputWrap}>
           <Text style={styles.EdittextHeading}>CNIC Number </Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholderTextColor="#30A28C"
              placeholder="Enter CNIC Number" 
              onChangeText={(CNIC_Number) => setCNIC_Number(CNIC_Number)}
              />
                  </View>
                  </View>


   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
             <Text style={styles.EdittextHeading}>First Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder=" FirstName" 
              placeholderTextColor="#30A28C"
              onChangeText={ (FirstName) => setFirstName(FirstName)}/>
                 </View>

                 <View style={styles.inputWrap}>
             <Text style={styles.EdittextHeading}>Middle Name</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="MiddleName"
              placeholderTextColor="#30A28C" 
              onChangeText={ (MiddleName) => setMiddleName(MiddleName)}/>
         </View>

         <View style={styles.inputWrap}>
            <Text style={styles.EdittextHeading}>Last Name </Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Last Name" 
              placeholderTextColor="#30A28C"
              onChangeText={ (LastName) => setLastName(LastName)}/>
                     </View>
                     </View>

                     
   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
      <TouchableOpacity  onPress={showDatePicker}>
             <Text style={styles.EdittextHeading}>DOB</Text>
             <View>
               
             <TextInput
            style={styles.Edittext}
            value={getDate()}
            placeholderTextColor="#30A28C"
            placeholder="Date"/>

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
     
              </View>
              </TouchableOpacity>
           
</View>

<View style={styles.inputWrap}>
                    <Text style={styles.EdittextHeading}>Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholder="Enter your Phone Number" 
              placeholderTextColor="#30A28C"
              onChangeText={ (Phone_Number) => setPhone_Number(Phone_Number)}/>
              </View>


<View style={styles.inputWrap}>
                    <Text style={styles.EdittextHeading}>Alternate Phone Number</Text>
            <TextInput  
              style={styles.Edittext}
              keyboardType = 'numeric'
              placeholder="Enter your Alternate Phone Number" 
              placeholderTextColor="#30A28C"
              onChangeText={ (Alternate_phone_Number) => setAlternate_phone_Number(Alternate_phone_Number)}/>
                  </View>
                  </View>


                                     
   <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>

                    <Text style={styles.EdittextHeading}>Email</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Enter your Email" 
              placeholderTextColor="#30A28C"
              onChangeText={ (Email) => setEmail(Email)}/>
          </View>
           

          <View style={styles.inputWrap}>
           <Text style={styles.EdittextHeading}>Age</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Age" 
              keyboardType = 'numeric'
              placeholderTextColor="#30A28C"
              onChangeText={ (Age) => setAge(Age)}/>
            </View>
            </View>
            

            <View style={styles.Side_by_side_EditText}>
      <View style={styles.inputWrap}>
                  <Text style={styles.EdittextHeading}>City Town</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="City Town" 
              placeholderTextColor="#30A28C"
              onChangeText={ (CityTown) => setCityTown(CityTown)}/>
</View>
<View style={styles.inputWrap}>
<Text style={styles.EdittextHeading}>Province</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Province"    
              placeholderTextColor="#30A28C"
              onChangeText={ (Province) => setProvince(Province)}/>


</View>

            </View>



            <Text style={styles.EdittextHeading}>Home Address</Text>
            <TextInput  
              style={styles.Edittext}
              placeholder="Home Address" 
              placeholderTextColor="#30A28C"
              onChangeText={ (HomeAddress) => setHomeAddress(HomeAddress)}/>


              
            <View style={styles.Side_by_side_EditText}>
        <View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>Marital Status</Text>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
                 

           
           <Picker  
           selectedValue={MaritalStatus}
           placeholderTextColor="#30A28C"
            onValueChange={(itemValue, itemIndex) => setMaritalStatus(itemValue)} >
  
           <Picker.Item color='#30A28C' label="Married" value="Married" />
           <Picker.Item color='#30A28C' label="Unmarried" value="Unmarried" />
           <Picker.Item color='#30A28C' label="Divorced" value="Divorced" />
           <Picker.Item  color='#30A28C' label="Widow" value="Widow" />
        

           </Picker>  

       
     
     </View>
     </View>


<View style={styles.inputWrap}>
      <Text style={styles.EdittextHeading}>TYPES OF VISIT</Text>
<View   style={{   borderColor: "#30A28C",
        backgroundColor:'#F7F7F7',     
           borderWidth: 1,  borderRadius: 15,  marginHorizontal:20,   marginTop:2, height:50}}> 
                 
          <Picker  
           selectedValue={Visit}
           placeholderTextColor="#30A28C"
           onValueChange={(itemValue, itemIndex) => setVisit(itemValue)}>
  
           <Picker.Item color='#30A28C' label="Clinical Visit" value="ClinicalVisit" />
           <Picker.Item color='#30A28C' label="Educational Visit" value="EducationalVisit" />
           <Picker.Item color='#30A28C' label="Others" value="Others" />
      
        

           </Picker>  

       
     
     </View>
     </View>
     </View>

     <View style={{flexDirection:'row',marginTop:30}}>

<View style={{width:"50%",flexDirection:'row',alignSelf:'center',alignItems:'center',marginLeft:27}}>


           {/* <CheckBox

    
       
style={{marginTop:3}}
onChangeText={ (checked) => setChecked(checked)}
isChecked={checked}
RightText={"Remember Me"}

/> */}

           <Text style= {[{fontFamily:"Montserrat-Bold",justifyContent:'center',color:"#30A28C",fontSize:15}]}>Please Verify above Information is Correct</Text>
           </View>
           <View style={{width:"50%",alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end'}} >


<TouchableOpacity style={[styles.buttonForm,{marginBottom:10}]}
 onPress={register_user}
 > 
 <Text style={styles.Button_text_styling}>
 SUBMIT </Text>
</TouchableOpacity>
</View>



</View>
</ScrollView>         

            </View> 
            


</View>





      </SafeAreaView>
     
      </View>
      
    );
   };





export default RegistrationScreen;
