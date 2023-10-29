import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../css/App.css";
import CreateContact from "./CreateContact.js";
import * as ContactsAPI from "../utils/ContactsAPI";
const App = () => {
  let navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  const createContact = (contact) => {
      const create = async () => {
        const res = await ContactsAPI.create(contact);
        setContacts(contacts.concat(res));
      };

      create();
      navigate("/");
  };

  useEffect(() => {
      const getContacts = async () => {
        const res = await ContactsAPI.getAll();
        setContacts(res);
      };

      getContacts();
  }, []);

  return (
    <Routes>
    
      <Route
        path="/create"
        element={
          <CreateContact
            onCreateContact={(contact) => {
              createContact(contact);
            }}
          />
        }
      />
    </Routes>
  );
};

export default App;
