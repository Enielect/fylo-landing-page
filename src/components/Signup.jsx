function Signup() {
  return (
    <div className="signup py-[200px]">
      <div className="mx-8 px-10 py-10 text-white bg-signUp  text-center border-solid border-black rounded-[14px] max-w-[1000px] mx-auto">
        <h2 className="font-bold text-2xl pb-7">Get early access today</h2>
        <p className="text-xl ">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="md:flex md:gap-10 md:my-10 md:items-center">
          <input
            type="text"
            placeholder="email@example.com"
            className="px-10 py-5  rounded-full w-full my-9 md:my-0"
          />
          <button className="text-center bg-button mx-auto px-10 py-5 md:mb-0 mb-5 rounded-full w-full md:max-w-[300px] font-bold text-xl">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
