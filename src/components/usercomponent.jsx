import { useEffect, useState } from "react";
import axios from "axios";

const UserComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [file, setFile] = useState("choose profile pic");
  const [userData, setUserData] = useState([]);
  const [num, setNum] = useState(false);
  useEffect(() => {
    axios
      .get("https://lazy-rose-shark-ring.cyclic.app/admin/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [num, setNum]);

  const handleClick = (id) => {
    axios
      .delete(
        `https://lazy-rose-shark-ring.cyclic.app/admin/users/delete/${id}`
      )
      .then((res) => console.log("deleted record successfully"))
      .catch((err) => console.log(err));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      mobile.length !== 0 &&
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
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setFile(null);
      // hiding the warning
      document.querySelector(
        ".admin-warning-user-registration"
      ).style.visibility = "hidden";
      setNum(!num);
    } else {
      document.querySelector(
        ".admin-warning-user-registration"
      ).style.visibility = "visible";
    }
  };

  return (
    <>
      <div className="flex place-content-center gap-8">
        <div className="flex place-items-center">
          <div className="">
            <form className="px-24 py-12 grid gap-4 bg-blue-400  rounded-3xl">
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
                type="text"
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
                placeholder="Password"
              ></input>
              <button
                className="w-full py-3 mt-10 text-3xl font-bold rounded-3xl mb-16"
                style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
                onClick={handleRegister}
              >
                Add user
              </button>

              <h1 className="admin-warning-user-registration invisible text-2xl text-slate-900">
                First fill all the required fields
              </h1>
            </form>
          </div>
        </div>
        <div className="user-list ">
          {userData.map((user, index) => {
            return (
              <div key={index} className="flex place-items-center px-8 py-4">
                <div
                  className="user-img-div-admin rounded-3xl"
                  style={{
                    backgroundImage: `url(${
                      "https://lazy-rose-shark-ring.cyclic.app/ProfilePic/" +
                      user.profile_pic
                    })`,
                  }}
                ></div>
                <div className="text-left ml-8 gap-2">
                  <div className="text-3xl font-semibold text-slate-900">
                    {user.name}
                  </div>
                  <div className="text-xl text-slate-600">{user.email}</div>
                  <div className="text-xl text-slate-600">{user.mobile}</div>
                </div>
                <div
                  className="btn-delete-user-admin text-2xl font-semibold px-6 py-4 border-4  rounded-2xl ml-auto "
                  onClick={(e) => {
                    handleClick(user._id);
                    setNum(!num);
                  }}
                >
                  Delete
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserComponent;
