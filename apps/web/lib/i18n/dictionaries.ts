import { services, portfolio, pricing, faqs, process, testimonials, reasons, type PricingPlan } from "../site-data";

export const pricingHi: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹12,000",
    description: "डिजिटल यात्रा शुरू करने वाले व्यवसायों के लिए बिल्कुल सही।",
    featured: false,
    features: [
      "स्टैटिक वेबसाइट डेवलपमेंट",
      "मेटा विज्ञापन प्रबंधन (Meta Ads)",
      "इंस्टाग्राम हैंडल प्रबंधन",
      "गूगल बिजनेस प्रोफाइल प्रबंधन",
      "इंस्टाग्राम कंटेंट निर्माण: प्रति माह 4 रील्स/पोस्टर/शूट्स",
      "व्हाट्सएप कनेक्टिविटी"
    ]
  },
  {
    name: "Professional",
    price: "₹23,000",
    description: "आगे बढ़ने और विस्तार के लिए तैयार व्यवसायों के लिए डिज़ाइन किया गया।",
    featured: true,
    features: [
      "डायनामिक वेबसाइट डेवलपमेंट",
      "कॉन्टैक्ट फॉर्म इंटीग्रेशन",
      "उत्पाद विवरण प्रबंधन (Product Details)",
      "मेटा विज्ञापन प्रबंधन (Meta Ads)",
      "इंस्टाग्राम हैंडल प्रबंधन",
      "गूगल बिजनेस प्रोफाइल प्रबंधन",
      "इंस्टाग्राम कंटेंट निर्माण: प्रति माह 4 रील्स/पोस्टर/शूट्स",
      "व्हाट्सएप कनेक्टिविटी"
    ]
  },
  {
    name: "Enterprise",
    price: "₹56,000",
    description: "महत्वाकांक्षी लक्ष्यों वाले व्यवसायों के लिए उन्नत डिजिटल समाधान।",
    featured: false,
    features: [
      "कस्टम वेबसाइट डेवलपमेंट",
      "उन्नत एकीकरण (Advanced Integrations)",
      "समर्पित सर्वर (Dedicated Server)",
      "कस्टम डैशबोर्ड",
      "प्रति माह 7 कॉल्स",
      "मेटा विज्ञापन प्रबंधन (Meta Ads)",
      "वीडियो एडिटिंग",
      "पोस्टर एडिटिंग"
    ]
  }
];

export const pricingMr: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹12,000",
    description: "आपला डिजिटल प्रवास सुरू करणाऱ्या व्यवसायांसाठी परिपूर्ण.",
    featured: false,
    features: [
      "स्टॅटिक वेबसाइट डेव्हलपमेंट",
      "मेटा जाहिरात व्यवस्थापन (Meta Ads)",
      "इन्स्टाग्राम हँडल व्यवस्थापन",
      "गुगल बिझनेस प्रोफाइल व्यवस्थापन",
      "इन्स्टाग्राम कंटेंट निर्मिती: दरमहा 4 रील्स/पोस्टर्स/शूट्स",
      "व्हॉट्सअ‍ॅप कनेक्टिव्हिटी"
    ]
  },
  {
    name: "Professional",
    price: "₹23,000",
    description: "व्यवसाय वाढवण्यासाठी आणि विस्तारण्यासाठी सज्ज असलेल्यांसाठी डिझाइन केलेले.",
    featured: true,
    features: [
      "डायनॅमिक वेबसाइट डेव्हलपमेंट",
      "कॉन्टॅक्ट फॉर्म इंटिग्रेशन",
      "उत्पादन तपशील व्यवस्थापन (Product Details)",
      "मेटा जाहिरात व्यवस्थापन (Meta Ads)",
      "इन्स्टाग्राम हँडल व्यवस्थापन",
      "गुगल बिझनेस प्रोफाइल व्यवस्थापन",
      "इन्स्टाग्राम कंटेंट निर्मिती: दरमहा 4 रील्स/पोस्टर्स/शूट्स",
      "व्हॉट्सअ‍ॅप कनेक्टिव्हिटी"
    ]
  },
  {
    name: "Enterprise",
    price: "₹56,000",
    description: "मोठी उद्दिष्टे असलेल्या व्यवसायांसाठी प्रगत डिजिटल सोल्युशन्स.",
    featured: false,
    features: [
      "कस्टम वेबसाइट डेव्हलपमेंट",
      "प्रगत एकत्रीकरण (Advanced Integrations)",
      "समर्पित सर्व्हर (Dedicated Server)",
      "कस्टम डॅशबोर्ड",
      "दरमहा 7 कॉल्स",
      "मेटा जाहिरात व्यवस्थापन (Meta Ads)",
      "व्हिडिओ एडिटिंग",
      "पोस्टर एडिटिंग"
    ]
  }
];

