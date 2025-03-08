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

export async function getArticle(slug: string): Promise<Article | null> {
    try {
        console.log('Attempting to fetch article:', `/content/${slug}.md`);
        const response = await fetch(`/content/${slug}.md`);
        console.log('Response status:', response.status);

        if (!response.ok) {
            console.error('Failed to fetch article:', response.status, response.statusText);
            throw new Error(`Article not found: ${response.status} ${response.statusText}`);
        }

        const fileContent = await response.text();
        console.log('Article content length:', fileContent.length);

        const parts = fileContent.split('---\n').filter(Boolean);
        console.log('Number of content parts:', parts.length);

        if (parts.length < 2) {
            console.error('Invalid article format - missing frontmatter or content');
            throw new Error('Invalid article format');
        }

        const [frontmatter, ...contentParts] = parts;

        const meta = frontmatter.split('\n').reduce((acc, line) => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
                const value = valueParts.join(':').trim();
                return { ...acc, [key.trim()]: value };
            }
            return acc;
        }, {} as ArticleMeta);

        console.log('Parsed metadata:', meta);

        return {
            meta,
            content: contentParts.join('---\n'),
            slug
        };
    } catch (error) {
        console.error(`Error loading article ${slug}:`, error);
        return null;
    }
}

export async function getAllArticles(): Promise<Article[]> {
    try {
        console.log('Fetching articles list...');
        const response = await fetch('/content/articles.json');
        console.log('Articles list response status:', response.status);

        if (!response.ok) {
            console.error('Failed to fetch articles list:', response.status, response.statusText);
            throw new Error('Failed to fetch article list');
        }

        const articleList = await response.json();
        console.log('Found articles:', articleList);

        const articles = await Promise.all(
            articleList.map((slug: string) => getArticle(slug))
        );

        const validArticles = articles.filter((article): article is Article => article !== null);
        console.log('Successfully loaded articles:', validArticles.length);

        return validArticles;
    } catch (error) {
        console.error('Error loading articles:', error);
        return [];
    }
} 