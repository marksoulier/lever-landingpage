import React, { useCallback, useRef, useEffect } from "react";
import Particles from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const BackgroundParticles: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Engine | null>(null);
    const containerInstance = useRef<Container | null>(null);

    const updateCanvasSize = useCallback(() => {
        if (containerInstance.current) {
            const canvas = containerInstance.current.canvas.element;
            if (canvas) {
                const width = window.innerWidth;
                const height = window.innerHeight;

                // Update both the style and the actual canvas dimensions
                canvas.width = width;
                canvas.height = height;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;

                // Update the container size
                containerInstance.current.canvas.size.width = width;
                containerInstance.current.canvas.size.height = height;

                console.log(`Updated canvas dimensions: ${width}x${height}`);
            }
        }
    }, []);

    useEffect(() => {
        console.log("BackgroundParticles mounted");

        // Handle resize events
        const handleResize = () => {
            requestAnimationFrame(updateCanvasSize);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            console.log("BackgroundParticles unmounted");
            window.removeEventListener('resize', handleResize);
            if (containerInstance.current) {
                containerInstance.current.destroy();
            }
        };
    }, [updateCanvasSize]);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log("Background particles initializing...");
        try {
            engineRef.current = engine;
            await loadFull(engine);
            console.log("Background particles engine loaded successfully");
        } catch (error) {
            console.error("❌ Background particles engine failed:", error);
        }
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log("Background particles container loading...");
        if (container) {
            containerInstance.current = container;
            const canvas = container.canvas.element;
            if (canvas) {
                console.log("Setting up background canvas...");
                canvas.style.position = 'fixed';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.pointerEvents = 'none';
                canvas.style.zIndex = '0';

                // Initial size setup
                updateCanvasSize();
            }
        }
    }, [updateCanvasSize]);

    return (
        <div ref={containerRef} className="fixed inset-0" style={{ zIndex: 0 }}>
            <Particles
                id="tsparticles-background"
                init={particlesInit}
                loaded={particlesLoaded}
                className="absolute inset-0"
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: 0
                    },
                    fpsLimit: 60,
                    background: {
                        color: "transparent",
                    },
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                area: 1000
                            }
                        },
                        color: {
                            value: "#000000"
                        },
                        shape: {
                            type: "circle"
                        },
                        opacity: {
                            value: 0.15,
                            random: false,
                            animation: {
                                enable: true,
                                speed: 0.2,
                                minimumValue: 0.04,
                                sync: false
                            }
                        },
                        size: {
                            value: 1.5,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.5,
                                sync: false
                            }
                        },
                        links: {
                            enable: true,
                            distance: 50,
                            color: "#000000",
                            opacity: 0.1,
                            width: 0.2
                        },
                        move: {
                            enable: true,
                            speed: 0.3,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: {
                                default: "out"
                            },
                            bounce: true,
                            attract: {
                                enable: false
                            }
                        }
                    },
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onHover: {
                                enable: true,
                                mode: ["grab", "bubble"]
                            }
                        },
                        modes: {
                            grab: {
                                distance: 80,
                                links: {
                                    opacity: 0.4,
                                    color: "#000000"
                                }
                            },
                            bubble: {
                                distance: 300,    // Distance to activate
                                size: 3,         // Size when bubbled
                                duration: 0.35,   // Animation duration
                                opacity: 0.3     // Opacity when bubbled
                            },
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    );
};

export default BackgroundParticles; 