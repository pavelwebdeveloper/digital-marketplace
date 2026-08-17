import type { Category } from "@digital-marketplace/shared";

interface CategoryListProps {
    categories: Category[];
    selectedCategory: string | null;
    onSelectCategory: (categoryId: string | null) => void;
}

export function CategoryList({
    categories,
    selectedCategory,
    onSelectCategory
}: CategoryListProps) {
    return (
        <div className="category-list">
            <button
                type="button"
                className={
                    selectedCategory === null
                        ? "category-button active"
                        : "category-button"
                }
                onClick={() => onSelectCategory(null)}
            >
                All
            </button>

            {categories.map(category => (
                <button
                    key={category.id}
                    type="button"
                    className={
                        selectedCategory === category.id
                            ? "category-button active"
                            : "category-button"
                    }
                    onClick={() =>
                        onSelectCategory(category.id)
                    }
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}