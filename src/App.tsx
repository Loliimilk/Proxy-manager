// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import { useRef, useState } from "react";
import "./App.css";

interface proxyElements {
  host: string;
  port: string;
  login: string;
  password: string;
}


function App() {

  const hostRef = useRef<HTMLInputElement>(null);
  const portRef = useRef<HTMLInputElement>(null);
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [proxies, setProxies] = useState<proxyElements[]>([]);



const childPorn = () =>{

  const host = hostRef.current?.value || '';
  const port = portRef.current?.value || '';
  const login = loginRef.current?.value || '';
  const password = passwordRef.current?.value || '';

  const newProxy : proxyElements = {
  host,
  port,
  login,
  password
}

  setProxies([...proxies, newProxy])
}

  return (
    <div className="input">

      <div className="inter-elements">
        <label>IP:</label>
        <input 
        type="text"
        ref={hostRef}
        placeholder="192.168.1.1"
        />
      </div>

      <div className="inter-elements">
        <label>Port:</label>
        <input 
        type="text"
        ref={portRef}
        placeholder="4325"
        />
      </div>

      <div className="inter-elements">
        <label>Login:</label>
        <input 
        type="text"
        ref={loginRef}
        placeholder="1488"
        />
      </div>


      <div className="inter-elements">
        <label>Password:</label>
        <input 
        type="text"
        ref={passwordRef}
        placeholder="322228"
        />
      </div>

      <button className="add-btn" onClick={childPorn}>Add Proxy</button>

      <ul>
        {proxies.map((prox) => (
          <li>{prox.host}:{prox.port}</li>
        ) )}
      </ul>
    </div>
  );
}

export default App;
