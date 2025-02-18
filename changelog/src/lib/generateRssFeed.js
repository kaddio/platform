import ReactDOMServer from 'react-dom/server'
import { MDXProvider } from '@mdx-js/react'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { FeedProvider } from '@/components/FeedProvider'
import * as mdxComponents from '@/components/mdx'
import Content from '@/pages/index.mdx'

export async function generateRssFeed() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Kaddio',
    email: 'hello@kaddio.com',
  }

  let feed = new Feed({
    title: 'Kaddio',
    description: 'This is the Changelog that describes all of our updates. Kaddio is a complete all-in-one platform for health professionals with booking, medical records, video, invoicing and everything else you would expect',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
    },
  })

  let contentHtml = ReactDOMServer.renderToStaticMarkup(
    <FeedProvider>
      <MDXProvider components={mdxComponents}>
        <div>Test</div>
        <Content />
      </MDXProvider>
    </FeedProvider>
  )

  let articles = contentHtml.split(/(?<=<\/article>)\s*(?=<article)/)

  for (let article of articles) {
    let meta = JSON.parse(
      article.match(/<script type="text\/metadata">(.*?)<\/script>/)[1]
    )
    let url = `${siteUrl}/#${meta.id}`

    feed.addItem({
      title: meta.title,
      id: url,
      link: url,
      content: article,
      author: [author],
      contributor: [author],
      date: new Date(meta.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8')
}
