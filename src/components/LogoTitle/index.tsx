// import { useRef } from 'react';
import {  createStyles, Grid, Image, Text} from '@mantine/core';
// import Autoplay from 'embla-carousel-autoplay';


const useStyles = createStyles((theme, params, getRef) => ({
  small_logo2: {
    width: '30px !important',
    filter:  theme.colorScheme === 'dark' ? 'invert(100%)' : 'none',
    float: 'left',
    marginRight: 10
  },
  ImageCardListTitle: {
    marginBottom: 40
  },
  afterLogo: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 1
  },
}));

interface LogoTitleProps {
  title: string,
  logoLink: string
}


function LogoTitle({ title, logoLink} : LogoTitleProps) {
  const { classes } = useStyles();

  return (
    <Grid.Col span={12} className={classes.ImageCardListTitle}>
    <Image
      className={classes.small_logo2}
      src={logoLink}
      alt="Panda"
    />
    <Text className={classes.afterLogo}>
      {title}
    </Text>
    </Grid.Col>
  );
}

export default LogoTitle;