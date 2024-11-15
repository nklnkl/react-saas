import React from 'react';

export interface TagProps {
    label: string;
    onClick?: () => void;
    onClose?: () => void;
    containerClassesOverride?: string;
    labelClassesOverride?: string;
    closeClassesOverride?: string;
}

export const Tag: React.FC<TagProps> = ({
    label,
    onClick,
    onClose,
    containerClassesOverride,
    labelClassesOverride,
    closeClassesOverride
}) => {
    const containerClasses = `
        w-fit px-2 pr-0
        flex justify-between gap-2
        bg-white
        border border-gray-300 rounded
    `;
    const labelClasses = `
        text-gray-500
    `;
    const closeClasses = `
        px-2
        text-gray-500
        cursor-pointer
        hover:bg-gray-600
        hover:text-white
    `;

    return <div className={containerClasses + containerClassesOverride}>
        <span className={labelClasses + ' ' + labelClassesOverride} onClick={onClick}>{label}</span>
        <span className={closeClasses + ' ' + closeClassesOverride} onClick={onClose}>x</span>
    </div>;
};