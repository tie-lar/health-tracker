import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForms.css';

export const DistributeGoal = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gsptyzh', 'template_mqkjua3', form.current, '9VN1Cm9uQIRCgHrzB')
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
      <label>Send goal to:</label>
      <input type="text" name="to_name" />
      <label>Their email:</label>
      <input type="email" name="to_email" />
      <label>Group name:</label>
      <input type="text" name="group_name" />
      <label>Goal:</label>
      <textarea name="goal" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default DistributeGoal;
