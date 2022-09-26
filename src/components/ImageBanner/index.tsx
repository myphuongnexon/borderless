import { AspectRatio, createStyles, Center, Text, Grid, Image, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  video_box: {
    opacity: 0.9,
  },
  video_background: {
    backgroundColor: 'black',
    opacity: 0.3
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
       <AspectRatio ratio={2560 / 1100} sx={{ maxWidth: '100%', maxHeight }} mx="auto">
      <img className={classes.video_box} src={link} />
      <div className={classes.video_background}></div>
      <Grid>
        <Grid.Col span={6}>{title}</Grid.Col>
      </Grid>
    </AspectRatio>
    </>
  );
}

export default ImageBanner;