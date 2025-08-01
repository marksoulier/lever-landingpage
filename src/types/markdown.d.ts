declare module '*.md?raw' {
    const content: string;
    export default content;
}

declare module '*.txt?raw' {
    const content: string;
    export default content;
}

declare module '*.mp4' {
    const src: string;
    export default src;
}