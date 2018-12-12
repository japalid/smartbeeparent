import React from "react";
import { View, ImageBackground, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../../auth";
var srcImage = require("../../images/background.png");

const width = Dimensions.get('window').width;

class QuestionInterest extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
    this.state = {
        GridListItems: [
            { key: "1" , image: require("../../images/interest1.png")},
            { key: "2", image: require("../../images/interest2.png") },
            { key: "3", image: require("../../images/interest3.png") },
            { key: "4", image: require("../../images/interest4.png") },
            { key: "5", image: require("../../images/interest5.png") },
            { key: "6" , image: require("../../images/interest6.png")},
            { key: "7", image: require("../../images/interest7.png") },
            { key: "8", image: require("../../images/interest8.png") }
          ]
    }
  }

  componentDidMount() {
    
  }


  GetGridViewItem(item) {
    Alert.alert(item);
  }

  _renderReadBy = ({item,index}) => {
      return(
        <View style={styles.GridViewContainer}>
            {item.empty?(
                <Text></Text>
            ):
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity
                    style={{margin:10}}
                >
                    <Image source={item.image} style={{width:width/2 - 40,height:width/2 - 40,margin:5}}/>
                </TouchableOpacity>
            </View>
            }
        </View>
      );
  }


  signIn() {
    this.props.navigation.pop();
  }

  render() {
    const numColumns = 2;
    const formatData = (data,numColumns) => {
        const numberOfFullRows = Math.floor(data.length/numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while(numberOfElementsLastRow !== numColumns) {
            data.push({key: `blank`, empty:true});
            numberOfElementsLastRow = numberOfElementsLastRow + 1;
        }
        return data;
    }
    return (
      <ScrollView>
        <ImageBackground source={srcImage} style={styles.imageBackground}>
        
                <View style={styles.container}>

                  <View style={{width:'100%'}}>

                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <Text>What is his/her interest?</Text>
                        </View>
                        <View>
                            <Button
                                style={{marginTop:50}}
                                    title="Next"
                                    buttonStyle={styles.btnDefault}
                                    titleStyle={styles.textButton}
                                    onPress={() => {
                                    onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
                                    }}
                                />
                        </View>
                    </View>
                    
                    <FlatList
                        data={ formatData(this.state.GridListItems,numColumns) }
                        renderItem={ this._renderReadBy }
                        numColumns={numColumns}
                        />

                  </View>
                  
                </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  textLabel: {
    color: '#8B8C92',
    fontSize: 13
  },
  textInput: {
    fontSize: 18,
    color: '#2E313C',
    borderBottomColor: '#707070',
    borderWidth: 2,
  },
  btnDefault: {
    backgroundColor: '#B988E6',
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 20
  },
  textButton: {
    color: '#ffffff',
    fontSize: 16
  },
  viewAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
  labelDontHave: {
    fontSize: 13,
    color: '#C9C9CC',
  },
  labelSignUp: {
    color: '#AB8CC8',
    fontSize: 13,
  },
  viewRow: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 2
},
GridViewContainer: {
  flex:1,
  width: 'auto',
  height: 'auto',
  marginTop: 10,
  marginLeft: 5,
  marginRight: 5,
},
GridViewTextLayout: {
  fontSize: 20,
  fontWeight: 'bold',
  justifyContent: 'space-between',
  color: '#fff',
  padding: 10,
}
});

export default QuestionInterest;