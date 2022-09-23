import { AspectRatio, createStyles, Center, Text, Grid, Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  video_box: {
    opacity: 0.9,
  },
  video_background: {
    backgroundColor: 'black',
    opacity: 0.3
  },
}));

interface ImageBannerProps {
  // links: { link: string; label: string }[];
  title: JSX.Element | string,
  link: string
}


function ImageBanner({link, title} : ImageBannerProps) {
  const { classes } = useStyles();

  return (
    <AspectRatio ratio={2560 / 1100} sx={{ maxWidth: '100%' }} mx="auto">
      <img className={classes.video_box} src={link} />
      <div className={classes.video_background}></div>
      {title}
    </AspectRatio>
  );
}

export default ImageBanner;