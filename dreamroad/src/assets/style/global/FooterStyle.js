import styled from 'styled-components'
import { github, gmail } from '../../image/common'

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid #707070;
    border-width: 1px 0 0 0;
    background-color: white;
`;

export const GitHubIcon = styled.div`
    background: url(${github}) no-repeat center;
    margin-left: 100px;
    width: 50px;
    height: 48px;  
`;

export const GmailIcon = styled.div`
    background: url(${gmail}) no-repeat center;
    margin-left: 100px;
    width: 48px;
    height: 36px; 
`;

export const FooterText = styled.p`
    font-size: 15px;
    color: #030436;
    font-weight: bold;
`;

export const FooterLink = styled.a`
    font-size: 15px;
    color: #030436;
    font-weight: bold;
    text-decoration: none;
`;

export const ContentBox = styled.div`
    display: flex;
    height: 48px;
    width: 50%
`;

export const TextBox = styled.div`
    height: 48px;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;