export type ProjectType = {
    id: string;
    title: string;
    description: string;
    toolIds: ToolType[];
    carousel: string[];
    githubLink?: string;
};

export type ToolType =
    | 'react'
    | 'react-native'
    | 'graphql'
    | 'typescript'
    | 'nodejs';
