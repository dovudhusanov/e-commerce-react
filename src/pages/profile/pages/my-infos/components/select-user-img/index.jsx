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
import {UserInfoEditApi, UserCreateApi, GetUserApi, UploadImgApi} from "../../../../../../api";
import {useDispatch} from "react-redux";
import {setImageChanged} from "../../../../../../reducer/change-image-states-reducer";

function SelectUserImg({src, profileCreated}) {

    const [imageSrc, setImageSrc] = useState(src)
    const [imageId, setImageId] = useState([])

    const hiddenInputRef = useRef(null);
    const dispatch = useDispatch()

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
            try {
                dispatch(setImageChanged(true))
                const intervalId = setInterval(() => {
                    dispatch(setImageChanged(false));
                }, 2000);
                await UserInfoEditApi({images: [...imageId]}, localStorage.getItem("profileId"))
                    .then(_ => {
                        clearInterval(intervalId);
                        toast.success('Successfully saved!')
                    })
                    .catch(_ => toast.error('Error!'))
            } catch (error) {
                dispatch(setImageChanged(false))
            }
        } else {
            const userRes = await GetUserApi(localStorage.getItem("userId"))
            userRes?.data?.profile && localStorage.setItem("profileId", userRes.data.profile)
            try {
                dispatch(setImageChanged(true));
                const intervalId = setInterval(() => {
                    dispatch(setImageChanged(false));
                }, 2000);
                await UserCreateApi({images: [...imageId], first_name: "user"}).then((_) => {
                    clearInterval(intervalId);
                    toast.success("Successfully saved!");
                }).catch((_) => {
                    toast.error("Wrong");
                });

            } catch (e) {
                dispatch(setImageChanged(false));
            }
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
            <SaveButton type={"submit"} disabled={!Object.keys(imageId).length && true}><i
                className="fa-solid fa-check"></i></SaveButton>
        </Form>
    );
}

export default SelectUserImg;
