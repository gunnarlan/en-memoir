import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">How much?</FormLabel>
      <RadioGroup aria-label="$5.00" name="$5.00" value={value} onChange={handleChange}>
        <FormControlLabel value="$5.00" control={<Radio />} label="$5.00" />
        <FormControlLabel value="$10.00" control={<Radio />} label="$10.00" />
        <FormControlLabel value="$25.00" control={<Radio />} label="$25.00" />
        <FormControlLabel value="$50.00" control={<Radio />} label="$50.00" />
        <FormControlLabel value="$100.00" control={<Radio />} label="$100.00" />
      </RadioGroup>
    </FormControl>
  );
}