'use client';

import Footer from '@/components/footer/Footer';
import Kids from '@/components/kids/Kids';
import Landing from '@/components/landing/Landing';
import Netflix from '@/components/netflix/Netflix';
import Question from '@/components/questions/Question';
import Section from '@/components/section/Section';
import Shows from '@/components/shows/Shows';
import TV from '@/components/tv/TV';
import Watch from '@/components/watch/Watch';
import React from 'react';

export default function Home() {
  return (
    <>
      <Netflix />
      {/* <Landing /> */}
      <Section />
      <TV />
      <Section />
      <Shows />
      <Section />
      <Watch />
      <Section />
      <Kids />
      <Section />
      <Question />
      <Section />
      <Footer />
    </>
  );
}
