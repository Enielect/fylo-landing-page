function Activity({src, alt, heading,styles, content}) {
    return (
        <div className={`my-36  text-center text-white  ${styles && styles}`}>
            <img src={src} alt={alt} className="my-11 mx-auto"/>
            <h3 className="font-bold text-3xl mb-4">{heading}</h3>
            <p className="px-10 text-xl">{content}</p>
        </div>
    )
}

export default Activity
