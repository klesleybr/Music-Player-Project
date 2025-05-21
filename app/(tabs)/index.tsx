import { useState, useEffect } from "react";
import { View, StyleSheet,Text, SafeAreaView, FlatList, ScrollView, Button } from "react-native";
import * as MediaLibrary from "expo-media-library";
import type { PagedInfo, Asset } from "expo-media-library";
import Music from "@/components/Music";
import Header from "@/components/Header";

// imports de teste
import { Link } from "expo-router";
// fim dos imports de teste

//Primeira tela do App
export default function Index() {
  const [musics, setMusics] = useState<PagedInfo<Asset>>();
  const [responsePermissions, requestPermissions] = MediaLibrary.usePermissions();

  const getPermissions = async () => {
    if(responsePermissions?.status !== "granted"){
      await requestPermissions();
    }
  }

  const getMusics = async () => {
    getPermissions();
    let foundMusics = await MediaLibrary.getAssetsAsync({ mediaType: "audio", first: 300 });
    const songs = {
      ...foundMusics,
      assets: foundMusics.assets.filter((music) => music.duration && music.duration > 90),
    };
    setMusics(songs);
  }

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
     <Header/>

     <Link href = "./testebusca">Próximo</Link>

     <ScrollView style = {{ width: "100%", height: "100%" }}>
      {
        musics?.assets.map((music) => 
          <Music 
            mode = "local" 
            url = { require("../../assets/icons/default-song.png") }
            name = { music.filename }
            key = { music.id }
            path = { music.uri }
            artist = "Desconhecido(a)"
            />)
      }
     </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2F2A2A",
    paddingTop: "5%",    
    paddingBottom: "15%",
  },
  header: {
    width: "90%",
    marginTop: 15,
    padding: 2,
    marginBottom: "10%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  recentsTitleText: {
    color: "#fff",
    fontSize: 24,
  },
});


/*
<View>        
        <FlatList
          data = { musics?.assets }
          renderItem ={ (infoItem) => <Music  
              mode = "local"           
              url={ require("../../assets/icons/default-song.png") } 
              name = {infoItem.item.filename} 
              key = { infoItem.item.id }
              path = { infoItem.item.uri }
              artist = "Desconhecido(a)"              
            />          
          }
        />        
      </View>

      */