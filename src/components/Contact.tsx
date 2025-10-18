import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to elevate your business with innovative IT solutions? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="crystal-effect border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-2"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-2"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="bg-background/50 border-2"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your IT requirements and project goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px] bg-background/50 border-2"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Request Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="crystal-effect border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground font-medium">info@nexinotech.com</p>
                  <p className="text-muted-foreground text-sm mt-1">We reply within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="crystal-effect border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground font-medium">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </CardContent>
            </Card>

            <Card className="crystal-effect border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                  <p className="text-muted-foreground font-medium">
                    123 Innovation Plaza<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
