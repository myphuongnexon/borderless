// import './index.css';
// import { useState } from 'react';
import { Center, Grid, Text, createStyles  } from '@mantine/core';
import CarouselImageCardList from '../../components/CarouselImageCardList';
import ImageBanner from '../../components/ImageBanner';
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
  }
}));

function Forum() {
  const { classes } = useStyles();
  const {  t } = useTranslation();

  const content1 = {
    items: [
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/001.jpg',
        title: t('content.게임을 하는 일곱가지 이유'),
        content: t('content.누구나 추억의 게임 하나쯤은 있다!  당신의 곁을 지켜온 게임은 무엇인가요?  우리는 무슨 이유에서 게임을 하는 걸까요?'),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/002.jpg',
        title: t('content.픽셀로 설계한 일상'),
        content: t("content.자녀와 함께 마인크래프트 게임을 즐기는 아빠이자, 일상 속 공간을 설계하는 건축가 서재원.  그는 게임 속에서 어떠한 가능성을 발견하였을까요?"),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/003.jpg',
        title:t( 'content.게임은 예술일까?'),
        content: t("content.2006년 프랑스 정부가 게임을 예술 장르로 인정한 이후 일부 국가들이 뒤를 따르고 있지만, 여전히 ‘게임은 예술이다'라는 주장에는 의문과 반론이 지배적입니다.  당신의 생각은?"),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/004.jpg',
        title: t('content.버려진 게임 속에 남아있는 사람들'),
        content: t("content.수년간 방치된 채 운영되고 있는 게임 의 ‘고인물' 유저 박윤진.  그녀가 게임 속에서 동거동락해온 멤버들을 찾아 나섭니다.  이들이 게임 밖으로 나오면 어떤 일이 벌어질까요?"),
        createdDate: '2022-02-17 12:49:14'
      },
    ],
    title: t('content.[2020] 보더리스: 티키타카 게임 뒷담화'),
    logoLink: 'https://borderless.or.kr/assets/images/icon/ic-point-01.png'
  };

  const content2 = {
    items: [
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/000.jpg',
        title: t('content.Borderless Elements : 0/1'),
        content: t("content.컴퓨터 용어로 인풋(input)은 입력하다, 아웃풋(output)은 출력해내다라는 의미를 가지고 있다. 영상속에서 김설진은 이 두 단어를 가지고 논다. 키보드와 마우스 등 입력 장치와 함께 김설진이 움직이면, 디스플레이, 프린터, 스피커 등 출력 장치가 쫓아간다. 김설진은 플레이어가 되고, 게임 속 캐릭터가 되고, 인풋과 아웃풋 사이를 흐르는 정보 자체가 되기도 한다. 경계가 없어진 가상공간으로 흘러가는 김설진의 모습에 집중해보자. 마비노기 OST 중 ‘어릴 적 할머니가 들려주신 옛 전설’을 변주한 음악에 따라 김설진이 손가락 하나하나, 발 동작, 눈동자의 움직임, 미세한 고갯짓으로 안내하는 곳으로 함께 흘러가다 보면 자연스럽게 그다음의 모습이 궁금해진다."),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/007.jpg',
        title: t('content.Borderless Game : Connect & Play'),
        content: t("content.월적인 공간인 가상 세계로 들어온 플레이어의 움직임을 따라가 본다. 그 과정은 마치 나만 볼 수 있는, 게임하는 나의 내면 같기도 하고, 멀리서 누군가 게임하는 나를 지켜본 모습 같기도 하다. 김설진과 이선태의 환상적인 즉흥 춤은 플레이어와 캐릭터의 만남을 표현한다. 둘 사이에 존재하는 인터페이스(interface) 때문에 처음엔 불협화음을 내고 오작동 하기도 하지만, 반복적으로 시도하는 상호작용(interaction)을 통해 둘은 끝내 합일에 이르게 된다. 플레이어는 캐릭터와의 경계가 완전히 없어진 공간에 도달하고 무엇이든 될 수 있는 자유를 느낀다."),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/008.jpg',
        title: t('content.Borderless Commentary'),
        content: t("content.넥슨은 예술가들을 게임으로 초대했다. 김설진 안무가이자 무용가, 이선태 무용가, 원일 음악감독, 민준호 연출가, 몽규 프로덕션 박성호 감독 등 각자의 분야에서 예술의 경지에 오른 전문가들과 함께, 게임이라는 소재로 뮤직비디오를 만들어보기로 한 것. 그들은 넥슨의 초대에 흔쾌히 응하고, 각자 자신들의 무기를 들고 모였다."),
        createdDate: '2022-02-17 12:49:14'
      },
      {
        link: '/',
        linkImage: 'https://borderless.or.kr/upload/008.jpg',
        title: t('content.Borderless Commentary'),
        content: t("content.2006년 프랑스 정부가 게임을 예술 장르로 인정한 이후 일부 국가들이 뒤를 따르고 있지만, 여전히 ‘게임은 예술이다'라는 주장에는 의문과 반론이 지배적입니다.  당신의 생각은?"),
        createdDate: '2022-02-17 12:49:14'
      },
    ],
    title: t('content.[2020] 보더리스 시범 프로젝트'),
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
              {t('content.게임, 영화, 미술, 건축, 미디어 등 다양한 분야를 대표하는 전문가들, 그리고 그 경계에서 다양한 실험을 하고 있는 파이오니어를 초청하여 게임을 화두로 대화를 나눕니다.경계를 넘나드는 다양한 이야기를 통해 게임의 새로운 가치를 발견하고, 사회적 인식을 전환하는 장이 될 것입니다.')}          </Text>
          </Grid.Col>
          </Grid>     
      </Center>
  );

  return (
    <>
      <ImageBanner link='https://borderless.or.kr/upload/Untitled-3.jpg' title={title1} maxHeight={450}/>
      <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
          <CarouselImageCardList {...content1} />
        </Grid.Col>
        <Grid.Col span={12}>
          <CarouselImageCardList {...content2} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Forum;
