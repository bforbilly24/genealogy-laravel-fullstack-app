import { ReactElement, ReactNode } from 'react';

interface InnerDivProps {
    children: ReactNode[];
}

interface ContentDivProps {
    children: ReactElement<InnerDivProps>;
}

interface TimelineItem {
    title: string;
    content: ReactElement<ContentDivProps>;
}

export { ContentDivProps, InnerDivProps, TimelineItem };
