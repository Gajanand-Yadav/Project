import React, { useEffect, useRef, useState } from "react";
const SchemeSection =() => {
    const [schemes,setSchemes] = useState([]);
    const [visibleCount,setVisibleCount] = useState(5);
    const [loading,setLoading] = useState(false);
    const allSchemes = [
  {
    logoIcon: "award",
    tag: "PM-KISAN",
    title: "Income Support Scheme",
    description:
      "₹6,000 per year in three equal installments to all landholding farmer families.",
  },
  {
    logoIcon: "droplet",
    tag: "PMKSY",
    title: "Irrigation Scheme",
    description:
      "Harnessing water resources efficiently to expand cultivable area under irrigation.",
  },
  {
    logoIcon: "shield",
    tag: "PMFBY",
    title: "Crop Insurance",
    description:
      "Comprehensive risk insurance against natural calamities for food crops.",
  },
  {
    logoIcon: "truck",
    tag: "e-NAM",
    title: "National Agricultural Market",
    description:
      "Online trading platform for agricultural commodities to ensure better prices.",
  },
  {
    logoIcon: "award",
    tag: "PM-KISAN",
    title: "Income Support Scheme",
    description:
      "₹6,000 per year in three equal installments to all landholding farmer families.",
  },
  {
    logoIcon: "droplet",
    tag: "PMKSY",
    title: "Irrigation Scheme",
    description:
      "Harnessing water resources efficiently to expand cultivable area under irrigation.",
  },
  {
    logoIcon: "shield",
    tag: "PMFBY",
    title: "Crop Insurance",
    description:
      "Comprehensive risk insurance against natural calamities for food crops.",
  },
  {
    logoIcon: "truck",
    tag: "e-NAM",
    title: "National Agricultural Market",
    description:
      "Online trading platform for agricultural commodities to ensure better prices.",
  },
  {
    logoIcon: "award",
    tag: "PM-KISAN",
    title: "Income Support Scheme",
    description:
      "₹6,000 per year in three equal installments to all landholding farmer families.",
  },
  {
    logoIcon: "droplet",
    tag: "PMKSY",
    title: "Irrigation Scheme",
    description:
      "Harnessing water resources efficiently to expand cultivable area under irrigation.",
  },
  {
    logoIcon: "shield",
    tag: "PMFBY",
    title: "Crop Insurance",
    description:
      "Comprehensive risk insurance against natural calamities for food crops.",
  },
  {
    logoIcon: "truck",
    tag: "e-NAM",
    title: "National Agricultural Market",
    description:
      "Online trading platform for agricultural commodities to ensure better prices.",
  },
];
 useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount]);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 5); // 5 aur add karo
      setLoading(false);
    }, 1000); // thoda delay dene ke liye (API lag ho to real feel)
  };

  return (
    <div className="schemes-section p-4">
      <h2 className="text-xl font-bold mb-4">Government Schemes</h2>
      <ul>
        {allSchemes.slice(0, visibleCount).map((scheme, index) => (
          <li
            key={index}
            className="p-2 mb-2 border rounded shadow-sm bg-gray-100"
          >
            {scheme}
          </li>
        ))}
      </ul>

      {loading && <p className="text-center mt-4">Loading more schemes...</p>}
    </div>
  );
};

export default SchemeSection;
