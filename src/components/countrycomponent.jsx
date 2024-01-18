import { useEffect, useState } from "react";
import axios from "axios";

const CountryComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [num, setNum] = useState(false);
  const [shortDescription, setShortDescription] = useState("");

  useEffect(() => {
    axios
      .get("https://lazy-rose-shark-ring.cyclic.app/admin/country/get")
      .then((res) => setCountryData(res.data))
      .catch((err) => console.log(err));
  }, [num, setNum]);

  const handleClick = (id) => {
    axios
      .delete(
        `https://lazy-rose-shark-ring.cyclic.app/admin/country/delete/${id}`
      )
      .then((res) => console.log("deleted record successfully"))
      .catch((err) => console.log(err));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (name.length !== 0 && description.length !== 0 && file) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("shortDescription", shortDescription);

      formData.append("file", file);

      axios
        .post(
          "https://lazy-rose-shark-ring.cyclic.app/admin/country/register",
          formData
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      setName("");
      setFile(null);
      setDescription("");
      //hiding the warning
      document.querySelector(".admin-warning-user-country").style.visibility =
        "hidden";
      setNum(!num);
    } else {
      document.querySelector(".admin-warning-user-country").style.visibility =
        "visible";
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
              <textarea
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={shortDescription}
                name="shortdescription"
                onChange={(event) => setShortDescription(event.target.value)}
                placeholder="Short description (In 10 words)"
              ></textarea>
              <textarea
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={description}
                name="country"
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Description (In 30 words)"
              ></textarea>
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
                Add Country
              </button>

              <h1 className="admin-warning-user-country invisible text-2xl text-slate-900">
                First fill all the required fields
              </h1>
            </form>
          </div>
        </div>
        <div className="user-list ">
          {countryData.map((country, index) => {
            return (
              <div key={index} className="flex place-items-center px-8 py-4">
                <div
                  className="country-img-div-admin rounded-3xl bg-cover"
                  style={{
                    backgroundImage: `url(${
                      "https://lazy-rose-shark-ring.cyclic.app/Country/" +
                      country.image
                    })`,
                  }}
                ></div>
                <div className="text-left ml-8 gap-2">
                  <div className="text-3xl font-semibold text-slate-900">
                    {country.name}
                  </div>
                  <div className="country-text-comp text-xl text-slate-600">
                    {country.description}
                  </div>
                </div>
                <div
                  className="btn-delete-user-admin text-2xl font-semibold px-6 py-4 border-4  rounded-2xl ml-auto "
                  onClick={(e) => {
                    handleClick(country._id);
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

export default CountryComponent;
