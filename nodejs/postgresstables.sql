-- 1. Categories Table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- 2. Products Table (Base)
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name Text NOT NULL,
    description TEXT,
    category_id INT REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Vendors Table
CREATE TABLE vendors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Inventory Table (Vendor ↔ Product Stock & Price)
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    vendor_id INT NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
    stock INT DEFAULT 0,
    price NUMERIC(10,2) NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(product_id, vendor_id)
);

-- 5. Product Images Table (Multiple images per product)
CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(255) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Customers Table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Orders Table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'shipped', 'delivered', 'cancelled'))
);

-- 8. Order Items Table (Detail of each order)
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    inventory_id INT REFERENCES inventory(id),
    quantity INT NOT NULL,
    price NUMERIC(10,2) NOT NULL
);


-- 1. Categories
INSERT INTO categories (name, description)
VALUES 
('Electronics', 'Devices, gadgets, and accessories'),
('Books', 'Printed and digital books'),
('Clothing', 'Men, women, and kids wear');

-- 2. Products
INSERT INTO products (name, description, category_id)
VALUES
('Smartphone X', 'Latest smartphone with amazing features', 1),
('Laptop Pro', 'High performance laptop for professionals', 1),
('Science Fiction Novel', 'A futuristic space adventure', 2),
('Casual T-Shirt', 'Comfortable cotton t-shirt', 3);

-- 3. Vendors
INSERT INTO vendors (name, email, phone, address)
VALUES
('TechVendor Ltd', 'sales@techvendor.com', '+123456789', '123 Tech Street'),
('BookHouse', 'info@bookhouse.com', '+987654321', '456 Book Avenue'),
('FashionHub', 'contact@fashionhub.com', '+1122334455', '789 Fashion Blvd');

-- 4. Inventory (linking vendors and products)
INSERT INTO inventory (product_id, vendor_id, stock, price)
VALUES
(1, 1, 50, 699.99),  -- Smartphone X from TechVendor
(2, 1, 30, 1299.99), -- Laptop Pro from TechVendor
(3, 2, 100, 19.99),  -- Sci-Fi Novel from BookHouse
(4, 3, 200, 9.99);   -- T-Shirt from FashionHub

-- 5. Product Images
INSERT INTO product_images (product_id, image_url, is_primary)
VALUES
(1, '/image/zagol1.png', TRUE),
(2, '/image/zagol1.png', TRUE),
(3, '/image/zagol1.png', TRUE),
(4, '/image/zagol1.png', TRUE);

-- 6. Customers
INSERT INTO customers (full_name, email, phone, address)
VALUES
('John Doe', 'john@example.com', '+111222333', '12 Main Street'),
('Jane Smith', 'jane@example.com', '+444555666', '34 Second Avenue');

-- 7. Orders
INSERT INTO orders (customer_id, status)
VALUES
(1, 'pending'),  -- Order for John
(2, 'paid');     -- Order for Jane

-- 8. Order Items
INSERT INTO order_items (order_id, inventory_id, quantity, price)
VALUES
(1, 1, 1, 699.99),   -- John bought 1 Smartphone X
(1, 3, 2, 19.99),    -- John bought 2 Sci-Fi Novels
(2, 2, 1, 1299.99);  -- Jane bought 1 Laptop Pro
