import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ExpandMoreIcon,
  Typography,
} from 'src/components/shared';
import { TYPOGRAPHY } from 'src/globals/constants';

import { FloorProps } from './models';
import { SpotList, Toolbar } from './components';

const Floor: React.FC<FloorProps> = ({ title, spotList }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography label={title} variant={TYPOGRAPHY.variant.h6} />
      </AccordionSummary>
      <AccordionDetails>
        <Toolbar />
        <SpotList items={spotList} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Floor;
