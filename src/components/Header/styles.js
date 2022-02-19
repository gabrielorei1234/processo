import styled from 'styled-components'

export const HeaderContainer = styled.header`
    min-height: 90px;
    min-width: 52vh;
    background-color: #00275b;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;


export const Container = styled.div`
    max-width: 1280px;
    width:80%;
    min-width: 52vh;
    margin: 0 auto;
    padding:20px 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HorizontalRule = styled.hr`
    height: 10px;
    width:67%;
    border: 0; border-top: 3px solid #013f6d;
`;

export const TitleH2 = styled.h2`
    color:#cccccc;
`;
export const Imagem = styled.img`
    width: 200px;
    
`;