// Type definitions to ensure all dictionaries have the same structure
export type Dictionary = {
  nav: {
    services: string;
    portfolio: string;
    pricing: string;
    faq: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    startProject: string;
    viewPortfolio: string;
    stats: [string, string][];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: typeof services; // For simplicity, we can map over these or translate them
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
    items: typeof reasons;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
  };
  trustedBy: string;
  pricing: {
    eyebrow: string;
    title: string;
    popular: string;
    button: string;
    items: PricingPlan[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: typeof faqs;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      business: string;
      budget: string;
      projectType: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    services: string;
    contact: string;
    featuredWork: string;
    rights: string;
  };
};

export const en: Dictionary = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    getQuote: "Get Free Quote"
  },
  hero: {
    badge: "AI Powered Digital Solutions",
    title1: "Build Intelligent Websites That ",
    title2: "Grow Your Business.",
    description: "We design high-performance websites with modern UI/UX, AI integration, SEO optimization, WhatsApp automation, secure hosting, and scalable business solutions.",
    startProject: "Start Your Project",
    viewPortfolio: "View Portfolio",
    stats: [
      ["200+", "Projects Delivered"],
      ["100+", "Happy Clients"],
      ["99%", "Client Satisfaction"],
      ["24/7", "Support"]
    ]
  },
  services: {
    eyebrow: "Our Expertise",
    title: "Comprehensive Web Solutions",
    description: "From simple landing pages to complex web applications, we provide end-to-end digital services to help your business thrive.",
    items: services
  },
  whyChooseUs: {
    eyebrow: "Why NexEra",
    title: "Engineered for Growth",
    description: "We don't just build websites; we build business tools. Every project is crafted with precision to ensure it performs optimally, ranks well, and converts visitors into loyal customers.",
    button: "Start Your Project",
    items: reasons
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Sample Landing Pages Built For Real Business Categories",
    description: "Each concept includes hero, about, services, gallery, testimonials, contact, responsive design and animations."
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Clients Feel The Difference"
  },
  trustedBy: "Trusted By Growing Businesses",
  pricing: {
    eyebrow: "Transparent Pricing",
    title: "Invest in Your Growth",
    popular: "Most Popular",
    button: "Choose",
    items: pricing
  },
  process: {
    eyebrow: "Process",
    title: "From First Call To Confident Launch",
    items: [...process]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Clear Answers Before We Start",
    items: faqs
  },
  contact: {
    eyebrow: "Contact",
    title: "Request A Proposal",
    description: "Tell us what you want to build. We will respond with next steps and a practical launch path.",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      business: "Business Name",
      budget: "Budget",
      projectType: "Project Type",
      message: "Message",
      submit: "Request Proposal",
      sending: "Sending...",
      success: "Thanks. Your request has been saved and sent.",
      error: "Something went wrong. Please call or WhatsApp us directly."
    }
  },
  footer: {
    tagline: "Crafting Websites That Grow Businesses.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
    featuredWork: "Featured Work",
    rights: "All rights reserved."
  }
};

