import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import prism from 'remark-prism';
import gfm from 'remark-gfm';
import html from 'remark-html';
import highlight from 'remark-highlight.js';

const postsDirectory = path.join(process.cwd(), 'posts');
const EXTENSION = '.md';

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
/**
 * Markdown のファイル一覧を取得する
 */
export const listContentFiles = () => {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((fileName) => fileName.replace(/\.md$/, ''));
};

/**
 * Markdown のファイルの中身を全件パースして取得する
 */
export const readContentFiles = async ({ fs }) => {
  const promisses = listContentFiles().map((filename) => getPostData(filename));
  console.log(promisses);

  const contents = await Promise.all(promisses);

  return contents;
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(gfm)
    .use(prism)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}

export function getPostCount() {
  const filenames = fs.readdirSync(postsDirectory);
  console.log(filenames.length);
  return filenames.length;
}
