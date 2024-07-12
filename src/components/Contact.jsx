import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Optional: Handle form submission logic here, such as sending data to an API
    // Example: console.log(event.target.name.value, event.target.email.value, event.target.message.value);
    event.target.reset(); // Reset form fields after submission
  };

  return (
    <div id='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full text-gray-300'
        action='https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c'
        method='POST'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <p className='py-4'>Submit the form below or shoot me an email</p>
        </div>
        <label htmlFor='name' className='sr-only'>
          Name
        </label>
        <input
          className='bg-[#ccd6f6] p-2 my-2 rounded'
          type='text'
          id='name'
          name='name'
          placeholder='Your Name'
          required
        />
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          className='bg-[#ccd6f6] p-2 my-2 rounded'
          type='email'
          id='email'
          name='email'
          placeholder='Your Email'
          required
        />
        <label htmlFor='message' className='sr-only'>
          Message
        </label>
        <textarea
          className='bg-[#ccd6f6] p-2 my-2 rounded'
          id='message'
          name='message'
          rows='5'
          placeholder='Your Message'
          required
        ></textarea>
        <button
          type='submit'
          className='bg-blue-600 hover:bg-pink-600 hover:border-pink-600 border-2 border-blue-600 text-white px-4 py-3 my-8 mx-auto rounded'
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
