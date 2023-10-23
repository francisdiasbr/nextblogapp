import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {CardProps} from './types'

const CardComponent = ({content, subtitle, subtitle2, title}: CardProps) => {
  return (
    <Box sx={{ width: 300}}>
      <Card variant='outlined'>
        <CardContent sx={{height: 200}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {subtitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {subtitle2}
          </Typography>
          <Typography variant="body2">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">VER MAIS</Button>
        </CardActions>
      </Card>
    </Box>
  )
};

export default CardComponent