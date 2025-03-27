'use client';

import { RawFamilyMember } from '@/features/family-tree/data/family';
import { GenealogySection } from '@/features/family-tree/genealogy-section';
import { MainLayout } from '@/layouts/main-layout';
import React from 'react';

const Genealogy: React.FC<{ familyTree: RawFamilyMember[] }> = ({ familyTree }) => {
    return (
        <MainLayout title="Genealogy">
            <GenealogySection nodes={familyTree} />
        </MainLayout>
    );
};

export default Genealogy;
