import React, { useState } from 'react';
// import {Text, View} from 'react-native';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, SectionList, } from 'react-native';
// import HeadBackground from './assets/PaymentImage/Group4107.png';
import { RadioButton,Button,useTheme} from 'react-native-paper';
// import RadioButton from 'react-native-radio-button';



const App = () => {
  const [hungry, setHungry] = useState(true);
  const [text, setText] = useState('');
  const [checked, setChecked] = React.useState('Cash On Arrival');
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width:"100%",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    Imagecontainer: {
      height: "30%",
      width:"100%",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    paymentContainer: {
      height: "40%",
      width:"100%",
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'column',
    },
    methodList: {
      height: "20%",
      width:"90%",
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:"#ffffff",borderRadius:10
    },
    methodListImage:{
      width:"20%",
      height:"100%",
      display:'flex',
      justifyContent:'center',
      alignItems:"flex-start",
      paddingLeft:10
    },
    methodListTextView:{
      width:"60%",
      height:"100%",
      display:'flex',
      justifyContent:'center',
      alignItems:"flex-start",
      paddingLeft:10
    },
    methodListRadio:{
      width:"20%",
      height:"100%",
      display:'flex',
      justifyContent:'center',
      alignItems:"flex-end",
      paddingRight:10
    },
    methodListText:{
      fontSize:18,
      fontWeight:'bold',
    },
    RadioButton:{
    height:100,
    width:100},
    text:{
      fontWeight:'bold',
      fontSize:31,
      color:'black'
    },
    AddCardButton: {
      borderRadius:10,
      borderColor:'#308bfd',
   
    },
    cotinueButton: {
      borderRadius:10,
      borderColor:'#308bfd',
      paddingLeft:70,
      paddingRight:70,
      color:'#FFFFFF',
      backgroundColor:"#308bfd"
    },
    ButtonView:{
      display:'flex',
      justifyContent:'center',
      alignItems:"flex-end",
      marginRight:"10%",width:"100%"
    },
    ContinueButtonView:{
      height:'10%',
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
      width:"100%"
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Imagecontainer}>
      <Image
          source={require('./assets/PaymentImage/Group4107.png')}
          style={{width:300, height: 200 }}
        />
        </View>
        <Text style={styles.text}>Choose Your Payment</Text>
        <View style={styles.paymentContainer}>
        <View style={styles.methodList}>
          <View style={styles.methodListImage}>
          <Image 
          source={require('./assets/PaymentImage/money(2)1.png')}
          style={{width:30, height: 30 }}
        />
          </View>
          <View style={styles.methodListTextView}>
          <Text style={styles.methodListText}>Cash On Arrival</Text>
          </View>
          <View style={styles.methodListRadio}>
          <RadioButton
        value="Cash On Arrival"
        status={ checked === 'Cash On Arrival' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Cash On Arrival')}
      />
        </View>
      
        </View>
        <View style={styles.methodList}>
          <View style={styles.methodListImage}>
          <Image 
          source={require('./assets/PaymentImage/paypal(1).png')}
          style={{width:30, height: 30 }}
        />
          </View>
          <View style={styles.methodListTextView}>
          <Text style={styles.methodListText}>Paypal</Text>
          </View>
          <View style={styles.methodListRadio}>
          <RadioButton.Android 
  style={styles.RadioButton}
  value="Paypal"
  status={ checked === 'Paypal' ? 'checked' : 'unchecked'}
  onPress={() => setChecked('Paypal')}
      />
        </View>
      
        </View>
        <View style={styles.methodList}>
          <View style={styles.methodListImage}>
          <Image 
          source={require('./assets/PaymentImage/visa(1).png')}
          style={{width:30, height: 30 }}
        />
          </View>
          <View style={styles.methodListTextView}>
          <Text style={styles.methodListText}>Visa</Text>
          </View>
          <View style={styles.methodListRadio}>
          <RadioButton
        value="Visa"
        status={ checked === 'Visa' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Visa')}
      />
        </View>
      
        </View>
        </View>
       <View style={styles.ButtonView}>
       <Button 
   style={styles.AddCardButton}
      labelStyle={{
        fontWeight: 'bold',
        fontSize: 14,
      }}  onPress={()=>setHungry(true)}
    // disabled={!hungry}
    mode="outlined" textColor="#308bfd" >Add Card</Button>
       </View>
          <View style={styles.ContinueButtonView}>
          <Button 
   style={styles.cotinueButton}
      labelStyle={{
        fontWeight: 'bold',
        fontSize: 18,
      }}  onPress={()=>setHungry(true)}
    disabled={!hungry}
    mode="elevated" textColor="#FFFFFF" >Continue</Button>
          </View>
      </View>



      {/* ************  FlatList  *********** */}


      {/* <FlatList
 data={[{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"}]}
 renderItem={({item})=><Text style={{fontSize:50  ,color:'red'}}>{item.key}</Text>}
 /> */}


        {/* ***********  Section List  ************** */}

      {/* <View>
      <SectionList 
      sections={[
        {title:"Team A",data:["jawad","Adeel","Saleem"]},{title:"Team A",data:["jawad","Adeel","Saleem"]},{title:"Team A",data:["jawad","Adeel","Saleem"]}
      ]}
      renderItem={({item})=><Text>{item}</Text>}
      renderSectionHeader={({section})=><Text style={{fontSize:50}}>{section.title}</Text>}
      keyExtractor={item=>'basicListEntry-${item}'}/>
      </View>  */}






      {/* <View>
   <Button onPress={()=>setHungry(false)}
    disabled={!hungry}
     title={hungry ? 'Pour me some milk, please!' : 'Thank you!'}   />
    </View>  */}

      {/* <View  style={{
        backgroundColor:"#f5f5f5",
      display:'flex',
      justifyContent:"center",
      alignItems:"center",
      height:"100%",
      borderColor: 'gray',
    }}>
       <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{width: 60, height: 60 ,borderRadius:50}}
        />
        <Text>Create Account</Text>
       
       <TextInput
    style={styles.formInput}
    placeholder="First Name"
      />
       <TextInput
       style={styles.formInput}
       placeholder="Last Name"
      />
       <TextInput
        style={styles.formInput}
        placeholder="Password"
      />
      <TouchableOpacity  style={[styles.formButton , {backgroundColor: '#000000' }]}>
        <Text style={styles.formButtonText}>Login </Text>
      </TouchableOpacity>
      <Text>Already Have an Account</Text>
      </View> */}


      {/* ***************     Text Input   ********************** */}

      {/* <View style={{ padding: 10 }} >
        <TextInput style={{ height: 40 }}
          onChangeText={newText => setText(newText)}
          placeholder='Enter Your text'
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text.split(' ').map(word => word && '🍕').join(' ')}
        </Text>
      </View> */}



      {/* Scroll View */}

      {/* <ScrollView>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize:48}}>Scroll Me plz</Text>
      <Image source={logo}/>
    </ScrollView> */}
    </>
  );
};

// const Pizzatranslator = ()=>{
//   const [text,setText]= useState('');

//   return(
//     <View style={{padding: 10}} >
//         <TextInput style={{height:40}}
//         onChangeText={newText=>setText(newText)}
//         placeholder='Enter Your text'
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {text.split(' ').map(word => word && '🍕').join(' ')}
//         </Text>
//     </View>
//   )

// };



const styles = StyleSheet.create({
  formInput: {
    height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginTop: 8, borderRadius: 10, paddingLeft: 10


  },
  formButton: {
    alignItems: 'center', justifyContent: 'center', height: 40, width: '30%', borderColor: 'gray', borderWidth: 1, marginTop: 8, borderRadius: 10,
  },
  formButtonText: { color: '#FFFFFF', fontFamily: "thoma", fontWeight: 'bold' }
});

export default App;