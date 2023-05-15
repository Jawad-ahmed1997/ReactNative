import React, { useState } from 'react';
// import {Text, View} from 'react-native';
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';

const App = () => {
  const [hungry, setHungry] = useState(true);
  const [text, setText] = useState('');
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  }

  return (
    <>
      {/* FlatList */}


      {/* <FlatList
 data={[{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"},{key:"jawad"}]}
 renderItem={({item})=><Text style={{fontSize:50  ,color:'red'}}>{item.key}</Text>}
 /> */}
      <View>
   <Button onPress={()=>setHungry(false)}
    disabled={!hungry}
     title={hungry ? 'Pour me some milk, please!' : 'Thank you!'}   />
    </View> 

      <View  style={{
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
      </View>


      {/* Text Input */}

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