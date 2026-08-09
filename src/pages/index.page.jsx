/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Portfolio — Discord Bots, 3D Web, Optimization & Scripts',
  description: 'Expert digital solutions team. Discord bots & server setup, 3D websites, Windows optimization, and custom scripts in Python, C++, C#, and more.',
  keywords: ['Portfolio', 'Discord Bots', 'Server Setup', '3D Web Development', 'Windows Optimization', 'Custom Scripts', 'Python', 'C++', 'C#', 'Three.js', 'Next.js'],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
