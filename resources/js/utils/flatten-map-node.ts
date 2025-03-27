import { FamilyNode } from '@/features/family-tree/data/family';

type props = {
    node: FamilyNode | null;
    maxDepth?: number | null;
    depth?: number;
};

const flattenMapNode = ({ node, maxDepth = null, depth = 0 }: props): FamilyNode[] => {
    if (node == null) return [];
    if (maxDepth) if (depth >= maxDepth) return [node];

    const children: FamilyNode[] = node?.children
        ? node.children.reduce((acc: FamilyNode[], child: FamilyNode) => {
              return [...acc, ...flattenMapNode({ node: child, maxDepth, depth: depth + 1 })];
          }, [])
        : [];

    return [node, ...children];
};

export { flattenMapNode };