export const hi: Dictionary = {
  nav: {
    services: "सेवाएं",
    portfolio: "पोर्टफोलियो",
    pricing: "कीमत",
    faq: "सामान्य प्रश्न",
    contact: "संपर्क करें",
    getQuote: "मुफ्त कोटेशन प्राप्त करें"
  },
  hero: {
    badge: "AI संचालित डिजिटल समाधान",
    title1: "ऐसी स्मार्ट वेबसाइट बनाएं जो ",
    title2: "आपका व्यवसाय बढ़ाएं।",
    description: "हम आधुनिक UI/UX, AI एकीकरण, SEO अनुकूलन, WhatsApp ऑटोमेशन, सुरक्षित होस्टिंग और स्केलेबल समाधानों के साथ उच्च-प्रदर्शन वेबसाइट डिजाइन करते हैं।",
    startProject: "अपना प्रोजेक्ट शुरू करें",
    viewPortfolio: "पोर्टफोलियो देखें",
    stats: [
      ["200+", "प्रोजेक्ट्स पूरे किए"],
      ["100+", "संतुष्ट ग्राहक"],
      ["99%", "ग्राहक संतुष्टि"],
      ["24/7", "सहायता"]
    ]
  },
  services: {
    eyebrow: "हमारी विशेषज्ञता",
    title: "व्यापक वेब समाधान",
    description: "सरल लैंडिंग पेज से लेकर जटिल वेब एप्लिकेशन तक, हम आपके व्यवसाय को बढ़ाने में मदद करने के लिए शुरू से अंत तक डिजिटल सेवाएं प्रदान करते हैं।",
    items: services
  },
  whyChooseUs: {
    eyebrow: "NexEra क्यों चुनें",
    title: "विकास के लिए इंजीनियर",
    description: "हम सिर्फ वेबसाइट नहीं बनाते; हम व्यापार के उपकरण बनाते हैं। हर प्रोजेक्ट को सटीकता से तैयार किया जाता है ताकि यह सबसे अच्छा प्रदर्शन करे, रैंक करे और ग्राहकों को जोड़े।",
    button: "अपना प्रोजेक्ट शुरू करें",
    items: reasons
  },
  portfolio: {
    eyebrow: "पोर्टफोलियो",
    title: "वास्तविक व्यवसायों के लिए बनाए गए सैंपल लैंडिंग पेज",
    description: "हर कांसेप्ट में हीरो, हमारे बारे में, सेवाएं, गैलरी, प्रशंसापत्र, संपर्क, रिस्पॉन्सिव डिज़ाइन और एनिमेशन शामिल हैं।"
  },
  testimonials: {
    eyebrow: "प्रशंसापत्र",
    title: "ग्राहक अंतर महसूस करते हैं"
  },
  trustedBy: "बढ़ते व्यवसायों का भरोसा",
  pricing: {
    eyebrow: "पारदर्शी कीमत",
    title: "अपने विकास में निवेश करें",
    popular: "सबसे लोकप्रिय",
    button: "चुनें",
    items: pricingHi
  },
  process: {
    eyebrow: "प्रक्रिया",
    title: "पहली कॉल से लेकर सफल लॉन्च तक",
    items: ["खोज", "योजना", "डिज़ाइन", "विकास", "परीक्षण", "लॉन्च", "सहयोग"]
  },
  faq: {
    eyebrow: "सामान्य प्रश्न",
    title: "शुरू करने से पहले स्पष्ट उत्तर",
    items: faqs
  },
  contact: {
    eyebrow: "संपर्क",
    title: "प्रस्ताव का अनुरोध करें",
    description: "हमें बताएं कि आप क्या बनाना चाहते हैं। हम अगले कदमों के साथ जवाब देंगे।",
    fields: {
      name: "नाम",
      email: "ईमेल",
      phone: "फोन",
      business: "व्यवसाय का नाम",
      budget: "बजट",
      projectType: "प्रोजेक्ट का प्रकार",
      message: "संदेश",
      submit: "प्रस्ताव का अनुरोध करें",
      sending: "भेज रहा है...",
      success: "धन्यवाद। आपका अनुरोध सहेज लिया गया है और भेज दिया गया है।",
      error: "कुछ गलत हो गया। कृपया हमें सीधे कॉल या WhatsApp करें।"
    }
  },
  footer: {
    tagline: "ऐसी वेबसाइटें जो व्यवसायों को बढ़ाती हैं।",
    quickLinks: "त्वरित लिंक",
    services: "सेवाएं",
    contact: "संपर्क",
    featuredWork: "विशेष कार्य",
    rights: "सभी अधिकार सुरक्षित।"
  }
};

