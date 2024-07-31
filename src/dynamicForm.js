import React, {useState} from 'react';
import './dynamicForm.css';

const DynamicForm = () => {

    // required state for each field
    const [name, setNAme] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // set state for error validation
    const [errors, setErrors] = useState({});

    // state for validation
    const Validate = () => {
        const errors = {};
        
        if (name.length < 3) {
             errors.name = 'Name must be at least 3 characters long.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'invalid email format';
        }

        if (password.length < 8 || !/\d/.test(password)) {
            errors.password = 'Password must be at least 8 characters long and contain a number.';
          }
      
          if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match.';
          }
      
        //   setErrors(errors);
        //   return Object.keys(errors).length === 0;

        // handing form submission


    };





  return (
    <div class="container">
    <h1>Dynamic Form</h1>
    <form >
        <div>
            <label>Name</label>
            <input type="text" placeholder="enter your name" value={name} onChange={(e) => setNAme(e.target.value)} required />
            {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
            <label>Email Address</label>
            <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
            <label>Password</label>
            <input type="number" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
            <label>Confirm Password</label>
            <input type="number" placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>


        <button type="submit" disabled={!Validate()}>Submit</button>
    </form>
</div>
  )
}

export default DynamicForm
