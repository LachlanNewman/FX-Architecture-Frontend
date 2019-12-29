import React, {useEffect, useState} from 'react';

import Landing from "../Landing/Landing";
import api, {key} from "../../api/api";

const ContactForm = () => {

    const [landingImage,setlandingImage] = useState("");
    const [subTitle, setSubTitle] = useState("");

    useEffect(()=> {
        api.get("/singletons/get/ContactUs?token=" + key).then((onSuccess) => {
            console.log(onSuccess.data)
            setlandingImage(onSuccess.data.landingImage.path)
            setSubTitle(onSuccess.data.subTitle);
        })
    },[])

    return (
        <div>
            <Landing title={subTitle} backgroundImage={landingImage}/>
            <div className={'contact-form'}>
                <div className={'contact-form__container'}>
                    <form className={'contact-form__form'}>
                        <div className={'contact-form__item'}>
                            <label className={'contact-form__label'}>First Name</label>
                            <input className={'contact-form__input'} placeholder={"First Name"}/>
                        </div>
                        <div className={'contact-form__item'}>
                            <label className={'contact-form__label'}>Last Name</label>
                            <input className={'contact-form__input'} placeholder={"Last Name"}/>
                        </div>
                        <div className={'contact-form__item'}>
                            <label className={'contact-form__label'}>Email</label>
                            <input className={'contact-form__input'} placeholder={"Email"}/>
                        </div>
                        <div className={'contact-form__item contact-form__item--top'}>
                            <label className={'contact-form__label'}>Enquiry</label>
                            <textarea rows={10} className={'contact-form__text-area'} placeholder={"Enquiry"}/>
                        </div>
                        <div className={'contact-form__item contact-form__item--submit'}>
                            <input type={'submit'} className={'contact-form__submit'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactForm