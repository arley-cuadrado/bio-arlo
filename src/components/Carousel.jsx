export default function Carousel({ images = [] }){

     if (!images || images.length === 0) {
        return <p className="text-center text-gray-500">No images available...</p>;
    }

    return(
        <div className="carousel rounded-box">
            <div className="carousel-item">
                {images.map((src, index) => (
                    <div key={index} className="carousel-item">
                    <img
                        src={src}
                        alt={`project-image-${index}`}
                        className="object-cover w-full h-64"
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}