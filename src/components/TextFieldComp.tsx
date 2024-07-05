import TextField, { TextFieldProps } from "@mui/material/TextField";

import React from "react";

interface MyTextFieldProps
  extends Omit<TextFieldProps<"outlined" | "standard" | "filled">, "variant"> {}
const TextFieldComp: React.FC<MyTextFieldProps> = ({
  ...props
}: MyTextFieldProps) => {
  return <TextField {...props} variant="standard" style={{ width: "100%" }} />;
};

export default TextFieldComp;
