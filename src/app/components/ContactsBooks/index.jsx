"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

const ContactsBooks = () => {
  const [userInput, setUserInput] = useState({
    userName: "",
    city: "",
  });
  const [userDetails, setUserDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  console.log("editIndex", editIndex)

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userInput.userName.trim() && userInput.city.trim()) {
      if (editIndex !== null) {
        const updatedDetails = [...userDetails];
        updatedDetails[editIndex] = userInput;
        setUserDetails(updatedDetails);
        setEditIndex(null);
      } else {
        setUserDetails((prevDetails) => [...prevDetails, userInput]);
      }
      setUserInput({ userName: "", city: "" });
    } else {
      alert("Please fill the field");
    }
  };

  const handleDeleteContact = (index) => {
    const newContactDetails = userDetails.filter((_, item) => item !== index);
    setUserDetails(newContactDetails);
  };

  const handleEditContact = (index) => {
    setEditIndex(index);
    setUserInput(userDetails[index]);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {editIndex !== null ? "Edit Contact" : "Add a New Contact"}
      </h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="userName">Name</label>
        <input
          placeholder="Name"
          name="userName"
          value={userInput.userName}
          onChange={handleInputChange}
        />

        <label htmlFor="city">City</label>
        <input
          placeholder="City"
          name="city"
          value={userInput.city}
          onChange={handleInputChange}
        />
        <button type="submit">
          {editIndex !== null ? "Update Contact" : "Add Contact"}
        </button>
      </form>

      <div className={styles.contactList}>
        {userDetails.map((item, index) => (
          <div key={`${item.userName}-${index}`} className={styles.contactItem}>
            <h3>{item.userName}</h3>
            <div>City: {item.city}</div>
            <div className={styles.actions}>
              <button onClick={() => handleEditContact(index)}>Edit</button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteContact(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsBooks;