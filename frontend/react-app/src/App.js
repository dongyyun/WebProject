import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

// components
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';



 //context api
import { useStateValue } from './state/Provider'

function App() {
  const [{user}, setUser] = useState("");
  const [dispatch] = useStateValue();
  useEffect(() => {
    Axios.post("api/postdata").then((response) => {
      if(response.data) {
        setUser(response.data);
      }else {
        alert("failed to");
      }
    });
  }, []);
  return (
      <div className="App">
          {

            <>
              <Header />
            <div className="appBody">
              <Feed />
            </div>

            </>


          }
      </div>
  );
}

export default App;
