import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [mes, setMes] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      mobile.length !== 0 &&
      password.length !== 0 &&
      file
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("mobile", mobile);
      formData.append("file", file);

      axios
        .post(
          "https://lazy-rose-shark-ring.cyclic.app/admin/user/register",
          formData
        )
        .then((response) => {
          setMes("Registered successfully");
          setTimeout(() => {
            setMes("");
          }, 5000);
        })
        .catch((error) => {
          setMes("Unable to register , Please try again");
          setTimeout(() => {
            setMes("");
          }, 5000);
        });
    } else {
      setMes("Please fill all the fields");
      setTimeout(() => {
        setMes("");
      }, 5000);
    }
  };

  return (
    <>
      <div>
        <form className="grid gap-4">
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
            type="text"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          ></input>
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
            type="email"
            value={email}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          ></input>
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
            type="number"
            value={mobile}
            name="mobile"
            onChange={(event) => setMobile(event.target.value)}
            placeholder="Contact Number"
          ></input>
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
            type="password"
            value={password}
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          ></input>
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
            type="file"
            name="file"
            onChange={(event) => setFile(event.target.files[0])}
          ></input>
          <button
            className="w-full py-3 mt-10 text-3xl font-bold rounded-3xl mb-4"
            style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
            onClick={handleRegister}
          >
            Register
          </button>
          <h1 className="text-xl mb-8">{mes}</h1>
        </form>
      </div>
    </>
  );
};

export default Register;
