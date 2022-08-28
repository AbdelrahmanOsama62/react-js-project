import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const passwordd = watch("Password");
  console.log(watch("example")); // watch input value by passing the name of it
  console.log('error', errors);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlfor="exampleInputEmail1" className="form-label mx-2 mt-2">Name</label>
        <input type="text" className="form-control mx-2 w-50" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("Name", { required: true })} />
      </div>
      {
        errors?.Name?.type === 'required' ?
          <p className="text-danger">Name is Required</p>
          :
          ''
      }

      <div className="mb-3">
        <label htmlfor="exampleInputEmail1" className="form-label mx-2">Email address</label>
        <input type="email" className="form-control mx-2 w-50" id="exampleInputEmail1" aria-describedby="emailHelp"  {...register("emailAddress", { required: true })} />
      </div>
      {
        errors?.emailAddress?.type === 'required' ?
          <p className="text-danger">Email is Required</p>
          :
          ''
      }
      <div className="mb-3">
        <label htmlfor="exampleInputEmail1" className="form-label mx-2">Phone</label>
        <input type="number" className="form-control mx-2 w-50" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("phone", { required: true, minLength: 11, maxLength: 12 })} />
      </div>
      {
        errors?.phone?.type === 'required' ?
          <p className="text-danger">Phone is Required</p>
          :
          ''
      }
      {
        errors?.phone?.type === 'minLength' ?
          <p className="text-danger">Min length is 11</p>
          :
          ''
      }
      {
        errors?.phone?.type === 'maxLength' ?
          <p className="text-danger">Max length is 12</p>
          :
          ''
      }
      <div className="mb-3">
        <label htmlfor="exampleInputPassword1" className="form-label mx-2">Password</label>
        <input type="password" className="form-control mx-2 w-50" name="password"  {...register("Password", { required: true })} />
      </div>
      {
        errors?.Password?.type === 'required' ?
          <p className="text-danger">Password is Required</p>
          :
          ''
      }
      <div className="mb-3">
        <label htmlfor="exampleInputPassword1" className="form-label mx-2">Confirm Password</label>
        <input type="password" className="form-control mx-2 w-50" {...register("confirmPassword", { required: true,validate: value =>
            value === passwordd })} />
      </div>
      {
        errors?.confirmPassword?.type === 'validate' ?
          <p className="text-danger">The passwords do not match</p>
          :
          ''
      }
      {
        errors?.confirmPassword?.type === 'required' ?
          <p className="text-danger">Confirm Password is Required</p>
          :
          ''
      }
      <label className="m-2">Gender:</label>
      <div className="mb-3 form-check d-flex">
        <div className="form-check p-0 mt-2 m-2">
          <input className="ch1 form-check-input" type="radio"  name='one' value="Female" id="flexCheckDefault" />
          <label className="form-check-label" htmlfor="flexCheckDefault">
            Female
          </label>
        </div>
        <div className="form-check mt-2 mx-4">
          <input className="ch1 form-check-input" type="radio" name='one' value="Male" id="flexCheckDefault" />
          <label className="form-check-label" htmlfor="flexCheckDefault">
            Male
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary m-2">Submit</button>
    </form>
  );
}
export default SignUp;