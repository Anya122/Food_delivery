// import React, { useState } from "react";
// import s from "../Aut/Aut.module.css"
// import { Link } from "react-router-dom";

// const Registration = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // checking if data is valid and registering user

//     localStorage.setItem("isLoggedIn", true);
//     localStorage.setItem("email", email);

//     // redirect user or do something else
//   };

//   return (
//     <form className={s.formReg} onSubmit={handleRegister}>
//         <Link to = "/Login">
//             <a className={s.enter_reg} >Войти</a>
//         </Link>

//         <div className={s.reg}>
//         <h1 className={s.reg_name}>Регистрация</h1>
//       <div className={s.reg_inputs}>
//         <div className={s.reg_inputs_email} >
//             <label lassName={s.reg_label} htmlFor="email"></label>
//             <input placeholder="Введите email" className={s.reg_input}
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//         </div>
//         <div className={s.reg_inputs_pass}>
//             <label className={s.reg_label} htmlFor="password"></label>
//             <input placeholder="Введите пароль" className={s.reg_input}
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />

//         </div>
//         <div className={s.consent}>

//                  <input type="checkbox" className={s.check} id="check"></input>
//                  <label for="check" className={s.check_label} >Я согласен получать обновления на почту</label>
//              </div>
//       </div>

//       <button type="submit" className={s.btn}>Войти</button>
//       </div>

//     </form>
//   );
// };

// export default Registration;

import React, { useState } from "react";
import s from "../Aut/Aut.module.css";
import { Link } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!email) {
      setEmailError("Заполните email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Заполните пароль");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!terms) {
      setTermsError("Согласитесь с условиями использования");
      isValid = false;
    } else {
      setTermsError("");
    }

    if (isValid) {
      const userData = {
        email,
        password,
        terms,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      
      alert("Вы успешно зарегистрированы!");
      setEmail("");
      setPassword("");
      setTerms(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.formReg}>
        <Link to = "/Login">
             <a className={s.enter_reg} >Войти</a>
        </Link>
      <div className={s.reg}>
        <h1 className={s.reg_name}>Регистрация</h1>
        <div className={s.reg_inputs}>
          <div className={s.reg_inputs_email}>
            <label lassName={s.reg_label} htmlFor="email"></label>
            <input
              placeholder="Введите email"
              className={s.reg_input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className={s.errormessage}>{emailError}</div>}
          </div>
        </div>

        <div className={s.reg_inputs_pass}>
          <label className={s.reg_label} htmlFor="password"></label>
          <input
            placeholder="Введите пароль"
            className={s.reg_input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <div className={s.errormessage}>{passwordError}</div>
          )}
        </div>

       
        

        <div className={s.consent}>
          <input
            type="checkbox"
            name="terms"
            checked={terms}
            className={s.check}
            onChange={(event) => setTerms(event.target.checked)}
            id="check"
          ></input>
          <label for="check" className={s.check_label}>
            Я согласен получать обновления на почту
          </label>
          {termsError && <div className={s.errormessageC}>{termsError}</div>}
        </div>

        <button type="submit" className={s.btn}>
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}

export default Registration;
