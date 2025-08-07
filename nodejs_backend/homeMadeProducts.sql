-- 1. Categories Table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- 2. Products Table (Base)
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 3. Vendors Table
CREATE TABLE vendors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Inventory Table (Vendor ↔ Product Stock & Price)
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    vendor_id INT NOT NULL,
    stock INT DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (vendor_id) REFERENCES vendors(id) ON DELETE CASCADE,
    UNIQUE(product_id, vendor_id)
);

-- 5. Product Images Table (Multiple images per product)
CREATE TABLE product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 6. Customers Table
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Orders Table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'paid', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- 8. Order Items Table (Detail of each order)
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    inventory_id INT, -- Product-vendor stock reference
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL, -- Price snapshot at time of purchase
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (inventory_id) REFERENCES inventory(id)
);

-- 
-- 1. Categories
INSERT INTO categories (name, description) VALUES
('Handicrafts', 'Traditional handmade items'),
('Textiles', 'Home-made woven and stitched textiles'),
('Pottery', 'Handcrafted ceramic items'),
('Woodwork', 'Wooden decorative and functional products'),
('Jewelry', 'Home-crafted necklaces, bracelets, etc.'),
('Natural Products', 'Organic and home-made natural products');

-- 2. Products
INSERT INTO products (name, description, category_id) VALUES
('Woven Basket', 'Hand-woven basket using natural fibers', 1),
('Cotton Tablecloth', 'Embroidered handmade tablecloth', 2),
('Clay Vase', 'Decorative clay vase', 3),
('Wooden Spoon Set', 'Set of 5 handcrafted wooden spoons', 4),
('Beaded Necklace', 'Colorful necklace made from local beads', 5),
('Organic Soap Bar', 'Chemical-free home-made soap bar', 6);

-- 3. Vendors
INSERT INTO vendors (name, email, phone, address) VALUES
('Alem Handicrafts', 'alem@vendor.com', '+251911111111', 'Addis Ababa, Ethiopia'),
('Tigist Textiles', 'tigist@vendor.com', '+251922222222', 'Bahir Dar, Ethiopia'),
('Selam Pottery', 'selam@vendor.com', '+251933333333', 'Hawassa, Ethiopia'),
('Binyam Woodworks', 'binyam@vendor.com', '+251944444444', 'Gondar, Ethiopia'),
('Ruth Jewelry', 'ruth@vendor.com', '+251955555555', 'Mekelle, Ethiopia'),
('Mulu Naturals', 'mulu@vendor.com', '+251966666666', 'Jimma, Ethiopia');

-- 4. Inventory (Product ↔ Vendor)
INSERT INTO inventory (product_id, vendor_id, stock, price) VALUES
(1, 1, 50, 150.00),
(2, 2, 30, 200.00),
(3, 3, 20, 300.00),
(4, 4, 40, 180.00),
(5, 5, 25, 220.00),
(6, 6, 100, 50.00);

-- 5. Product Images
INSERT INTO product_images (product_id, image_url, is_primary) VALUES
(1, 'https://example.com/images/basket1.jpg', TRUE),
(1, 'https://example.com/images/basket2.jpg', FALSE),
(2, 'https://example.com/images/tablecloth1.jpg', TRUE),
(3, 'https://example.com/images/vase1.jpg', TRUE),
(4, 'https://example.com/images/spoon1.jpg', TRUE),
(5, 'https://example.com/images/necklace1.jpg', TRUE),
(6, 'https://example.com/images/soap1.jpg', TRUE);

-- 6. Customers
INSERT INTO customers (full_name, email, phone, address) VALUES
('Abebe Kebede', 'abebe@example.com', '+251910101010', 'Addis Ababa, Ethiopia'),
('Sara Alemu', 'sara@example.com', '+251920202020', 'Dire Dawa, Ethiopia'),
('Henok Getachew', 'henok@example.com', '+251930303030', 'Adama, Ethiopia'),
('Liya Meles', 'liya@example.com', '+251940404040', 'Bahir Dar, Ethiopia'),
('Kebede Mekonnen', 'kebede@example.com', '+251950505050', 'Hawassa, Ethiopia'),
('Tsehay Desta', 'tsehay@example.com', '+251960606060', 'Gondar, Ethiopia');

