

  // 0. USER & ROLE MANAGEMENT
  //"roles", // 0
{
    "Data": [
        {
            "id": 1,
            "name": "Admin",
            "description": "System Administrator"
        },
        {
            "id": 2,
            "name": "Manager",
            "description": "Factory or Store Manager"
        },
        {
            "id": 3,
            "name": "Operator",
            "description": "Processing and Stock Operator"
        }
    ]
}

  //"users", // 1

  {
    "Data": [
        {
            "id": 1,
            "username": "admin",
            "email": "admin@factory.com",
            "password_hash": "hashed_admin_pw",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 2,
            "username": "manager1",
            "email": "manager1@factory.com",
            "password_hash": "hashed_mgr_pw",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 3,
            "username": "operator1",
            "email": "operator1@factory.com",
            "password_hash": "hashed_op_pw",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        }
    ]
}


 // "user_roles", // 2
{
    "Data": [
        {
            "id": 1,
            "user_id": 1,
            "role_id": 1
        },
        {
            "id": 2,
            "user_id": 2,
            "role_id": 2
        },
        {
            "id": 3,
            "user_id": 3,
            "role_id": 3
        }
    ]
}

  // 3. FACTORIES & STORES
  //"factories", // 3
  {
    "Data": [
        {
            "id": 1,
            "name": "Addis Flour Factory",
            "location": "Addis Ababa",
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 2,
            "name": "Bahir Dar Mill",
            "location": "Bahir Dar",
            "created_at": "2025-07-27T07:50:06.000Z"
        }
    ]
}

//  "stores", // 4
{
    "Data": [
        {
            "id": 1,
            "factory_id": 1,
            "name": "Raw Material Store",
            "type": "raw_material",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 2,
            "factory_id": 1,
            "name": "Finished Goods Store",
            "type": "finished_goods",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 3,
            "factory_id": 2,
            "name": "Bahir General Store",
            "type": "general",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        }
    ]
}

  // 5. PRODUCT CATALOG
  //"product_categories", // 5

