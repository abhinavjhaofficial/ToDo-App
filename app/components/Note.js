import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class Note extends React.Component {
    render() {
        return (

            <View key={this.props.keyval} style={styles.note} >
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete} >
                    <Icon style={styles.noteDeleteIcon} name="delete" size={25} />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
   note: {
       position: 'relative',
       padding: 20,
       paddingRight: 100,
       borderBottomWidth: 2,
       borderBottomColor: '#ededed',
   },
   noteText: {
       paddingLeft: 20,
       borderLeftWidth: 10,
       borderLeftColor: '#0081cb',
   },
   noteDelete: {
       position: 'absolute',
       backgroundColor: 'transparent',
       alignItems: 'center',
       justifyContent: 'center',
       padding: 10,
       top: 10,
       bottom: 10,
       right: 10,
   },
   noteDeleteIcon: {
    //    color: '#ffffff',
       
   }
});
