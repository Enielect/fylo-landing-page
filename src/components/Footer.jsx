function Footer() {
  return (
    <div className="text-white px-10 text-2xl bg-footer ">
      <img
        src="./images/logo.svg"
        alt="page logo"
        className="w-[250px] pb-16"
      />
      <div className="md:flex md:gap-[80px] md:items-start">
        <div className="basis-[490px]">
          <div className="flex mb-8">
            <img
              src="./images/icon-location.svg"
              alt="location icon"
              className="mr-8  self-start pt-2 w-[60px]"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiumdod tempor incididunt ut labore et
            </p>
          </div>
        </div>
        <div>
          <div className="flex mb-8">
            <img
              src="./images/icon-phone.svg"
              alt="phon-icon"
              className="mr-8  self-start pt-2 w-[25px]"
            />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex mb-8 mt-10">
            <img
              src="./images/icon-email.svg"
              alt="email"
              className="mr-8  self-start pt-2 w-[25px]"
            />
            <p>example@fylo.com</p>
          </div>
        </div>
        <ul className="flex flex-col gap-6 py-16 md:py-0">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="flex flex-col gap-6">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <div className="py-[8rem] flex items-center justify-center gap-4 md:py-0">
          <div className="p-2 border rounded-full">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div className="p-2 rounded-[50%] border">
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
          <div className=" rounded-full p-2 border">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
