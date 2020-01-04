import * as React from "react";
import { TouchableOpacity, Image } from "react-native";
import Block from './Block';

class ImageButton extends React.Component {

    render() {
        const { touchableStyle, functionToExecute, title, imageStyle, sourceImage, ...otherProps } = this.props;
        return (
            <TouchableOpacity style={touchableStyle} onPress={functionToExecute} {...otherProps}>
                <Block center middle style={{ flex: 1,  }}>
                    <Image
                        resizeMode="contain"
                        style={imageStyle} 
                        source={sourceImage}></Image>
                </Block>
            </TouchableOpacity>

        );
    }
}

export default ImageButton;