// Destructuring FormInput and using this for sign-up-form-component.
// Using spread syntax for otherProps

import './form-input-styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <label
        className={`${
          otherProps.value.length > 0 ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
      <input className='form-input' {...otherProps} />
    </div>
  );
};

export default FormInput;
