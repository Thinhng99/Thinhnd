import TextField, { TextFieldProps } from "@mui/material/TextField";

const MyTextField = ({ ...props }: TextFieldProps) => {
  return <TextField variant="standard" style={{ width: "100%" }} {...props} />;
};

export default MyTextField;
