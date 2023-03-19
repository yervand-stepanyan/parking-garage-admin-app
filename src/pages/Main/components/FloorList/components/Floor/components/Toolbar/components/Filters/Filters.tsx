import React from 'react';

import { Checkbox, FormControlLabel, FormGroup } from 'src/components/shared';

import { FiltersProps } from './models';
import { useStyles } from './Filters.style';

const Filters: React.FC<FiltersProps> = ({ filters }) => {
  const classes = useStyles();

  const handleChange = (): void => {
    console.log('change');
  };

  return (
    <div className={classes.filtersContainer}>
      <FormGroup row>
        {filters.map(filter => (
          <FormControlLabel
            control={
              <Checkbox checked={filter.checked} onChange={handleChange} />
            }
            key={filter.id}
            label={filter.title}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Filters;
