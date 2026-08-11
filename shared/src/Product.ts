export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    categoryId: string;

    thumbnail: string;
    downloadFile: string;

    tags: string[];

    published: boolean;

    createdAt: string;
    updatedAt: string;
}