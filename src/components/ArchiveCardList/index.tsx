import { Container, Center, Grid } from '@mantine/core';
// import { useTranslation } from 'react-i18next';
import ArchiveCard from '../ArchiveCard';
import LogoTitle from '../LogoTitle';


// const useStyles = createStyles((theme) => ({
//   small_logo2: {
//     width: '30px !important',
//     filter:  theme.colorScheme === 'dark' ? 'invert(100%)' : 'none',
//     float: 'left',
//     marginRight: 10
//   },
//   ImageCardListTitle: {
//     marginBottom: 40
//   },
//   afterLogo: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     lineHeight: 1
//   },
// }));

interface ArchiveCardListProps {
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


function ArchiveCardList({items, title, logoLink} : ArchiveCardListProps) {
  // const { classes } = useStyles();

  return (
    <Container size={1200}>
    <Center>
      <Grid>
        <LogoTitle title={title} logoLink={logoLink} />
        {items && items.map((item, index) => 
        <Grid.Col key={index} md={4} sm={6} xs={12}>
          <Center><ArchiveCard {...item} /></Center>
        </Grid.Col>)}
      </Grid>
    </Center>
  </Container>
  );
}

export default ArchiveCardList;