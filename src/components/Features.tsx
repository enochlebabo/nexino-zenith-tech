import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Cpu, Lock, Zap, Globe, Database } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions built for enterprise-level performance and reliability.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI algorithms that learn and adapt to your business needs.",
  },
  {
    icon: Lock,
    title: "Advanced Security",
    description: "Military-grade encryption and security protocols to protect your data.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance delivering results in milliseconds, not seconds.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide infrastructure ensuring low latency and high availability.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Real-time insights and analytics to drive informed business decisions.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
