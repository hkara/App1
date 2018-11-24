import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
takePicture() {
    this.setState({
        takeImageText: "... PROCESSING PICTURE ..."
    });
    this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
        this.setState({
            takeImageText: "PICTURE TAKEN",
            photo: data.uri
        }, console.log(data.uri))
    })
}


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } 
    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    else {
      return (
        <View style = {{ flex: 1}}>
        <Camera
        style = {{flex: 1}}
        ref={ref => { this.camera = ref; }}
        type={this.state.type} >
               
        <View         style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
        }}>
               <TouchableOpacity style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
               onPress={this.takePicture.bind(this)} >
               <Text>Tsdfdfs</Text>
               <Text>Take photdfsdfsdfso</Text>
               <Text>Take phdfsdfdfdsfoto</Text>
               <Text>Take photo</Text>
           </TouchableOpacity>
        </View>
 
    </Camera>
 
 </View>

   
    
      );}
              }}