import React, { useState } from "react";
import s from "./Aut.module.css";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { redirect } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
   
  };

  return (
    
        <form className={s.formReg} onSubmit={handleLogin}>
        <Link to = "/Registration">
            <a className={s.enter_reg} >Зарегистрироваться</a>
        </Link>
        
        <div className={s.reg}>
        <h1 className={s.reg_name}>вход</h1>
      <div className={s.reg_inputs}>
        <div className={s.reg_inputs_email} >
            <label lassName={s.reg_label} htmlFor="username"></label>
            <input placeholder="Введите email" className={s.reg_input}
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className={s.reg_inputs_pass}>
            <label className={s.reg_label} htmlFor="password"></label>
            <input placeholder="Введите пароль" className={s.reg_input}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

        </div>
      </div>
      <Link to = "/Products">
      <button  type="submit"   className={s.btn}>Войти</button>
        </Link>
      </div>  
      
    </form>
    
    
  );
};

export default Login;