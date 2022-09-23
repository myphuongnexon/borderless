// import './index.css';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Center, Grid, Text, createStyles, Container  } from '@mantine/core';
import CarouselImageCardList from '../../components/CarouselImageCardList';
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
    width: 40,
    backgroundColor:  theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
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

function Forum() {
  const { classes } = useStyles();

  const title = {
    bigTitle: '보더리스',
    smallTitle: 'Borderless'
  };

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
        content: '누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?',
        createdDate: '2022-02-17 12:49:14'
      },
    ],
    title: '보더리스 포럼',
    logoLink: 'https://borderless.or.kr/assets/images/icon/ic-point-01.png'
  };

  const title1 = (
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
  );

  return (
    <>
      <ImageBanner link='https://borderless.or.kr/upload/Untitled-3.jpg' title={title1}/>
      <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
          <CarouselImageCardList {...content1} />
        </Grid.Col>
        <Grid.Col span={12}>
          <CarouselImageCardList {...content1} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Forum;
