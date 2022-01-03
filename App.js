import * as React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const DATA = [
  {
    id: '1',
    url: require("./img2.png"),
    
  },

  {
    id: '2',
    url: require("./img2.png"),
    
  },

  ]


function HomeScreen() {


 const rendercategories = ({ item }) => (
   <TouchableOpacity >
     <View style={styles.container}>
       <ImageBackground style={{resizeMode:"cover", width:354, 
       height: 197, alignItems:"center", justifyContent:"center"}}
        source={ item.url } >

<Image
style={{width:32,  
       height: 32,  justifyContent:"center",  }}
        source={require("./Subtract.png")} 
/>

        </ImageBackground>
     </View>
   </TouchableOpacity>
 );


  return (
    <ScrollView>
          <View style={{ flex:1,backgroundColor:"#C5EAF9", justifyContent:"center", alignItems:"center"}}>

<ImageBackground
style={{width:414, 
       height: 76, justifyContent:"center", alignContent:"center" }}
        source={require("./Group560.png")} 
>
<Text style={{fontSize: 15.48,
fontWeight:"500",
width: 252,
marginLeft: 30,
marginTop:39,
color:"white",
textAlign:"center"
}}> YOUR PERSONALIZED PLAN</Text>
</ImageBackground>

<ImageBackground
style={{width:414,
        marginTop:-2,
       height: 140.74, justifyContent:"center", alignItems:"center" }}
        source={require("./Path610.png")} 
>


<Image
style={{width:354,  marginTop:-25,
       height: 72,  justifyContent:"center",  }}
        source={require("./stats.png")} 
/>


</ImageBackground>

<View style={{flex:0.5,}}>
<ImageBackground style={{marginTop:-35, width:354,  justifyContent:"center", alignContent:"center" ,
       height: 197, marginBottom:20,resizeMode:"cover" }}
        source={require("./Group385.png")} >

<Image
style={{width:142, 
       height: 79, marginTop:8, marginLeft:18, justifyContent:"center", alignContent:"center" }}
        source={require("./Group387.png")} />

<Image
style={{width:90, 
       height: 37, marginTop:24, marginLeft:18, justifyContent:"center", alignContent:"center" }}
        source={require("./Rectangle.png")} />

<Text
style={{width:27, 
       height: 19, marginTop:-28, marginLeft:50, zIndex:1, color:"white", justifyContent:"center", }}
        >
GO</Text>

</ImageBackground>

</View>

       <View style={{flex:1, marginHorizontal:5}}>
       <Text style={{width:110, marginLeft:20, height:19, fontSize:16, fontWeight:"500", marginBottom:10}}> CHALLENGES</Text>
      <FlatList 
  
       data={DATA}
       renderItem={rendercategories} 
       keyExtractor={item => item.id}
       horizontal
        />
        </View>

<View style={{flex:1,marginHorizontal:20}}>

<ImageBackground style={{resizeMode:"cover", width:354, 
       height: 165, marginBottom:18 }}
        source={require("./weight-loss-scale-with-centimeter-top-view.png")} >

<Image
style={{resizeMode:"contain", width:200, 
       height: 117, marginTop:24, marginBottom:24, marginLeft:18, justifyContent:"center", alignContent:"center" }}
        source={require("./Group1610.png")} />


</ImageBackground>



<ImageBackground style={{resizeMode:"contain", width:354,  justifyContent:"center",
       height: 165, marginBottom:31 }}
        source={require("./weight-loss-scale-with-centimeter-top-view2.png")} >

<ImageBackground
style={{width:202, 
       height: 165,  justifyContent:"center", alignContent:"center" }}
        source={require("./weight-loss-scale-with-centimeter-top-view3.png")} >


<Image
style={{resizeMode:"contain", width:99, 
       height: 115, marginTop:24, marginBottom:24, marginLeft:18, justifyContent:"center", alignContent:"center" }}
        source={require("./Mindpower.png")} />

</ImageBackground>

</ImageBackground>




</View>
</View>
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name=" " component={HomeScreen}
        options ={({ navigation }) => ({
        tabBarStyle: { margin:2 },
          header: ()=> null,
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./homeicon.png")} color={color} size={size} />
          ),
                    })
            }
       />

      <Tab.Screen name="Diet" component={HomeScreen} 
      options ={({ navigation }) => ({
          tabBarLabel: 'Diet',
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./cutlery.png")} color={color} size={size} />
          ),
                    })
            }
      />


      <Tab.Screen name="Progress" component={HomeScreen} 
      options ={({ navigation }) => ({
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./progress.png")} color={color} size={size} />
          ),
                    })
            }
      />


      <Tab.Screen name="Settings" component={SettingsScreen} options ={({ navigation }) => ({
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./setting.png")} color={color} size={size} />
          ),
                    })
            }
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
   container: {
    flex: 1
  },
    bgView: {
      resizeMode:"cover",
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    }
    
})

