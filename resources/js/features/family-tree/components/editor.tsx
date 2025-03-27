'use client';

import { Button } from '@/components/ui/shadcn/button';
import { DialogFooter, DialogHeader } from '@/components/ui/shadcn/dialog';
import { ScrollArea } from '@/components/ui/shadcn/scroll-area';
import { FamilyNode } from '@/features/family-tree/data/family';
import { generateLabel } from '@/utils/generate-label';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

type Props = {
    editingNode: FamilyNode | null;
    nodes: FamilyNode[];
    setNodes: (nodes: FamilyNode[]) => void;
    openEditor: boolean;
    setOpenEditor: (state: boolean) => void;
};

function Editor({ editingNode, nodes, setNodes, openEditor, setOpenEditor }: Props) {
    const defaultNodeValue: FamilyNode = {
        id: '',
        parentId: '',
        name: '',
        spouse: '',
        address: '',
        birthPlace: '',
        gender: 'P',
        birthDate: '',
        generation: 1,
        label: '',
        children: [],
    };
    const [node, setNode] = useState<FamilyNode>(defaultNodeValue);

    const handleSelectPov = (node: FamilyNode | null) => {
        const updatedNodes = nodes.map((item) => ({
            ...item,
            label: generateLabel(node, item, node?.parentId == item.parentId),
        }));
        setNodes([...updatedNodes]);
        setOpenEditor(false);
    };

    const getChildren = () => {
        if (!editingNode) return [];
        return nodes.filter((n) => n.parentId === editingNode.id);
    };

    useEffect(() => {
        if (editingNode) {
            setNode({
                name: editingNode.name,
                id: editingNode.id,
                gender: editingNode.gender,
                spouse: editingNode.spouse,
                parentId: editingNode.parentId,
                birthDate: editingNode.birthDate,
                birthPlace: editingNode.birthPlace,
                label: editingNode.label,
                generation: editingNode.generation,
                address: editingNode?.address,
                children: editingNode.children,
            });
        }
    }, [editingNode]);

    return (
        <Dialog open={openEditor} modal={true}>
            <DialogContent className="dark:bg-background fixed top-1/2 left-1/2 z-[999] flex max-h-[70vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl bg-white p-4 shadow-xl sm:p-6 md:max-w-2xl lg:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-foreground text-lg font-bold sm:text-xl">Profil Keluarga</DialogTitle>
                    <DialogDescription className="text-muted-foreground text-sm">Detail Identitas Anggota Keluarga</DialogDescription>
                </DialogHeader>

                <ScrollArea className="bg-gray-50p-4 mt-4 max-h-[65vh] overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-green-950">
                    <div className="text-foreground grid gap-4 p-4">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Nama</p>
                            <p className="line-clamp-2 font-semibold sm:col-span-3">{node.name ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Gender</p>
                            <p className="font-semibold sm:col-span-3">{node.gender ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Pasangan</p>
                            <p className="line-clamp-2 font-semibold sm:col-span-3">{node.spouse ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Orang Tua</p>
                            <p className="line-clamp-2 font-semibold sm:col-span-3">{node.parentId ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Tempat Lahir</p>
                            <p className="line-clamp-2 font-semibold sm:col-span-3">{node.birthPlace ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Tanggal Lahir</p>
                            <p className="line-clamp-2 font-semibold sm:col-span-3">{node.birthDate ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Generasi</p>
                            <p className="font-semibold sm:col-span-3">{node.generation ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Alamat</p>
                            <p className="line-clamp-3 font-semibold sm:col-span-3">{node.address ?? '-'}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                            <p className="text-left font-medium sm:col-span-1">Anak</p>
                            <div className="sm:col-span-3">
                                {getChildren().length > 0 ? (
                                    <ul className="list-disc space-y-1 pl-5">
                                        {getChildren().map((child) => (
                                            <li key={child.id} className="line-clamp-1 font-semibold">
                                                {child.name}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="font-semibold">-</p>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollArea>

                <DialogFooter className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
                    <Button
                        type="button"
                        className="text-foreground w-full rounded-md bg-gray-200 hover:bg-gray-300 sm:w-auto dark:bg-gray-700 dark:hover:bg-gray-600"
                        onClick={() => setOpenEditor(false)}
                    >
                        Tutup
                    </Button>
                    <Button
                        type="button"
                        className="bg-primary w-full rounded-md text-white hover:bg-green-500 sm:w-auto dark:hover:bg-green-600"
                        onClick={() => handleSelectPov(editingNode)}
                    >
                        Pilih POV
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export { Editor };
