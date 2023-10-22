import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact.js";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
  let navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
};

export default App;
