const Footer = () => {
  return (
    <>
      <div className="parent-footer-div w-full rounded-b-3xl px-10 pt-16">
        <div className="flex place-content-center gap-40 pb-8">
          <div className="flex items-center">
            <div>
              <div className="app-name text-4xl text-cyan-300 px-4 font-semibold pb-10">
                NatureTour
              </div>
              <div className="flex gap-8 place-items-center place-content-center">
                <div className="facebook h-12 w-12"></div>
                <div className="twitter h-8 w-8"></div>
                <div className="linkedin h-8 w-8"></div>
                <div className="instagram h-8 w-8"></div>
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="text-cyan-200 text-3xl font-semibold py-4">
              Menu
            </div>
            <div className="text-cyan-500 text-2xl">Home</div>
            <div className="text-cyan-500 text-2xl">About</div>
            <div className="text-cyan-500 text-2xl">Destination</div>
            <div className="text-cyan-500 text-2xl">Blog</div>
            <div className="text-cyan-500 text-2xl">Content</div>
          </div>
          <div className="text-left">
            <div className="text-cyan-200 text-3xl font-semibold py-4">
              Support
            </div>
            <div className="text-cyan-500 text-2xl">Terms & conditions</div>
            <div className="text-cyan-500 text-2xl">Privacy policy</div>
            <div className="text-cyan-500 text-2xl">Contact us</div>
            <div className="text-cyan-500 text-2xl">Resources</div>
          </div>
          <div className="text-left">
            <div className="text-cyan-200 text-3xl font-semibold py-4">
              Contact us
            </div>
            <div className="text-cyan-500 text-2xl">+91 98765-4321 </div>
            <div className="text-cyan-500 text-2xl">info@naturetour.com</div>
          </div>
        </div>
        <hr/>
        <div className="lower-footer py-8 text-2xl text-cyan-600">
          ©2024 NatureTour.com All trademarks are owned by Nature Tour India ,
          IN , or used with permission
        </div>
      </div>
    </>
  );
};

export default Footer;
