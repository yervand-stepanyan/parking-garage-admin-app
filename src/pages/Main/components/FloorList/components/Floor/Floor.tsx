import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ExpandMoreIcon,
  Typography,
} from 'src/components/shared';

import { FloorProps } from './models';
import { Toolbar } from './components';

const Floor: React.FC<FloorProps> = ({ title }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography label={title} />
      </AccordionSummary>
      <AccordionDetails>
        <Toolbar />
        <div>Spots</div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Floor;
