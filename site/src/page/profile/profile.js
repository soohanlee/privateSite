import React, { Component } from 'react';
import MainPic from '../../asset/img/manpicture.jpg';

import {
    ImgContainer,
    MainImg,
    InformationContainer,
    InformationHeader,
    InformationText
} from './profile.style';
class profile extends Component {
    render() {
        return (
            <ImgContainer>
                <MainImg src ={MainPic} alt ="내 사진"></MainImg>
                <InformationContainer>
                    <InformationHeader>Profile</InformationHeader>
                    <InformationText>
                        Name : LEE SOO HAN
                    </InformationText>
                    <InformationText>
                        Age : 1995. 08. 08
                    </InformationText>
                    <InformationText>
                        Job : Web Developer
                    </InformationText>
                </InformationContainer>
            </ImgContainer>
        );
    }
}

export default profile; 