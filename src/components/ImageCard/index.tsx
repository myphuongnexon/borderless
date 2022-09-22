import { Card, createStyles, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

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
    fontSize: 25,
    fontWeight: 'bold'
  },
  h4_noBold: {
    marginTop: 5,
    fontSize: 20,
  },
  dateTime: {
    position: 'absolute',
    bottom: 0,
    fontSize: 18
  },
  link: {
    textDecoration: 'none'
  }
}));

interface ImageCardProps {
  link: string,
  linkImage: string,
  title: string,
  content: string,
  createdDate: string
}



function ImageCard({link, linkImage, title, content, createdDate} : ImageCardProps) {
  const { classes } = useStyles();

  return (
    <Link to={link} className={classes.link}> 
        <Card
        p="xl"
        className={classes.card_container}
      >
        <Card.Section>
          <Image
            src={linkImage}
            height={200}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} className={classes.h3}>
        {title}
        </Text>

        <Text mt="xs" className={classes.h4_noBold}>
          {content}
        </Text>

        <Text mt="xs" className={classes.dateTime}>
          {createdDate}
        </Text>

      </Card>
    </Link>
  );
}

export default ImageCard;