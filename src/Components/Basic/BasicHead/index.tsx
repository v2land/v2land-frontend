import React from 'react';
import Head from 'next/head';

import { withTranslation } from '@I18n';

import { IBasicHead } from './BasicHead';

const BasicHeadComp: React.FunctionComponent<IBasicHead.IProps> = ({ t }) => (
  <Head>
    <meta key="keywords" name="keywords" content={t('Head_Keywords')} />
    <meta key="description" name="description" content={t('Head_Description')} />
    <meta key="twitter:card" name="twitter:card" content="summary" />
    <meta key="twitter:site" name="twitter:site" content="@Wave2Land" />
    <meta key="twitter:title" name="twitter:title" content={t('Head_Title')} />
    <meta key="twitter:description" name="twitter:description" content={t('Head_Description')} />
    <meta
      key="twitter:image"
      name="twitter:image"
      content="https://assets.v2land.net/twitter-icon.png"
    />
    <meta key="og:title" property="og:title" content={t('Head_Title')} />
    <meta key="og:type" property="og:type" content="website" />
    <meta key="og:description" property="og:description" content={t('Head_Description')} />
    <meta key="og:image" name="og:image" content="https://assets.v2land.net/twitter-icon.png" />
    <meta key="og:site_name" name="og:site_name" content={t('Title') || '浪潮'} />
  </Head>
);

export const BasicHead = withTranslation('common')(BasicHeadComp);
