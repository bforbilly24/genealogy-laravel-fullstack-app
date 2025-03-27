import { FamilyNode } from '@/features/family-tree/data/family';
import { OrgChart } from 'd3-org-chart';
import { useLayoutEffect, useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

type Props = {
    nodes: FamilyNode[];
    nodesView?: 'expand' | 'collapse' | 'default';
    chart: OrgChart<FamilyNode>;
    clickNodeAction: (node: FamilyNode) => void;
};

const NodeElement = (nodes: FamilyNode[], node: FamilyNode) => {
    return renderToStaticMarkup(
        <div className="flex h-full flex-col items-start justify-center gap-y-1.5 rounded border-2 border-gray-200 bg-slate-100 p-4 text-base dark:border-gray-900 dark:bg-green-950 dark:text-white">
            <div className="line-clamp-1 text-lg font-bold">
                [{node?.gender?.toString()}] {node?.name} | {node?.status ?? '-'}
            </div>
            <div className="absolute -top-2 right-0">
                <p className="bg-primary line-clamp-1 rounded-sm px-2.5 text-sm font-bold text-white dark:bg-yellow-600">{node.label ?? '-'}</p>
            </div>
            {node.spouse ? <div className="line-clamp-1 text-sm">Pasangan: {node.spouse}</div> : ''}
            <div className="line-clamp-2 text-sm">Anak: {getChildren(nodes, node.id)}</div>
            {node.notes ? <div className="line-clamp-2 text-sm">Catatan: {node.notes}</div> : ''}
        </div>,
    );
};

const getChildren = (nodes: FamilyNode[], parentId: string) => {
    const children = nodes.filter((node) => node.parentId === parentId).map((child) => child.name);
    if (children.length > 0) {
        return children.join(', ');
    }
    return '-';
};

function FamilyTree({ chart, nodesView = 'default', nodes, clickNodeAction }: Props) {
    const d3Container = useRef(null);

    useLayoutEffect(() => {
        let initialZoom = 1;
        if (window.innerWidth < 500) {
            initialZoom = 0.6;
        }

        if (d3Container.current && nodes.length > 0) {
            if (nodesView === 'collapse') {
                chart.collapseAll();
            } else if (nodesView === 'expand') {
                chart.expandAll();
            }
            chart
                .container(d3Container.current)
                .data(nodes)
                .compact(true)
                .svgHeight((3 / 4) * window.innerHeight)
                .linkYOffset(0)
                .rootMargin(100)
                .setActiveNodeCentered(true)
                .buttonContent(({ node }) => {
                    return renderToStaticMarkup(
                        <div className="m-auto w-auto rounded-sm border border-gray-300 bg-white px-2 py-1 text-sm text-gray-950 shadow">
                            {node.children ? 'Tutup' : 'Buka'}
                        </div>,
                    );
                })
                .initialZoom(initialZoom)
                .onNodeClick((node) => {
                    clickNodeAction(node.data);
                })
                .nodeContent((node) => {
                    return NodeElement(nodes, node.data);
                })
                .render();
        }
    }, [chart, nodes, clickNodeAction, nodesView]);

    return (
        <div className={'h-1/2'}>
            <div ref={d3Container} className={'h-full'} />
        </div>
    );
}

export { FamilyTree };
