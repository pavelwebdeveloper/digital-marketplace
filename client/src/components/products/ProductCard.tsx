import type { Product } from "@digital-marketplace/shared";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="product-card-image">
                <div className="product-card-placeholder">
                    {product.categoryId}
                </div>
            </div>

            <div className="product-card-content">
                <h2>{product.title}</h2>

                <p>{product.description}</p>

                <div className="product-card-footer">
                    <span className="product-price">
                        ${product.price.toFixed(2)}
                    </span>

                    <button type="button">
                        View Product
                    </button>
                </div>
            </div>
        </article>
    );
}