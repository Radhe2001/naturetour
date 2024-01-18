import { useEffect, useState } from "react";
import axios from "axios";
import "../css/blog.css";
import Cookies from "js-cookie";

const Blog = () => {
  const [country, setCountry] = useState("");
  const [destination, setDestination] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("choose profile pic");
  const [blogData, setBlogData] = useState([]);
  const [id, setId] = useState("");
  const [mes, setMes] = useState("");
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(false);
  const [total, setTotal] = useState(1);
  useEffect(() => {
    axios
      .get(`https://lazy-rose-shark-ring.cyclic.app/user/blog/get/${count}`)
      .then((res) => {
        setBlogData(res.data.docs);
        setTotal(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [num, setNum, count, setCount]);
  const handleRegister = (e) => {
    e.preventDefault();
    if (id !== undefined) {
      if (
        country.length !== 0 &&
        destination.length !== 0 &&
        title.length !== 0 &&
        description.length !== 0 &&
        file
      ) {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("country", country);
        formData.append("destination", destination);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", file);

        axios
          .post(
            "https://lazy-rose-shark-ring.cyclic.app/user/blog/register",
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

        setNum(!num);
      } else {
        setMes("pLease fill all the fields");
        setTimeout(() => setMes(""), 5000);
      }
    } else {
      setMes("Please login first");
      setTimeout(() => setMes(""), 5000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 500);
    const uId = Cookies.get("id");
    setId(uId);
  }, []);
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    if (count < total) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className="parent-blog-div flex mb-16">
        <div className="flex place-items-center">
          <div className="flex place-items-center">
            <div className="">
              <form className="px-24 ml-4 py-16 grid gap-4 bg-blue-400  rounded-3xl shadow-xl">
                <h1 className="text-4xl text-slate-800 font-bold mb-8">
                  Write a blog
                </h1>
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

                <h1 className="text-2xl text-slate-900">{mes}</h1>
              </form>
            </div>
          </div>
        </div>
        <div className="blog-show-div ml-2 mb-8">
          {blogData.map((user, index) => {
            return (
              <div key={index} className="flex place-content-center">
                <div className="blog-div-dest mt-8">
                  <div className="flex shadow-xl px-2 py-4 mt-8 mb-4">
                    <div
                      className="h-28 w-28 ml-8 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(https://lazy-rose-shark-ring.cyclic.app/ProfilePic/${user.user.profile_pic})`,
                      }}
                    ></div>
                    <div className="ml-12 flex place-items-center">
                      <div className="text-left text-slate-900">
                        <div className="text-3xl font-bold">
                          {user.user.name}
                        </div>
                        <div className="mt-2 text-2xl font-semibold text-blue-950">
                          {user.destination + " , " + user.country}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xl">
                    <h1 className="text-2xl font-semibold text-slate-800 mr-4">
                      Title :{" "}
                    </h1>
                    {user.blogTitle}
                  </div>
                  <div className="text-justify mt-4 text-xl text-slate-800">
                    {user.blogDescription}
                  </div>
                  <div className="flex place-content-center">
                    <div
                      className="blog-image-div-dest bg-cover mt-10 mb-8 rounded-xl"
                      style={{
                        backgroundImage: `url(https://lazy-rose-shark-ring.cyclic.app/Blog/${user.image})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="btn-div-blog px-48 my-8 w-full flex">
            <div
              className="btn-nav-pag mr-auto text-2xl bg-blue-600 text-cyan-200 font-semibold py-3 px-6 rounded-2xl border-4 border-cyan-500"
              onClick={decrementCount}
            >
              Previous
            </div>
            <div
              className="btn-nav-pag ml-auto text-2xl bg-blue-600 text-cyan-200 font-semibold py-3 px-6 rounded-2xl border-4 border-cyan-500"
              onClick={incrementCount}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
