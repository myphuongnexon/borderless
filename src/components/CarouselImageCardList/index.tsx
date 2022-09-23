import { useRef } from 'react';
import {  Container, Center, createStyles, Grid, Image, Text} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
// import { useTranslation } from 'react-i18next';
import ImageCard from '../ImageCard';
import LogoTitle from '../LogoTitle'; 


const useStyles = createStyles((theme, params, getRef) => ({
  container: {
  },
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
    controls: {
      ref: getRef('controls'),
      transition: 'opacity 150ms ease',
      opacity: 0,
    },  
    root: {
      width: '100%',
      height: '100%',
      '&:hover': {
        [`& .${getRef('controls')}`]: {
          opacity: 1,
        },
      },
    },
    indicator: {
      width: 12,
      height: 4,
      transition: 'width 250ms ease',
      backgroundColor: 'black',
      '&[data-active]': {
        width: 40,
      },
    },
    viewport: {
      width: '90%',
      overflow: 'hidden',
      marginLeft: '5%',
      marginBottom: 50
    }
}));

interface ImageCardListProps {
  items: { 
    link: string,
    linkImage: string,
    title: string,
    content: string,
    createdDate: string
  }[];
  title: string,
  logoLink: string
}


function CarouselImageCardList({items, title, logoLink} : ImageCardListProps) {
  const { classes } = useStyles();
  // const { t } = useTranslation();
  const autoplay = useRef(Autoplay({ delay: 2000 }));


  return (
    <Container size={1200} className={classes.container}>
       <Grid>
        <LogoTitle title={title} logoLink={logoLink} />
        <Grid.Col span={12} className={classes.ImageCardListTitle}>
        <Carousel
          withIndicators
          slideSize="33.333%"
          slideGap="xl"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
          ]}
          loop
          align="start"
          classNames={classes}
          slidesToScroll={1}

        >
          {items && items.map(i => 
          <Carousel.Slide>
            <Center><ImageCard {...i} /></Center>
            </Carousel.Slide>)}
      </Carousel>
      </Grid.Col>
      </Grid>
  </Container>
  );
}

export default CarouselImageCardList;