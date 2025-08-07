### ✅ 1. `factories`

## \_\_\_/get/data/0

```json
{
  "Data": [
    {
      "name": "Addis Flour Factory",
      "location": "Addis Ababa",
      "manager_id": 1
    }
  ]
}
```

---

### ✅ 2. `stores`

## \_\_\_/get/data/1

```json
{
  "Data": [
    {
      "factory_id": 1,
      "name": "Main Warehouse",
      "location": "Kality"
    }
  ]
}
```

---

### ✅ 3. `products`

## \_\_\_/get/data/2

```json
{
  "Data": [
    {
      "code": "FLR-001",
      "name": "White Teff Flour",
      "type": "finished",
      "unit": "kg"
    }
  ]
}
```

---

### ✅ 4. `raw_materials`

## \_\_\_/get/data/3

```json
{
  "Data": [
    {
      "code": "RM-001",
      "name": "White Teff",
      "supplier_id": 1,
      "unit": "kg",
      "unit_price": 25.0
    }
  ]
}
```

---

### ✅ 5. `suppliers`

## \_\_\_/get/data/4

```json
{
  "Data": [
    {
      "name": "Ethiopian Agro Suppliers",
      "contact_person": "Hirut Lemma",
      "phone": "+251911123456",
      "email": "hirut@agrosuppliers.et",
      "address": "Debre Zeit"
    }
  ]
}
```

---

### ✅ 6. `employees`

## \_\_\_/get/data/5

```json
{
  "Data": [
    {
      "first_name": "Tadesse",
      "last_name": "Gebre",
      "role": "store_keeper",
      "phone": "+251911222333",
      "email": "tadesse@addisfactory.et",
      "factory_id": 1
    }
  ]
}
```

---

### ✅ 7. `incoming_products`

## \_\_\_/get/data/6

```json
{
  "Data": [
    {
      "product_id": 1,
      "store_id": 1,
      "quantity": 1000,
      "received_date": "2025-07-25T09:00:00",
      "received_by": 1
    }
  ]
}
```

---

### ✅ 8. `outgoing_products`

## \_\_\_/get/data/7

```json
{
  "Data": [
    {
      "product_id": 1,
      "store_id": 1,
      "quantity": 200,
      "dispatched_date": "2025-07-26T10:00:00",
      "dispatched_by": 1,
      "order_id": 1
    }
  ]
}
```

---

### ✅ 9. `orders`

## \_\_\_/get/data/8

```json
{
  "Data": [
    {
      "order_number": "ORD-0000",
      "customer_name": "Amanuel Bakery",
      "product_id": 1,
      "quantity": 200,
      "price_per_unit": 38.0,
      "order_date": "2025-07-24",
      "delivery_date": "2025-07-27",
      "status": "confirmed"
    }
  ]
}
```

---

### ✅ 10. `payments`

## \_\_\_/get/data/9

```json
{
  "Data": [
    {
      "order_id": 1,
      "payment_date": "2025-07-26",
      "amount_paid": 7600.0,
      "payment_method": "bank_transfer",
      "received_by": 1
    }
  ]
}
```

---

### ✅ 11. `transactions`

## \_\_\_/get/data/10

```json
{
  "Data": [
    {
      "type": "incoming",
      "product_id": 1,
      "store_id": 1,
      "quantity": 1000,
      "transaction_date": "2025-07-25T09:00:00",
      "created_by": 1
    }
  ]
}
```

---

### ✅ 12. `product_batches`

## \_\_\_/get/data/11

```json
{
  "Data": [
    {
      "product_id": 1,
      "batch_number": "BATCH-0001",
      "manufacture_date": "2025-07-23",
      "expiry_date": "2026-01-23",
      "quantity": 1000
    }
  ]
}
```

---

### ✅ 13. `inventory_logs`

## \_\_\_/get/data/12

```json
{
  "Data": [
    {
      "product_id": 1,
      "store_id": 1,
      "action": "add",
      "quantity": 1000,
      "log_date": "2025-07-25",
      "performed_by": 1
    }
  ]
}
```

---

### ✅ 14. `product_recipes`

## \_\_\_/get/data/13

```json
{
  "Data": [
    {
      "product_id": 1,
      "raw_material_id": 1,
      "quantity_required": 1.5
    }
  ]
}
```

