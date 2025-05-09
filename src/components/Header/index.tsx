import React from "react"
import { View,Text } from "react-native"
import { styleHeader } from "./style"

export const Header: React.FC<Props> = ({titulo}:Props) => {

    return (
            <View style={styleHeader.header}>
                <Text style={styleHeader.title}>{titulo}</Text>
            </View>
    )
}
type Props = {
    titulo:string
}
