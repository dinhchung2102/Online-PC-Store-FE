import { Box, Checkbox, Divider, FormControlLabel, Typography } from "@mui/material";
import PropTypes from 'prop-types';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function ItemFilter({ title, listFilter }) {
  return (
    <Box>
      <Divider />
      <Accordion sx={{ boxShadow: "none", }}>
        <AccordionSummary
          sx={{
            margin: 0, padding: 0, height: "40px",
            '& .MuiAccordionSummary-content.Mui-expanded': {
              margin: '0px', // Override the default 20px 0 margin
            },
            '&.Mui-expanded': {
              minHeight: 'unset', // or any specific value you prefer
            },
          }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="subtitle2">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0.5, display: "flex", flexDirection: "column" }}>
          {listFilter?.map((item, index) => (
            <FormControlLabel
              key={index}
              sx={{ '& span': { fontSize: "0.875rem", p: 0.5 }, mr: 0 }}
              control={<Checkbox size="small" checked={item.checked} />}
              label={item.name}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
ItemFilter.propTypes = {
  title: PropTypes.string.isRequired,
  listFilter: PropTypes.array,
};

export default ItemFilter;