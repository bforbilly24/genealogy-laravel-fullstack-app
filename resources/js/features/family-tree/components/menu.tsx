'use client';

import { Button } from '@/components/ui/shadcn/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/shadcn/carousel';
import { FamilyNode } from '@/features/family-tree/data/family';
import { FamilyTreeData } from '@/features/family-tree/patterns/family-tree-data';
import { flattenMapNode } from '@/utils/flatten-map-node';
import { useState } from 'react';

type Props = {
    family: FamilyNode[];
    setData: (node: FamilyNode[]) => void;
};

function Menu({ family, setData }: Props) {
    const familyTreeData = FamilyTreeData.getInstance();
    const [activeFamily, setActiveFamily] = useState<FamilyNode | null>(null);

    const familiesWithChildren = [
        {
            id: 'all',
            name: 'Semua Keluarga',
            children: family,
        } as FamilyNode,
        ...family.filter((node) => node.children && node.children.length > 0),
    ];

    const handleChooseFamily = (node: FamilyNode) => {
        setActiveFamily(node);
        const nodes = node.id === 'all' ? family : flattenMapNode({ node: { ...node, parentId: undefined } });
        familyTreeData.setNodes(nodes);
        setData(familyTreeData.getNodes());
    };

    return (
        <div className="mx-auto w-64">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {familiesWithChildren.map((item) => (
                        <CarouselItem key={item.id} className="basis-1/2">
                            <Button
                                variant={activeFamily?.id === item.id ? 'default' : 'outline'}
                                className="w-full"
                                onClick={() => handleChooseFamily(item)}
                            >
                                {item.name}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
            </Carousel>
        </div>
    );
}

export { Menu };
