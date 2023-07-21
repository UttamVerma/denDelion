import React, { useState } from 'react';
import styles from './Checkout.module.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  let navigate=useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [addressType, setAddressType] = useState('home');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create an object to represent the data to be sent to the backend
    const dataToSend = {
      firstName,
      lastName,
      email,
      address,
      addressType,
      phoneNumber,
      state,
    };

    try {
      // Send the data to the backend using the fetch API
      const response = await fetch('https://dendelion-54b09-default-rtdb.firebaseio.com/checkout.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      // Check if the request was successful
      if (response.ok) {
        swal('Your Order Has Been Placed Successfully', '', 'success');
        setTimeout(() => {
          navigate("/")
        }, 1500);

        // You can reset the form fields here if needed
        setFirstName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setAddressType('home');
        setPhoneNumber('');
        setState('');
      } else {
        // Handle the error if the request failed
        swal('Oops! Something went wrong. Please try again.', '', 'error');
      }
    } catch (error) {
      // Handle any network or other errors that occurred during the request
      swal('Oops! Something went wrong. Please try again.', '', 'error');
    }
  };

  return (
    <div className={styles.checkoutPageContainer}>
      <h1 className={styles.heading}>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.checkoutFormGroup}>
          <label htmlFor="firstName" className={styles.checkoutLabel}>
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={styles.checkoutInput}
          />
        </div>
        <div className={styles.checkoutFormGroup}>
          <label htmlFor="lastName" className={styles.checkoutLabel}>
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.checkoutInput}
          />
        </div>
        <div className={styles.checkoutFormGroup}>
          <label htmlFor="email" className={styles.checkoutLabel}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.checkoutInput}
          />
        </div>
        <div className={styles.checkoutFormGroup}>
          <label className={styles.checkoutLabel}>Address Type:</label>
          <div className={styles.checkoutRadioGroup}>
            <div>
              <label className={styles.checkoutRadioGroupLabel}>
                <input
                  type="radio"
                  name="addressType"
                  value="home"
                  checked={addressType === 'home'}
                  onChange={() => setAddressType('home')}
                />
                Home
              </label>
            </div>
            <div>
              <label className={styles.checkoutRadioGroupLabel}>
                <input
                  type="radio"
                  name="addressType"
                  value="office"
                  checked={addressType === 'office'}
                  onChange={() => setAddressType('office')}
                />
                Office
              </label>
            </div>
          </div>
        </div>
        <div className={styles.checkoutFormGroup}>
          <label htmlFor="address" className={styles.checkoutLabel}>
            Address:
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className={styles.checkoutTextarea}
          />
        </div>
        <div className={styles.checkoutFormGroup}>
          <label htmlFor="phoneNumber" className={styles.checkoutLabel}>
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className={styles.checkoutInput}
          />
        </div>
        <div className={styles.checkoutFormGroup}>
          <label htmlFor="state" className={styles.checkoutLabel}>
            State:
          </label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className={styles.checkoutInput}
          />
        </div>
        <button type="submit" className={styles.checkoutButton}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
