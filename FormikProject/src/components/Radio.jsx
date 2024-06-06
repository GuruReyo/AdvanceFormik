import React from "react";
import TextError from './TextError';
import { Field, ErrorMessage } from "formik";

function Radio(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          const { value, ...restField } = field;
          return options.map((option) => (
            <div key={option.key} style={{ display: 'inline-block', marginRight: '10px' }}>
              <input
                type="radio"
                id={option.value}
                {...restField}
                value={option.value}
                checked={value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Radio;
