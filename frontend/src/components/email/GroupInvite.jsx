import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForms.css';

export const GroupInvite = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gsptyzh', 'template_lc4l9cs', form.current, '9VN1Cm9uQIRCgHrzB')
      .then((result) => {
          e.target.reset();
          console.log(result.text);
          console.log("Group invite sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <fieldset>
        <legend>Invite someone to a group!</legend>
        <label>Send invite to:</label>
        <input type="text" name="to_name" />
        <label>Their email:</label>
        <input type="email" name="to_email" />
        <label>From:</label>
        <input type="text" name="from_name" />
        <input type="submit" value="Send" />
      </fieldset>
    </form>
  );
};

export default GroupInvite;
