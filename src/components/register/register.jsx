import { useState } from "react";
import styled, { css } from "styled-components";

const defaultFormFields = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fname, lname, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <RegisterContainer>
      <RegisterText>
        <RegisterTitle>Signup</RegisterTitle>
        <RegisterDescription>
          We dont share your personal details with anyone.
        </RegisterDescription>
      </RegisterText>
      <RegisterForm>
        <FormInput
          label="First Name"
          type="text"
          onChange={handleChange}
          name="fname"
          value={fname}
        />
        <FormInput
          label="Last Name"
          type="text"
          onChange={handleChange}
          name="lname"
          value={lname}
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />{" "}
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button>SIGNUP</button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  margin: 0 60px;
  display: flex;
  justify-content: space-evenly;
`;
const RegisterText = styled.div`
  width: 40%;
`;
const RegisterTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
`;
const RegisterDescription = styled.p`
  font-size: 18px;
`;
const RegisterForm = styled.form`
  width: 30%;

  button {
    background-color: #fe530a;
    padding: 12px 32px;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

const subColor = "grey";
const mainColor = "#fe530a";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  &:focus {
    outline: none;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

const Group = styled.div`
  position: relative;
  margin: 20px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
