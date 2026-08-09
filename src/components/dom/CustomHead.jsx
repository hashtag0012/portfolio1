import NextHead from 'next/head';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

const SITE_URL = typeof window !== 'undefined' ? window.location.origin : '';

const getSchema = () => ({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Portfolio',
  url: SITE_URL || undefined,
  email: 'mailto:hashimadil001@gmail.com',
  description: 'Discord bots, server setup, 3D web development, Windows optimization, and custom scripting.',
});

function CustomHead({ title = '', description, keywords }) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta name="robots" content={process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="keywords" content={keywords && keywords.length ? keywords.join(',') : keywords} />
        <meta name="author" content="Portfolio" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />

        <title>{title}</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />

        {/* No favicon — intentionally omitted */}
        <meta name="theme-color" content="#0e1026" />

        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />
      </NextHead>
      <NextSeo title={title} description={description} />
    </>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

CustomHead.defaultProps = {
  keywords: [],
};

export default CustomHead;
