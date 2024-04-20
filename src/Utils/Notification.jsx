import React from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  // Function to display success notification
  const notifySuccess = (data) => {
    toast.success('Operation successful!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Function to display error notification
  const notifyError = (data) => {
    toast.error('Operation failed!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };



export {notifySuccess,notifyError}
