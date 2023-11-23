
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  businessName: '',
  industry: '',
  age: [],
  gender: [],
  product: '',
  price: '',
  place: '',
  promotion: '',
  goals: '',
  budget: '',
  targetAudience: '',
  competitorAnalysis: '',
  timelines: '',
  tactics: '',
  seo: '',
  linkBuilding: '',
};

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required('Business Name is required'),
  industry: Yup.string().required('Industry is required'),
  age: Yup.array().required('Age is required').min(1, 'Select at least one option'),
  gender: Yup.array().required('Gender is required').min(1, 'Select at least one option'),
  product: Yup.string().required('Product is required'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
  place: Yup.string().required('Place is required'),
  promotion: Yup.string().required('Promotion is required'),
  goals: Yup.string().required('Goals is required'),
  budget: Yup.number().required('Budget is required').positive('Budget must be positive'),
  targetAudience: Yup.string().required('Target Audience is required'),
  competitorAnalysis: Yup.string().required('Competitor Analysis is required'),
  timelines: Yup.string().required('Timelines is required'),
  tactics: Yup.string().required('Tactics is required'),
  seo: Yup.string().required('SEO is required'),
  linkBuilding: Yup.string().required('Link Building is required'),
});

const DataForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className='flex flex-col py-10 gap-4'>
        <div className='business-name'>
          <label htmlFor="businessName">Business Name:</label>
          <Field type="text" id="businessName" name="businessName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          <ErrorMessage name="businessName" component="div"  className='text-red-500'/>
        </div>


        <div className='industy flex flex-col'>
          <label htmlFor="industry">Industry:</label>
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
          <ErrorMessage name="industry" component="div"  className='text-red-500'/>
        </div>       

        
        <div role="group">
          <label>Age:</label>
          <div className='flex justify-between items-center'>
            <label className='flex items-center gap-2'>
              <Field type="checkbox" name="age" value="0-12" />
              0-12
            </label>
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


        <div role="group">
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

        <div>

        <label htmlFor="product">Product:</label>
        <Field type="text" id="product" name="product" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="product" component="div" className='text-red-500'/>

        <label htmlFor="price">Price:</label>
        <Field type="number" id="price" name="price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="price" component="div"  className='text-red-500'/>

        <label htmlFor="place">Place:</label>
        <Field type="text" id="place" name="place" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="place" component="div"  className='text-red-500'/>

        <label htmlFor="promotion">Promotion:</label>
        <Field type="text" id="promotion" name="promotion" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="promotion" component="div"  className='text-red-500'/>
        </div>

        <label htmlFor="goals">Goals:</label>
        <Field type="text" id="goals" name="goals" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="goals" component="div"  className='text-red-500'/>

        <label htmlFor="budget">Budget:</label>
        <Field type="number" id="budget" name="budget" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="budget" component="div"  className='text-red-500'/>

        <label htmlFor="targetAudience">Target Audience:</label>
        <Field type="text" id="targetAudience" name="targetAudience" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="targetAudience" component="div"  className='text-red-500'/>

        <label htmlFor="competitorAnalysis">Competitor Analysis:</label>
        <Field type="text" id="competitorAnalysis" name="competitorAnalysis" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="competitorAnalysis" component="div"  className='text-red-500'/>

        <label htmlFor="timelines">Timelines:</label>
        <Field type="text" id="timelines" name="timelines" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="timelines" component="div"  className='text-red-500'/>

        <label htmlFor="tactics">Tactics:</label>
        <Field type="text" id="tactics" name="tactics" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="tactics" component="div"  className='text-red-500'/>

        <label htmlFor="seo">SEO:</label>
        <Field type="text" id="seo" name="seo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="seo" component="div"  className='text-red-500'/>

        <label htmlFor="linkBuilding">Link Building:</label>
        <Field type="text" id="linkBuilding" name="linkBuilding" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <ErrorMessage name="linkBuilding" component="div"  className='text-red-500'/>


        <button type="submit" className="px-4 py-2 text-white w-[100px] bg-black hover:bg-white hover:text-black border border-black">Submit</button>
      </Form>
    </Formik>
  );
};

export default DataForm;
