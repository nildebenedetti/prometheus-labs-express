/*======== PRODUCTS ========*/

const querySelectAllProducts = `
    SELECT id, name, slug, price_full, price_discount, image_main_url
    FROM products
    ORDER BY created_at DESC
`;

const querySelectProductBySlug = `
    SELECT *
    FROM products
    WHERE slug = ?
    LIMIT 1
`;

/*======== ORDERS ========*/

const queryGetAllOrders = `
    SELECT id, guest_email, total_amount, created_at,
    guest_name, guest_surname, city, country
    FROM orders
    ORDER BY created_at DESC
`;

const queryGetOrderById = `
    SELECT *
    FROM orders
    WHERE id = ?
    LIMIT 1
`;

const queryGetOrderItems = `
    SELECT 
        op.product_id, 
        op.quantity, 
        op.price_at_purchase,
        p.name, 
        p.slug,
        p.image_main_url
    FROM order_products op
    JOIN products p ON p.id = op.product_id
    WHERE op.order_id = ?
`;

/*======== EXPORT ========*/

const queries = {
    // Products
    querySelectAllProducts,
    querySelectProductBySlug,

    // Orders
    queryGetAllOrders,
    queryGetOrderById,
    queryGetOrderItems
};

export default queries;