export const mr: Dictionary = {
  nav: {
    services: "सेवा",
    portfolio: "पोर्टफोलिओ",
    pricing: "किंमत",
    faq: "वारंवार विचारले जाणारे प्रश्न",
    contact: "संपर्क",
    getQuote: "मोफत कोटेशन मिळवा"
  },
  hero: {
    badge: "AI समर्थित डिजिटल सोल्युशन्स",
    title1: "अशा स्मार्ट वेबसाइट्स तयार करा ज्या ",
    title2: "तुमचा व्यवसाय वाढवतील.",
    description: "आम्ही आधुनिक UI/UX, AI एकत्रीकरण, SEO ऑप्टिमायझेशन, WhatsApp ऑटोमेशन, सुरक्षित होस्टिंग आणि स्केलेबल सोल्युशन्ससह उच्च-कार्यक्षमता असलेल्या वेबसाइट डिझाइन करतो.",
    startProject: "तुमचा प्रोजेक्ट सुरू करा",
    viewPortfolio: "पोर्टफोलिओ पहा",
    stats: [
      ["200+", "प्रोजेक्ट्स पूर्ण केले"],
      ["100+", "समाधानी ग्राहक"],
      ["99%", "ग्राहक समाधान"],
      ["24/7", "सपोर्ट"]
    ]
  },
  services: {
    eyebrow: "आमचे कौशल्य",
    title: "सर्वसमावेशक वेब सोल्युशन्स",
    description: "साध्या लँडिंग पेजपासून ते गुंतागुंतीच्या वेब अ‍ॅप्लिकेशन्सपर्यंत, तुमचा व्यवसाय वाढवण्यासाठी आम्ही एंड-टू-एंड डिजिटल सेवा पुरवतो.",
    items: services
  },
  whyChooseUs: {
    eyebrow: "NexEra का निवडावे",
    title: "वाढीसाठी इंजिनियर केलेले",
    description: "आम्ही फक्त वेबसाइट्स बनवत नाही; आम्ही व्यवसाय वाढीची साधने तयार करतो. प्रत्येक प्रोजेक्ट काळजीपूर्वक तयार केला जातो जेणेकरून तो उत्तम कामगिरी करेल आणि ग्राहकांना आकर्षित करेल.",
    button: "तुमचा प्रोजेक्ट सुरू करा",
    items: reasons
  },
  portfolio: {
    eyebrow: "पोर्टफोलिओ",
    title: "खऱ्या व्यवसायांसाठी बनवलेले सॅम्पल लँडिंग पेजेस",
    description: "प्रत्येक कन्सेप्टमध्ये हिरो, आमच्याबद्दल, सेवा, गॅलरी, ग्राहकांचे अनुभव, संपर्क, रिस्पॉन्सिव्ह डिझाइन आणि ॲनिमेशन समाविष्ट आहे."
  },
  testimonials: {
    eyebrow: "ग्राहकांचे अनुभव",
    title: "ग्राहकांना फरक जाणवतो"
  },
  trustedBy: "वाढणाऱ्या व्यवसायांचा विश्वास",
  pricing: {
    eyebrow: "पारदर्शक किंमत",
    title: "तुमच्या वाढीमध्ये गुंतवणूक करा",
    popular: "सर्वाधिक लोकप्रिय",
    button: "निवडा",
    items: pricingMr
  },
  process: {
    eyebrow: "प्रक्रिया",
    title: "पहिल्या कॉलपासून ते यशस्वी लाँचपर्यंत",
    items: ["शोध", "नियोजन", "डिझाइन", "विकास", "चाचणी", "लाँच", "सपोर्ट"]
  },
  faq: {
    eyebrow: "प्रश्न",
    title: "सुरू करण्यापूर्वी स्पष्ट उत्तरे",
    items: faqs
  },
  contact: {
    eyebrow: "संपर्क",
    title: "प्रस्तावाची विनंती करा",
    description: "तुम्हाला काय बनवायचे आहे ते सांगा. आम्ही पुढील चरणांसह उत्तर देऊ.",
    fields: {
      name: "नाव",
      email: "ईमेल",
      phone: "फोन",
      business: "व्यवसायाचे नाव",
      budget: "बजेट",
      projectType: "प्रोजेक्ट प्रकार",
      message: "संदेश",
      submit: "प्रस्तावाची विनंती करा",
      sending: "पाठवत आहे...",
      success: "धन्यवाद. तुमची विनंती जतन केली गेली आहे आणि पाठविली गेली आहे.",
      error: "काहीतरी चूक झाली. कृपया आम्हाला थेट कॉल करा किंवा WhatsApp करा."
    }
  },
  footer: {
    tagline: "व्यवसाय वाढवणाऱ्या वेबसाइट्स तयार करत आहोत.",
    quickLinks: "क्विक लिंक्स",
    services: "सेवा",
    contact: "संपर्क",
    featuredWork: "वैशिष्ट्यीकृत कार्य",
    rights: "सर्व हक्क राखीव."
  }
};
