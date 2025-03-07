import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from './Layout';
import ReactMarkdown from 'react-markdown';
import { Button } from './Button';

const exampleArticle = {
    meta: {
        title: 'Understanding Business Knowledge Graphs',
        description: 'A deep dive into how knowledge graphs power modern business intelligence',
        date: '2024-03-20',
        author: 'Lever AI Team',
        category: 'Technology',
        image: '/images/example.jpg',
    },
    content: `
The knowledge graph is a relationship graph that relates all the information business.

## Key Components

### Subject
An entity in your business system such as a Customer, Product, or Employee.

### Object
An entity in your business system that can be related to a subject such as a Transaction, Email, or Calendar Event.

### Predicate
The relationship that exists between subject and Object.

## Understanding the Structure

With this structure a human can understand the relationships between these business resources as well as an AI Agent. Working in cohesion the AI Agent can give tailored responses to a specific business.

## Implementation Examples

\`\`\`javascript
const graphExample = {
    subject: "Customer",
    predicate: "purchased",
    object: "Product"
};
\`\`\`

## Benefits

1. Clear relationship mapping
2. AI-ready data structure
3. Improved business intelligence
4. Better decision making
    `
};

export const ArticlePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const article = exampleArticle;

    return (
        <Layout>
            <section className="px-5 py-10 mx-auto my-0 max-w-[1400px] mt-20">
                <article className="flex gap-24 max-md:flex-col">
                    {/* Main Content Column */}
                    <div className="flex-1 max-w-[800px]">
                        <header className="mb-12">
                            <h1 className="mb-6 text-5xl font-medium text-[var(--accent-950)] font-['Poppins'] max-sm:text-3xl">
                                {article.meta.title}
                            </h1>
                            <div className="flex items-center text-[var(--accent-500)] text-opacity-80 text-base font-spline-sans">
                                <span className="mr-4">By {article.meta.author}</span>
                                <time dateTime={article.meta.date} className="text-[var(--accent-500)]">
                                    {new Date(article.meta.date).toLocaleDateString()}
                                </time>
                                <span className="mx-4">•</span>
                                <span className="capitalize">{article.meta.category}</span>
                            </div>
                        </header>

                        <div className="prose lg:prose-xl text-[var(--accent-500)] text-opacity-80">
                            <ReactMarkdown
                                components={{
                                    h2: ({ children }) => (
                                        <h2 className="mb-8 text-3xl max-sm:text-2xl text-[var(--accent-800)] font-['Poppins']">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="mb-4 text-2xl max-sm:text-xl text-[var(--accent-800)] font-['Poppins']">
                                            {children}
                                        </h3>
                                    ),
                                    p: ({ children }) => (
                                        <p className="mb-6 text-base leading-8 text-[var(--accent-500)] text-opacity-80 font-['Spline_Sans']">
                                            {children}
                                        </p>
                                    ),
                                    code: ({ children }) => (
                                        <code className="bg-[var(--accent-100)] px-2 py-1 rounded text-[var(--accent-800)]">
                                            {children}
                                        </code>
                                    ),
                                }}
                            >
                                {article.content}
                            </ReactMarkdown>
                        </div>

                        <div className="flex justify-center mt-16">
                            <Button variant="outline" href="https://cal.com/lever-ai/lever-ai-demo">
                                Schedule a Demo
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-[300px] max-md:w-full">
                        <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-medium mb-6 text-[var(--accent-800)] font-['Poppins']">
                                Quick Links
                            </h3>
                            <nav className="space-y-4">
                                <a href="#" className="block text-[var(--accent-500)] hover:text-[var(--primary-500)] transition-colors">
                                    Documentation
                                </a>
                                <a href="#" className="block text-[var(--accent-500)] hover:text-[var(--primary-500)] transition-colors">
                                    API Reference
                                </a>
                                <a href="#" className="block text-[var(--accent-500)] hover:text-[var(--primary-500)] transition-colors">
                                    Use Cases
                                </a>
                            </nav>
                        </div>
                    </aside>
                </article>
            </section>
        </Layout>
    );
}; 