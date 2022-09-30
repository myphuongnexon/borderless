import { createStyles, Image, Text, Grid, Button } from '@mantine/core';
// import { IconGridDots } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons';
import { useTranslation } from 'react-i18next';

const useStyles = createStyles((theme) => ({
  card_container: {
    borderRadius: 0,
    padding: '0 !important',
    backgroundColor: 'transparent',
    height: 400,
    margin: 8
  },
  h3: {
    marginTop: 5,
    fontSize: '2vh',
    fontWeight: 'bold',
    color: theme?.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[8],
    overflow: 'hidden',
    height: '6.5vh',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    boxOrient: 'vertical',
    lineClamp:2,
    marginBottom: 20,
    
    [theme.fn.smallerThan('sm')]: {
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      boxOrient: 'vertical',
      lineClamp:2,
      marginBottom: 2,
      fontSize: '2.2vh',
    }
  },
  h4_noBold: {
    marginTop: 5,
    fontSize: '1.5vh',
    color: theme?.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[8],
    overflow: 'hidden',
    height: '9vh',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    boxOrient: 'vertical',
    lineClamp:4,

    [theme.fn.smallerThan('sm')]: {
      WebkitLineClamp: 4,
      lineClamp: 4,
      height: '12vh',
      fontSize: '2vh',
    }
  },
  dateTime: {
    position: 'absolute',
    bottom: 0,
    fontSize: 18
  },
  link: {
    textDecoration: 'none'
  },
  link_button: {
    width: 150,
    height: 45,
    // position: 'absolute',
    bottom: 20,
    borderRadius: 0,
    borderColor: theme?.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[6],
    color: theme?.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[6],
    fontSize: '1vh',
    marginTop: '5vh',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '2vh',
    }
  },
  text_col: {
    position: 'relative'
  },
  img: {
    width: '40vh'
  }
}));

interface NewsCardProps {
  link: string,
  linkImage: string,
  title: string,
  content: string,
  createdDate: string
}



function NewsCard({link, linkImage, title, content, createdDate} : NewsCardProps) {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Link to={link} className={classes.link}> 
      <Grid>
        <Grid.Col md={6} sm={12}>
          <Image
              src={linkImage}
              className={classes.img}
              alt="No way!"
            />
        </Grid.Col>
        <Grid.Col md={6} sm={12} className={classes.text_col}>
          <Text weight={500} className={classes.h3}>
          {title}
          </Text>

          <Text mt="xs" className={classes.h4_noBold}>
            {content}
          </Text>

          <Button variant="outline" className={classes.link_button} rightIcon={<IconChevronRight />}>
          {t('content.자세히보기')}
          </Button>
        </Grid.Col>
      </Grid>
    </Link>
  );
}

export default NewsCard;