import { AspectRatio, createStyles, Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  video_box: {
    opacity: 0.9,
  },
  video_background: {
    backgroundColor: 'black',
    opacity: 0.3
  },
  container: {
    height: '60vh',
    [theme.fn.smallerThan('sm')]: {
      height: '90vh',
    },
  },
  title: {
    [theme.fn.smallerThan('sm')]: {
      marginLeft: 20
    },
  }
}));

interface ImageBannerProps {
  // links: { link: string; label: string }[];
  title: JSX.Element | string,
  link: string,
  maxHeight: number
}


function ImageBanner({link, title, maxHeight} : ImageBannerProps) {
  const { classes } = useStyles();

  return (
    <>
       <AspectRatio ratio={2560 / 1100} sx={{ maxHeight, maxWidth: '100%' }} mx="auto" className={classes.container}>
          <img className={classes.video_box} src={link} alt="" />
          <div className={classes.video_background}></div>
          <Grid>
            <Grid.Col className={classes.title} md={6}>{title}</Grid.Col>
          </Grid>
        </AspectRatio>
    </>
  );
}

export default ImageBanner;