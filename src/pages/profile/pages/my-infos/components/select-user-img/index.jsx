import React, {useRef, useState} from 'react';
import {UserImg, CameraIcon, HiddenInput, Icon, ImageContainer, Image} from "./user-select-img.styles";
import {UploadImgApi} from "../../../../../../api/profile/upload-img-api";

function SelectUserImg({src, setting}) {

    const [imageSrc, setImageSrc] = useState(src)

    const hiddenInputRef = useRef(null);

    const [showCameraIcon, setShowCameraIcon] = useState(false);

    const uploadImage = (file) => {
        const formData = new FormData();
        formData.append('image', file);

        return UploadImgApi({file: formData})
    }

// Usage
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
        await uploadImage(file)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <UserImg
            onClick={() => {
                hiddenInputRef.current.click()
            }}
            setting={setting}
            onMouseOver={() => setShowCameraIcon(true)} onMouseOut={() => setShowCameraIcon(false)}>
            <ImageContainer>
                <Image src={imageSrc}/>
                <CameraIcon isVisible={showCameraIcon}>
                    <Icon className="fas fa-camera"/>
                </CameraIcon>
            </ImageContainer>
            <HiddenInput ref={hiddenInputRef} onChange={handleFileUpload}/>
        </UserImg>
    );
}

export default SelectUserImg;
