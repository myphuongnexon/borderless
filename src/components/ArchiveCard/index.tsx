import { Card, createStyles, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card_container: {
    borderRadius: 0,
    padding: '0 !important',
    backgroundColor: 'transparent',
    height: 320,
    margin: 8,
    width: 350,
  },
  h3: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold', 
    overflow: 'hidden',
    height: 40,
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    boxOrient: 'vertical',
    lineClamp: 1,
  },
  h4_noBold: {
    marginTop: 5,
    fontSize: 20,
    overflow: 'hidden',
    height: 90,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    boxOrient: 'vertical',
    lineClamp: 3,
    
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

interface ArchiveCardProps {
  link: string,
  linkImage: string,
  title: string,
  content: string,
  createdDate: string
}



function ArchiveCard({link, linkImage, title, content, createdDate} : ArchiveCardProps) {
  const { classes } = useStyles();

  return (
    <Link to={link} className={classes.link}> 
        <Card
        // p="xl"
        shadow="xl" p="lg" radius="md" 
        className={classes.card_container}
      >
        <Card.Section>
          <Image
            src={linkImage}
            height={250}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} className={classes.h3}>
        {title}
        </Text>


      </Card>
    </Link>
  );
}

export default ArchiveCard;