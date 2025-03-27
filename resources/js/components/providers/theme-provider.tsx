'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	return (
		<NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
			{children}
		</NextThemesProvider>
	);
};
