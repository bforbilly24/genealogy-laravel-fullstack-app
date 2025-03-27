'use client';

import { Section } from '@/components/global/section';
import { Button } from '@/components/ui/shadcn/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/shadcn/carousel';
import { Editor } from '@/features/family-tree/components/editor';
import { FamilyTree } from '@/features/family-tree/components/family-tree';
import { FamilyNode, RawFamilyMember } from '@/features/family-tree/data/family';
import { FamilyNodeFactory } from '@/features/family-tree/data/family-node-factory';
import { FamilyTreeData } from '@/features/family-tree/data/family-tree-data';
import { flattenMapNode } from '@/utils/flatten-map-node';
import { OrgChart } from 'd3-org-chart';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Props = {
    nodes: RawFamilyMember[];
};

const EmptyState = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <span className="text-center text-base text-gray-500">
                Login{' '}
                <a className="text-primary text-decoration-underline link-underline-primary" href="/admin">
                    admin
                </a>{' '}
                untuk mulai menambahkan data
            </span>
        </div>
    );
};

function GenealogySection({ nodes }: Props) {
    const familyTreeData = FamilyTreeData.getInstance();
    const factory = useMemo(() => new FamilyNodeFactory(), []);
    const [data, setData] = useState<FamilyNode[]>(familyTreeData.getNodes());
    const [editingNode, setEditingNode] = useState<FamilyNode | null>(null);
    const [openEditor, setOpenEditor] = useState(false);
    const [api, setApi] = useState<CarouselApi>();
    const chart = useRef(new OrgChart<FamilyNode>());

    const listFamily = useMemo(() => nodes.map((node) => factory.createFromRaw(node)), [nodes, factory]);

    const familiesWithChildren = useMemo(
        () => [
            {
                id: 'all',
                name: 'Semua Keluarga',
                children: listFamily,
            } as FamilyNode,
            ...listFamily.filter((node) => node.children && node.children.length > 0 && node.id !== '1'),
        ],
        [listFamily],
    );

    const handleChooseFamily = useCallback(
        (node: FamilyNode) => {
            const nodesFiltered = node.id === 'all' ? listFamily : flattenMapNode({ node: { ...node, parentId: undefined } });
            familyTreeData.setNodes(nodesFiltered);
            setData(familyTreeData.getNodes());
        },
        [listFamily, familyTreeData],
    );

    useEffect(() => {
        familyTreeData.setNodes(listFamily);
        setData(familyTreeData.getNodes());
    }, [listFamily, familyTreeData]);

    useEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            const newSlide = api.selectedScrollSnap();
            handleChooseFamily(familiesWithChildren[newSlide]);
        };

        api.on('select', handleSelect);

        return () => {
            api.off('select', handleSelect);
        };
    }, [api, familiesWithChildren, handleChooseFamily]);

    const handlePrev = () => {
        api?.scrollPrev();
    };

    const handleNext = () => {
        api?.scrollNext();
    };

    return (
        <Section id={'history'} className="relative mx-auto flex flex-col bg-slate-50 py-8 md:py-16 lg:py-32 dark:bg-transparent">
            <img src="/images/global/pattern-1.png" className="absolute inset-0 z-0 h-full w-full object-cover" />

            <div className="relative z-20 flex w-full items-center justify-center px-4">
                <Editor
                    setNodes={(nodes) => {
                        familyTreeData.setNodes(nodes);
                        setData(familyTreeData.getNodes());
                    }}
                    nodes={data}
                    editingNode={editingNode}
                    openEditor={openEditor}
                    setOpenEditor={setOpenEditor}
                />
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <h1 className="text-primary text-2xl font-medium tracking-[0.4rem] md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                        Silsilah Keluarga
                    </h1>
                    <h1 className="text-primary text-2xl font-semibold tracking-[0.4rem] md:text-3xl md:tracking-[0.5rem] lg:text-4xl lg:tracking-[0.6rem]">
                        {data[0]?.name ?? ''}
                    </h1>
                </div>
            </div>

            <div className="relative z-10 flex flex-1 items-center justify-center">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: 'center',
                        loop: true,
                    }}
                    className="w-full max-w-3xl"
                >
                    <CarouselContent>
                        {familiesWithChildren.map((item) => (
                            <CarouselItem key={item.id} className="flex items-center justify-center">
                                <div className="h-0 w-0" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <Button
                onClick={handlePrev}
                className="bg-primary absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white hover:bg-green-800 dark:hover:bg-green-900"
            >
                <ChevronLeft className="size-5 md:size-5 lg:size-5" />
            </Button>
            <Button
                onClick={handleNext}
                className="bg-primary absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white hover:bg-green-800 dark:hover:bg-green-900"
            >
                <ChevronRight className="size-5 md:size-5 lg:size-5" />
            </Button>

            {data.length > 0 ? (
                <div className="relative z-10 flex-1">
                    <FamilyTree
                        chart={chart.current}
                        nodes={data}
                        nodesView={'default'}
                        clickNodeAction={(node) => {
                            setOpenEditor(true);
                            setEditingNode(node);
                        }}
                    />
                </div>
            ) : (
                <EmptyState />
            )}
        </Section>
    );
}

export { GenealogySection };
