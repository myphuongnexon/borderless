import { Grid } from '@mantine/core';

function Cards() {
  return (
    <Grid>
      <Grid.Col md={6} lg={3}>1</Grid.Col>
      <Grid.Col md={6} lg={3}>2</Grid.Col>
      <Grid.Col md={6} lg={3}>3</Grid.Col>
      <Grid.Col md={6} lg={3}>4</Grid.Col>
    </Grid>
  );
}