-- 7. Orders
INSERT INTO orders (customer_id, status) VALUES
(1, 'paid'),
(2, 'pending'),
(3, 'shipped'),
(4, 'delivered'),
(5, 'paid'),
(6, 'cancelled');

-- 8. Order Items (Linked to Inventory)
INSERT INTO order_items (order_id, inventory_id, quantity, price) VALUES
(1, 1, 2, 150.00),
(1, 6, 3, 50.00),
(2, 2, 1, 200.00),
(3, 3, 1, 300.00),
(4, 4, 2, 180.00),
(5, 5, 1, 220.00),
(6, 1, 1, 150.00);
-- //////////////////

-- 1. Top Selling Products
CREATE OR REPLACE VIEW vw_top_selling_products AS
SELECT 
    p.id AS product_id,
    p.name AS product_name,
    c.name AS category_name,
    SUM(oi.quantity) AS total_sold_units,
    SUM(oi.quantity * oi.price) AS total_sales
FROM products p
JOIN inventory i ON p.id = i.product_id
JOIN order_items oi ON i.id = oi.inventory_id
LEFT JOIN categories c ON p.category_id = c.id
GROUP BY p.id, p.name, c.name
ORDER BY total_sold_units DESC;

-- 2. Low Stock Products
CREATE OR REPLACE VIEW vw_low_stock_products AS
SELECT 
    i.id AS inventory_id,
    p.name AS product_name,
    v.name AS vendor_name,
    i.stock,
    i.last_updated
FROM inventory i
JOIN products p ON i.product_id = p.id
JOIN vendors v ON i.vendor_id = v.id
WHERE i.stock < 10
ORDER BY i.stock ASC;

-- 3. Customer Purchase History
CREATE OR REPLACE VIEW vw_customer_purchase_history AS
SELECT 
    o.id AS order_id,
    o.order_date,
    c.id AS customer_id,
    c.full_name AS customer_name,
    p.name AS product_name,
    oi.quantity,
    oi.price AS unit_price,
    (oi.quantity * oi.price) AS total_price
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
JOIN inventory i ON oi.inventory_id = i.id
JOIN products p ON i.product_id = p.id
ORDER BY c.id, o.order_date DESC;

-- 4. Daily Revenue Summary
CREATE OR REPLACE VIEW vw_daily_revenue_summary AS
SELECT 
    DATE(o.order_date) AS order_day,
    COUNT(DISTINCT o.id) AS total_orders,
    SUM(oi.quantity * oi.price) AS daily_revenue
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
GROUP BY order_day
ORDER BY order_day DESC;

-- 5. Vendor Stock Status
CREATE OR REPLACE VIEW vw_vendor_stock_status AS
SELECT 
    v.id AS vendor_id,
    v.name AS vendor_name,
    p.name AS product_name,
    i.stock,
    i.last_updated
FROM vendors v
JOIN inventory i ON v.id = i.vendor_id
JOIN products p ON i.product_id = p.id
ORDER BY v.id, p.name;

-- 6. Pending Orders
CREATE OR REPLACE VIEW vw_pending_orders AS
SELECT 
    o.id AS order_id,
    o.order_date,
    c.id AS customer_id,
    c.full_name AS customer_name,
    o.status,
    SUM(oi.quantity * oi.price) AS total_amount
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
WHERE o.status IN ('pending', 'processing')
GROUP BY o.id, c.id, c.full_name, o.order_date, o.status
ORDER BY o.order_date DESC;

-- 7. Category Sales Summary
CREATE OR REPLACE VIEW vw_category_sales_summary AS
SELECT 
    cat.id AS category_id,
    cat.name AS category_name,
    COUNT(DISTINCT p.id) AS total_products,
    SUM(oi.quantity) AS total_units_sold,
    SUM(oi.quantity * oi.price) AS total_sales
FROM categories cat
JOIN products p ON cat.id = p.category_id
JOIN inventory i ON p.id = i.product_id
JOIN order_items oi ON i.id = oi.inventory_id
GROUP BY cat.id, cat.name
ORDER BY total_sales DESC;
