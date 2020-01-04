import * as React from "react";
import { Image } from "react-native";

class MyImage extends React.Component {

    render() {
        const { achivedColor, image, ...otherProps } = this.props;
        return (
            <Image style={{
                tintColor: achivedColor,
                flex: 1,
                width: 130,
                height: 130,
                margin: 10,
                alignItems: 'center',
            }} source={image}
                resizeMode="contain"
            />

        );
    }
}

export default MyImage;