import { toast, ToastContent } from 'react-toastify';

export const showDefault = (message: ToastContent) => {
  toast(message, {
    position: 'top-left',
    autoClose: 10000,
    progressStyle: { display: 'none' },
    bodyStyle: {
      color: 'black',
      fontSize: '20px',
    },
  });
};
