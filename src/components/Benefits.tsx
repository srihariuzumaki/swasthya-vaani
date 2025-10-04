import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "For Rural Communities",
    description: "Access healthcare information in your local language, even with limited literacy. No need for complex medical terminology.",
    points: [
      "Works in regional languages",
      "Simple voice commands",
      "Offline mode available",
      "Low data usage",
    ],
  },
  {
    title: "For Elderly Citizens",
    description: "Easy-to-use voice interface that doesn't require typing or reading small text. Just speak naturally.",
    points: [
      "Large, clear voice feedback",
      "No typing required",
      "Medication reminders",
      "Emergency contact quick dial",
    ],
  },
  {
    title: "For Visually Impaired Users",
    description: "Fully voice-driven experience with audio feedback for complete accessibility.",
    points: [
      "Complete voice navigation",
      "Audio descriptions",
      "Screen reader compatible",
      "Haptic feedback support",
    ],
  },
  {
    title: "For Everyone",
    description: "Quick, convenient access to medicine information anytime, anywhere. Making healthcare knowledge accessible.",
    points: [
      "24/7 availability",
      "Instant responses",
      "Verified information",
      "Free to use",
    ],
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Healthcare for{" "}
            <span className="text-gradient-secondary">Every Indian</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Breaking barriers to make medicine information accessible to all
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border"
            >
              <div className="space-y-6">
                {/* Title */}
                <h3 className="text-2xl font-bold">{benefit.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                {/* Points List */}
                <ul className="space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-12 text-center space-y-6 border border-primary/10">
            <h3 className="text-3xl md:text-4xl font-bold">
              Our Mission: Healthcare Equality Through Technology
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe everyone deserves access to reliable healthcare information, regardless of language, literacy level, or physical ability. Swasthya Vaani uses AI to bridge the healthcare information gap across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full font-semibold">
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-semibold">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
