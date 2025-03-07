import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackgroundParticles } from './BackgroundParticles';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className="flex overflow-hidden flex-col items-center pt-12 bg-white">
            <BackgroundParticles />
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&family=Poppins:wght@500;600;700&family=Spline+Sans:wght@400;500;600&display=swap"
                rel="stylesheet"
            />
            <div className="px-5 py-0 mx-auto my-0 max-w-[1140px] z-1">
                <Header />
                {children}
                <Footer />
            </div>
        </main>
    );
}; 