---

### ✅ 15. `product_quality_checks`

## \_\_\_/get/data/14

```json
{
  "Data": [
    {
      "product_id": 1,
      "checked_by": 1,
      "check_date": "2025-07-25",
      "status": "passed",
      "remarks": "Quality confirmed"
    }
  ]
}
```

---

### ✅ 16. `store_transfers`

## \_\_\_/get/data/15

```json
{
  "Data": [
    {
      "product_id": 1,
      "from_store_id": 1,
      "to_store_id": 1,
      "quantity": 100,
      "transfer_date": "2025-07-25",
      "approved_by": 1
    }
  ]
}
```

---

### ✅ 17. `customer_feedback`

## \_\_\_/get/data/16

```json
{
  "Data": [
    {
      "order_id": 1,
      "customer_name": "Amanuel Bakery",
      "feedback_date": "2025-07-28",
      "rating": 5,
      "comments": "Excellent flour quality"
    }
  ]
}
```

---

### ✅ 18. `product_returns`

## \_\_\_/get/data/17

```json
{
  "Data": [
    {
      "order_id": 1,
      "product_id": 1,
      "quantity": 5,
      "return_date": "2025-07-29",
      "reason": "Damaged during delivery"
    }
  ]
}
```

---

### ✅ 19. `system_users`

## \_\_\_/get/data/18

```json
{
  "Data": [
    {
      "username": "admin",
      "password_hash": "hashed_password_123",
      "role": "admin",
      "email": "admin@factory.com"
    }
  ]
}
```

---

### ✅ 20. `audit_logs`

## \_\_\_/get/data/19

```json
{
  "Data": [
    {
      "user_id": 1,
      "action": "insert",
      "table_name": "products",
      "record_id": 1,
      "action_time": "2025-07-27T12:00:00",
      "remarks": "Initial product entry"
    }
  ]
}
```

---

If you want:

- ✅ SQL insert scripts for each
- ✅ JSON file download
- ✅ Seed logic for Node.js or Django
- ✅ MongoDB or PostgreSQL versions

# Postig data/registering

\_\_\_/post/data/0

```json
[
  {
    "name": "Helper",
    "description": "Customer Users"
  },
  {
    "name": "Worker",
    "description": "Customer Users"
  }
]
```

### 📋 **Use Case Table: Factory Store Management System**

| **#** | **Use Case / Functional Requirement**    | **Description**                                                             | **Inputs**                                                          | **Outputs**                                             |
| ----: | ---------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------- |
|     1 | Factory Registration and Management      | Add and manage factories located in different regions                       | Factory Name, Location, Manager, Contact Info                       | Factory ID, Confirmation Message                        |
|     2 | Product Registration                     | Register different products produced in the factory                         | Product Name, Type (Flour, Oil, etc.), Unit, Description            | Product ID, Confirmation Message                        |
|     3 | Raw Material Management                  | Handle incoming raw materials with type and quantity                        | Supplier Info, Material Type, Quantity, Unit, Delivery Date         | Raw Material ID, Inventory Update, Receipt Confirmation |
|     4 | Incoming Product Recording               | Record products received from production or external suppliers              | Product ID, Quantity, Source Type (Production/Supplier), Date       | Inventory Update, Confirmation Message                  |
|     5 | Outgoing Product Management              | Manage dispatch of products to customers or branches                        | Product ID, Quantity, Destination, Order ID, Dispatch Date          | Inventory Update, Delivery Note                         |
|     6 | Order Placement (Incoming and Outgoing)  | Record and track customer and supplier orders                               | Order Type, Party Info, Product ID, Quantity, Due Date, Status      | Order ID, Order Confirmation, Order Status Update       |
|     7 | Payment Processing                       | Record payments received or made for raw materials or product sales         | Party Info, Amount, Payment Mode, Reference Number                  | Payment Receipt, Payment Record ID                      |
|     8 | Product Fusion / Batch Production        | Combine raw materials into new products with batch tracking                 | Input Material IDs, Quantities, Output Product Type, Batch ID       | New Product Record, Batch Report                        |
|     9 | Inventory Tracking                       | Monitor real-time inventory of raw materials and finished products          | Factory ID, Product ID                                              | Quantity On Hand, Alerts if Low Stock                   |
|    10 | Supplier Management                      | Manage supplier details and performance                                     | Supplier Name, Address, Material Types, Contact Info                | Supplier ID, Supplier Record                            |
|    11 | Customer Management                      | Manage customer details and sales history                                   | Customer Name, Address, Contact Info                                | Customer ID, Sales Report                               |
|    12 | Factory-to-Factory Transfer              | Allow internal transfers between factories                                  | From Factory ID, To Factory ID, Product ID, Quantity, Transfer Date | Transfer Record, Inventory Adjustments                  |
|    13 | Transaction History and Logs             | View complete logs of stock movement, orders, payments, etc.                | Filter Parameters (Date, Type, Party, Product)                      | Transaction Logs, Printable Reports                     |
|    14 | API Endpoint Access and Data Export      | Provide endpoint `/get/data/:id` for external systems to access data        | Data Request ID (0 = Factories, 1 = Products, etc.)                 | JSON Response with requested data                       |
|    15 | Dashboard Reporting and KPIs             | Visual dashboard for stock levels, order status, payments, and production   | None or Date Range                                                  | Graphs, Tables, KPIs                                    |
|    16 | Role-Based Access Control (RBAC)         | Define and restrict user permissions (admin, store clerk, accountant, etc.) | User Role, Assigned Permissions                                     | Role Profiles, Access Logs                              |
|    17 | Notification & Alert System              | Notify for low stock, overdue payments, and production completion           | Trigger Events (low stock, payment due, etc.)                       | Email/SMS/On-Screen Notification                        |
|    18 | Authentication & User Management         | Secure login and user profile management                                    | Username, Password, Role, 2FA (optional)                            | JWT Token / Session, Login Logs                         |
|    19 | Audit Trail                              | Track who made changes to what and when                                     | Change Action, User ID, Timestamp                                   | Audit Log Entry                                         |
|    20 | System Configuration & Master Data Setup | Setup units, product types, factory types, locations, and parameters        | Config Name, Value                                                  | System Config Table Update                              |

