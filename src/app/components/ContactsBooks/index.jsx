"use client";

import React, { useState } from "react";

const ContactsBooks = () => {
  const [userInput, setUserInput] = useState({
    userName: "",
    city: "",
  });
  const [userDetails, setUserDetails] = useState([]);

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
      setUserDetails((prevDetails) => [...prevDetails, userInput]);
      setUserInput({ userName: " ", city: "" });
    } else {
      alert("Please fill the field");
    }
  };

  return (
    <div>
      <h2>Add a new contact</h2>
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
        <button>Add contact</button>
      </form>
      {userDetails.map((item, index) => {
        return (
          <div key={item + index}>
            <h3>
              <i>{item.userName}</i>
            </h3>
            <div>City : {item.city}</div>

            <span>Edit</span>
          </div>
        );
      })}
    </div>
  );
};

export default ContactsBooks;
