import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {Picker} from "@react-native-picker/picker";

export default function App() {
    const [sign, setSign] = useState("Aries");
    const [date, setDate] = useState("Today");
    const [data, setData] = useState<Data>();

    const getData = (sign: string, date: string) => {
        let apiUrl = 'https://aztro.sameerkumar.website/?sign=' + sign + '&day=' + date;
        fetch(apiUrl, {
            method:'POST'
        }).then(response => response.json())
            .then(json=> {
                setData(json)
                console.log(json)
            })
    }


    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <Text style={{width: '100%'}}>Choose your sign</Text>
                <Picker
                    selectedValue={sign}
                    onValueChange={(itemValue, itemIndex) => setSign(itemValue)}>
                    <Picker.Item label={'Aries'} value={'Aries'}/>
                    <Picker.Item label={'Taurus'} value={'Taurus'}/>
                    <Picker.Item label={'Gemini'} value={'Gemini'}/>
                    <Picker.Item label={'Cancer'} value={'Cancer'}/>
                    <Picker.Item label={'Leo'} value={'Leo'}/>
                    <Picker.Item label={'Virgo'} value={'Virgo'}/>
                    <Picker.Item label={'Libra'} value={'Libra'}/>
                    <Picker.Item label={'Scorpio'} value={'Scorpio'}/>
                    <Picker.Item label={'Sagittarius'} value={'Sagittarius'}/>
                    <Picker.Item label={'Capricorn'} value={'Capricorn'}/>
                    <Picker.Item label={'Aquarius'} value={'Aquarius'}/>
                    <Picker.Item label={'Pisces'} value={'Pisces'}/>
                </Picker>
                <Text style={{width: '100%'}}>Choose day</Text>
                <Picker selectedValue={date}
                        onValueChange={(itemValue, itemIndex) => setDate(itemValue)}>
                    <Picker.Item label={'Today'} value={"Today"}/>
                    <Picker.Item label={'Yesterday'} value={"Yesterday"}/>
                    <Picker.Item label={'Tomorrow'} value={"Tomorrow"}/>
                </Picker>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={() => {
                    // @ts-ignore
                    getData(sign, date)
                }}>
                    <Text style={{
                        backgroundColor: '#0bbed6',
                        width: 64,
                        height: 36,
                        color: 'white',
                        paddingStart: 9,
                        paddingTop: 8
                    }}>Search
                    </Text>
                </TouchableOpacity>
                <View style={{marginTop:16}}>
                    <Text>Current date: {data?.current_date}</Text>
                    <Text>Compatibility: {data?.compatibility}</Text>
                    <Text>Lucky time: {data?.lucky_time}</Text>
                    <Text>Lucky number: {data?.lucky_number}</Text>
                    <Text>Color: {data?.color}</Text>
                    <Text>Date range: {data?.date_range}</Text>
                    <Text>Mood: {data?.mood}</Text>
                    <Text>Description: {data?.description}</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:8
    },
});

interface Data {
    current_date:string,
    compatibility:string,
    lucky_time:string,
    lucky_number:string,
    color:string,
    date_range:string,
    mood:string,
    description:string
}