### ✅ 1. **Factory Registration and Management**

**Flow:**

1. Admin logs in
2. Navigate to "Factory Management"
3. Click “Add Factory”
4. Input factory name, location, manager, contacts
5. Submit form
6. System validates and stores data
7. Confirmation returned with Factory ID

---

### ✅ 2. **Product Registration**

**Flow:**

1. User selects “Product Registration”
2. Enters product name, type (e.g., flour), unit, description
3. Clicks “Save”
4. System validates uniqueness and data
5. Product is stored and ID is returned

---

### ✅ 3. **Raw Material Management**

**Flow:**

1. Warehouse staff logs raw material delivery
2. Selects supplier and material type
3. Enters quantity and delivery date
4. System checks if material exists
5. Inventory updated
6. Receipt generated and linked to supplier

---

### ✅ 4. **Incoming Product Recording**

**Flow:**

1. User selects product source (production or supplier)
2. Enters product type and quantity
3. Links to source (batch ID or supplier)
4. Submits form
5. System updates product inventory
6. Confirmation displayed

---

### ✅ 5. **Outgoing Product Management**

**Flow:**

1. Sales staff selects “Dispatch Product”
2. Enters destination (customer/factory) and product info
3. Links to existing order or creates new
4. Inventory level checked
5. Stock deducted
6. Dispatch record created
7. Delivery document generated

---

### ✅ 6. **Order Placement**

**Flow:**

1. User selects “Place Order”
2. Selects type (incoming or outgoing)
3. Enters customer/supplier, product, quantity, date
4. System checks for duplication
5. Order saved
6. Order ID generated and status = "Pending"

---

### ✅ 7. **Payment Processing**

**Flow:**

1. Accountant selects payment screen
2. Links payment to order/customer
3. Enters amount, mode, reference
4. System checks if due/advance
5. Payment recorded
6. Receipt generated

---

### ✅ 8. **Product Fusion / Batch Production**

**Flow:**

1. Production team selects "Create Batch"
2. Chooses raw materials and their quantities
3. Enters expected output product
4. Submits form
5. System checks material availability
6. Deducts inputs, adds output
7. Batch number and report created

---

### ✅ 9. **Inventory Tracking**

**Flow:**

1. User views inventory dashboard
2. System fetches stock of raw & finished products
3. Low stock alerts shown
4. Can apply filters (factory, product, date)
5. Optionally export to Excel

