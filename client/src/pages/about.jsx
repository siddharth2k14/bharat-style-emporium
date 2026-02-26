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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 items-start"
            >
              <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary text-lg">{value}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionHeading 
          title="Our Location" 
          subtitle="Visit us in Kanpur"
          centered
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl border shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Visit Us</h3>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong><br />
                Shop No. 253, Near Vinayak Pur, Rajiv Nagar, Sharda Nagar, Kanpur – 208025
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong><br />
                <a href="tel:+918052797415" className="text-primary hover:underline">+91 80527 97415</a>
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong><br />
                Open 24 Hours, 7 Days a Week
              </p>
            </div>
            <div className="h-96 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.258837130635!2d80.2822102!3d26.4861675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Store Location"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
