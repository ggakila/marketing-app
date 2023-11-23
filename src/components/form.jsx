"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  businessName: '',
  industry: '',
  age: [],
  gender: [],
  product: '',
  goals: '',
};

const validationSchema = Yup.object({
  businessName: Yup.string().required('Required'),
  industry: Yup.string().required('Required'),
  age: Yup.array().required('Required'),
  gender: Yup.array().required('Required'),
  product: Yup.string().required('Required'),
  goals: Yup.string().required('Required'),
});

const DataForm = () => {
  
  const [currentPart, setCurrentPart] = useState(1);
  const totalParts = 4; 

    
  
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      try {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify(values);

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };

        const response = await fetch('https://482b-41-90-182-86.ngrok-free.app/api/v1/getStategy', requestOptions);

        if (response.ok) {      
          router.push('/presentation');
          console.log(values);
          resetForm();
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    };


    const handlePrevious = () => {
    if (currentPart > 1) {
      setCurrentPart(currentPart - 1);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='flex flex-col py-10 gap-4 h-[60vh]'>

        
        {currentPart === 1 && (
          <>
            <h1 className="text-2xl font-semibold">Please describe your business:</h1>
            <div className='business-name flex flex-col'>
              <label htmlFor="businessName">Business Name:</label>
              <div>
                <Field type="text" id="businessName" name="businessName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                <ErrorMessage name="businessName" component="div" className='text-red-500'/>
              </div>
            </div>

            {/* Industry Section */}
            <div className='industry flex flex-col'>
              <label htmlFor="industry">Industry:</label>
              <div>
                  <Field as="select" id="industry" name="industry">
                   <option value="" label="Select an industry" />
                   <option value="E-commerce Store">E-commerce Store</option>
                   <option value="Digital Marketing Agency">Digital Marketing Agency</option>
                   <option value="Freelance Services">Freelance Services</option>
                   <option value="Affiliate Marketing">Affiliate Marketing</option>
                   <option value="Online Education">Online Education</option>
                   <option value="Social Media Consulting">Social Media Consulting</option>
                   <option value="Virtual Assistance">Virtual Assistance</option>
                   <option value="Blogging/Vlogging">Blogging/Vlogging</option>
                   <option value="Dropshipping">Dropshipping</option>
                   <option value="Social Media Influencer">Social Media Influencer</option>
                </Field>
                <ErrorMessage name="industry" component="div" className='text-red-500'/>
              </div>
            </div>
          </>
        )}

        {currentPart === 2 && (
          <>
            {/* Age Section */}
            <h1 className="text-2xl font-semibold">Please tell us more about your customers:</h1>
            <div role="group" className='flex flex-col'>
              <label>Age:</label>
                <div className='flex justify-between items-center'>
              <label className='flex items-center gap-2'>
              <Field type="checkbox" name="age" value="12-24" />
               12-24
              </label>
              <label className='flex items-center gap-2'>
               <Field type="checkbox" name="age" value="24-36" />
               24-36
              </label>
              <label className='flex items-center gap-2'>
              <Field type="checkbox" name="age" value="36+" />
               36+
              </label>
              </div>
            </div>

            {/* Gender Section */}
            <div role="group" className='flex flex-col'>
              <label>Gender:</label>
              <div className='flex justify-between items-center'>
              <label className='flex items-center gap-2'>
              <Field type="checkbox" name="gender" value="Male" />
              Male
              </label>
              <label className='flex items-center gap-2'>
              <Field type="checkbox" name="gender" value="Female" />
              Female
              </label>
              <label className='flex items-center gap-2'>
              <Field type="checkbox" name="gender" value="Both" />
              Both
              </label>
            </div>
            </div>
          </>
        )}

        {currentPart === 3 && (
          <>
            {/* Part 3 fields */}
            {/* Product Description Section */}
            <h1 className="text-2xl font-semibold">Tell us more about your product or service. e.g. name, price</h1>
            <div className='flex flex-col'>
              <label htmlFor="product">Product Description:</label>
              <div>
                <Field as="textarea" rows="6" type="text" id="product" name="product" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[100px]"/>
                <ErrorMessage name="product" component="div" className='text-red-500'/>
              </div>
            </div>
          </>
        )}

        {currentPart === 4 && (
          <>
            {/* Part 4 fields */}
            {/* Goals Section */}
            <h1 className="text-2xl font-semibold">Tell us more about what you wish achieve with this campaign</h1>
            <div className='flex flex-col'>
              <label htmlFor="goals">Goals of the campaign:</label>
              <div>
                <Field as="textarea" rows="6" type="text" id="goals" name="goals" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                <ErrorMessage name="goals" component="div" className='text-red-500'/>
              </div>
            </div>
            </>
        )}

        
        {/* Previous and Next/Submit buttons */}
        <div className="flex justify-between">
          {currentPart > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 text-white hover:text-black bg-black hover:bg-white border border-black"
            >
              Previous
            </button>
          )}

          {currentPart < totalParts ? (
            <button
              type="button"
              onClick={() => setCurrentPart(currentPart + 1)}
              className="px-4 py-2 text-white bg-black hover:bg-white hover:text-black border border-black"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 text-white bg-black hover:bg-white hover:text-black border border-black"
            >
              Submit
            </button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default DataForm;