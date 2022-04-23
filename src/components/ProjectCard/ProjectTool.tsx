import { useMemo, useState } from 'react';
import { ToolType } from '../../types';
import { FlutterIcon } from '../icons/Tools/FlutterIcon/FlutterIcon';
import { FirebaseIcon } from '../icons/Tools/FirebaseIcon/FirebaseIcon';
import { GraphQLIcon } from '../icons/Tools/GQLIcon/GraphQLIcon';
import { NodeJSIcon } from '../icons/Tools/NodeJsIcon/NodeJSIcon';
import { ReactIcon } from '../icons/Tools/ReactIcon/ReactIcon';
import { TailwindIcon } from '../icons/Tools/TailwindIcon/TailwindIcon';
import { NextJsIcon } from '../icons/Tools/NextJsIcon/NextJsIcon';
import { GatsbyIcon } from '../icons/Tools/GatsbyIcon/GatsbyIcon';

interface ProjectToolProps {
    tool: ToolType;
}

const ProjectTool: React.FC<ProjectToolProps> = ({ tool }) => {
    const [showName, setShowName] = useState(false);
    const ToolIcon = useMemo(() => {
        if (tool === 'react') return <ReactIcon />;
        if (tool === 'graphql') return <GraphQLIcon />;
        if (tool === 'nodejs') return <NodeJSIcon />;
        if (tool === 'firebase') return <FirebaseIcon />;
        if (tool === 'tailwind') return <TailwindIcon />;
        if (tool === 'flutter') return <FlutterIcon />;
        if (tool === 'nextjs') return <NextJsIcon size={19} />;
        if (tool === 'gatsby') return <GatsbyIcon size={19} />;
        return <></>;
    }, [tool]);

    return (
        <div
            onMouseEnter={() => setShowName(true)}
            onMouseLeave={() => setShowName(false)}>
            <div className='h-6 flex items-center'>{ToolIcon}</div>
            {showName && (
                <small className='absolute -translate-x-1/4 translate-y-3'>
                    {tool}
                </small>
            )}
        </div>
    );
};

export default ProjectTool;
