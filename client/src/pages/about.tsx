import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const values = [
    "Quality Assurance", "Customer Satisfaction", "Affordable Pricing", "Diverse Collection", "Fabric Expertise", "Community Trust"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Serving the people of Kanpur with quality and trust.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bharat Clothes Store has been a cornerstone of fashion in Sharda Nagar, Kanpur. Established with a vision to provide high-quality fabrics and readymade garments at prices that everyone can afford, we have grown to become a trusted name in the locality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Located conveniently near Vinayak Pur, Rajiv Nagar, we pride ourselves on understanding the fashion needs of our community. Whether it's traditional wear for a wedding or comfortable daily wear, we curate our collection with care and attention to detail.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop" 
              alt="Fabrics Textures" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </motion.div>
        </div>

        <SectionHeading 
          title="Why Choose Bharat Clothes Store?" 
          subtitle="We believe in building relationships, not just customers."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border hover:border-primary/30 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
              <span className="font-semibold text-lg">{value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
