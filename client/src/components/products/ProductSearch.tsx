interface ProductSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export function ProductSearch({
    value,
    onChange
}: ProductSearchProps) {
    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="Search products..."
                value={value}
                onChange={event => onChange(event.target.value)}
                aria-label="Search products"
            />
        </div>
    );
}