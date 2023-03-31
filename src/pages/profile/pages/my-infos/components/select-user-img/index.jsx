import React, {useRef, useState} from 'react';
import {UserImg, CameraIcon, HiddenInput, Icon, ImageContainer, Image} from "./user-select-img.styles";
import {toast} from "react-toastify";
import {UserInfoEditApi} from "../../../../../../api/profile/user-info-edit-api";
import {UploadImgApi} from "../../../../../../api/profile/upload-img-api";

function SelectUserImg({src, setting}) {

    const [imageSrc, setImageSrc] = useState(src)
    const [imageId, setImageId] = useState([])

    const hiddenInputRef = useRef(null);

    const [showCameraIcon, setShowCameraIcon] = useState(false);
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
        const formData = new FormData();
        formData.append('file', file, file.fileName);

        await UploadImgApi(formData)
            .then((response) => {
                console.log(response.data);
                setImageId([response?.data.results.id])
            })
            .catch((error) => {
                console.log(error);
            });
    }



    const handleSave = async (e) => {
        e.preventDefault()
        await UserInfoEditApi({images: [...imageId]}, localStorage.getItem("profileId"))
            .then(_ => toast.success('Successfully saved!'))
            .catch(_ => toast.error('Error!'))
    }

    return (
        <form onSubmit={handleSave}>
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
            <button type={"submit"} disabled={!imageId && true}>save</button>
        </form>
    );
}

export default SelectUserImg;
