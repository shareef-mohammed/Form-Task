import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  const inputStyles = `mt-5 w-full  rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async(data, e) => {
    
    const isValid = await trigger();
    if(!isValid) {
        e.preventDefault()
        return         
    } else {
      try {
        const response = await axios.post('https://dashboard.omnisellcrm.com/api/store', data);
        alert('Successfully Completed.')
      } catch (error) {
        alert('Failed Complete the process !!!')
      }
     
    }
      
  };
  return (
    <div className="w-full mt-12 flex justify-center">

      <form className="w-[40%]" 
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={inputStyles}
          type="text"
          placeholder="NAME"
          {...register("name", {
            required: true,
            maxLength: 25,
          })}
        />
        {errors.name && (
          <p className="mt-1 text-primary-500 ">
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "Max length is 25 char."}
          </p>
        )}
        <input
          className={inputStyles}
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="mt-1 text-primary-500 ">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid Email address"}
          </p>
        )}
        <input
          className={inputStyles}
          type="text"
          placeholder="COMPANY NAME"
          {...register("company_name", {
            required: true,
            maxLength: 40,
          })}
        />
        {errors.company_name && (
          <p className="mt-1 text-primary-500 ">
            {errors.company_name.type === "required" && "This field is required."}
            {errors.company_name.type === "maxLength" && "Max length is 40 char."}
          </p>
        )}
        <input
          className={inputStyles}
          type="text"
          placeholder="PHONE NUMBER"
          {...register("phone_number", {
            required: true,
            pattern:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          })}
        />
        {errors.phone_number && (
          <p className="mt-1 text-primary-500 ">
            {errors.phone_number.type === "required" && "This field is required."}
            {errors.phone_number.type === "pattern" && "Invalid phone number."}
          </p>
        )}
        <input
          className={inputStyles}
          type="text"
          placeholder="REQUIREMENT"
          {...register("requirement", {
            required: true,
            maxLength: 25,
          })}
        />
        {errors.requirement && (
          <p className="mt-1 text-primary-500 ">
            {errors.requirement.type === "required" &&
              "This field is required."}
            {errors.requirement.type === "maxLength" &&
              "Max length is 25 char."}
          </p>
        )}
        <input
          className={inputStyles}
          type="text"
          value="sandbox"
          readOnly
          placeholder="LEAD_TYPE_ID"
          {...register("lead_types_id", {
            required: true,
            maxLength: 25,
          })}
        />
        
        <button
          type="submit"
          className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default App;
