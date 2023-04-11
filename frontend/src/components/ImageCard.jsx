import ImageDownloadButton from "./download"

const ImageCard = ({ image }) => {
    return (
        <div>
        <img className="w-full rounded shadow-sm" src={image} alt="" />
        <ImageDownloadButton imageUrl={image} />
        </div>
        )
}

export default ImageCard
