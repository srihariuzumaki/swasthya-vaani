import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Rural Maharashtra",
    role: "Farmer",
    quote: "मैं हिंदी में बोलता हूं और यह ऐप मुझे तुरंत दवाई की जानकारी देता है। अब मुझे शहर जाने की जरूरत नहीं है।",
    translation: "I speak in Hindi and this app gives me medicine information instantly. Now I don't need to go to the city.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Lakshmi Devi",
    location: "Tamil Nadu",
    role: "Homemaker",
    quote: "எனக்கு படிக்க தெரியாது. ஆனால் இந்த ஆப் என் குரலை புரிந்துகொண்டு எல்லாவற்றையும் சொல்லிக் கொடுக்கிறது.",
    translation: "I cannot read. But this app understands my voice and tells me everything.",
    rating: 5,
    avatar: "LD",
  },
  {
    name: "Dr. Priya Sharma",
    location: "New Delhi",
    role: "General Physician",
    quote: "I recommend this app to my patients, especially elderly ones. It's accurate, multilingual, and incredibly easy to use. A game-changer for healthcare accessibility.",
    translation: "",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Mohammed Ayaz",
    location: "Hyderabad",
    role: "Elderly Citizen",
    quote: "My eyesight is weak, but I can easily use this app by speaking. It helps me understand my medicines and reminds me when to take them.",
    translation: "",
    rating: 5,
    avatar: "MA",
  },
  {
    name: "Anita Desai",
    location: "Mumbai",
    role: "Working Professional",
    quote: "Quick and reliable medicine information at my fingertips. I use it whenever I need to check medications for my family. The multilingual support helps me communicate with my elderly parents in Gujarati.",
    translation: "",
    rating: 5,
    avatar: "AD",
  },
  {
    name: "Ramesh Patel",
    location: "Gujarat",
    role: "Pharmacist",
    quote: "આ એપ મારા ગ્રાહકોને સાચી માહિતી આપવામાં મદદ કરે છે. આ ખૂબ જ ઉપયોગી છે.",
    translation: "This app helps me provide accurate information to my customers. Very useful.",
    rating: 5,
    avatar: "RP",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by <span className="text-gradient-primary">Thousands</span> Across India
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from real people whose lives have been made easier
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="relative z-10 space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="space-y-3">
                  <p className="text-foreground leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </p>
                  {testimonial.translation && (
                    <p className="text-sm text-muted-foreground italic">
                      "{testimonial.translation}"
                    </p>
                  )}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto">
          {[
            { number: "99.2%", label: "Accuracy Rate" },
            { number: "10+", label: "Languages" },
            { number: "5,000+", label: "Medicines" },
            { number: "24/7", label: "Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-gradient-primary">
                {stat.number}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
