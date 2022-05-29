import axios from "axios"
import React from "react"
import { View, Text, Button } from "react-native"
import { useQuery } from "react-query"

const joke = () => {
    const {data, isError, isLoading, refetch} = useQuery(
            'joke',
        async () => {
            const {data} = await axios('https://api.chucknorris.io/jokes/random')
            return data
        }
    )
    if (isLoading) {
        return(
            <View>
            <Text>Loading...</Text>
        </View>
        )
    }
    if (isError){
        <View>
            <Text>Error...</Text>
        </View>
    }
    return (
        <View>
            <Text>{data.value}</Text>
            <Button title="Press for another Chuck Norris Joke" onPress={()=>{refetch()}}>
            </Button>
        </View>
    )
}
export default joke