import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import BottomMenu from "@/app/menubottom";

const assetsPath:string = "../assets/";

export default function Index() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style = { styles.container }>

        <View style = { styles.imageContainer }>
          <Image           
            source = {require("../assets/images/album/example-image.png") }
            style = { styles.image }
          />
        </View>

        <View style = { [styles.sliderContainer, { gap: 5, marginTop: 38, marginBottom: 48 }] }>
          <Text style = { styles.text }>00:00</Text>
          <Slider
            style = { styles.slider }
            minimumValue = {0}
            maximumValue = {300}
            thumbTintColor = "#435A88"
            minimumTrackTintColor = "#FFF"
            maximumTrackTintColor = "#FFF"
          />
          <Text style = { styles.text }>5:00</Text>
        </View>          

        <View style = {{ marginBottom: 40 }}>
          <Text style = { [styles.text, { fontSize: 20, fontWeight: "bold", marginBottom: 20 }] }>HOMEM NA ESTRADA</Text>
          <Text style = { [styles.text, { fontSize: 16 }] }>RACIONAIS MC'S</Text>
        </View>

        <View style = { styles.controlsContainer }>
          <Image source = { require(assetsPath + "icons/repeat-icon.png") }/>
          <View style = { styles.controls }>
            <Image source = { require(assetsPath + "icons/previous-icon.png") }/>
            <Image source = { require(assetsPath + "icons/play-icon.png") }/>
            <Image source = { require(assetsPath + "icons/next-icon.png") }/>
          </View>
          <Image source = { require(assetsPath + "icons/shuffle-icon.png") }/>
        </View>

        <View style = { [styles.sliderContainer, { gap: 15, marginTop: 56 }] }>
          <Image source = { require(assetsPath + "icons/mute-icon.png") }/>
          <Slider 
            style = { styles.slider }
            minimumValue = {0}
            maximumValue = {100}
            thumbTintColor = "#435A88"
            maximumTrackTintColor = "#FFF"
            minimumTrackTintColor = "#435A88"
          />
          <Image source = { require(assetsPath + "icons/max-volume-icon.png") }/>
        </View>

        <TouchableOpacity onPress = { () => console.log("pressionado") } style = { styles.touchableOpacity }>
          <Text>VER A LETRA</Text>
        </TouchableOpacity>

        <BottomMenu />

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({

  text: {
    color: "#FFF",
    textAlign: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#5C83D2",    
    alignItems: "center",
    paddingTop: 41,
  },

  sliderContainer: {
    flexDirection: "row",    
  },

  slider: {
    width: 242,    
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 324,
    height: 324,
    backgroundColor: "#435A88",
    borderRadius: 35,
    boxShadow: "0px 4px 4px #171C27",
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 35,
  },

  controlsContainer: {
    flexDirection: "row",    
    alignItems: "center",
    gap: 40,
  },

  controls: {
    flexDirection: "row",  
    alignItems: "center",
    gap: 5,
  },

  touchableOpacity: {
    backgroundColor: "#5C83D2",
    boxShadow: "0px 4px 4px #171C27",
    paddingHorizontal: 23,
    paddingVertical: 10,
    borderRadius: 35,
    color: "#FFF",
    fontWeight: "bold",
  },

});

