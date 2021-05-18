import * as E from '../../assets/style/entrance/EntranceStyle'
import Footer from '../global/Footer'
import { logo } from '../../assets/image/common'

const Entrance = () => {
    return(
        <>
        <E.Background>
            <E.ProjectName>꿈<br/><br/><br/>길</E.ProjectName>
        </E.Background>
        <E.ContentBox>
            <E.ContentArticle>
                <E.TitleBox>
                    <E.TitleText>꿈을 찾고, 꿈을 향해</E.TitleText>
                    <E.TitleLogo src={logo}></E.TitleLogo>
                </E.TitleBox>
                <E.ButtonBox>
                    <E.ToTestBtn>
                        <E.TLBText>비회원으로 진행</E.TLBText>
                    </E.ToTestBtn>
                    <E.ToLoginBtn>
                        <E.TLBText>회원으로 진행</E.TLBText>
                    </E.ToLoginBtn>
                </E.ButtonBox>
            </E.ContentArticle>
            <Footer></Footer>
        </E.ContentBox>
        </>
    )
}

export default Entrance;