---

### ✅ 10. **Supplier Management**

**Flow:**

1. User adds or updates supplier details
2. System validates contact info and types of supply
3. Supplier saved to system
4. Linked to future transactions

---

### ✅ 11. **Customer Management**

**Flow:**

1. User navigates to “Customers”
2. Adds name, contact, address
3. Customer profile created
4. Sales history automatically updated as they purchase

---

### ✅ 12. **Factory-to-Factory Transfer**

**Flow:**

1. Initiate transfer request from one factory
2. Select products and quantity
3. Choose destination factory
4. Stock checked at source
5. Stock deducted from source, marked as "In Transit"
6. On confirmation, stock added at destination

---

### ✅ 13. **Transaction History and Logs**

**Flow:**

1. User opens transaction log view
2. Applies filters (by date, party, product)
3. System displays list of all related transactions
4. Option to view, download, or audit

---

### ✅ 14. **API Endpoint Access (/get/data/\:id)**

**Flow:**

1. External system hits `/get/data/0`
2. Middleware authenticates request
3. `id = 0` maps to Factory list (1 = Products, 2 = Orders, etc.)
4. JSON returned
5. Errors returned if invalid ID or unauthorized

---

### ✅ 15. **Dashboard Reporting and KPIs**

**Flow:**

1. User logs in
2. Dashboard loads with key summaries: stock, orders, payments, etc.
3. Option to view graphs (weekly, monthly, product-wise)
4. KPIs highlighted (order fulfillment, stock days left)

---

### ✅ 16. **Role-Based Access Control**

**Flow:**

1. Admin defines roles and permissions
2. Users are assigned roles
3. System checks role before allowing action (e.g., only accountant can process payments)
4. Access attempts are logged

---

### ✅ 17. **Notification & Alert System**

**Flow:**

1. Event triggered (e.g., low stock, late order)
2. System identifies alert recipients
3. Notification generated
4. Sent via email/SMS/in-app
5. Acknowledgement is logged

---

### ✅ 18. **Authentication & User Management**

**Flow:**

1. User registers or logs in
2. Credentials verified
3. JWT token issued (or session created)
4. Role and profile info loaded
5. Expired sessions are cleared automatically

---

### ✅ 19. **Audit Trail**

**Flow:**

1. Any action (add/update/delete) triggers audit log
2. Captures user, timestamp, action, previous & new value
3. Viewable by admin for compliance

---

### ✅ 20. **System Configuration**

**Flow:**

1. Admin sets up units, product types, and parameters
2. These are used system-wide for consistency
3. Updates are versioned and auditable
4. Used in dropdowns and validations

# Menu Orginzations

## 🔐 1. **User & Role Management**

- **User Authentication** (Login/Logout, hashed password)
- **User Registration & Activation**
- **User Profile Management**
- **Role-Based Access Control (RBAC)**
- **User-Role Assignment**
- **User Status Toggle (Active/Inactive)**

---

## 🏭 2. **Factories & Stores**

- **Factory Registration and Management**
- **Store Creation per Factory**
- **Store Type Management** (Raw Material / Finished Goods / General)
- **Store Activation/Deactivation**
- **Cascading Deletion of Stores on Factory Removal**

---

## 📦 3. **Product Catalog**

- **Product Category Management**
- **Product Creation & Management**

  - Code uniqueness
  - Product types: Raw / Semi-finished / Finished

- **Unit of Measurement Handling**
- **Product Description & Status**

---

## 🧮 4. **Stock Management**

- **View and Manage Stock Levels by Store**
- **Automatic Stock Update after Transactions**
- **Low Stock Alerts**
- **Stock Last Updated Timestamp**

---

## 🔁 5. **Transactions (In/Out/Transfer)**

- **Incoming Goods Registration**
- **Outgoing Goods Tracking**
- **Store-to-Store Transfers**
- **Transaction Logs and History**
- **Reference and Source/Destination Tracking**
- **User Attribution (Created By)**
- **Remarks and Notes on Each Transaction**

---

## ⚙️ 6. **Product Processing**

- **Define Processing Recipes (Input → Output)**
- **Record Production Activities**
- **Track Input Product Usage**
- **Track Output Product Quantities**
- **Link to Store and User**
- **Maintain Historical Processing Records**

