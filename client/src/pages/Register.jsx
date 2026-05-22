import React from "react";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
        const res = await api.post('/user/register',form);
        alert(res.data.message);
        navigate('/login');
    }
    catch(err){
        console.log('Failed to register.!!',err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name."
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter an Email."
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Password."
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
