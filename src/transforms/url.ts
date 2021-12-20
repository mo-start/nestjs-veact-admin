/**
 * @file 链接转换
 * @author Surmon <https://github.com/surmon-china>
 */

import { BLOG_HOST, BASE_PATH, STATIC_URL } from '@/config'

export const getResourceUrl = (uri: string) => {
  const path = BASE_PATH.endsWith('/') ? BASE_PATH : `${BASE_PATH}/`
  return uri.startsWith('/') ? path + uri.substr(1, uri.length) : path + uri
}

export const getBlogArticleUrl = (articleID: number) => {
  return `${BLOG_HOST}/article/${articleID}`
}

export const getBlogTagUrl = (tagSlug: string) => {
  return `${BLOG_HOST}/tag/${tagSlug}`
}

export const getBlogCategoryUrl = (categorySlug: string) => {
  return `${BLOG_HOST}/category/${categorySlug}`
}

export const getBlogGuestbookUrl = () => {
  return `${BLOG_HOST}/guestbook`
}

export const getStaticFileUrl = (filePath: string) => {
  return `${STATIC_URL}/${filePath}`
}