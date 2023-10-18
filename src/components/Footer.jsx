function Footer() {
  return (
    <div className="text-white px-10 text-2xl">
      <img
        src="./images/logo.svg"
        alt="page logo"
        className="w-[250px] pb-16"
      />
      <div className="flex mb-8">
        <img
          src="./images/icon-location.svg"
          alt="location icon"
          className="mr-8  "
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
      </div>
      <div className="flex mb-8">
        <img src="./images/icon-phone.svg" alt="phon-icon" className="mr-8" />
        <p>+1-543-123-4567</p>
      </div>
      <div className="flex mb-8">
        <img src="./images/icon-email.svg" alt="email" className="mr-8" />
        <p>example@fylo.com</p>
      </div>
      <ul className="flex flex-col gap-6 py-16">
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
      <div className="py-[8rem] flex justify-center gap-2">
        <ion-icon
          className="p-2 rounded-full border-2"
          name="logo-facebook"
        ></ion-icon>
        <ion-icon
          name="logo-twitter"
          className="p-2 rounded-full border-white border-2"
        ></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
    </div>
  );
}

export default Footer;
