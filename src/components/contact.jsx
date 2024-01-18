import { useState, useEffect } from "react";
import "../css/home.css";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");
  const [mes, setMes] = useState("");
  const handleContact = (e) => {
    e.preventDefault();
    if (
      email.length > 0 &&
      name.length > 0 &&
      mobile.length > 0 &&
      query.length > 0
    ) {
      axios
        .post("https://lazy-rose-shark-ring.cyclic.app/user/contact", {
          email: email,
          name: name,
          mobile: mobile,
          queryDetail: query,
        })
        .then((res) => {
          if (res.status === 200) {
            setMes("We'll connect you soon");
            setTimeout(() => setMes(""), 5000);
          } else {
            setMes("Try again");
            setTimeout(() => setMes(""), 5000);
          }
          setName("");
          setEmail("");
          setMobile("");
          setQuery("");
        })
        .catch((err) => console.log(err));
    } else {
      setMes("Please fill all the fields first");
      setTimeout(() => setMes(""), 5000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <>
      <div className="contact-details-div flex place-content-center place-items-center">
        <div className="form-contact-user-div py-16 px-12 rounded-3xl shadow-2xl">
          <form className="grid gap-4">
            <div className="mb-8 text-4xl font-bold text-slate-600 ">
              Connect with us
            </div>
            <input
              className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
              type="text"
              value={name}
              name="name"
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
            ></input>
            <input
              className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
              type="email"
              value={email}
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
            ></input>
            <input
              className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
              type="number"
              value={mobile}
              name="mobile"
              onChange={(event) => setMobile(event.target.value)}
              placeholder="Contact number"
            ></input>
            <textarea
              className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
              type="text"
              value={query}
              name="query"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Your query "
            ></textarea>
            <button
              className="w-full py-3 mt-10 text-3xl font-bold rounded-3xl"
              style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
              onClick={handleContact}
            >
              Submit
            </button>
            <h1 className="text-xl font-semibold mt-8">{mes}</h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
