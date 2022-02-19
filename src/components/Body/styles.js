import styled from 'styled-components'

export const ContainerBody = styled.div`
    max-width: 1280px;
    width:100%;
    margin: 0 auto;
    padding:20px 15px 0px;
    justify-content: space-between;
    align-items: center;

    .card{
        width: 25%;
        min-width:333px;
        display: inline-block;
        box-shadow: 0 0px 8px 0 rgba(0,0,0,0.2);
        border-radius: 5px; 
        margin: 2%;
       }
   
   .image img{
     width: 100%;
     border-top-right-radius: 5px;
     border-top-left-radius: 5px;
    }
   
   .title{
     padding: 10px;
     
    }
   
   h1{
     font-size: 20px;
     color:#333333;
     font-family: "Arial", regular;
    }
    h2{
        font-size: 18px;
        padding-left: 10px;
        font-family: "Times New Roman",serif;
        color:#333333;
        b{
          color: black;
        }
       }
       h3{
        font-size: 14px;
        padding-left: 10px;
        color: blue;
        text-decoration: none;
       }
`;