import React from "react";
const HomePage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  let mail = localStorage.getItem("email").replace(/"/g, "");
  let Name = localStorage.getItem("name").replace(/"/g, "");
  setName(Name);
  setEmail(mail);
  return (
    <div>
      <h1>Login User:</h1>
      <h2> Name:{name}</h2>
      <br />
      <h2>Mail:{email}</h2>
    </div>
  );
};
export { HomePage };
