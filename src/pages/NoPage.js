import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from '@mui/material/Alert';
import Container from "@mui/material/Container";

export default function NoPage() {
  return (
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
            <Alert severity='warning'>Page not found !</Alert>
        </CardContent>
      </Card>
    </Container>
  );
}

