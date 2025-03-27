interface RawFamilyMember {
    id: number;
    name: string;
    spouse?: string | null;
    address?: string | null;
    birth_place?: string | null;
    gender: 'L' | 'P';
    birth_date?: string | null;
    generation: number;
    label?: string | null;
    parent_id?: number | null;
    children?: RawFamilyMember[] | null;
    parent?: RawFamilyMember | null;
    created_at?: string;
    updated_at?: string;
}

interface FamilyNode {
    id: string;
    parentId?: string;
    name: string;
    spouse?: string;
    address?: string;
    birthPlace?: string;
    gender: Gender;
    birthDate?: string;
    generation?: number;
    label?: string;
    children?: FamilyNode[];
    parent?: FamilyNode;
    notes?: string;
    familyId?: string;
    status?: string;
}

declare type Gender = 'L' | 'P';

export { FamilyNode, Gender, RawFamilyMember };
