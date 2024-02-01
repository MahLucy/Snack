import React, { useState } from 'react';

import "./style.scss";


const ImageList = () => {

    const [expandImage, setExpandImage] = useState(null);

    const handleImageClick = (image) => {
        if (handleImageClick === null) {
            setExpandImage(image);
        } else {
            setExpandImage(null);
        }
    };

    return (
        <div>
            {/* {images.map((image, index) => (
                <div
                    key={index}
                    className={`snack ${expandImage === image ? 'expand' : ''}`}
                    onClick={() => handleImageClick(image)}
                >
                    <img src={image} alt={'Imagem ${index + 1}'} />
                </div>
            )
            )
            } */}
        </div>
    );
};

export default ImageList;