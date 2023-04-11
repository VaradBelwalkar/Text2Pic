
const ImageCard = ({ image }) => {
    return (
        <div>
        <a href={image} download>
        <img className="w-full rounded shadow-sm" src={image} alt="" />
        </a>
        </div>
        )
}

export default ImageCard
