import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const RegisterPage = () => {
    const [role,setRole]=useState('patient');
    const [emailid,setEmaiId]=useState('');
    const [password,setPassword]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const [gender, setGender]=useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [dateofbirth, setDateofBirth]=useState(null);
    const [address, setAddress]=useState('');
    const [country, setCountry]=useState('');
    const [state, setState]=useState('');
    const [city, setCity]=useState('');
    const [pincode, setPincode]=useState('');
    const [doctorlic, setDoctorLic]=useState('');
    const [company, setCompany]=useState('');
    const [companyLic, setCompanyLic]=useState('');
 
    const handleChange = date => {
        setDateofBirth(date);
    };
    const formatDateDisplay = date => {
        return date ? date.toLocaleDateString() : '';
    };
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      const countrySelect = document.getElementById('country');


      data.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        return nameA.localeCompare(nameB);
      });

      // Populate the dropdown with sorted country names
      data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name.common;
        option.text = country.name.common;
        countrySelect.add(option);
      });
    })
    .catch(error => console.error('Error fetching countries:', error));
//
    const renderInputForm = () => {
        if (role === 'patient') {
          return;
        } else if (role === 'doctor') {
          return (
            <div className="doctor-info">
            <p>Doctor Information</p>
            <div className="doctor-content">
            <input 
            type="text" 
            placeholder="License Number"
            required 
            value={doctorlic}
               onChange={(e)=>setDoctorLic(e.target.value)}/>
            </div>
            </div>
          );
        } else if (role === 'insuranceProvider') {
          return (
            <div className="insurance-provider">
            <p>Insurance Information</p>
            <div className="insurance-content">
            <input 
            type='text'
            placeholder="Insurance Company"
            required 
            value={company}
            onChange={(e)=>setCompany(e.target.value)}/>
            
            <input 
            type="text" 
            required 
            placeholder="License Number"
            value={companyLic}
            onChange={(e)=>setCompanyLic(e.target.value)}/>
            </div>
            </div>
          );
        } else {
          return null;
        }
      };
    return ( 
         <div className="register-page">
            <div className="content">
                <h2>Registration Form</h2>
               <form>
                <p>Select User type</p>
               <select 
               required
               className="select-role"
               value={role}
               onChange={(e)=>setRole(e.target.value)}>
                
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="insuranceProvider">Insurance Provider </option>
               </select>
               <p>Account Information</p>
               <div className="account-info">
               
               
               <input 
               type="email" 
               required
               placeholder="Email Address"
               value={emailid}
               onChange={(e)=>setEmaiId(e.target.value)}/>
               
               <input 
               type="password" 
               required
               placeholder="Password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <p>Personal Information</p>
               <div className="personal-info">
               
               <input 
               type="text" 
               required 
               placeholder="First Name"
               value={firstName}
               onChange={(e)=>setFirstName(e.target.value)}/>
               
               <input 
               type="text"
               placeholder="Last Name"
                required 
                value={lastName}
               onChange={(e)=>setLastName(e.target.value)}/>
               
               <select
               value={gender}
               onChange={(e)=>setGender(e.target.value)}>
                <option disabled selected value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
               </select>
               <input 
               type="number" 
               placeholder="Phone Number"
               required
               value={phoneNumber}
               onChange={(e)=>setPhoneNumber(e.target.value)}/>
               <DatePicker
                     
                       selected={dateofbirth}
                       onChange={handleChange}
                       placeholderText="Date of Birth"
                       dateFormat="MMMM d, yyyy"
                       
                   />
                   <p><p>Selected Date: {formatDateDisplay(dateofbirth)}</p></p>
                
                
        
 </div>
 <p>Address</p>
 <div className="address-details">
               <input 
               type="text"
               placeholder="Street Address"
               required
               value={address}
               onChange={(e)=>setAddress(e.target.value)} />
               
               <select 
               id="country" 
               required
               value={country}
               onChange={(e)=>setCountry(e.target.value)}>
                <option disabled selected value="">Country</option>
               </select>
              
               <input 
               type="text" 
               placeholder="State"
               required
               value={state}
               
               onChange={(e)=>setState(e.target.value)}/>
               
               <input 
               type="text" 
               placeholder="City"
               required
               value={city}
               onChange={(e)=>setCity(e.target.value)}/>
               
               <input 
               type="number" 
               placeholder="Pincode"
               required
               value={pincode}
               onChange={(e)=>setPincode(e.target.value)}/>


</div>
               
              


               
               {renderInputForm()}

               <button id='register-btn'>Register</button>
               </form>
               <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            
            </div>
         </div>
     );
}
 
export default RegisterPage;