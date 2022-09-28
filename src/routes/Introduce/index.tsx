import { createStyles, Container, Grid, Text, Center, AspectRatio, Image } from '@mantine/core';
import VideoBanner from '../../components/VideoBanner';
import { useTranslation } from 'react-i18next';
import ImageCardList from '../../components/ImageCardList';

const useStyles = createStyles((theme) => ({
  h1: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  h1_en: {
    fontSize: 3,
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

function Introduce() {
  const { classes } = useStyles();
  const { i18n, t } = useTranslation();

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
      }
    ],
    title: '보더리스 포럼',
    logoLink: 'https://borderless.or.kr/assets/images/icon/ic-point-01.png'
  };

  return (
    <>
      <VideoBanner link="https://nexon-borderless.s3.ap-northeast-2.amazonaws.com/contents/Borderless+Elements++0_1_1.mp4" title={title} />
      <Grid className={classes.quote_container}>
        <Grid.Col span={12}>
          <Container>
            <Center>
              <Grid>
                <Grid.Col span={12}>
                  <Center><div className={classes.bar} /></Center>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text className={i18n.language === 'kr' ? classes.h1 : classes.h1_en}>
                    "{t('routes.introduce.Breaking the boundaries between games and art')}"
                  </Text>
                </Grid.Col>
              </Grid>
            </Center>
          </Container>
        </Grid.Col>

        <Grid.Col span={12}>
            <Container  size={1200}>
              <Grid className={classes.container1}>
                <Grid.Col span={6}>
                    <AspectRatio ratio={1080 / 800} sx={{ maxWidth: 600 }} mx="auto">
                      <Image
                        src="https://borderless.or.kr/upload/001.jpg"
                        alt="Panda"
                      />
                    </AspectRatio>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Grid>
                      <Grid.Col span={12}>
                          <Image
                            className={classes.small_logo}
                            src="https://borderless.or.kr/assets/images/icon/ic-point-02.png"
                            alt="Panda"
                        />
                      </Grid.Col>
                      <Grid.Col span={12}>
                          <Text className={classes.h2}>
                            {t('routes.introduce.Breaking the boundaries between games and art')}
                          </Text>
                      </Grid.Col>
                      <Grid.Col span={12}> 
                          <Text className={classes.h3}>
                            {t('routes.introduce.Breaking the boundaries between games and art')}
                          </Text></Grid.Col>
                    </Grid>
                </Grid.Col>
              </Grid>
            </Container>
        </Grid.Col>

        <Grid.Col span={12} className={classes.container2}>
          <Container size={1200}>
            <Center>
              <Grid>
                <Grid.Col span={12}>
                  <Center><div className={classes.bar} /></Center>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text className={classes.h1}>
                    "{t('routes.introduce.What would it look like if the boundary between games and art disappeared?')}"
                  </Text>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text className={classes.h3}>
                  2012년 넥슨의 게임 아티스트 6인은 '마비노기'를 모티브로 페인팅, 조각, 픽셀 아트 등 순수 예술 작품을 창작, 전시했습니다. 처음 '보더리스'라는 이름을 붙이고 진행된 이 전시는, 게임과 순수 예술 사이 높고 단단한 벽을 허무는 넥슨의 첫 시도였습니다.
                  <br />
                  누구나 게임으로부터 영감을 받고, 자신을 표현하며, 세상을 변화시키는 예술가가 될 수 있다고 믿는 넥슨재단은 이제 두번째, 세번째... 시도를 해보려고 합니다.
                  </Text>
                </Grid.Col>
              </Grid>
            </Center>
          </Container>
        </Grid.Col>


        <Grid.Col span={12} className={classes.container3}>
          <ImageCardList {...content1} />
        </Grid.Col>

        <Grid.Col span={12} className={classes.container3}>
          <ImageCardList {...content1} />
        </Grid.Col>
    </Grid>
    </>
  );
}

export default Introduce;
