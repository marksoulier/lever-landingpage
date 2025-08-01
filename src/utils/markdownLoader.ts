import { knowledgeGraphsArticle } from '../articles/knowledge-graphs';
import { APRvsAPYArticle } from '../articles/APRvsAPY';

export interface ArticleMeta {
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    image: string;
}

export interface Article {
    meta: ArticleMeta;
    content: string;
    slug: string;
}

// Map of all available articles
const articles: { [key: string]: Article } = {
    'knowledge-graphs': knowledgeGraphsArticle,
    'apr-vs-apy': APRvsAPYArticle
};

export async function getArticle(slug: string): Promise<Article | null> {
    try {
        console.log('Getting article:', slug);
        console.log('Available articles:', Object.keys(articles));
        const article = articles[slug];
        console.log('Found article:', article ? 'yes' : 'no');

        if (!article) {
            console.error('Article not found:', slug);
            throw new Error(`Article not found: ${slug}`);
        }

        return article;
    } catch (error) {
        console.error(`Error loading article ${slug}:`, error);
        return null;
    }
}

export async function getAllArticles(): Promise<Article[]> {
    try {
        console.log('Getting all articles');
        return Object.values(articles);
    } catch (error) {
        console.error('Error loading articles:', error);
        return [];
    }
} 