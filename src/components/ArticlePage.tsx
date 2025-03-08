import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './Layout';
import ReactMarkdown from 'react-markdown';
import { Button } from './Button';
import { Article, getArticle } from '../utils/markdownLoader';

interface TableOfContentsItem {
    id: string;
    title: string;
    level: number;
}

export const ArticlePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
    const [isTocOpen, setIsTocOpen] = useState(false);

    // Function to convert header text to ID
    const toId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    // Function to shorten TOC titles
    const shortenTitle = (title: string) => {
        const maxLength = 30;
        return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
    };

    useEffect(() => {
        const loadArticle = async () => {
            if (!slug) return;

            try {
                const articleData = await getArticle(slug);
                setArticle(articleData);

                // Extract only h1 and h2 headers from content
                const headers = articleData?.content.match(/^##? [^\n]+/gm) || [];
                const toc = headers
                    .filter(header => !header.startsWith('###')) // Exclude h3 headers
                    .map(header => {
                        const level = header.startsWith('## ') ? 2 : 1;
                        const title = header.replace(/^#+\s+/, '');
                        return {
                            id: toId(title),
                            title,
                            level
                        };
                    });
                setTableOfContents(toc);
            } catch (error) {
                console.error('Error loading article:', error);
            } finally {
                setLoading(false);
            }
        };

        loadArticle();
    }, [slug]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsTocOpen(false); // Close mobile TOC after clicking
        }
    };

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--primary-500)]"></div>
                </div>
            </Layout>
        );
    }

    if (!article) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <h1 className="text-2xl text-[var(--accent-500)]">Article not found</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <section className="px-4 sm:px-5 py-6 sm:py-10 mx-auto my-0 max-w-[1400px] mt-12 sm:mt-20">
                {/* Header Section */}
                <div className="max-w-[800px] mx-auto mb-8 sm:mb-16">
                    <header className="mb-8 sm:mb-12">
                        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-5xl font-medium text-[var(--accent-950)] font-['Poppins']">
                            {article.meta.title}
                        </h1>
                        <div className="flex flex-wrap gap-2 sm:gap-0 items-center text-[var(--accent-500)] text-opacity-80 text-sm sm:text-base font-spline-sans">
                            <span className="mr-4">By {article.meta.author}</span>
                            <time dateTime={article.meta.date} className="text-[var(--accent-500)]">
                                {new Date(article.meta.date).toLocaleDateString()}
                            </time>
                            <span className="mx-4 hidden sm:inline">•</span>
                            <span className="capitalize">{article.meta.category}</span>
                        </div>
                    </header>
                </div>

                {/* Mobile TOC Toggle Button */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setIsTocOpen(!isTocOpen)}
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-between text-[var(--accent-800)] font-medium"
                    >
                        <span>Table of Contents</span>
                        <svg
                            className={`w-5 h-5 transition-transform ${isTocOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <div className="relative">
                    {/* Table of Contents - Mobile Dropdown */}
                    <div className={`lg:hidden ${isTocOpen ? 'block' : 'hidden'} mb-6`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                            <nav className="space-y-3">
                                {tableOfContents.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block text-left w-full text-[var(--accent-500)] hover:text-[var(--primary-500)] transition-colors text-sm
                                            ${item.level === 2 ? 'pl-4' : ''}`}
                                    >
                                        {shortenTitle(item.title)}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Table of Contents - Desktop Fixed */}
                    <aside className="hidden lg:block absolute top-0 right-0 w-[300px]">
                        <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-medium mb-6 text-[var(--accent-800)] font-['Poppins']">
                                Contents
                            </h3>
                            <nav className="space-y-4">
                                {tableOfContents.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block text-left w-full text-[var(--accent-500)] hover:text-[var(--primary-500)] transition-colors text-sm
                                            ${item.level === 2 ? 'pl-4' : ''}`}
                                    >
                                        {shortenTitle(item.title)}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:pr-[340px]">
                        <div className="prose prose-sm sm:prose lg:prose-xl text-[var(--accent-500)] text-opacity-80">
                            <ReactMarkdown
                                components={{
                                    h1: ({ children }) => (
                                        <h1 id={toId(children as string)} className="scroll-mt-32 mb-8 sm:mb-12 text-3xl sm:text-4xl font-medium text-[var(--accent-800)] font-['Poppins']">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 id={toId(children as string)} className="scroll-mt-32 mb-6 sm:mb-12 mt-12 sm:mt-16 text-2xl sm:text-3xl text-[var(--accent-800)] font-['Poppins']">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 id={toId(children as string)} className="scroll-mt-32 mb-6 sm:mb-8 mt-8 sm:mt-12 text-xl sm:text-2xl text-[var(--accent-800)] font-['Poppins']">
                                            {children}
                                        </h3>
                                    ),
                                    p: ({ children }) => (
                                        <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-6 sm:leading-8 text-[var(--accent-500)] text-opacity-80 font-['Spline_Sans']">
                                            {children}
                                        </p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                                            {children}
                                        </ul>
                                    ),
                                    li: ({ children }) => (
                                        <li className="ml-4 sm:ml-6 text-sm sm:text-base">
                                            {children}
                                        </li>
                                    ),
                                    code: ({ children }) => (
                                        <code className="bg-[var(--accent-100)] px-2 py-1 rounded text-[var(--accent-800)] text-sm">
                                            {children}
                                        </code>
                                    ),
                                    img: ({ src, alt }) => (
                                        <div className="my-8 sm:my-16 w-full">
                                            <img
                                                src={src}
                                                alt={alt}
                                                className="w-full rounded-lg shadow-lg"
                                                loading="lazy"
                                            />
                                        </div>
                                    ),
                                }}
                            >
                                {article.content}
                            </ReactMarkdown>
                        </div>

                        <div className="flex justify-center mt-12 sm:mt-16">
                            <Button variant="outline" href="https://cal.com/lever-ai/lever-ai-demo">
                                Schedule a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}; 