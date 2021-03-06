export const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName]) {
        return <p key={i}>{formErrors[fieldName]}</p>;
      }
    })}
  </div>
);
