import { useEffect, useState } from "react";
import axios from "axios";

const BlogComponent = () => {
  const [id, setId] = useState("");
  const [country, setCountry] = useState("");
  const [destination, setDestination] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("choose profile pic");
  const [userData, setUserData] = useState([]);
  const [num, setNum] = useState(false);
  useEffect(() => {
    axios
      .get("https://lazy-rose-shark-ring.cyclic.app/admin/blogs")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [num, setNum]);

  const handleClick = (id) => {
    axios
      .delete(`https://lazy-rose-shark-ring.cyclic.app/admin/blog/delete/${id}`)
      .then((res) => console.log("deleted record successfully"))
      .catch((err) => console.log(err));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      country.length !== 0 &&
      destination.length !== 0 &&
      title.length !== 0 &&
      description.length !== 0 &&
      file
    ) {
      const formData = new FormData();
      formData.append("id", "none");
      formData.append("country", country);
      formData.append("destination", destination);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("file", file);

      axios
        .post(
          "https://lazy-rose-shark-ring.cyclic.app/admin/blog/register",
          formData
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      setId("");
      setCountry("");
      setDescription("");
      setTitle("");
      setDestination("");
      setFile(null);
      //hiding the warning
      document.querySelector(
        ".admin-warning-blog-registration"
      ).style.visibility = "hidden";
      document.querySelector(
        ".admin-warning-blog-registration-user"
      ).style.visibility = "hidden";
      setNum(!num);
    } else {
      document.querySelector(
        ".admin-warning-blog-registration"
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
                value={title}
                name="title"
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Blog title"
              ></input>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={country}
                name="country"
                onChange={(event) => setCountry(event.target.value)}
                placeholder="Country name"
              ></input>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={destination}
                name="destination"
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Destination"
              ></input>
              <textarea
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="text"
                value={description}
                name="description"
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Blog content "
              ></textarea>
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
                Add Blog
              </button>

              <h1 className="admin-warning-blog-registration invisible text-2xl text-slate-900">
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
                  className="blog-img-div-admin rounded-3xl bg-cover"
                  style={{
                    backgroundImage: `url(${
                      "https://lazy-rose-shark-ring.cyclic.app/Blog/" +
                      user.image
                    })`,
                  }}
                ></div>
                <div className="text-left ml-8 gap-2 desc-blog-admin ">
                  <div className="text-2xl font-semibold text-slate-900 text-justify">
                    {user.blogTitle}
                  </div>
                  <div className=" text-xl text-slate-600 text-justify">
                    {user.blogDescription.substring(0, 150)}
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
