import "../css/about.css";
import bgDivOneLeft from "../assets/div_1_up_img.jpeg";
import bgDivOneRight from "../assets/div_1_down_img.jpeg";
import bgDivThree from "../assets/div_3_img.jpeg";
import lastDivImg from "../assets/about_div_last.jpeg";
import radhe from "../assets/radheshyam.jpg";
import johnDoe from "../assets/john_doe.jpg";
import shankarDoe from "../assets/shankar_doe.jpg";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <>
      <div className=" mt-28 pt-4">
        <div className="about-title text-5xl font-bold text-gray-800">
          About Nature Tour
        </div>

        <div className="flex place-content-center mb-16">
          <div className="glass about-content-div-1 py-12 mt-4 grid gap-y-10 rounded-3xl">
            <div className="flex place-content-center gap-16">
              <div
                className="div-1-left-img bg-cover rounded-l-3xl"
                style={{ backgroundImage: `url(${bgDivOneLeft})` }}
              ></div>
              <div className="text-one justi-text text-2xl grid place-items-center ">
                <h1>
                  Welcome to Nature Tour, your ultimate companion in crafting
                  memorable vacations that immerse you in the beauty of the
                  world. We are passionate about travel and dedicated to
                  providing exceptional experiences that go beyond ordinary
                  vacations. Our mission is to inspire and guide you on a
                  journey of discovery, connecting you with nature's wonders and
                  creating memories that last a lifetime .
                </h1>
              </div>
            </div>
            <div className="flex place-content-center gap-16">
              <div className="text-one text-right text-2xl grid place-items-center">
                <h1 className="text-3xl font-semibold text-slate-800">
                  Our Vision
                </h1>
                <h1 className="justi-text">
                  At Nature Tour, we believe in the transformative power of
                  travel. Our vision is to be a catalyst for exploration,
                  encouraging you to step out of your comfort zone and embrace
                  the diverse landscapes and cultures our planet has to offer.
                  We envision a world where travel fosters understanding,
                  respect, and appreciation for the incredible tapestry of life.
                </h1>
              </div>
              <div
                className="div-1-left-img bg-cover rounded-r-3xl"
                style={{ backgroundImage: `url(${bgDivOneRight})` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="div-2 grid gap-6 ml-28 rounded-3xl py-10 mb-12">
          <div className="text-4xl font-bold text-slate-900">Who We Are</div>
          <div className="flex place-content-center">
            <div className="text-left about-div-2-text-1 ">
              <div className="">
                <div className="text-3xl font-semibold py-6">
                  The Nature Tour Experience
                </div>
                <div className="justi-text text-2xl text-slate-800">
                  Nature Tour was founded by a team of avid travelers who share
                  a deep love for nature and adventure. Our collective
                  experiences span across continents, and we understand the
                  unique joys and challenges that come with planning the perfect
                  getaway. With a commitment to excellence, we curate travel
                  experiences that cater to every traveler's interests, whether
                  you're a thrill-seeker, a culture enthusiast, or someone
                  seeking tranquility in nature's embrace.
                </div>
              </div>
              <div className="mt-8">
                <div className="text-3xl font-semibold pb-6">Our Team</div>
                <div className="text-2xl text-slate-800 justi-text pb-6">
                  Meet the passionate individuals behind Nature Tour, each
                  contributing their expertise to make your vacation dreams a
                  reality:
                </div>
                <div className="flex gap-12 py-8">
                  <div className="">
                    <div
                      className="about-profile-img-div rounded-t-3xl"
                      style={{ backgroundImage: `url(${radhe})` }}
                    ></div>
                    <div className="text-xl text-slate-800 pt-4 flex place-content-center">
                      Founder & CEO
                    </div>
                    <div className="text-2xl font-semibold flex place-content-center">
                      Radheshyam Jha
                    </div>
                  </div>
                  <div className="">
                    <div
                      className="about-profile-img-div rounded-t-3xl"
                      style={{ backgroundImage: `url(${johnDoe})` }}
                    ></div>
                    <div className="text-xl text-slate-800 pt-4 flex place-content-center">
                      Head of Operations
                    </div>
                    <div className="text-2xl font-semibold flex place-content-center">
                      John Doe
                    </div>
                  </div>
                  <div className="">
                    <div
                      className="about-profile-img-div rounded-t-3xl"
                      style={{ backgroundImage: `url(${shankarDoe})` }}
                    ></div>
                    <div className="text-xl text-slate-800 pt-4 flex place-content-center">
                      Destination Specialist
                    </div>
                    <div className="text-2xl font-semibold flex place-content-center">
                      Shankar Doe
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-3xl font-semibold py-6">
                  Our Commitment to Sustainability
                </div>
                <div className="text-2xl text-slate-800 justi-text pb-6">
                  As responsible travelers, we are committed to preserving the
                  environments we explore. Nature Tour adheres to sustainable
                  tourism practices, minimizing our ecological footprint and
                  supporting local communities. We collaborate with eco-friendly
                  accommodations, promote wildlife conservation, and strive to
                  create travel experiences that leave a positive impact.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-div3 mt-24 mb-12 ">
          <div
            className="img-div3-about bg-cover rounded-t-3xl"
            style={{ backgroundImage: `url(${bgDivThree})` }}
          ></div>
          <div className=" flex pb-10 bg-cyan-200 rounded-b-3xl">
            <div className=" quote-div flex place-items-center px-4">
              <div className="text-xl font-semibold text-slate-700">
                &rdquo; On the road, find the magic. Amidst unfamiliar faces and
                landscapes, discover your own extraordinary. Each step is an
                adventure, a brushstroke in the masterpiece of your wanderlust
                soul. &ldquo;
              </div>
            </div>
            <div className="mx-4">
              <div className="text-3xl font-bold pt-4 pb-8">
                What Sets Us Apart
              </div>
              <div className="grid grid-cols-2 text-left gap-8">
                <div className="">
                  <div className="text-2xl font-semibold pb-2">
                    Personalized Itineraries
                  </div>
                  <div className="text-lg justi-text">
                    No two travelers are alike, and neither are our vacations.
                    At Nature Tour, we pride ourselves on creating personalized
                    itineraries tailored to your preferences. Whether you're
                    seeking adventure, cultural immersion, or relaxation, our
                    team works closely with you to design a journey that
                    reflects your unique travel style.
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl font-semibold pb-2">
                    Expert Guidance
                  </div>
                  <div className="text-lg justi-text">
                    Navigating the vast array of travel options can be
                    overwhelming. That's where our expertise comes in. Our team
                    of travel enthusiasts and destination specialists is here to
                    guide you, offering insider tips, hidden gems, and local
                    insights to make your vacation truly unforgettable.
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl font-semibold pb-2">
                    Unparalleled Customer Service
                  </div>
                  <div className="text-lg justi-text">
                    Your satisfaction is our top priority. Our commitment to
                    excellence extends to our customer service. Whether you have
                    questions during the planning phase or need assistance while
                    on your trip, our dedicated support team is available around
                    the clock to ensure a smooth and enjoyable experience.
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl font-semibold pb-2">
                    Seamless Planning Process
                  </div>
                  <div className="text-lg justi-text">
                    We understand that planning a vacation can be
                    time-consuming. Our user-friendly platform and attentive
                    customer support make the planning process seamless. From
                    booking flights to arranging accommodations and activities,
                    Nature Tour takes care of the details, allowing you to focus
                    on the excitement of your upcoming adventure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex place-content-center my-16">
          <div className="about-last-div flex py-12 rounded-3xl">
            <div className="left-last-about-div px-12">
              <div className="text-3xl font-semibold py-6">Destinations</div>
              <div className="text-lg justi-text">
                Nature Tour offers a diverse range of destinations, each
                carefully selected to showcase the world's natural wonders and
                cultural richness. Explore lush rainforests, embark on thrilling
                safaris, immerse yourself in ancient civilizations, or unwind on
                pristine beaches – the possibilities are endless.
              </div>
            </div>
            <div
              className="about-div-last-img rounded-3xl "
              style={{ backgroundImage: `url(${lastDivImg})` }}
            ></div>
            <div className="right-last-about-div px-12">
              <div className="text-3xl font-semibold py-6">
                Join Us on This Journey
              </div>
              <div className="text-lg justi-text">
                Whether you're a seasoned traveler or embarking on your first
                adventure, Nature Tour invites you to join us on a journey of
                discovery. Explore the world with us, and let the beauty of
                nature inspire and rejuvenate your spirit. Let's create memories
                together and make your travel dreams a reality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
