import styled from 'styled-components';
export const ImgContainer = styled.div`
    width : 100%;
    height :100%;
    overflow : hidden;
`
export const MainImg = styled.img`
    src : ${props => props.src ? props.src : "사진을 준비중입니다."};
    width : 100%;
    background-size : cover;
    background-position : center center;
`
export const InformationContainer = styled.div`
 position: absolute;
 top :10%;
 left : 20%;
`
export const InformationHeader = styled.div`
    color : black;
    font-weight : bold;
    font-size : 100px;
`
export const InformationText = styled.div`
    color : black;
    font-weight : bold;
    font-size : 30px;
`