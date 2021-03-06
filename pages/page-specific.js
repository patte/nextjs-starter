/**
 * This shows how to add CSS styles and head elements to a specific page
 */

import Head from 'next/head'
import css from 'next/css'
import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  
  render() {
    return (
      <Layout session={this.props.session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>This page has a custom title</title>
        </Head>
        <h2>Page specific CSS and &lt;head&gt; tags</h2>
        <p>This is mobile-ready page has custom elements that are included on on this page and inline CSS.</p>
        <p className={style}>This text will change colour if you hover over it or resize the window.</p>
        <p>Note: Page specific CSS is currently in flux and will change before Next.js 2.0 is final.</p>
      </Layout>
    )
  }
  
}

const style = css({
  color: 'blue',
  ':hover': {
    color: 'red'
  },
  '@media (max-width: 1000px)': {
    color: 'green'
  }
})