{
    "Data": [
        {
            "id": 1,
            "name": "Grains"
        },
        {
            "id": 2,
            "name": "Flour"
        },
        {
            "id": 3,
            "name": "Packaging"
        }
    ]
}

  "products", // 6
{
    "Data": [
        {
            "id": 1,
            "name": "Wheat Grain",
            "code": "WG-001",
            "category_id": 1,
            "unit": "kg",
            "type": "raw",
            "description": "Clean wheat grains",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 2,
            "name": "Maize Grain",
            "code": "MG-001",
            "category_id": 1,
            "unit": "kg",
            "type": "raw",
            "description": "Clean maize grains",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 3,
            "name": "White Flour",
            "code": "WF-001",
            "category_id": 2,
            "unit": "kg",
            "type": "finished",
            "description": "Processed white flour",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 4,
            "name": "Brown Flour",
            "code": "BF-001",
            "category_id": 2,
            "unit": "kg",
            "type": "finished",
            "description": "Whole brown flour",
            "is_active": 1,
            "created_at": "2025-07-27T07:50:06.000Z"
        }
    ]
}

  // 7. STOCK MANAGEMENT
  "stock", // 7
  {
    "Data": [
        {
            "id": 1,
            "store_id": 1,
            "product_id": 1,
            "quantity": 10000,
            "last_updated": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 2,
            "store_id": 1,
            "product_id": 2,
            "quantity": 8000,
            "last_updated": "2025-07-27T07:50:06.000Z"
        },
        {
            "id": 3,
            "store_id": 2,
            "product_id": 3,
            "quantity": 2500,
            "last_updated": "2025-07-27T07:50:06.000Z"
        }
    ]
}

  // 8. TRANSACTIONS (IN/OUT/TRANSFER)
  "transactions", // 8
  {
    "Data": [
        {
            "id": 1,
            "transaction_type": "outgoing",
            "store_id": 1,
            "product_id": 1,
            "quantity": 80,
            "transaction_date": "2025-07-25T21:00:00.000Z",
            "source_or_destination": null,
            "reference": null,
            "created_by": 1,
            "remarks": null
        },
        {
            "id": 2,
            "transaction_type": "incoming",
            "store_id": 2,
            "product_id": 3,
            "quantity": 150,
            "transaction_date": "2025-07-24T21:00:00.000Z",
            "source_or_destination": null,
            "reference": null,
            "created_by": 2,
            "remarks": null
        }
    ]
}

  "store_transfers", // 9

  {
    "Data": [
        {
            "id": 1,
            "from_store_id": 1,
            "to_store_id": 2,
            "product_id": 1,
            "quantity": 200,
            "transfer_date": "2025-07-27T08:07:04.000Z",
            "initiated_by": 2,
            "remarks": "Transfer to finished store",
            "created_at": "2025-07-27T08:07:04.000Z"
        }
    ]
}

  // 10. PRODUCT PROCESSING
  "processing", // 10
  {
    "Data": [
        {
            "id": 1,
            "store_id": 2,
            "output_product_id": 3,
            "total_output_quantity": 800,
            "processing_date": "2025-07-27T08:07:43.000Z",
            "created_by": 3,
            "remarks": "Processed from wheat grain",
            "created_at": "2025-07-27T08:07:43.000Z"
        }
    ]
}
  "processing_inputs", // 11
  {
    "Data": [
        {
            "id": 1,
            "processing_id": 1,
            "input_product_id": 1,
            "quantity_used": 1000
        }
    ]
}

  // 12. SUPPLIER PURCHASE ORDERS
  "suppliers", // 12
  {
    "Data": [
        {
            "id": 1,
            "name": "Agro Traders",
            "contact": "0911122233"
        },
        {
            "id": 2,
            "name": "FarmCo PLC",
            "contact": "0933445566"
        },
        {
            "id": 3,
            "name": "AgriSuppliers PLC",
            "contact": "Abebe Tulu, 0911122233"
        },
        {
            "id": 4,
            "name": "FarmTrade Ltd.",
            "contact": "Selam Mekonnen, 0933445566"
        }
    ]
}
  "purchase_orders", // 13
  {
    "Data": [
        {
            "id": 1,
            "supplier_id": 1,
            "order_date": "2025-07-27T07:50:06.000Z",
            "status": "approved",
            "expected_delivery": "2025-07-31T21:00:00.000Z",
            "remarks": null
        },
        {
            "id": 2,
            "supplier_id": 2,
            "order_date": "2025-07-27T07:50:06.000Z",
            "status": "pending",
            "expected_delivery": "2025-08-04T21:00:00.000Z",
            "remarks": null
        },
        {
            "id": 3,
            "supplier_id": 1,
            "order_date": "2025-07-27T08:07:44.000Z",
            "status": "approved",
            "expected_delivery": "2025-07-31T21:00:00.000Z",
            "remarks": "Urgent stock refill"
        }
    ]
}
  "purchase_order_items", // 14
  {
    "Data": [
        {
            "id": 1,
            "purchase_order_id": 1,
            "product_id": 1,
            "quantity": 5000,
            "unit_price": 1.2
        },
        {
            "id": 2,
            "purchase_order_id": 1,
            "product_id": 2,
            "quantity": 3000,
            "unit_price": 1
        },
        {
            "id": 3,
            "purchase_order_id": 1,
            "product_id": 1,
            "quantity": 2000,
            "unit_price": 4.5
        }
    ]
}

  // 15. CUSTOMER SALES ORDERS
  "customers", // 15
  {
    "Data": [
        {
            "id": 1,
            "name": "Sunshine Bakery",
            "contact": "0988776655"
        },
        {
            "id": 2,
            "name": "Golden Loaf",
            "contact": "0977665544"
        },
        {
            "id": 3,
            "name": "Bakery House",
            "contact": "Melat G, 0922113344"
        },
        {
            "id": 4,
            "name": "Retail Foods",
            "contact": "Dawit K, 0911002233"
        }
    ]
}
  "sales_orders", // 16
  {
    "Data": [
        {
            "id": 1,
            "customer_id": 1,
            "order_date": "2025-07-27T07:50:06.000Z",
            "status": "approved",
            "delivery_date": "2025-08-09T21:00:00.000Z",
            "remarks": null
        },
        {
            "id": 2,
            "customer_id": 2,
            "order_date": "2025-07-27T07:50:06.000Z",
            "status": "pending",
            "delivery_date": "2025-08-11T21:00:00.000Z",
            "remarks": null
        },
        {
            "id": 3,
            "customer_id": 1,
            "order_date": "2025-07-27T08:07:44.000Z",
            "status": "pending",
            "delivery_date": "2025-08-02T21:00:00.000Z",
            "remarks": "Weekly order"
        }
    ]
}
  "sales_order_items", // 17
  {
    "Data": [
        {
            "id": 1,
            "sales_order_id": 1,
            "product_id": 3,
            "quantity": 1000,
            "unit_price": 2.5
        },
        {
            "id": 2,
            "sales_order_id": 2,
            "product_id": 4,
            "quantity": 750,
            "unit_price": 2.7
        },
        {
            "id": 3,
            "sales_order_id": 1,
            "product_id": 3,
            "quantity": 500,
            "unit_price": 12
        }
    ]
}

  // 18. PAYMENTS
  "payments", // 18
  {
    "Data": [
        {
            "id": 1,
            "payment_type": "incoming",
            "ref_order_id": 1,
            "ref_order_type": "sales",
            "amount": 2500,
            "paid_on": "2025-07-27T07:50:06.000Z",
            "status": "paid",
            "paid_by": "Cash",
            "remarks": null
        },
        {
            "id": 2,
            "payment_type": "incoming",
            "ref_order_id": 2,
            "ref_order_type": "sales",
            "amount": 2025,
            "paid_on": "2025-07-27T07:50:06.000Z",
            "status": "partial",
            "paid_by": "Bank Transfer",
            "remarks": null
        },
        {
            "id": 3,
            "payment_type": "incoming",
            "ref_order_id": 1,
            "ref_order_type": "sales",
            "amount": 6000,
            "paid_on": "2025-07-27T08:07:44.000Z",
            "status": "partial",
            "paid_by": "Bakery House",
            "remarks": "50% advance"
        }
    ]
}

  // 19. AUDIT LOGS
  "transaction_logs", // 19
  {
    "Data": [
        {
            "id": 1,
            "action_type": "CREATE",
            "table_name": "products",
            "record_id": 3,
            "performed_by": 1,
            "action_details": "Added new product White Flour",
            "action_timestamp": "2025-07-27T08:07:44.000Z"
        },
        {
            "id": 2,
            "action_type": "UPDATE",
            "table_name": "stock",
            "record_id": 1,
            "performed_by": 2,
            "action_details": "Adjusted quantity after receipt",
            "action_timestamp": "2025-07-27T08:07:44.000Z"
        }
    ]
}

