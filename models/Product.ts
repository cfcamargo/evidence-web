export default interface Product {
    id: number;
    title : string;
    description: string;
    brand: string;
    category: string;
    cover: string;
    systemId: number;
    quantity: number;
    price: number;
    clicks: number;
    created_at: string;
    updated_at: string;
    inactive: number;
}