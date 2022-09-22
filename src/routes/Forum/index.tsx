// import './index.css';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme  } from '@mantine/core';
import CarouselImageCardList from '../../components/CarouselImageCardList';

function Forum() {
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
     <CarouselImageCardList {...content1} />
    </>
  );
}

export default Forum;
