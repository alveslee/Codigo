//import MyForm from "./MyForm";
import './login.css';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUserOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnclick = () => {
    if(user === "Vitoria" && password === "1234"){
        navigate("/SiteInicio");
    }else{
        setUser("");
        setPassword("");
        alert("usuario ou senha errados")
    }
  }
  return (
    <div className="container">
      <form className="login-form" action="#" method="post">
        <h2>Login</h2>
        <input onChange={handleUserOnchange} type="text" name="username" placeholder="Usuário" />
        <input onChange={handlePasswordOnChange} type="password" name="password" placeholder="Senha" />
        <input onClick={handleOnclick} type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Login;