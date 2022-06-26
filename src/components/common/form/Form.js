import React, { useEffect, useRef, useState } from "react";
import './Form.css'

const Form = ({ handleUserInfoSubmission }) => {

    // useState for gender because it has 3 different options, and would need 3 refs and more logic
    const [choosenGender, setChoosenGender] = useState('');
    const [maxDate, setMaxDate] = useState(null);

    // calculate every time it reloads the max date for birthday
    useEffect(() => {
        getMaxDate();
    }, [])

    // Refs for the form inputs
    const nameRef = useRef();
    const birthdayRef = useRef();
    const salaryRef = useRef();
    const currencyRef = useRef();

    // Submission of the form, which will send the values to the PageAssigment.js so it can handle the values for the table
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const helperArray = {
            firstName: nameRef.current.value,
            birthday: birthdayRef.current.value,
            gender: choosenGender ? choosenGender : ' - ',
            salary: Number(salaryRef.current.value),
            currency: currencyRef.current.value,
        }
        handleUserInfoSubmission(helperArray);
        cleanFieldsAfterSubmission();
    }

    // Function that set the maxDate for Birthday
    const getMaxDate = () => {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth();
        if (currentMonth < 10) {
            currentMonth = '0' + currentMonth
        }
        const newYear = currentDate.getFullYear() - 18;
        const maxDate = newYear + '-' + currentMonth + '-' + currentDay
        setMaxDate(maxDate);
    }

    // Cleanup values from form after successful submission
    const cleanFieldsAfterSubmission = () => {
        nameRef.current.value = null;
        birthdayRef.current.value = null;
        salaryRef.current.value = null;
        currencyRef.current.value = null;
        setChoosenGender('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='control-group'>
                <label className="form-control">
                    Name:
                    <input
                        required
                        type="text"
                        ref={nameRef}
                        pattern="[a-zA-Z\s]*$" title="Invalid name, please use only letters!"
                    />
                </label>
                <label className="form-control">
                    Birthday:
                    <input
                        required
                        type="date"
                        ref={birthdayRef}
                        max={maxDate}
                    />
                </label>
                <label className="form-control">
                    Gender:
                    <input
                        type="radio"
                        id="genderChoice1"
                        name="gender"
                        value="male"
                        onChange={() => setChoosenGender('Male')}
                        checked={choosenGender === 'Male'}
                    />
                    <label htmlFor="genderChoice1" className="radio-button-label">Male</label>
                    <input
                        type="radio"
                        id="genderChoice2"
                        name="gender"
                        value="female"
                        onChange={() => setChoosenGender('Female')}
                        checked={choosenGender === 'Female'}
                    />
                    <label htmlFor="genderChoice2" className="radio-button-label">Female</label>
                    <input
                        type="radio"
                        id="genderChoice3"
                        name="gender"
                        value="unisex"
                        onChange={() => setChoosenGender('Unisex')}
                        checked={choosenGender === 'Unisex'}
                    />
                    <label htmlFor="genderChoice1" className="radio-button-label">Unisex</label>
                </label>
                <div className="salary">
                    <label className="form-control">
                        Expected Salary:
                        <input
                            required
                            type='number'
                            step=".01"
                            ref={salaryRef}
                            min="0" />
                    </label>
                    <select
                        required
                        list="currency-list"
                        id="currency"
                        name="currency"
                        placeholder="Please choose a currency"
                        ref={currencyRef}
                        className='currency'
                    >
                        <option value='€'>Euro</option>
                        <option value='$'>Dollar</option>
                        <option value='CHF'>Swiss Franc</option>
                    </select>
                </div>
                <div className='form-actions'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form