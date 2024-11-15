import React, { useState, useEffect } from 'react';
import { Tag, TagProps } from '../Tag/Tag';

interface TagsProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    tagProps?: TagProps;
    onTagsChange?: (tags: string[]) => void;
    initialTags?: string[];
}

export const Tags: React.FC<TagsProps> = ({ inputProps, tagProps, onTagsChange, initialTags }) => {

    const containerClasses = `
    `;

    const tagsClasses = `
    p-2
    flex flex-wrap gap-1
    border border-grey-300 rounded
    `;

    const inputClasses = `
    border-none
    outline-none
    `;

    const infoClasses = `
    text-grey-200
    text-xs
    `;

    const [tags, setTags] = useState<string[]>(initialTags || []);

    useEffect(() => {
        onTagsChange?.(tags);
    }, [tags]);

    const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = e.currentTarget;
            const tag = input.value;
            if (tag) {
                setTags([...tags, tag]);
                input.value = '';
            }
        }
    };

    const removeTag = (tag: string) => {
        setTags(tags.filter((t) => t !== tag));
    };

    return (
        <div className={containerClasses}>
            <div className={tagsClasses}>
                {tags.map((tag) =>
                    <Tag key={tag} label={tag} onClose={() => removeTag(tag)} {...tagProps} />
                )}
                <input
                    type="text"
                    className={inputClasses}
                    placeholder="Enter tags"
                    onKeyDown={onSubmit}
                    {...inputProps}
                />
            </div>
            <span className={infoClasses}>
                Each tag followed by enter key
            </span>
        </div>
    )
};