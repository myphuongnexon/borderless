import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SwitchModeButton from '../SwitchModeButton';
import borderlessLogo from '../../assets/images/borderless_logo.png';
import { Link } from "react-router-dom"
import { HEADER_HEIGHT } from '../../utils/variable';


const useStyles = createStyles((theme) => ({
    root: {
    position: 'fixed',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  
  logo1: {
    maxWidth: 150,
    filter:  theme.colorScheme === 'dark' ? 'invert(100%)' : 'none',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    height: '102%',
    gap: 20,
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    cursor: 'pointer',
    height: '100%',
    lineHeight: 4,
    display: 'block',
    textTransform: 'uppercase',
    fontSize: 18,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `7px ${theme.spacing.sm}px`,
    fontWeight: 700,
    borderBottom: '4px solid transparent',
    transition: 'border-color 100ms ease, color 100ms ease',
    textDecoration: 'none',
    minWidth: 100,
    textAlign: 'center',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors.dark[theme.colorScheme === 'dark' ? 2 : 6],
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    // <a
    //   key={link.label}
    //   href={link.link}
    //   className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    //   onClick={(event) => {
    //     event.preventDefault();
    //     setActive(link.link);
    //     close();
    //   }}
    // >
    //   {link.label}
    // </a>
    <Link 
      key={link.label}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      to={link.link}
      onClick={(event) => {
            setActive(link.link);
          }}>
        {link.label}
    </Link>

  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <img src={borderlessLogo} className={classes.logo1}  alt="logo"/>

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <SwitchModeButton />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}