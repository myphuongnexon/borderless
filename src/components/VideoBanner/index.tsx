import { AspectRatio, createStyles, Center, Text, Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  video_box: {
    opacity: 0.9
  },
  video_background: {
    backgroundColor: 'black',
    opacity: 0.3
  },
  first_title: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  second_title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '-25px',
    fontWeight: 'bold'
  }
}));

interface VideoBannerProps {
  // links: { link: string; label: string }[];
  title: {
    bigTitle: string,
    smallTitle: string    
  },
  link: string
}


function VideoBanner({title, link} : VideoBannerProps) {
  const { classes } = useStyles();

  return (
    <AspectRatio ratio={2560 / 1100} sx={{ maxWidth: '100%' }} mx="auto">
     <video className={classes.video_box} src={link} autoPlay loop muted></video>
     <div className={classes.video_background}></div>
        <Center>
          <Grid>
            <Grid.Col span={12}> 
              <Text className={classes.first_title} color="#fff">
              {title?.bigTitle}
            </Text>
          </Grid.Col>
            <Grid.Col span={12}> 
              <Text className={classes.second_title} color="#fff">
              {title?.smallTitle}
            </Text>
          </Grid.Col>
          </Grid>     
        </Center>
  </AspectRatio>
  );
}

export default VideoBanner;