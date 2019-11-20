import React from "react";
import Landing from "../Landing/Landing";

const ContactForm = () => {
    return (
        <div>
            <Landing title={'contact'}/>
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