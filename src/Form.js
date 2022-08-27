import Button from "./Button";

const Form = ({ requestedType, setRequestedType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="btnForm">
      <Button
        buttonText="users"
        requestedType={requestedType}
        setRequestedType={setRequestedType}
      />
      <Button
        buttonText="posts"
        requestedType={requestedType}
        setRequestedType={setRequestedType}
      />
      <Button
        buttonText="comments"
        requestedType={requestedType}
        setRequestedType={setRequestedType}
      />
    </form>
  );
};

export default Form;
