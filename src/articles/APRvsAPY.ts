import { Article } from '../utils/markdownLoader';
import content from './content/APRvsAPY.md?raw';
import aprVideo from '../data/aprvsapy.mp4';

export const APRvsAPYArticle: Article = {
    meta: {
        title: "APR vs APY: Understanding the Difference",
        description: "A comprehensive guide to understanding Annual Percentage Rate (APR) and Annual Percentage Yield (APY), their calculations, and when to use each.",
        date: "2024-03-20",
        author: "Lever Team",
        category: "Finance",
        image: "/images/apr-vs-apy.jpg"
    },
    content,
    slug: "apr-vs-apy"
};