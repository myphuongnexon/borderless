// import './index.css';
// import { useState } from 'react';
import { Center, Grid, Text, createStyles } from '@mantine/core';
import ImageBanner from '../../components/ImageBanner';
import ArchiveCardList from '../../components/ArchiveCardList';
import { useTranslation } from 'react-i18next';

const useStyles = createStyles((theme) => ({
  h1: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 18,
  },
  quote_container: {
    marginTop: 110
  },
  bar: {
    height: 8,
    width: 30,
    backgroundColor:  'white',
  },
  container1: {
    marginTop: 100
  },
  container2: {
    marginTop: 100,
    paddingTop: 150,
    paddingBottom: 150,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[0]
  },
  container3: {
    marginTop: 100
  },
  small_logo: {
    width: '30px !important',
    filter:  theme.colorScheme === 'dark' ? 'invert(100%)' : 'none',
    marginBottom: 10
  },
  first_title: {
    fontSize: 35,
    textAlign: 'start',
    fontWeight: 'bold'
  },
  second_title: {
    fontSize: 20,
    textAlign: 'start',
    marginTop: '10px',
  },
  third_title: {
    fontSize: 20,
    textAlign: 'start',
    marginTop: '10px',
  },
  image_title: {
    marginLeft: 100
  },
  carousel_container: {
    paddingTop: 50,
    marginTop: 100,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],

  }
}));

function Archive() {
  const { classes } = useStyles();
  const {  t } = useTranslation();
  
  const title1 = (
    <Center className={classes.image_title}>
         <Grid>
           <Grid.Col span={12}> 
             <div className={classes.bar} />
             <Text className={classes.first_title} color="#fff">
             보더리스 자료
           </Text>
         </Grid.Col>
           <Grid.Col span={12}> 
             <Text className={classes.first_title} color="#fff">
             BORDERLESS ARCHIVE
           </Text>
         </Grid.Col>
         <Grid.Col span={12}> 
             <Text className={classes.second_title} color="#fff">
             Archive
             </Text>
         </Grid.Col>
         </Grid>     
     </Center>
 );

 const content1 = {
  items: [
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/10.PNG',
      title: t("content.'모든 것이 새로워' '전통예술과 게임 모두에게 윈윈'"),
      content: t('content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/9.PNG',
      title: t("content.'메이플스토리 유저라면, 최소 세 번의 소름은 보장' "),
      content: t('누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/8.PNG',
      title: t("content.한웅원 '게임은 어떤 예술과도 잘 결합되는 좋은 콘텐츠'"),
      content: t('content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/7.PNG',
      title: t("content.전래동화 속을 달리는 '카트라이더'"),
      content:t( 'content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요? 당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/6.PNG',
      title: t("content.전래동화 속을 달리는 '카트라이더'"),
      content: t('content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요? 당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/4.PNG',
      title: t("content.'메이플스토리' 속 희생 당한 몬스터를 위한 '씻김굿'"),
      content: t('content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요? 당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/3.PNG',
      title: t("content.가장 힙해진 국악"),
      content: t('content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요? 당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
    {
      link: '/',
      linkImage: 'https://borderless.or.kr/upload/2.PNG',
      title:t( "content.경계를 넘는  IP"),
      content: t('content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요? 당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
      createdDate: '2022-02-17 12:49:14'
    },
  ],
  title:t('content.간행물'),
  logoLink: 'https://borderless.or.kr/assets/images/icon/ic-point-01.png'
};

  return (
    <>
     <ImageBanner link='https://borderless.or.kr/upload/img1.png' title={title1} maxHeight={450}/>
     <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
         <ArchiveCardList {...content1} />
        </Grid.Col>
      </Grid>

      <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
         <ArchiveCardList {...content1} />
        </Grid.Col>
      </Grid>


      <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
         <ArchiveCardList {...content1} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Archive;
