import Header from "./components/Header";
import GlobalStyle from "./styles";
import api from "./api";
import { Component } from "react/cjs/react.production.min";
import { ContainerBody } from "./components/Body/styles"
import Footer from "./components/Footer";

class App extends Component{

  state ={
    users:[],
  }
  

  getData = async () => {
    const {data} = await api.get('?_quantity=20&_gender=male&_locale=pt_BR');
    this.setState({ users: data.data });
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    const {users} = this.state;
    console.log(users)
    
    return (
      <>
      <GlobalStyle />
      <Header />
      <ContainerBody>
{
  users.map(user=>(
<div class= "card">
        <div class="image">
        <img src={user.image}></img>
        </div>
        <div class="title">
          <h1>{user.firstname} {user.lastname}</h1>
        </div>
        <div className="text1">
          <h2>Usuário: <b>{user.username}</b></h2>
        </div>
        <div class="text2">
          <h2>Email: <b>{user.email}</b></h2>
        </div>
        <div class="site">
          <h3><a href="">{user.website}</a></h3>
        </div>
      </div>
  ))
}
</ContainerBody>
<Footer/>
      </>
     );
  };
};

export default App;
