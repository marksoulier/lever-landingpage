import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackgroundParticles } from './BackgroundParticles';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className="flex flex-col items-center pt-6 bg-white overflow-x-hidden w-full">
            <div className="hidden md:block w-full">
                <BackgroundParticles />
            </div>
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&family=Poppins:wght@500;600;700&family=Spline+Sans:wght@400;500;600&display=swap"
                rel="stylesheet"
            />
            <div className="w-full max-w-[1140px] z-1 px-3 sm:px-5">
                <Header />
                {children}
                <Footer />
            </div>
        </main>
    );
}; 