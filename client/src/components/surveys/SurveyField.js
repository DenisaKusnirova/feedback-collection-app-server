import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = () => makeStyles({});

function SurveyField({ input, label, meta, helperText, error }) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        id="standard-basic"
        label={label}
        helperText={meta.error && meta.touched && meta.error}
        error={meta.error && meta.touched}
        {...input}
      />
    </div>
  );
}

export default SurveyField;
