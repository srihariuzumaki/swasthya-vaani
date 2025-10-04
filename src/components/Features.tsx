import { Card } from "@/components/ui/card";
import voiceIcon from "@/assets/voice-icon.png";
import medicineIcon from "@/assets/medicine-icon.png";
import securityIcon from "@/assets/security-icon.png";
import accessibilityIcon from "@/assets/accessibility-icon.png";
import { Pill, Stethoscope, Shield, Accessibility, Languages, Database } from "lucide-react";

const features = [
  {
    icon: medicineIcon,
    iconComponent: Pill,
    title: "Comprehensive Medicine Information",
    description: "Instant access to detailed information about thousands of medicines, including usage, dosage, side effects, and precautions.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: voiceIcon,
    iconComponent: Languages,
    title: "Multilingual Voice Support",
    description: "Speak naturally in Hindi, Tamil, Telugu, Bengali, Marathi, and 5+ more Indian languages. Our AI understands your voice perfectly.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: medicineIcon,
    iconComponent: Stethoscope,
    title: "Symptom-Based Suggestions",
    description: "Describe your symptoms using voice, and get intelligent suggestions for potential conditions and recommended actions.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: securityIcon,
    iconComponent: Shield,
    title: "Secure & Private",
    description: "Your health data is encrypted and protected. We never share your personal medical information with third parties.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: accessibilityIcon,
    iconComponent: Accessibility,
    title: "Universal Accessibility",
    description: "Designed for everyone - from rural farmers to urban professionals, elderly citizens to visually impaired users.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: medicineIcon,
    iconComponent: Database,
    title: "Always Up-to-Date",
    description: "Our database is continuously updated with the latest medicine information from trusted medical sources and regulatory authorities.",
    color: "from-pink-500 to-rose-600",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="text-gradient-primary">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built with cutting-edge AI to make healthcare information accessible, accurate, and actionable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.iconComponent;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            And many more features to empower your health journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
