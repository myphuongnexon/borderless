// import './index.css';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Center, Grid, Text, createStyles  } from '@mantine/core';
import NewsCardList from '../../components/NewsCardList';
import ImageBanner from '../../components/ImageBanner';

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
  }
}));

function Prize() {
  const { classes } = useStyles();
  
  const content1 = {
    items: [
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/001.jpg',
        title: '게임을 하는 일곱가지 이유',
        content: '누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?',
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/001.jpg',
        title: '게임을 하는 일곱가지 이유',
        content: '누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?',
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/001.jpg',
        title: '게임을 하는 일곱가지 이유',
        content: '누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?',
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/001.jpg',
        title: '게임을 하는 일곱가지 이유',
        content: '누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요? 당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?',
        createdDate: '2022-02-17 12:49:14'
      },
    ],
    title: '보더리스 포럼',
    logoLink: 'https://borderless.or.kr/assets/images/icon/ic-point-01.png'
  };

  const title1 = (
    <Center className={classes.image_title}>
         <Grid>
           <Grid.Col span={12}> 
             <div className={classes.bar} />
             <Text className={classes.first_title} color="#fff">
             보더리스 포럼
           </Text>
         </Grid.Col>
           <Grid.Col span={12}> 
             <Text className={classes.first_title} color="#fff">
             BORDERLESS FORUM
           </Text>
         </Grid.Col>
         <Grid.Col span={12}> 
             <Text className={classes.second_title} color="#fff">
             게임, 영화, 미술, 건축, 미디어 등 다양한 분야를 대표하는 전문가들, 그리고 그 경계에서 다양한 실험을 하고 있는 파이오니어를 초청하여 게임을 화두로 대화를 나눕니다. 경계를 넘나드는 다양한 이야기를 통해 게임의 새로운 가치를 발견하고, 사회적 인식을 전환하는 장이 될 것입니다.            </Text>
         </Grid.Col>
         </Grid>     
     </Center>
 );


  return (
    <>
      <ImageBanner link='https://borderless.or.kr/upload/Untitled-3.jpg' title={title1} maxHeight={450}/>
      <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
         <NewsCardList {...content1} />
        </Grid.Col>
      </Grid>
     
    </>
  );
}

export default Prize;
