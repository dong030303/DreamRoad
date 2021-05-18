import styled from 'styled-components'
import background from '../../image/entrance/background.png'

export const Background = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    min-height: 722px;
    background: url(${background}) no-repeat center;
    z-index: -10;
`;

export const ProjectName = styled.h1`
    margin-top: 150px;
    font-size: 100px;
    font-weight: 900;
    color: white;
`;

export const ContentBox = styled.section`
    position: relative;
    top: 922px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto 100px;
    width: 1336px;
    height: auto;
    min-height: 722px;
    background-color: white;

`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    width: 420px;
`

export const TitleText = styled.p`
    font-size: 35px;
    font-weight: 900;
    color: #030436;
`;

export const TitleLogo = styled.img`
    width: 90px;
    height: 90px;
    margin-left: 30px;
`;

export const ToLoginBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 75px;
    border-radius: 35px;
    background-color: #030436;
    cursor: pointer;
`;

export const TLBText = styled.p`
    color: white;
    font-size: 20px;
`;

export const ToTestBtn = styled(ToLoginBtn)`
    background-color: #424368;
`;

export const ButtonBox = styled.div`
    margin-top: 150px;
    width: 600px;
    display: flex;
    justify-content: space-between;
`;

export const ContentArticle = styled.article`
    margin: 50px auto;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;