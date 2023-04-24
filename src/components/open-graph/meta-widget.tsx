import { useMemo } from 'react'
import Head from 'next/head'

import { APPLICATION, DOMAIN } from '@/utils/constant'

export function MetaWidget({ pathname = '/', title = '', description = '' }) {
  const routePath = useMemo(() => {
    return `${DOMAIN}${pathname}`
  }, [pathname])

  const mergeTitle = useMemo(() => {
    return title || APPLICATION
  }, [title])

  const mergeDescription = useMemo(() => {
    return description || APPLICATION
  }, [description])

  return (
    <>
      <Head>
        <title key="title">{mergeTitle}</title>
        <link
          key="canonical"
          rel="canonical"
          href={routePath}
        />
        <meta
          key="description"
          name="description"
          content={mergeDescription}
        />
        <meta name="keywords" content="keywords" />
        <meta name="author" content="odinlin" />

        {/* Open Graph Protocol */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="nodeless"></meta>
        <meta
          key="og:url"
          property="og:url"
          content={routePath} />
        <meta
          key="og:title"
          property="og:title"
          content={mergeTitle}
        ></meta>
        <meta
          key="og:description"
          property="og:description"
          content={mergeDescription}
        />
        <meta property="og:image" content="TODO" />
        <meta
          key="og:image:alt"
          property="og:image:alt"
          content={APPLICATION}
        />

        {/* twitter */}
        <meta
          key="twitter:site"
          name="twitter:site"
          content={APPLICATION}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="odinlin" />
        <meta
          key="twitter:title"
          property="twitter:title"
          content={mergeTitle}
        />
        <meta
          key="twitter:description"
          property="twitter:description"
          content={mergeDescription}
        />
        <meta name="twitter:image" content="TODO" />
        <meta
          key="twitter:image:alt"
          name="twitter:image:alt"
          content={APPLICATION}
        />
      </Head>
    </>
  )
}
