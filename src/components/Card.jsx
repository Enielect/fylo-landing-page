function Card({ src, content, personnel, position }) {
  return (
    <div
      className={`p-7 text-white text-md bg-testimonial mx-12  rounded-[8px] `}
    >
      <div className="mb-7">{content}</div>
      <div className="flex">
        <img
          src={src}
          alt="description"
          className="w-[40px] h-[40px] rounded-full mr-4"
        />
        <div>
          <h3 className="font-bold text-xl">{personnel}</h3>
          <p className="text-[12px] ">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
