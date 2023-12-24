import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, Container } from '@mui/material';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <h1>Alien Selection - Omnitrix</h1>
      <Typography variant="h6" style={{ marginTop: 20 }}> Select an Alien to transform into : </Typography>
      <FormControl variant="filled" style={{ minWidth: 200, marginTop: 20 }}>
        <InputLabel id="select-label">Aliens</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <MenuItem value="Heat Blast">Heat Blast</MenuItem>
          <MenuItem value="Diamond Head">Diamond Head</MenuItem>
          <MenuItem value="Four Arms">Four Arms</MenuItem>
          <MenuItem value="XLR8">XLR8</MenuItem>
          <MenuItem value="CannonBall">CannonBall</MenuItem>
          <MenuItem value="Grey Matter">Grey Matter</MenuItem>
          <MenuItem value="Sting Fly">Sting Fly</MenuItem>
          <MenuItem value="Ghost Freak">Ghost Freak</MenuItem>
          <MenuItem value="CannonBall">CannonBall</MenuItem>
          <MenuItem value="Wild Mutt">Wild Mutt</MenuItem>
          <MenuItem value="Way Big">Way Big</MenuItem>
        </Select>
      </FormControl>

      {selectedOption && (
        <Typography variant="h6" style={{ marginTop: 20 }}>
          Transforming into {selectedOption}. It's Hero Time!
        </Typography>
      )}
    </Container>
  );
};

export default MyForm;
