import React, { useEffect, useRef, useState } from 'react';
import Button from '../shared/Button';
import clsx from 'clsx';
import { CategoryMenu } from '../utils/arrays';
import { AlignJustify } from 'lucide-react';

interface Categories {
    id: number;
    name: string;
    subcategories?: Categories[];
}

const CategoriesButton: React.FC = () => {
    const [showCategories, setShowCategories] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Esperamos al siguiente tick para evitar errores de render simultáneo
            setTimeout(() => {
                if (
                    containerRef.current &&
                    !containerRef.current.contains(event.target as Node)
                ) {
                    setShowCategories(false);
                }
            }, 0);
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <Button
                className="w-48 cursor-pointer"
                type="button"
                onClick={() => setShowCategories((prev) => !prev)}
            >
                <p className="flex justify-start gap-2 w-full items-center text-gray-600">
                    <AlignJustify /> <span>Ver Categorías</span>
                </p>
            </Button>

            <div
                className={clsx(
                    'absolute border z-20 border-gray-200  bg-white  overflow-hidden mt-2 rounded-lg',
                    showCategories ? 'w-5xl p-5 block' : 'hidden'
                )}
            >
                <div className="flex gap-10 justify-between flex-wrap">
                    {CategoryMenu.map((category: Categories) => (
                        <ul key={category.id} className="mb-6">
                            <li className="text-gray-800 text-sm font-semibold uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
                                {category.name}
                            </li>

                            {category.subcategories && (
                                <ul className="space-y-2">
                                    {category.subcategories.map((sub: Categories) => (
                                        <li key={sub.id}>
                                            <a
                                                href={`/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="block text-sm text-gray-500 hover:text-[#1E88E5] transition-colors duration-150"
                                            >
                                                {sub.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </ul>

                    ))}
                </div>
            </div>

        </div>
    );
};

export default CategoriesButton;
