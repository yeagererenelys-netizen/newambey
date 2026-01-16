import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, AlertTriangle, Ban, Info, ArrowUp } from "lucide-react";
import Layout from "@/components/layout/Layout";

const roadSigns = [
  {
    id: 1,
    name: "Stop Sign",
    symbol: "🛑",
    category: "Mandatory",
    color: "bg-red-500",
    meaning: "Come to a complete stop. Check for traffic from all directions before proceeding.",
    details: "You must stop completely at the stop line. If there is no line, stop before the crosswalk or intersection.",
  },
  {
    id: 2,
    name: "Give Way / Yield",
    symbol: "⚠️",
    category: "Mandatory",
    color: "bg-red-500",
    meaning: "Slow down and give way to traffic on the main road.",
    details: "You must yield to vehicles already on the road you're entering. Stop if necessary.",
  },
  {
    id: 3,
    name: "No Entry",
    symbol: "⛔",
    category: "Prohibitory",
    color: "bg-red-500",
    meaning: "Entry is prohibited. Do not enter this road.",
    details: "This sign indicates a one-way road where entry from your direction is not allowed.",
  },
  {
    id: 4,
    name: "Speed Limit",
    symbol: "50",
    category: "Mandatory",
    color: "bg-red-100 border-4 border-red-500",
    meaning: "Do not exceed the indicated speed limit (in km/h).",
    details: "The speed limit shown applies to that road section. Adjust speed according to conditions.",
  },
  {
    id: 5,
    name: "No Parking",
    symbol: "🅿️",
    category: "Prohibitory",
    color: "bg-blue-500",
    meaning: "Parking is not allowed at this location.",
    details: "You cannot park your vehicle here. Stopping briefly for passengers may be allowed.",
  },
  {
    id: 6,
    name: "No Overtaking",
    symbol: "🚗",
    category: "Prohibitory",
    color: "bg-red-100 border-4 border-red-500",
    meaning: "Overtaking other vehicles is prohibited on this stretch.",
    details: "Do not attempt to pass other vehicles. Wait until you see the end of restriction sign.",
  },
  {
    id: 7,
    name: "No Horn",
    symbol: "📯",
    category: "Prohibitory",
    color: "bg-blue-500",
    meaning: "Use of horn is prohibited in this area.",
    details: "Common in hospital zones, school areas, and silent zones. Use horn only in emergencies.",
  },
  {
    id: 8,
    name: "School Ahead",
    symbol: "🏫",
    category: "Cautionary",
    color: "bg-yellow-400",
    meaning: "School zone ahead. Slow down and watch for children.",
    details: "Reduce speed significantly. Be prepared for children crossing the road unexpectedly.",
  },
  {
    id: 9,
    name: "Pedestrian Crossing",
    symbol: "🚶",
    category: "Cautionary",
    color: "bg-yellow-400",
    meaning: "Pedestrian crossing ahead. Be prepared to stop.",
    details: "Pedestrians have the right of way at zebra crossings. Always stop when pedestrians are crossing.",
  },
  {
    id: 10,
    name: "Sharp Curve Ahead",
    symbol: "↪️",
    category: "Cautionary",
    color: "bg-yellow-400",
    meaning: "Sharp turn ahead. Reduce speed.",
    details: "The road curves sharply. Slow down before the curve and maintain control.",
  },
  {
    id: 11,
    name: "Slippery Road",
    symbol: "🛞",
    category: "Cautionary",
    color: "bg-yellow-400",
    meaning: "Road may be slippery. Drive carefully.",
    details: "Reduce speed, especially in wet conditions. Avoid sudden braking or acceleration.",
  },
  {
    id: 12,
    name: "One Way",
    symbol: "➡️",
    category: "Informatory",
    color: "bg-blue-500",
    meaning: "Traffic flows in one direction only.",
    details: "All vehicles must travel in the direction indicated. No U-turns allowed.",
  },
  {
    id: 13,
    name: "Hospital",
    symbol: "🏥",
    category: "Informatory",
    color: "bg-blue-500",
    meaning: "Hospital nearby. Maintain silence and drive carefully.",
    details: "Avoid honking. Emergency vehicles may enter or exit. Give way to ambulances.",
  },
  {
    id: 14,
    name: "Petrol Pump",
    symbol: "⛽",
    category: "Informatory",
    color: "bg-blue-500",
    meaning: "Fuel station ahead or nearby.",
    details: "A petrol/diesel station is available on this route. Plan your refueling accordingly.",
  },
  {
    id: 15,
    name: "Roundabout",
    symbol: "🔄",
    category: "Cautionary",
    color: "bg-yellow-400",
    meaning: "Roundabout ahead. Give way to vehicles already in the circle.",
    details: "Slow down, look left for oncoming traffic, and enter when safe. Indicate when exiting.",
  },
];

const categories = ["All", "Mandatory", "Prohibitory", "Cautionary", "Informatory"];

const RoadSigns = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredSigns = selectedCategory === "All" 
    ? roadSigns 
    : roadSigns.filter(sign => sign.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mandatory": return <Ban className="w-4 h-4" />;
      case "Prohibitory": return <AlertTriangle className="w-4 h-4" />;
      case "Cautionary": return <AlertTriangle className="w-4 h-4" />;
      case "Informatory": return <Info className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-12 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Essential <span className="text-secondary">Road Signs</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn the important road signs for safe driving in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Signs Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredSigns.map((sign, index) => (
                <motion.div
                  key={sign.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl ${sign.color} flex items-center justify-center text-3xl shrink-0`}>
                      {sign.symbol}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {getCategoryIcon(sign.category)}
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {sign.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground">{sign.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{sign.meaning}</p>
                  
                  {/* Expandable Details */}
                  <button
                    onClick={() => setExpandedId(expandedId === sign.id ? null : sign.id)}
                    className="flex items-center gap-1 text-sm text-secondary font-medium hover:text-secondary/80 transition-colors"
                  >
                    {expandedId === sign.id ? "Less details" : "More details"}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      expandedId === sign.id ? "rotate-180" : ""
                    }`} />
                  </button>
                  <AnimatePresence>
                    {expandedId === sign.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm text-foreground/70 border-t border-border mt-3">
                          {sign.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Learn Driving?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Now that you know the essential road signs, join our driving lessons 
              to become a confident and safe driver.
            </p>
            <Link to="/contact" className="btn-secondary group">
              Contact for Lessons
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </Layout>
  );
};

export default RoadSigns;
