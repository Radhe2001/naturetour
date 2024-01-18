import { useEffect, useState } from "react";
import axios from "axios";

const DestinationComponent = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [rating, setRating] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [file, setFile] = useState("choose profile pic");
  const [userData, setUserData] = useState([]);
  const [num, setNum] = useState(false);
  useEffect(() => {
    axios
      .get("https://lazy-rose-shark-ring.cyclic.app/admin/destinations")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [num, setNum]);

  const handleClick = (id) => {
    axios
      .delete(
        `https://lazy-rose-shark-ring.cyclic.app/admin/destinations/delete/${id}`
      )
      .then((res) => console.log("deleted record successfully"))
      .catch((err) => console.log(err));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      name.length !== 0 &&
      country.length !== 0 &&
      shortDescription.length !== 0 &&
      longDescription.length !== 0 &&
      rating.length !== 0 &&
      cost.length !== 0 &&
      duration.length !== 0 &&
      file
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("country", country);
      formData.append("shortDescription", shortDescription);
      formData.append("longDescription", longDescription);
      formData.append("rating", rating);
      formData.append("cost", cost);
      formData.append("duration", duration);
      formData.append("file", file);

      axios
        .post(
          "https://lazy-rose-shark-ring.cyclic.app/admin/destinations/register",
          formData
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      setName("");
      setCountry("");
      setShortDescription("");
      setLongDescription("");
      setRating("");
      setCost("");
      setDuration("");
      setFile(null);
      //hiding the warning
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
            <form className="px-24 py-4 grid gap-4 bg-blue-400  rounded-3xl">
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={name}
                name="name"
                onChange={(event) => setName(event.target.value)}
                placeholder="Destination Name"
              ></input>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={country}
                name="country"
                onChange={(event) => setCountry(event.target.value)}
                placeholder="Country name"
              ></input>
              <textarea
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={shortDescription}
                name="shortDescription"
                onChange={(event) => setShortDescription(event.target.value)}
                placeholder="Short Description (10 words)"
              ></textarea>
              <textarea
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={longDescription}
                name="longDescription"
                onChange={(event) => setLongDescription(event.target.value)}
                placeholder="Long Description (100 - 150 words)"
              ></textarea>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={rating}
                name="rating"
                onChange={(event) => setRating(event.target.value)}
                placeholder="Rating"
              ></input>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="number"
                value={cost}
                name="cost"
                onChange={(event) => setCost(event.target.value)}
                placeholder="Price in $"
              ></input>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="number"
                value={duration}
                name="duration"
                onChange={(event) => setDuration(event.target.value)}
                placeholder="Duration"
              ></input>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="file"
                name="file"
                onChange={(event) => setFile(event.target.files[0])}
              ></input>
              <button
                className="w-full py-3 mt-6 text-3xl font-bold rounded-3xl "
                style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
                onClick={handleRegister}
              >
                Add Destination
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
              <div key={index} className="">
                <div className="flex place-items-center px-8 py-4">
                  <div
                    className="destination-img-div-admin rounded-3xl"
                    style={{
                      backgroundImage: `url(${
                        "https://lazy-rose-shark-ring.cyclic.app/Destination/" +
                        user.image
                      })`,
                    }}
                  ></div>
                  <div className="text-left ml-8 gap-2">
                    <div className="text-3xl font-semibold text-slate-900">
                      {user.name}
                    </div>
                    <div className="text-xl text-slate-600">{user.country}</div>
                    <div className="text-short-desc-destination text-xl text-slate-600">
                      {user.shortDescription}
                    </div>
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
                <div className="grid grid-cols-3 gap-4 text-left px-8">
                  <div className="text-xl text-slate-600 flex">
                    <h1 className="text-xl font-semibold">Rating : </h1>
                    {"  " + user.rating}
                  </div>
                  <div className="text-xl text-slate-600 flex ">
                    <h1 className="text-xl font-semibold">Price : </h1>
                    {user.cost + " $/person"}
                  </div>
                  <div className="text-xl text-slate-600 flex">
                    <h1 className="text-xl font-semibold">Duration : </h1>
                    {user.duration + " days & nights"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DestinationComponent;
