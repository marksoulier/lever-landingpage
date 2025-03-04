// src/ParticlesComponent.tsx
import React, { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

interface ParticlesComponentProps {
    className?: string;
}

export const DemoParticles: React.FC<ParticlesComponentProps> = ({
    className = ""
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const updateCanvasSize = (container: Container) => {
        const canvas = container.canvas.element;
        const parentDiv = containerRef.current;
        if (canvas && parentDiv) {
            const rect = parentDiv.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            container.canvas.size.width = rect.width;
            container.canvas.size.height = rect.height;
        }
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        try {
            await loadFull(engine);
        } catch (error) {
            console.error("Engine initialization failed:", error);
        }
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        if (container) {
            updateCanvasSize(container);
            // Set up resize observer to update canvas size when container size changes
            const resizeObserver = new ResizeObserver(() => {
                updateCanvasSize(container);
            });
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
            }
        }
    }, []);

    return (
        <div ref={containerRef} className={`relative flex-1 ${className}`} style={{ minHeight: '400px' }}>
            <Particles
                id="tsparticles-demo"
                init={particlesInit}
                loaded={particlesLoaded}
                className="absolute inset-0"
                options={{
                    fullScreen: {
                        enable: false
                    },
                    fpsLimit: 60,
                    background: {
                        color: "transparent",
                    },
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: true,
                                area: 800
                            }
                        },
                        color: {
                            value: "#000000"
                        },
                        shape: {
                            type: "circle"
                        },
                        opacity: {
                            value: 0.8,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 0.3,
                                minimumValue: 0.05,
                                sync: false
                            }
                        },
                        size: {
                            value: 2.5
                        },
                        links: {
                            enable: true,
                            distance: 200,
                            color: "#a0a0a0",
                            opacity: 0.9,
                            width: 2.0,
                            triangles: {
                                enable: false,
                                opacity: 0.05
                            }
                        },
                        move: {
                            enable: true,
                            speed: 0.8,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: {
                                default: "bounce"
                            },
                            bounce: false
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble"
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 100,
                                size: 3.5,
                                duration: 0.2,
                                opacity: 0.9,
                                color: "#dd6c02"
                            }
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    );
};

export default DemoParticles;