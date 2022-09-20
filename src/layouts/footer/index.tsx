import { createStyles, Text, Container, Select, Grid } from '@mantine/core';
import { IconChevronDown  } from '@tabler/icons';
import logo1 from '../../assets/images/borderless_logo.png';
import logo2 from '../../assets/images/nexon_foundation.png';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  full: {
    width: '100%'
  },

  logo_container: {
    maxWidth: 500,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  logo1: {
    maxWidth: 150,
  },
  logo2: {
    maxWidth: 180,
    marginTop: '10%'
  },
  select: {
    width: 250,
    marginTop: 15
  },
  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1200,
    width: '100%',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

// interface FooterProps {
//   data: {
//     title: string;
//     links: { label: string; link: string }[];
//   }[];
// }

export function Footer() {
  const { classes } = useStyles();

  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<'a'>
  //       key={index}
  //       className={classes.link}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <div className={classes.wrapper} key={group.title}>
  //       <Text className={classes.title}>{group.title}</Text>
  //       {links}
  //     </div>
  //   );
  // });

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid className={classes.inner}>
            <Grid.Col span={6}>
              <div className={classes.logo_container}>
                <Grid>
                  <Grid.Col span={6}><img src={logo1} className={classes.logo1}  alt="logo"/></Grid.Col>
                  <Grid.Col span={6}><img src={logo2} className={classes.logo2}  alt="logo"/></Grid.Col>
                </Grid>
              </div>
            </Grid.Col>
            <Grid.Col span={4} offset={2}>
            <div className={classes.select}>
              <Select
                // label="Your favorite framework/library"
                placeholder="Family Site"
                rightSection={<IconChevronDown size={14} />}
                rightSectionWidth={30}
                styles={{ rightSection: { pointerEvents: 'none'} }}
                data={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
              />
            </div>
            </Grid.Col>
          </Grid>
        {/* <div className={classes.groups}>{groups}</div> */}
      </Container>
      <Container className={classes.afterFooter}>
      <Grid className={classes.full}>
            <Grid.Col span={6}>
            <Text color="dimmed" size="sm">
              경기도 성남시 분당구 판교로256번길 25, B동 5층
            </Text>
            <Text color="dimmed" size="sm">
              nexon@nexonfoundation.org | 031-704-1994
            </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              © 2019 NEXON CORPORATION ALL RIGHTS RESERVED.
            </Grid.Col>
      </Grid>

        {/* <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  );
}