import React from 'react'
import Card from '../Card'
import emailjs from 'emailjs-com'
import './ContactForm.css'
import { useForm } from "react-hook-form"
import TextareaAutosize from 'react-textarea-autosize';

const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = ( data, e ) => {
    const requestParams = {
      from_name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }
    emailjs.send('contact_service', 'contact_form', requestParams, 'user_lV2fCJJAG1tyQTKcbxU3o')
    e.target.reset();
  }

  return (
    <Card className="p-10 mb-20 ">
      <form action='post' className="contact-form flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label for="name">Name</label>
          <ContactFormError>{errors.name && "Please enter your name."}</ContactFormError>
          <input className="contact-form-input" name="name" id="name" type='text' placeholder='Your name' {...register('name', { required: true })}></input>
          <label for="email">Email</label>
          <ContactFormError>{errors.email && "Please enter your email."}</ContactFormError>
          <input className="contact-form-input" name="email" id="email" type='text' placeholder='Your email' 
            {
              ...register("email", {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })
            }
          />
          <label for="subject">Subject</label>
          <input className="contact-form-input" name="subject" id="subject" type='text' {...register('subject')}></input>
          <label for="message">Message</label>
          <ContactFormError>{errors.message && "Please enter your message."}</ContactFormError>
          <TextareaAutosize className="contact-form-textarea" minRows='6' name="message" {...register('message', { required: true })}></TextareaAutosize>
          <div className="w-40 self-end">
            <Card className="flex justify-center align-center">
              <button className='py-2 px-4 font-accent' type="submit">Send Message</button>
            </Card>
          </div>
      </form>
    </Card>
  )
}

const contactFormInput = () => {

}

const ContactFormError = ({ children }) => {
  return (
    <span className="contact-error font-accent text-red-800 font-light">{ children }</span>
  )
}

export default ContactForm