import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity, Platform, LayoutAnimation, FlatList,Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from 'react-native-modal-datetime-picker';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import DailyReportItems from "./DailyReportList/Components/DailyReportItems";
var srcBg = require("../images/background.png");
var srcLeft = require("../images/icon/dailyreportleftarrow.png");
var srcRight = require("../images/icon/dailyreportrightarrow.png");
var srcAvatar = require("../images/studentexample.png");
var srcFAB = require("../images/icon/fabdailyreporticon.png");
var srcFood = require("../images/icon/foodicon.png");
var srcActivity = require("../images/icon/activityicon.png");
var srcMedic = require("../images/icon/medicicon.png");
var srcAcademic = require("../images/icon/academicicon.png");
var srcPotty = require("../images/icon/pottyicon.png");
var srcIncident = require("../images/icon/incidenticon.png");
var srcMilk = require("../images/icon/milkicon.png");
var srcNap = require("../images/icon/napicon.png");
var srcOther = require("../images/icon/drothericon.png");

class DailyReport extends React.Component {

  static navigationOptions = () => ({
    title: "Daily Report",
    headerTintColor: '#FFFFFF',
    headerTitleStyle:{ color: '#FFFFFF',alignSelf: 'center'},
    headerStyle: {
        backgroundColor: '#AD90CA'
    },
  });

  constructor(props) {
    super(props);
    this.state = {
        popupMenu: false,
        isDateTimePickerVisible: false,
        data: [
            {
                id: 1,
                title: "Breakfast",
                description: "Ate a lot",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 2,
                title: "Activity",
                description: "Learn : Writing a poetry",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
            {
                id: 3,
                title: "Nap",
                description: "From : 09.25 am To : 09.57 am",
                icon: "",
                image: "",
                date: "Mon, 01 Jan, 08.11 AM"
            },
        ]
    };
  }

  componentDidMount() {
    
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
  };
  
  openPopupMenu(visible) {
    this.setState({popupMenu: visible});
  }

  _navigateFood() {
    
  }

  _renderItem = ({item}) => <DailyReportItems item={item} navigation={this.props.navigation} />

  render() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <View style={{height:46,backgroundColor:'#8865A9',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Image source={srcLeft} style={{marginLeft:10}} />
                    <TouchableOpacity
                        onPress={this._showDateTimePicker}
                    ><Text style={{fontSize:13,color:'#FFFFFF'}}>Monday, 01 Jan 2018</Text></TouchableOpacity>
                    <Image source={srcRight} style={{marginRight:10}} />
                </View>
                <ImageBackground style={styles.imageBackground} source={srcBg}>
                    <View style={{alignItems:'center',flexDirection:'row',marginTop:20}}>
                        <View style={{width:61,height:61,borderRadius:30,borderColor:'#707070',borderWidth:1,marginLeft:20,alignItems:'center'}}>
                            <Image source={srcAvatar} style={{width:60,height:60}} />
                        </View>
                        <Text style={{fontSize:17,color:'#B08485',marginLeft:15}}>Lily Josh</Text>
                    </View>
                    <View style={{marginTop:20,marginLeft:25}}>
                        <FlatList
                            scrollEnabled={false}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />    
                    </View>
                    <View style={{height:80}}></View>
                </ImageBackground>
                <DateTimePicker
                    date={new Date()}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.popupMenu}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.85)',justifyContent:'center',alignItems:'center'}}>
                        
                        <View style={{bottom:0,right:0,position:'absolute',marginBottom:68,marginRight:25}}>
                            <View style={{flexDirection:'column',paddingTop:15}}>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Food</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("FoodReport"); }}>
                                    <Image source={srcFood} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Activity</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("ActivityReport"); }}>
                                    <Image source={srcActivity} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Medical</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("MedicalReport"); }}>
                                        <Image source={srcMedic} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Academic</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("AcademicReportGraph"); }}>
                                        <Image source={srcAcademic} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Potty</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("PottyReport"); }}>
                                        <Image source={srcPotty} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Incident</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("IncidentReport"); }}>
                                        <Image source={srcIncident} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Milk</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("MilkReport"); }}>
                                        <Image source={srcMilk} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Nap</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("NapReport"); }}>
                                        <Image source={srcNap} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <View style={{justifyContent:'center',width:110,height:35,backgroundColor:'#FFFFFF',borderRadius:5,alignItems:'center',borderColor:'#707070',borderWidth:0.5,shadowColor:'#707070',shadowOffset:{  width: 1,  height: 1,  },shadowOpacity: 1}}>
                                        <Text style={{color:'#2E313C',fontSize:13}}>Other</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={ ()=> {this.setState({popupMenu:false}); this.props.navigation.navigate("OtherReport"); }}>
                                        <Image source={srcOther} style={{width:39,height:45,marginLeft:10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{bottom:0,right:0,position:'absolute',marginBottom:8}}>
                            <View style={{alignItems:'center',marginRight:15}}>
                                <TouchableOpacity  onPress={() => {
                                        this.openPopupMenu(!this.state.popupMenu);
                                    }}>
                                    <Image source={srcFAB} style={{width:58,height:58}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{bottom:0,right:0,position:'absolute',marginBottom:8}}>
                    <View style={{alignItems:'center',marginRight:15}}>
                        <TouchableOpacity onPress={() => {
                              this.openPopupMenu(true);
                            }}>
                            <Image source={srcFAB} style={{width:58,height:58}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default DailyReport;