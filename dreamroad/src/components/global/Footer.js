import * as F from "../../assets/style/global/FooterStyle"

const Footer = () => {
    return(
        <F.Container>
            <F.ContentBox>
                <F.GitHubIcon></F.GitHubIcon>
                <F.TextBox>
                    <F.FooterText>개발자 깃허브</F.FooterText>
                    <F.FooterLink target="_blank" href={"https://github.com/dong030303"}>https://github.com/dong030303</F.FooterLink>
                </F.TextBox>
            </F.ContentBox>
            <F.ContentBox>
                <F.GmailIcon></F.GmailIcon>
                <F.TextBox>
                    <F.FooterText>개발자 이메일</F.FooterText>
                    <F.FooterText>sungdm0303@gmail.com</F.FooterText>
                </F.TextBox>
            </F.ContentBox>
        </F.Container>
    )
}

export default Footer;