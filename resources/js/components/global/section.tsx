"use client";

import React, { ReactNode } from 'react';

interface SectionProps {
	id?: string;
	className?: string;
	children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
	return (
		<section id={id} className={className}>
			{children}
		</section>
	);
};

export { Section };
