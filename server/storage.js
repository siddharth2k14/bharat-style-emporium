import { db } from "./db.js";
import {
  products,
  inquiries,
} from "../shared/schema.js";

export class DatabaseStorage {
  async getProducts() {
    return await db.select().from(products);
  }

  async getProduct(id) {
    const [product] = await db
      .select()
      .from(products)
      .where(eq(products.id, id));
    return product;
  }

  async createProduct(insertProduct) {
    const [product] = await db
      .insert(products)
      .values(insertProduct)
      .returning();
    return product;
  }

  async createInquiry(insertInquiry) {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }
}

import { eq } from "drizzle-orm";

export const storage = new DatabaseStorage();
