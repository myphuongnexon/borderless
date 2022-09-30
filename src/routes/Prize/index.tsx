// import './index.css';
// import { useState } from 'react';
import { Center, Grid, Text, createStyles  } from '@mantine/core';
import NewsCardList from '../../components/NewsCardList';
import ImageBanner from '../../components/ImageBanner';
import CarouselImageCardList from '../../components/CarouselImageCardList';
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
    fontSize: '3vh',
    textAlign: 'start',
    fontWeight: 'bold'
  },
  second_title: {
    fontSize: '2.5vh',
    textAlign: 'start',
    marginTop: '10px',
  },
  third_title: {
    fontSize: 20,
    textAlign: 'start',
    marginTop: '10px',
  },
  image_title: {
    marginLeft: 100,
    [theme.fn.smallerThan('sm')]: {
      margin: 0
    }
  },
  carousel_container: {
    paddingTop: 50,
    marginTop: 100,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],

  }
}));

function Prize() {
  const { classes } = useStyles();
  const {  t } = useTranslation();

  
  const content1 = {
    items: [
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/%ED%98%84%EB%8C%80%EC%97%B0%ED%9D%AC-%EB%A6%AC%EC%82%AC%EC%9D%B4%EC%A7%951x1_.jpg',
        title:t( 'content.넥슨재단 제1회 보더리스 공연 PLAY판 - 본공연&갈라공연 축하영상'),
        content: t("content.'넥슨재단 제1회 보더리스 공연 - PLAY판' 을 축하하기 위해 예술인들이 보내 준 축하 영상!!! 국악인 남상일국악소리가 송소희소리꾼 고영열프로듀서 한웅원국악팀 이상 전통 예술인들도 응원하는 보더리스 공연이 드디어 5월11일, 12일 양일간 세종문화회관 M씨어터에서 선보입니다!!"),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/1x1%EC%82%AC%EC%9D%B4%EC%A6%88%20%EA%B0%88%EB%9D%BC%EA%B3%B5%EC%97%B0-02.jpg',
        title: t('content.넥슨재단 제1회 보더리스 공연 PLAY판 - [필수]극락왕생 & 갈라공연'),
        content: t('content.게임과 전통예술이 만났다!쇼케이스를 통해 최종 우승을 한 현대연희PROTOTYPE21의 #메이플스토리 속 희생당한 몬스터를 위한 씻김굿이 펼쳐지는 본공연 [필수]극락왕생과#바람의나라와 마당놀이의 운명적인 만남, 전래동화 속을 가르는#카트라이더, #메이플스토리를 한꺼번에 관람할 수 있는 갈라공연 공연까지!!! 5월 11'),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/%E1%84%92%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%8A%E1%85%A5%E1%86%B7.jpg',
        title: t('content.(하이라이트) 넥슨재단 제1회 보더리스 공모전- PLAY판 - 쇼케이스'),
        content: t('content.게임과 전통예술이 만났다! #바람의나라와 마당놀이의 운명적인 만남, 전래동화 속을 가르는#카트라이더, #메이플스토리 속 희생당한 몬스터를 위한 씻김굿까지! 다채로운 음악과 춤이 어우러진 3개의 쇼케이스 공연, 하이라이트 영상으로 만나보세요.'),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/tb3-1.jpg',
        title: t('content.넥슨재단 제1회 보더리스 공모전 결선 진출작 「[필수]극락왕생」 메이킹 영상'),
        content: t("content.'메이플스토리' 에서 몬스터는 캐릭터 육성을 위해 매번 희생당하는 안타까운 존재잖아요. 그 몬스터들을 위한 굿을 만들면 어떨까? 생각했죠.'"),
        createdDate: '2022-02-17 12:49:14'
      },
    ],
    title: t('content.보더리스 포럼'),
    logoLink: 'https://borderless.or.kr/assets/images/icon/ic-point-01.png'
  };

  const content2 = {
    items: [
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/tb0-1.jpg',
        title: t('content.넥슨재단 제1회 보더리스 공모전 - PLAY판 - 쇼케이스'),
        content: t("content.넥슨재단 제1회 보더리스 공연 - PLAY판 을 축하하기 위해 예술인들이 보내 준 축하 영상!!! 국악인 남상일국악소리가 송소희소리꾼 고영열프로듀서 한웅원국악팀 이상 전통 예술인들도 응원하는 보더리스 공연이 드디어 5월11일, 12일 양일간 세종문화회관 M씨어터에서 선보입니다!!  "),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/1 전체 헤더.jpg',
        title: t('content.[제1회 보더리스 공모전] 쇼케이스 공모전 관객심사단 모집 안내'),
        content: t('content.게임과 전통예술이 만났다!쇼케이스를 통해 최종 우승을 한 현대연희PROTOTYPE21의 #메이플스토리 속 희생당한 몬스터를 위한 씻김굿이 펼쳐지는 본공연 [필수]극락왕생과#바람의나라와 마당놀이의 운명적인 만남, 전래동화 속을 가르는#카트라이더, #메이플스토리를 한꺼번에 관람할 수 있는 갈라공연 공연까지!!! 5월 11'),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/현대연희 프사.jpg',
        title: t("content.[제1회 보더리스 공모전 결선진출팀 소개] '메이플스토리' 속 희생 당한 몬스터를 위한 씻김굿 "),
        content: t('content.게임과 전통예술이 만났다! #바람의나라와 마당놀이의 운명적인 만남, 전래동화 속을 가르는#카트라이더, #메이플스토리 속 희생당한 몬스터를 위한 씻김굿까지! 다채로운 음악과 춤이 어우러진 3개의 쇼케이스 공연, 하이라이트 영상으로 만나보세요.'),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/플오 프로필.png',
        title:t( "content.[제1회 보더리스 공모전 결선진출팀 소개] '바람의 나라'와 '마당 놀이'의 운명적인 만남 "),
        content: t("content.'메이플스토리' 에서 몬스터는 캐릭터 육성을 위해 매번 희생당하는 안타까운 존재잖아요. 그 몬스터들을 위한 굿을 만들면 어떨까? 생각했죠.'"),
        createdDate: '2022-02-17 12:49:14'
      },
    ],
    title: t('content.보더리스 포럼'),
    logoLink: 'https://borderless.or.kr/assets/images/icon/ic-point-01.png'
  };

  const title1 = (
    <Center className={classes.image_title}>
         <Grid>
           <Grid.Col span={12}> 
             <div className={classes.bar} />
             <Text className={classes.first_title} color="#fff">
             보더리스 공모전
           </Text>
         </Grid.Col>
           <Grid.Col span={12}> 
             <Text className={classes.first_title} color="#fff">
             BORDERLESS PRIZE
           </Text>
         </Grid.Col>
         <Grid.Col span={12}> 
             <Text className={classes.second_title} color="#fff">
            {t( 'content.게임 콘텐츠를 활용한 예술 창작 공모전입니다. 창작자들에게 넥슨 게임 IP(지적재산권)를 작품 창작에 활용할 수 있도록 지원합니다.게임이 씨앗이 되어 다양한 곳으로 날아가 꽃을 피울 수 있기를 바랍니다.')}
             </Text>
         </Grid.Col>
         </Grid>     
     </Center>
 );


  return (
    <>
      <ImageBanner link='https://borderless.or.kr/upload/img1.png' title={title1} maxHeight={1000}/>
      <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
         <NewsCardList {...content1} />
        </Grid.Col>
      </Grid>

      <Grid className={classes.carousel_container}>
        <Grid.Col span={12}>
         <CarouselImageCardList {...content2} />
        </Grid.Col>
      </Grid>
     
    </>
  );
}

export default Prize;
