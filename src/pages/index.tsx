import Head from 'next/head'

import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import Top from '@/components/templates/Top/Top'
import Layout from '@/components/organisms/Layout/Layout'
import ArticleList from '@/components/atoms/ArticleList/ArticleList'


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
     <Top/>
    </Layout>
  )
}

