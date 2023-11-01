function FyloWorks() {
  return (
    <div className="my-44 text-white px-9 lg:gap-10 lg:flex lg:items-center lg:mx-[40px]">
      <img
        src="./images/illustration-stay-productive.png"
        alt=""
        className="mx-auto w-[450px] my-20 block"
      />
      <div className="lg:mt-[56px]">
        <h3 className="font-bold text-2xl pb-7">
          Stay productive, wherever you are
        </h3>
        <p className="pb-7 text-lg">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="pb-7 text-lg">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="pb-2 border-b-button w-[175px] flex items-center border-b-2 mb-16">
          <a href="#df" className="text-button">
            See how Fylo works
          </a>
          <span className="bg-button inline-block rounded-full ml-3 py-auto p-[1px] ">
            <ion-icon
              name="arrow-forward-outline"
              className="py-auto"
            ></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FyloWorks;
