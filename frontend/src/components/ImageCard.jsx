
const ImageCard = ({ image }) => {
    return (
        <>
        <img className="w-full rounded shadow-sm" src={image} alt="" />
        <ImageDownloadButton imageUrl={image} />
        </>
        )
}

export default ImageCard
