import { useState } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { getAll, SortSongFields, SortSongOrder } from "react-native-get-music-files";
import type { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";
import Music from "@/components/Music";

export default function TesteBusca() {

    const [musics, setMusics] = useState<Song[]>();
    const [responsePermissions, requestPermissions] = MediaLibrary.usePermissions();
    
      const getPermissions = async () => {
        if(responsePermissions?.status !== "granted"){
          await requestPermissions();
        }
      }

      const getSongs = async () => {
        
        getPermissions();
        let foundMusics = await getAll({
                        
            coverQuality: 50,
            minSongDuration: 10000,
            sortBy: SortSongFields.TITLE,
            sortOrder: SortSongOrder.ASC,

        });
        if(typeof foundMusics !== "string") {
            setMusics(foundMusics);            
        } else {
            console.log("Erro na busca de músicas no dispositivo -> ", foundMusics);
        }

        console.log(musics);

      };

    return(

        <SafeAreaView>
            <View>
                <Button title = "Buscar músicas" onPress = { () => getSongs() }></Button>
            </View>

            <View>
                { musics?.map(info => 
                    <Music mode = "local" 
                        artist= { info.artist } 
                        name = { info.title } 
                        key = "Adjkxksdjfksskgks" 
                        path = { info.url } 
                        url = {{ uri: `data:image/png;base64,${info.cover}` }} >
                    </Music>
                )}
            </View>
            

            <View>
                <Text>Outras informações...</Text>
                { musics?.map(info => <Text>Nome música: { info.title } || Duração { info.duration } || Gênero: { info.genre } || Caminho: {info.url}</Text>) }
            </View>
        </SafeAreaView>

    );

}