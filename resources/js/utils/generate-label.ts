import { FamilyNode } from '@/features/family-tree/data/family';

const LABEL: Record<string, string> = {
    '0': 'Self',
    '1': 'Orang Tua (Ayah/Ibu)',
    '2': 'Kakek/Nenek',
    '3': 'Buyut',
    '4': 'Canggah',
    '5': 'Wareng',
    '6': 'Udek-udek',
    '7': 'Gantung siwur',
    '8': 'Gropak senthe',
    '9': 'Debog bosok',
    '-1': 'Anak',
    '-2': 'Cucu',
    '-3': 'Cicit',
    '-4': 'Buyut',
    '-5': 'Canggah',
    '-6': 'Wareng',
    '-7': 'Udek-udek',
    '-8': 'Gantung siwur',
    '-9': 'Gropak senthe',
    '-10': 'Debog bosok',
};

function generateLabel(pov: FamilyNode | null, target: FamilyNode, isSibling: boolean): string {
    const generationDiff: number = (pov?.generation ?? 0) - (target?.generation ?? 0);

    if (pov?.id == target.id) return 'Saya';

    let label = '';

    if (generationDiff === 0 && isSibling) {
        label = 'Saudara Kandung';
    }

    if (generationDiff === 1 && pov?.parentId != target.id) {
        label = 'Paman/Bibi';
    }

    if (
        generationDiff === 0 &&
        pov?.parentId &&
        target?.parentId &&
        pov?.parentId !== target.parentId &&
        pov?.parent?.generation === target.parent?.generation
    ) {
        return 'Sepupu';
    }

    if (generationDiff === -1 && !pov?.children?.some((child) => child.id === target.id)) {
        label = 'Keponakan';
    }
    if (label) return label;
    return LABEL[generationDiff.toString()] ?? 'Kerabat Jauh';
}

export { generateLabel };
