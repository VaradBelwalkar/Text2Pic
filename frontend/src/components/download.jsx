import React from 'react';

function ImageDownloadButton({ imageUrl }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
    <a href={imageUrl} download > </a>
    <button onClick={handleDownload}></button>
    </div>
  );
}
export default ImageDownloadButton
