/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Portfolio - About',
  description: 'Meet our team — Discord bots, server setup, 3D websites, Windows optimization, and custom scripts.',
  keywords: ['Portfolio', 'About', 'Discord Bots', 'Server Setup', '3D Web Development', 'Windows Optimization', 'Custom Scripts'],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
