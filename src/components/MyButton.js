import * as React from "react";
import { TouchableOpacity } from "react-native";
import Typography from './Typography';

class MyButton extends React.Component {

    render() {
        const { touchableStyle, textStyle, functionToExecute,title, ...otherProps } = this.props;
        return (
            <TouchableOpacity style={touchableStyle} {...otherProps}>
                <Typography  center middle normal style={textStyle}>{title}</Typography>
            </TouchableOpacity>

        );
    }
}

export default MyButton;