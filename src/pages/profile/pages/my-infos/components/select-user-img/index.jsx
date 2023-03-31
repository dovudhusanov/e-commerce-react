import React, {useRef, useState} from 'react';
import {
    UserImg,
    CameraIcon,
    HiddenInput,
    Icon,
    ImageContainer,
    Image,
    SaveButton,
    Form
} from "./user-select-img.styles";
import {toast} from "react-toastify";
import {UserInfoEditApi} from "../../../../../../api/profile/user-info-edit-api";
import {UserCreateApi} from "../../../../../../api/profile/user-create-api";
import {GetUserApi} from "../../../../../../api/profile/get-user-api";
import {UploadImgApi} from "../../../../../../api/profile/upload-img-api";

function SelectUserImg({src, profileCreated}) {

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
        if (profileCreated.profile) {
            const userRes = await GetUserApi(localStorage.getItem("userId"))
            userRes?.data?.profile && localStorage.setItem("profileId", userRes.data.profile)
            await UserInfoEditApi({images: [...imageId]}, localStorage.getItem("profileId"))
                .then(_ => toast.success('Successfully saved!'))
                .catch(_ => toast.error('Error!'))
        } else {
            await UserCreateApi({first_name: "user"})
                .then(_ => toast.success("Successfully saved!"))
                .catch(_ => toast.error("Wrong"))
        }
    }

    return (
        <Form onSubmit={handleSave}>
            <UserImg
                onClick={() => {
                    hiddenInputRef.current.click()
                }}
                onMouseOver={() => setShowCameraIcon(true)} onMouseOut={() => setShowCameraIcon(false)}>
                <ImageContainer>
                    <Image src={imageSrc}/>
                    <CameraIcon isVisible={showCameraIcon}>
                        <Icon className="fas fa-camera"/>
                    </CameraIcon>
                </ImageContainer>
                <HiddenInput ref={hiddenInputRef} onChange={handleFileUpload}/>
            </UserImg>
            <SaveButton type={"submit"} disabled={!Object.keys(imageId).length && true}><i className="fa-solid fa-check"></i></SaveButton>
        </Form>
    );
}

export default SelectUserImg;
