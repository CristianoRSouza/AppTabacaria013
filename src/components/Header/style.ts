import { StyleSheet } from "react-native";

export const styleHeader = StyleSheet.create({
  header: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,    
    borderBottomColor: '#2980b9',
    paddingHorizontal: 10, 
    paddingBottom: 2,        
  },
});