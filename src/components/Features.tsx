import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Headphones, Users, Database, Cpu } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs with scalable architecture.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Expert cloud migration, deployment, and management services for AWS, Azure, and Google Cloud.",
  },
  {
    icon: Database,
    title: "IT Infrastructure",
    description: "Robust IT infrastructure design, implementation, and maintenance for enterprise-grade systems.",
  },
  {
    icon: Cpu,
    title: "System Integration",
    description: "Seamless integration of legacy and modern systems to optimize your technology ecosystem.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to guide your digital transformation and innovation initiatives.",
  },
  {
    icon: Headphones,
    title: "Managed IT Services",
    description: "24/7 monitoring, support, and maintenance to keep your systems running at peak performance.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">IT Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive software and IT solutions to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="crystal-effect border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg animate-float" style={{ animationDuration: `${3 + index * 0.5}s` }}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