---

## 📥 7. **Supplier Purchase Orders**

- **Supplier Management**
- **Purchase Order Creation & Status Management**
  (Pending, Approved, Fulfilled, Cancelled)
- **Expected Delivery Dates**
- **Purchase Order Line Items**
- **Record Unit Prices & Quantities**
- **Track Supplier Deliveries and Fulfillment**

---

## 📤 8. **Customer Sales Orders**

- **Customer Management**
- **Sales Order Creation & Status Management**
  (Pending, Approved, Fulfilled, Cancelled)
- **Delivery Dates Tracking**
- **Sales Order Line Items**
- **Unit Prices per Order**
- **Customer Fulfillment Tracking**

---

## 💳 9. **Payments**

- **Record Payments for Purchase or Sales Orders**
- **Payment Status Management** (Unpaid / Partial / Paid)
- **Link Payments to Orders**
- **Track Payment Dates and Amounts**
- **Payer Information Capture**
- **Remarks and Comments Handling**

---

## 📝 10. **Audit Logs**

- **Track all Create, Update, Delete, Process actions**
- **Log the table name, action, user, and details**
- **Action timestamp for auditing purposes**
- **Admin access to review all logs**

---

## 📊 Optional Dashboard Features

You can also add dashboards for enhanced usability:

- **Factory & Store Overview**
- **Product Stock Summary**
- **Purchase & Sales Order Reports**
- **Top Suppliers / Customers**
- **Inventory Flow Charts**
- **Audit & Transaction Trends**

## 🏠 **Dashboard**

- **Home Dashboard**

  - Overview of key metrics (stocks, orders, payments)
  - Quick access links (create PO, view transactions)
  - Charts: Stock levels, top-selling products, order status distribution

---

## 👤 **User Management**

- **Users List**
- **Create/Edit User**
- **Assign Roles to Users**
- **Roles List**
- **Create/Edit Role**

---

## 🏭 **Factories & Stores**

- **Factories List**
- **Create/Edit Factory**
- **Stores List (per Factory)**
- **Create/Edit Store**
- **Store Types (raw_material, finished_goods, general)**

---

## 📦 **Product Management**

- **Product Categories**
- **Products List**
- **Create/Edit Product**
- **View Product Details**
- **Product Status Management**

---

## 📊 **Inventory Management**

- **Stock Overview by Store**
- **Update Stock (Manual or via Transaction)**
- **Low Stock Alerts**
- **Stock History Log**

---

## 🔄 **Transactions**

- **All Transactions List**
- **Create Incoming Transaction**
- **Create Outgoing Transaction**
- **Create Transfer**
- **Transaction Details**
- **Transaction Reports (filters, export)**

---

## ⚙️ **Processing**

- **Processing Activities List**
- **Create New Processing**
- **View Processing Details**
- **Input & Output Products**
- **Processing Reports**

---

## 📥 **Purchases**

- **Suppliers List**
- **Create/Edit Supplier**
- **Purchase Orders List**
- **Create/Edit Purchase Order**
- **PO Items Entry**
- **PO Status Tracking**
- **PO Reports**

---

## 📤 **Sales**

- **Customers List**
- **Create/Edit Customer**
- **Sales Orders List**
- **Create/Edit Sales Order**
- **Sales Order Items Entry**
- **Sales Order Status Tracking**
- **Sales Reports**

---

## 💳 **Payments**

- **Payments List**
- **Record Incoming Payment (from Customer)**
- **Record Outgoing Payment (to Supplier)**
- **Link Payments to Orders**
- **Payment Status Overview**
- **Payment Reports**

---

## 📑 **Audit Logs**

- **View Logs by Table/Action/User**
- **Filter Logs by Date**
- **Export Logs**

---

## ⚙️ **Settings / Configuration**

- **App Configuration (optional)**
- **Units of Measurement (if not hardcoded)**
- **Enums Management (Status, Types)**

---

## 📚 **Reports (optional section)**

- **Inventory Valuation**
- **Order Fulfillment Reports**
- **Top Customers / Suppliers**
- **Monthly Transaction Summary**
- **Sales vs Purchase Comparison**

---

## 🔒 **Authentication Pages**

- **Login**
- **Logout**
- **Reset Password / Forgot Password**
- **Change Password**
