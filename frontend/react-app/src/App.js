import React, {useState, useEffect} from "react";
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom'
import {Container, Button, lightColors, Link} from 'react-floating-action-button'
import {SignIn, SignUp} from "./page";
import {faFont} from "@fortawesome/free-solid-svg-icons";

function App() {
  //세션 로그인 여부에 따라 메뉴 변경
  let isLogin = false;
  let location = "/signin";
  let tooltip = "로그인";

  function isSignined() {
    if (isLogin) {
      location = "/signout"
      tooltip = "로그아웃"
    } else {
      location = "/signin"
      tooltip = "로그인"

      return (
        <Link
          href="/signup"
          tooltip="회원가입"
          styles={{backgroundColor: lightColors.teal}}
          icon=""/>
      )
    }

    function tag() {
      return
    }
  }

  return (
    <div>
      <Container>
        {
          isSignined()
        }
        <Link href={location}
              tooltip={tooltip}
              styles={{backgroundColor: lightColors.teal}}
              icon="far fa-sticky-note"/>
        <Link href="#"
              tooltip="test"
              styles={{backgroundColor: lightColors.teal}}
              icon="far fa-sticky-note"/>
        <Button
          tooltip="홈"
          icon="fas fa-plus"
          rotate={true}
          styles={{backgroundColor: lightColors.orange}}
          onClick={(e) => window.location.href = "/"}/>
      </Container>
      <BrowserRouter>
        <div className="App">
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
