import styled from 'styled-components'
import {logo} from '../../image/common'

export const LoginSection = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.div`
    background: url(${logo}) no-repeat center;
    margin-top: 60px;
    width: 90px;
    height: 90px;
`;

export const LoginTitle = styled.h1`
    font-size: 40px;
    font-weight: 900;
    color: #030436;
    margin: 30px 0 50px 0;
`;

export const LoginInputBox = styled.div`
    width: 550px;
    height: 50px;
    border: 1px solid #030436;
    border-radius: 20px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
`;

export const LoginInput = styled.input`
    font-size: 20px;
    margin: 0 30px 0 30px;
    width: 490px;
`

export const BtnList = styled.div`
    width: 550px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

export const LoginBtn = styled.div`
    width: 250px;
    height: 70px;
    border-radius: 34px;
    background-color: #424368;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SignUpBtn = styled(LoginBtn)`
    background-color: #030436;
`;

export const BtnText = styled.p`
    font-size: 20px;
    color: white;
`;