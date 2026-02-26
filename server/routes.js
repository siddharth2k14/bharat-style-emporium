import { api } from "../shared/routes.js";
import { z } from "zod";

export async function registerRoutes(httpServer, app) {
  let storage;

  if (process.env.DATABASE_URL) {
    // use real database-backed storage when DATABASE_URL is provided
    const mod = await import("./storage.js");
    storage = mod.storage;
  } else {
    // fallback in-memory storage for local development without a database
    const products = [];
    let nextProductId = 1;
    const inquiries = [];
    let nextInquiryId = 1;

    storage = {
      async getProducts() {
        return products;
      },
      async getProduct(id) {
        return products.find((p) => p.id === id);
      },
      async createProduct(insertProduct) {
        const product = { id: nextProductId++, ...insertProduct };
        products.push(product);
        return product;
      },
      async createInquiry(insertInquiry) {
        const inquiry = { id: nextInquiryId++, ...insertInquiry };
        inquiries.push(inquiry);
        return inquiry;
      },
    };
  }

  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  app.post(api.products.create.path, async (req, res) => {
    try {
      const input = api.products.create.input.parse(req.body);
      const product = await storage.createProduct(input);
      res.status(201).json(product);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  // Initialize seed data
  await seedDatabase(storage);

  return httpServer;
}

export async function seedDatabase(storage) {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    const seedProducts = [
      {
        name: "Premium Cotton Shirt",
        description: "High-quality cotton shirt suitable for formal and casual wear.",
        price: 999,
        category: "Men's Clothing",
        imageUrl:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Designer Silk Saree",
        description: "Elegant silk saree with intricate embroidery work.",
        price: 2499,
        category: "Women's Clothing",
        imageUrl:
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Linen Fabric Material",
        description: "Pure linen fabric ideal for summer clothing.",
        price: 450,
        category: "Fabric & Shirting",
        imageUrl:
          "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Traditional Kurta Set",
        description: "Festive wear kurta set with fine detailing.",
        price: 1500,
        category: "Traditional Wear",
        imageUrl:
          "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=600",
      },
    ];

    for (const product of seedProducts) {
      await storage.createProduct(product);
    }
  }
}
