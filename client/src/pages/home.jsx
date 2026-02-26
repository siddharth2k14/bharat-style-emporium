import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingBag, Scissors, Award, Clock } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import { useProducts } from "@/hooks/use-products";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  // Filter top 4 products for homepage display
  const featuredProducts = products?.slice(0, 4) || [];

  const categories = [
    { 
      name: "Men's Collection", 
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop",
      count: "120+ Items"
    },
    { 
      name: "Women's Fashion", 
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      count: "250+ Items"
    },
    { 
      name: "Premium Fabrics", 
      image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2072&auto=format&fit=crop",
      count: "50+ Types"
    },
    { 
      name: "Traditional Wear", 
      image: "https://images.unsplash.com/photo-1610030469983-98e55041d04f?q=80&w=2070&auto=format&fit=crop",
      count: "80+ Designs"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          {/* Fashion store hero image */}
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Bharat Clothes Store Interior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4"
          >
            Welcome to Bharat Clothes Store
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Quality Fabrics & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-500">
              Fashion at Affordable Prices
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Discover the finest collection of clothing and fabrics in Sharda Nagar, Kanpur. Tradition meets modernity in every thread.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                Visit Store
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full"
              onClick={() => window.open('tel:+918052797415')}
            >
              Call Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all text-center group"
            >
              <div className="bg-primary/5 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Scissors className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Premium Fabrics</h3>
              <p className="text-muted-foreground">Handpicked materials that ensure comfort and durability for every season.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all text-center group"
            >
              <div className="bg-primary/5 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Affordable Pricing</h3>
              <p className="text-muted-foreground">High-end fashion shouldn't break the bank. Best prices guaranteed in Kanpur.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all text-center group"
            >
              <div className="bg-primary/5 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Open 24 Hours</h3>
              <p className="text-muted-foreground">We are always available to serve you. Shop at your convenience, day or night.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Shop By Category" 
            subtitle="Explore our diverse range of collections meticulously curated for you."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors z-10" />
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                  <h3 className="font-heading text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                  <p className="text-accent font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">{cat.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Collection" 
            subtitle="Our latest arrivals and most popular items picked just for you."
          />
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-96 bg-gray-200 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredProducts.length > 0 ? (
                featuredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))
              ) : (
                <div className="col-span-4 text-center py-12 text-muted-foreground">
                  No products loaded yet. Check back soon!
                </div>
              )}
            </div>
          )}
          
          <div className="text-center">
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="What Our Customers Say" 
            subtitle="Rated 4.2 Stars by our happy customers on Google."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Priya Singh", text: "Amazing collection of sarees and suits. The fabric quality is top-notch and prices are very reasonable.", rating: 5 },
              { name: "Rahul Sharma", text: "Best place for men's shirting in Sharda Nagar. The staff is very helpful and polite.", rating: 4 },
              { name: "Anjali Gupta", text: "I regularly visit for fabric shopping. They have unique designs that you won't find elsewhere.", rating: 5 }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="flex text-accent mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-white/90 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <span className="text-xs text-white/60">Verified Customer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.258837130635!2d80.2822102!3d26.4861675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI5JzEwLjIiTiA4MMKwMTYnNTYuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Store Location"
        />
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <h4 className="font-bold text-primary">Bharat Clothes Store</h4>
          <p className="text-sm text-gray-600 mt-1">Shop No. 253, Near Vinayak Pur, Rajiv Nagar, Sharda Nagar, Kanpur</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
