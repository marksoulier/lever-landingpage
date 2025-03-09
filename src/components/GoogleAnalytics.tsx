import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const GoogleAnalytics = () => {
    useEffect(() => {
        ReactGA.initialize('G-6VE18QWN8R');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);

    return null;
};

// Utility function for tracking events
export const trackEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label
    });
}; 