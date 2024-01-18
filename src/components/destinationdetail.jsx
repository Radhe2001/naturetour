import { useEffect, useState } from "react";
import axios from "axios";
import "../css/home.css";

const DestinationDetails = (props) => {
  const [destData, setDestData] = useState({});
  const [blogData, setBlogData] = useState({});
  const [userData, setUserData] = useState({});
  useEffect(() => {
    window.scrollTo(0, 500);
    axios
      .get(`https://lazy-rose-shark-ring.cyclic.app/user/dest/${props.id}`)
      .then((res) => {
        setDestData(res.data.destination);
        setBlogData(res.data.blog);
        setUserData(res.data.user);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className=" mb-12 mt-4">
        <div className="flex place-content-center gap-10">
          <div
            className="comp-dest-img rounded-3xl"
            style={{
              backgroundImage: `url(https://lazy-rose-shark-ring.cyclic.app/Destination/${destData.image})`,
            }}
          ></div>
          <div className="flex place-items-center text-desc-user-dest-div">
            <div className="desc-div-dest text-left ml-12">
              <div className="text-4xl font-bold text-slate-900">
                {destData.name + " "},{" " + destData.country}
              </div>
              <div className="text-2xl pt-2 pb-4 text-blue-900 text-justify">
                {destData.shortDescription}
              </div>
              <div className="grid grid-cols-3 text-xl font-normal mb-3">
                <div className="flex">
                  <h1 className="mr-4 text-2xl font-semibold">Rating :</h1>
                  {destData.rating + "/5"}
                </div>
                <div className="flex">
                  <h1 className="mr-4 text-2xl font-semibold">Price :</h1>
                  {"$ " + destData.cost + " / person"}
                </div>
              </div>
              <div className="flex text-xl">
                <h1 className="mr-4 text-2xl font-semibold">Duration :</h1>
                {destData.duration + " Days & nights"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex place-content-center mt-8">
          <div className="upper-div-long-desc-dest text-justify text-xl text-slate-800">
            {destData.longDescription}
          </div>
        </div>

        {/* blog div */}
        <div className="flex place-content-center">
          <div className="blog-div-dest mt-8">
            <div className="flex shadow-xl p-4 mt-8 mb-4">
              <div
                className="h-28 w-28 ml-8 rounded-full bg-cover"
                style={{
                  backgroundImage: `url(https://lazy-rose-shark-ring.cyclic.app/ProfilePic/${userData.profile_pic})`,
                }}
              ></div>
              <div className="ml-12 flex place-items-center">
                <div className="text-left text-slate-900">
                  <div className="text-3xl font-bold">{userData.name}</div>
                  <div className="mt-2 text-2xl font-semibold text-blue-950">
                    {blogData.destination + " , " + blogData.country}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-xl">
              {" "}
              <h1 className="text-2xl font-semibold text-slate-800 mr-4">
                Title :{" "}
              </h1>
              {blogData.blogTitle}
            </div>
            <div className="text-justify mt-4 text-xl text-slate-800">
              {blogData.blogDescription}
            </div>
            <div className="flex place-content-center">
              <div
                className="blog-image-div-dest bg-cover mt-10 mb-8 rounded-xl"
                style={{
                  backgroundImage: `url(https://lazy-rose-shark-ring.cyclic.app/Blog/${blogData.image})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationDetails;
