import Signup from "./components/Signup";
import Card from "./components/Card";
import Activity from "./components/Activity";
import FyloWorks from "./components/FyloWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-signUp">
      {/* <img src='./images/bg-curvy-mobile.svg' alt=""></img> */}
      <div className="bg-[url('./images/bg-curvy-mobile.svg')] bg-no-repeat bg-cover bg-[-10px_185px] h-full">
        <Nav />
        <img
          src="./images/illustration-intro.png"
          alt=""
          className="py-10 w-100 h-100 mx-auto"
        />

        <h1 className="text-white text-4xl font-raleway font-bold text-center leading-relaxed px-6">
          All your files in one secure location, accessible anywhere
        </h1>
        <div>
          <p className="text-white text-xl text-center px-14 pt-8">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="max-w[80px] bg-button py-4 text-white text-xl w-[22rem] mx-auto mt-12 mb-32 rounded-full">
            Get Started
          </button>
        </div>
        <Activity
          src="./images/icon-access-anywhere.svg"
          alt="access files anywhere"
          heading="Access your files, anywhere"
          content="The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere."
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
        <FyloWorks />
        <span>
          <img
            src="./images/bg-quotes.png"
            alt="quotes"
            className="ml-14 w-10"
          />
        </span>
        <Card
          src="./images/profile-1.jpg"
          content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          personnel="Satish Patel"
          position="Founder & CEO, Huddle"
        />

        <Card
          src="./images/profile-2.jpg"
          content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          personnel="Bruce McKenzie"
          position="Founder & CEO, Huddle"
        />

        <Card
          src="./images/profile-3.jpg"
          content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          personnel="Iva Boyd"
          position="Founder & CEO, Huddle"
        />
      </div>
        <Signup />
        <Footer />
    </div>
  );
}

function Nav() {
  return (
    <div className="flex px-10 py-5 items-center justify-between text-white">
      <img src="./images/logo.svg" alt="" className="h-10 w-32" />
      <div>Features</div>
      <div>Team</div>
      <div>Sign In</div>
    </div>
  );
}

export default App;


  /* <ion-icon name="location-sharp"></ion-icon>
<i class="fa-solid fa-phone-volume"></i> */

