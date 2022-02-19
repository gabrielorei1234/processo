import styled from 'styled-components'

export const ContainerMenu = styled.nav`
ul{
    padding:0;
    margin:0;
    list-style-type:none;
    display: flex;
    jutify-content: end;
    align-items:center;
    margin-left:10px;
    li{
        margin-left: 10px;
        margin-right:10px;
        a{
            text-decoration:none;
            color: #FFF;
            font-size: 20px;
        }
    }
}
`