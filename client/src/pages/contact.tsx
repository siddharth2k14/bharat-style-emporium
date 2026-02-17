import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for any queries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Our Store</h3>
                  <p className="text-gray-600">Shop No. 253, Near Vinayak Pur,</p>
                  <p className="text-gray-600">Rajiv Nagar, Sharda Nagar,</p>
                  <p className="text-gray-600">Kanpur – 208025, Uttar Pradesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">Mobile: +91 80527 97415</p>
                  <p className="text-sm text-gray-500 mt-1">Available 24/7 for your queries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">info@bharatclothes.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">Open 24 Hours</p>
                  <p className="text-gray-600">Monday to Sunday</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 bg-gray-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" className="h-12 bg-gray-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us what you're looking for..." 
                          className="min-h-[150px] bg-gray-50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
                  disabled={isPending}
                >
                  {isPending ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
      
      {/* Map */}
      <div className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.258837130635!2d80.2822102!3d26.4861675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI5JzEwLjIiTiA4MMKwMTYnNTYuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        />
      </div>

      <Footer />
    </div>
  );
}
