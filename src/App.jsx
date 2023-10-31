import Signup from "./components/Signup";
import Card from "./components/Card";
import Activity from "./components/Activity";
import FyloWorks from "./components/FyloWorks";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  const medium =
    "md:bg-[url('./images/bg-curvy-desktop.svg')] md:w-screen md:bg-[0_210px] md:bg-contain";
  return (
    <div className="bg-signUp">
      {/* <img src='./images/bg-curvy-mobile.svg' alt=""></img> */}
      <Nav />
      <div className="bg-[url('./images/bg-curvy-mobile.svg')] bg-no-repeat bg-[0_310px] w-screen bg-contain md:transparent ">
        <div className="second md:bg-signUp">
          <img
            src="./images/illustration-intro.png"
            alt=""
            className="py-10 w-100 h-100 mx-auto"
          />
          <h1 className="text-white text-4xl font-raleway font-bold text-center leading-relaxed px-6 md:w-[670px] md:mx-auto">
            All your files in one secure location, accessible anywhere
          </h1>
        </div>
      </div>
      <div className="bg-main md:secondBig">
        <div className="md:max-w-[740px] text-[rgba(225,225,225,0.9)] md:mx-auto">
          <p className=" text-xl text-center px-14 pt-8">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="max-w[80px] bg-button py-4 text-white text-xl w-[22rem] mx-auto mt-12 mb-32 rounded-full sm:max-w-[300px]">
            Get Started
          </button>
        </div>
        <div className="md:grid md:grid-cols-[600px_600px] md:justify-center">
          <Activity
            src="./images/icon-access-anywhere.svg"
            alt="access files anywhere"
            heading="Access your files, anywhere"
            content="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          />

          <Activity
            src="./images/icon-security.svg"
            alt="security of file"
            heading="Security you can trust"
            content=" 2-factor authentication and user-controlled encryption are just a couple of the security 
          features we allow to help secure your files."
          />

          <Activity
            src="./images/icon-collaboration.svg"
            alt="collaboration"
            heading="Real-time collaboration"
            content=" Securely share files and folders with friends, family and colleagues for live collaboration. 
          No email attachments required."
          />

          <Activity
            src="./images/icon-any-file.svg"
            alt="store any file"
            heading="Store any type of file"
            content="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
          file types to be securely stored and shared."
          />
        </div>
        <FyloWorks />
        <span>
          <img
            src="./images/bg-quotes.png"
            alt="quotes"
            className="ml-14 w-10"
          />
        </span>
        <div className="space-y-10 md:flex md:items-center md:space-y-0">
          <Card
            src="./images/profile-1.jpg"
            content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            personnel="Satish Patel"
            position="Founder & CEO, Huddle"
          />

          <Card
            src="./images/profile-2.jpg"
            content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            personnel="Bruce McKenzie"
            position="Founder & CEO, Huddle"
          />

          <Card
            src="./images/profile-3.jpg"
            content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            personnel="Iva Boyd"
            position="Founder & CEO, Huddle"
          />
        </div>
      </div>
      <Signup />
      <Footer />
    </div>
  );
}

export default App;

/* <ion-icon name="location-sharp"></ion-icon>
<i class="fa-solid fa-phone-volume"></i> */
