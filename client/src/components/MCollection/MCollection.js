import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import { invitation } from "./invitation/";
import { myEvent } from "./myEvent"
import { publicEvent } from "./publicEvent"
import API from "../../utils/API"

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}