import React, { useState, useRef } from "react";

const RegisterForm = () => {
  let data = useRef([]);
  const [formData, setformData] = useState({
    name: "",
    age: "",
    salary: "",
    email: "",
    isLogin: false,
    department: "",
  });

  const handle = e => {
    console.log(e);
    let id = e.target.id;
    let value = e.target.value;
    let checked = e.target.checked;
    let type = e.target.type;

    setformData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };
  const { name, age, salary, email, isLogin, department } = formData;
  const handleSubmit = e => {
    e.preventDefault();
    data.current = [formData];
    if (formData) {
      localStorage.setItem("data", JSON.stringify(formData));
    }
    setformData({
      name: "",
      age: "",
      salary: "",
      email: "",
      isLogin: false,
      department: "",
    });
  };
  return (
    <div>
      <h1>Employee Details:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name"
          onChange={handle}
          id="name"
          value={name}
        />
        <br />
        <input
          type="number"
          placeholder="Enter the age"
          onChange={handle}
          id="age"
          value={age}
        />
        <br />
        <input
          type="number"
          placeholder="Enter the Salary"
          onChange={handle}
          id="salary"
          value={salary}
        />
        <br />
        <input
          type="email"
          placeholder="Enter the email address"
          onChange={handle}
          id="email"
          value={email}
        />
        <br />
        <label>
          isLogin:
          <input
            type="checkbox"
            onChange={handle}
            id="isLogin"
            checked={isLogin}
          />
          <br />
        </label>
        <label>
          Department:
          <select onChange={handle} id="department" value={department}>
            <optgroup>
              <option value="">Select the Department</option>
              <option value="it">IT</option>
              <option value="admin">Administration</option>
              <option value="security">Security</option>
            </optgroup>
          </select>
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default RegisterForm;
