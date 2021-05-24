import * as L from '../../assets/style/login/LoginStyle'
import { Link } from 'react-router-dom'

const Login = () => {
    return(
        <L.LoginSection>
            <L.Logo></L.Logo>
            <L.LoginTitle>로그인</L.LoginTitle>
            <L.LoginInputBox>
                <L.LoginInput type='id' placeholder="ID"></L.LoginInput>
            </L.LoginInputBox>
            <L.LoginInputBox>
                <L.LoginInput type='password' placeholder="Password"></L.LoginInput>
            </L.LoginInputBox>
            <L.BtnList>
                <Link to="/main"><L.LoginBtn>
                    <L.BtnText>로그인</L.BtnText>
                </L.LoginBtn></Link>
                <Link to="sign-up"><L.SignUpBtn>
                    <L.BtnText>회원가입</L.BtnText>
                </L.SignUpBtn></Link>
            </L.BtnList>
        </L.LoginSection>
    )
}

export default Login;