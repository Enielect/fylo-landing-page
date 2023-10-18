function Signup() {
  return (
    <div className="mx-8 px-10 py-8 text-white  bg-signUp my-16 text-center border-solid border-black rounded-[14px]">
      <h2 className="font-bold text-2xl pb-7">Get early access today</h2>
      <p className="text-xl ">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <input
        type="text"
        placeholder="email@example.com"
        className="px-10 py-5 rounded-full w-full my-9"
      />
      <button className=" text-center bg-button mx-auto px-10 py-5 mb-5 rounded-full w-full font-bold text-xl">
        Get Started For Free
      </button>
      
    </div>
  );
}

export default Signup;
