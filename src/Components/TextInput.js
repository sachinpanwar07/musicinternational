
import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-control">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
