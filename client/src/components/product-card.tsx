import { motion } from "framer-motion";
import { Product } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/918052797415?text=Hi, I am interested in ${encodeURIComponent(product.name)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 hover:bg-primary text-white border-none px-3 py-1">
              {product.category}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              className="bg-accent text-primary-foreground hover:bg-white hover:text-primary font-semibold"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Inquire Now
            </Button>
          </div>
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold font-heading text-primary line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{product.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t pt-4">
          <span className="text-lg font-bold text-accent-foreground">
            {product.price > 0 ? `₹${(product.price / 100).toFixed(2)}` : "Contact for Price"}
          </span>
          <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700 hover:bg-green-50" onClick={() => window.open(whatsappUrl, '_blank')}>
            <MessageCircle className="h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
