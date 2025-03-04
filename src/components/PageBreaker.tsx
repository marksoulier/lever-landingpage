import React from 'react';

interface PageBreakerProps {
    className?: string;
}

export const PageBreaker: React.FC<PageBreakerProps> = ({ className = '' }) => {
    return (
        <div className={`w-full max-w-[1140px] mx-auto px-5 ${className}`}>
            <div className="relative flex justify-center">
                {/* The line with rounded ends */}
                <div className="h-[3px] w-[98%] bg-[var(--primary-950)]/10 rounded-full backdrop-blur-sm" />
            </div>
        </div>
    );
}; 