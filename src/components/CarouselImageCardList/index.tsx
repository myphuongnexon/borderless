import { createStyles, Image, Text, Container, Center, Grid } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
// import { useTranslation } from 'react-i18next';
import ImageCard from '../ImageCard';


const useStyles = createStyles((theme) => ({
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

  return (
    <Container size={1200}>
    <Center>
      {/* <Grid>
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
        {items && items.map(i => 
        <Grid.Col span={4}>
          <Center><ImageCard {...i} /></Center>
        </Grid.Col>)}
        
      </Grid> */}
      <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      loop
      align="start"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
    </Center>
  </Container>
  );
}

export default CarouselImageCardList;