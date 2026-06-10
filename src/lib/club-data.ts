// =============================================================================
// উদীয়মান যুবসংঘ — ওয়েবসাইটের সকল ডেটা এই ফাইলে রাখা হয়েছে।
// লোগো, ছবি, লিংক, পৃষ্ঠার লেখা, সদস্য — সবকিছু এখান থেকে সম্পাদনা করুন।
// =============================================================================

import logoImg from "./logo.png";
import backgroundImg from "./background.jpg";

/** সংগঠনের মূল তথ্য */
export const CLUB = {
  nameBn: "উদীয়মান যুবসংঘ",
  nameEn: "Udiyaman Jubasangha",
  tagline: "একতা, সততা ও মানবতায় আমাদের লক্ষ্য",
  address: "ফজেরের মোড়, বাগমারা, রাজশাহী",
  email: "udiyoman.jubosongho@gmail.com",
  phone: "+৮৮০ ১৭১৭৫৪৯১১৯",
  founded: "২০২৪",
  /** নেভবার ও ফুটারে দেখানো লোগো */
  logo: logoImg,
  /** হোম পেজের হিরো সেকশনের ব্যাকগ্রাউন্ড ছবি */
  heroBackground: backgroundImg,
  /** পরিচিতি পৃষ্ঠার ইতিহাস সেকশনের ছবি */
  aboutHistoryImage: "https://i.ibb.co.com/BKw6W2Xc/uj.jpg",
  /** সোশ্যাল মিডিয়া শেয়ারের জন্য ছবি (og:image) */
  ogImage:
    "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c7d15b2a-14c6-4614-a109-9acc0b3b05cd/id-preview-f72d4439--4ad05b3c-15e0-4c31-b6e2-be1e2c1ca7f8.lovable.app-1780862218362.png",
};

/** সোশ্যাল মিডিয়া আইকন ও লিংক — icon: facebook | twitter | instagram | youtube */
export type SocialIcon = "facebook" | "twitter" | "instagram" | "youtube";

export const SOCIAL_LINKS: { icon: SocialIcon; label: string; url: string }[] = [
  { icon: "facebook", label: "Facebook", url: "https://www.facebook.com/udiyaaman" },
  { icon: "twitter", label: "Twitter", url: "https://x.com/udiyamanj" },
  { icon: "instagram", label: "Instagram", url: "https://instagram.com/" },
  { icon: "youtube", label: "YouTube", url: "https://shorturl.at/HNCAV" },
];

/** নেভিগেশন মেনু */
export const NAV_LINKS = [
  { to: "/", label: "হোম" },
  { to: "/about", label: "পরিচিতি" },
  { to: "/activities", label: "কর্মকান্ড" },
  { to: "/members", label: "সদস্যবৃন্দ" },
  { to: "/finance", label: "আয়-ব্যয়" },
  { to: "/contact", label: "যোগাযোগ" },
] as const;

/** ফুটার দ্রুত লিংক (নেভ থেকে আলাদা হলে এখানে সম্পাদনা করুন) */
export const FOOTER_QUICK_LINKS = [
  { to: "/", label: "হোম" },
  { to: "/about", label: "পরিচিতি" },
  { to: "/activities", label: "কর্মকান্ড" },
  { to: "/members", label: "সদস্যবৃন্দ" },
  { to: "/contact", label: "যোগাযোগ" },
] as const;

/** ফুটার লেখা */
export const FOOTER = {
  quickLinksTitle: "দ্রুত লিংক",
  contactTitle: "যোগাযোগ",
  socialTitle: "সোশ্যাল মিডিয়া",
  copyrightSuffix: "সর্বস্বত্ব সংরক্ষিত।",
};

/** সাইটের SEO ও মেটা তথ্য */
export const SITE_META = {
  title: "উদীয়মান যুবসংঘ — Udiyaman Jubasangha",
  description:
    "উদীয়মান যুবসংঘ — একতা, সততা ও মানবতায় আমাদের লক্ষ্য। একটি ক্রীড়া ও সমাজকল্যাণমূলক যুব সংগঠন।",
  author: "Udiyaman Jubasangha",
};

/** প্রতিটি পৃষ্ঠার শিরোনাম ও বর্ণনা (SEO) */
export const PAGE_META = {
  home: {
    title: "উদীয়মান যুবসংঘ — হোম",
    description: "উদীয়মান যুবসংঘে আপনাকে স্বাগতম। একতা, সততা ও মানবতায় আমাদের লক্ষ্য।",
  },
  about: {
    title: "পরিচিতি — উদীয়মান যুবসংঘ",
    description: "উদীয়মান যুবসংঘের ইতিহাস, মিশন এবং ভিশন সম্পর্কে জানুন।",
  },
  activities: {
    title: "কর্মকান্ড — উদীয়মান যুবসংঘ",
    description: "উদীয়মান যুবসংঘের সকল কর্মকান্ড, ইভেন্ট ও আয়োজনের সমাহার।",
  },
  members: {
    title: "সদস্যবৃন্দ — উদীয়মান যুবসংঘ",
    description: "উদীয়মান যুবসংঘের সকল সদস্য এবং কমিটির পরিচিতি।",
  },
  finance: {
    title: "আয়-ব্যয় — উদীয়মান যুবসংঘ",
    description: "উদীয়মান যুবসংঘের আয়-ব্যয়ের স্বচ্ছ হিসাব।",
  },
  contact: {
    title: "যোগাযোগ — উদীয়মান যুবসংঘ",
    description: "উদীয়মান যুবসংঘের সাথে যোগাযোগ করুন।",
  },
};

/** হোম পেজের সকল লেখা ও তথ্য — icon: users | trophy | heart | sparkles */
export const HOME = {
  hero: {
    titleLine1: "উদীয়মান যুবসংঘে",
    titleHighlight: "আপনাকে স্বাগতম",
    ctaPrimary: { label: "আরও জানুন", to: "/about" },
    ctaSecondary: { label: "যোগাযোগ করুন", to: "/contact" },
  },
  stats: [
    { icon: "users" as const, label: "মোট সদস্য", value: "৭২+" },
    { icon: "trophy" as const, label: "ক্রীড়া আয়োজন", value: "১৫+" },
    { icon: "heart" as const, label: "সমাজসেবা", value: "২০+" },
    { icon: "sparkles" as const, label: "প্রতিষ্ঠার বছর", value: CLUB.founded },
  ],
  goal: {
    eyebrow: "আমাদের লক্ষ্য",
    title: "তরুণদের শক্তি, সমাজের অগ্রগতি",
    description:
      "উদীয়মান যুবসংঘ এলাকার যুবসমাজকে সংগঠিত করে ক্রীড়া, শিক্ষা, স্বাস্থ্য ও সমাজসেবামূলক কাজে যুক্ত করে। আমরা বিশ্বাস করি, একতাবদ্ধ যুবশক্তিই একটি সুন্দর সমাজ গঠনের মূল চাবিকাঠি। নৈতিকতা, সততা এবং মানবতার আলোকে আলোকিত একটি প্রজন্ম গড়ে তোলাই আমাদের অঙ্গীকার।",
    cta: { label: "আমাদের সম্পর্কে আরও জানুন", to: "/about" },
  },
  activities: {
    eyebrow: "সাম্প্রতিক কর্মকান্ড",
    title: "আমাদের নিকট অতীতের আয়োজন",
    cta: { label: "সকল কর্মকান্ড দেখুন", to: "/activities" },
    previewCount: 3,
  },
};

/** পরিচিতি পৃষ্ঠা */
export const ABOUT = {
  hero: { title: "পরিচিতি", subtitle: "আমাদের পথচলা, লক্ষ্য ও স্বপ্নের গল্প" },
  history: {
    eyebrow: "আমাদের ইতিহাস",
    title: "তরুণদের স্বপ্ন থেকে শুরু",
    imageAlt: "আমাদের ইতিহাস",
    foundedLabel: "প্রতিষ্ঠা সাল",
    paragraphs: [
      "২০২৪ সালে এলাকার একদল উদ্যমী তরুণের হাত ধরে যাত্রা শুরু হয় উদীয়মান যুবসংঘের। শুরুতে ছোট ছোট ক্রীড়া আয়োজন ও সাংস্কৃতিক অনুষ্ঠানের মধ্যে দিয়ে আমাদের পথচলা।",
      "আজ আমরা ৭২+ সক্রিয় সদস্য নিয়ে এলাকার শিক্ষা, স্বাস্থ্য, পরিবেশ এবং সামাজিক উন্নয়নে নিরলসভাবে কাজ করে যাচ্ছি। প্রতিটি কাজের পেছনে রয়েছে আমাদের সদস্য, শুভাকাঙ্ক্ষী এবং এলাকাবাসীর অকুণ্ঠ সমর্থন ও ভালোবাসা।",
    ],
  },
  missionVision: {
    eyebrow: "মূল আদর্শ",
    title: "মিশন ও ভিশন",
    cards: [
      {
        icon: "target" as const,
        title: "আমাদের মিশন",
        text: "ক্রীড়া, শিক্ষা ও সমাজকল্যাণমূলক কর্মকান্ডের মাধ্যমে যুবসমাজকে নৈতিক, সৃজনশীল এবং দায়িত্বশীল নাগরিক হিসেবে গড়ে তোলা।",
      },
      {
        icon: "eye" as const,
        title: "আমাদের ভিশন",
        text: "এমন একটি সমাজ গঠন যেখানে প্রতিটি তরুণ তার সম্ভাবনার সর্বোচ্চটা মেলে ধরতে পারবে এবং দেশ ও মানবতার সেবায় আত্মনিয়োগ করবে।",
      },
    ],
  },
};

/** কর্মকান্ড পৃষ্ঠা */
export const ACTIVITIES_PAGE = {
  hero: {
    title: "আমাদের কর্মকান্ড",
    subtitle: "ক্রীড়া, সমাজসেবা, শিক্ষা ও পরিবেশ — আমরা যেসব কাজে যুক্ত",
  },
  /** কর্মকান্ড পৃষ্ঠার নিচের বাটন — লিংক পরে পরিবর্তন করুন */
  moreActivitiesCta: {
    label: "আরও কর্মকান্ড দেখুন",
    url: "https://www.facebook.com/udiyaaman",
  },
};

/** সদস্যবৃন্দ পৃষ্ঠা */
export const MEMBERS_PAGE = {
  hero: {
    title: "সদস্যবৃন্দ",
    subtitle: "আমাদের সংগঠনের প্রাণ — আমাদের প্রিয় সদস্যরা",
  },
  tabs: [
    { id: "all" as const, label: "সকল সদস্য" },
    { id: "committee" as const, label: "কমিটি" },
    { id: "advisors" as const, label: "উপদেষ্টা মন্ডলী" },
  ],
  showMoreLabel: "আরও দেখুন",
  joinCta: { label: "সদস্য হিসাবে যুক্ত হোন", to: "/contact" },
  initialVisibleCount: 24,
  loadMoreCount: 24,
};

/** আয়-ব্যয় পৃষ্ঠা */
export const FINANCE_PAGE = {
  hero: { title: "আয়-ব্যয়", subtitle: "আমাদের আর্থিক স্বচ্ছতা ও জবাবদিহিতা" },
  comingSoon: {
    title: "শীঘ্রই আসছে",
    subtitle: "Content will be added soon...",
    description:
      "আমাদের আয়-ব্যয়ের বিস্তারিত বিবরণী খুব শীঘ্রই এই পৃষ্ঠায় প্রকাশ করা হবে। স্বচ্ছতা আমাদের অঙ্গীকার।",
  },
};

/** যোগাযোগ পৃষ্ঠা */
export const CONTACT_PAGE = {
  hero: {
    title: "যোগাযোগ",
    subtitle: "আপনার মতামত, প্রশ্ন বা সদস্যপদের জন্য আমাদের সাথে যোগাযোগ করুন",
  },
  infoLabels: { address: "ঠিকানা", phone: "ফোন", email: "ইমেইল" },
  form: {
    name: { label: "আপনার নাম", placeholder: "যেমন: আব্দুর রাকিব" },
    phone: { label: "ফোন নম্বর", placeholder: "+৮৮০ ১৭xxxxxxxx" },
    subject: { label: "বিষয়", placeholder: "বিষয় লিখুন" },
    message: { label: "বার্তা", placeholder: "আপনার বার্তা লিখুন..." },
    submit: "পাঠিয়ে দিন",
    successTitle: "ম্যাসেজ পাঠানো হয়েছে",
    successMessage: "ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.59918821550116!2d88.7601750909861!3d24.672339927204263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb890064d7457b%3A0xd62609dc5900106d!2sUdiyaman%20Jubasangha%20~%20Fojerer%20Mor!5e0!3m2!1sen!2sbd!4v1781061780554!5m2!1sen!2sbd",
};

/** ৪০৪ ও ত্রুটি পৃষ্ঠার লেখা */
export const ERROR_PAGES = {
  notFound: {
    code: "404",
    title: "পৃষ্ঠা পাওয়া যায়নি",
    message: "আপনি যে পৃষ্ঠাটি খুঁজছেন তা নেই বা সরানো হয়েছে।",
    cta: "হোমে ফিরুন",
  },
  error: {
    title: "এই পৃষ্ঠাটি লোড হয়নি",
    message: "কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।",
    retry: "আবার চেষ্টা করুন",
    home: "হোমে ফিরুন",
  },
};

export type Activity = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  /** কার্ডের ছবি ও শিরোনামে ক্লিক করলে যাবে */
  link: string;
};

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "উদীয়মান যুবসংঘ প্রিমিয়ার লীগ - ৩",
    description: "গোবিন্দপাড়া, সোনাডাঙ্গা ও বিষ্ণুপূর ইউনিয়নের খেলোয়াড়ের সমন্বয়ে এক বিশাল প্রিমিয়ার লীগ।",
    date: "৩১ মে, ২০২৬",
    category: "প্রিমিয়ার লীগ",
    image: "https://i.ibb.co.com/ccBRZP22/upl.jpg",
    link: "https://www.facebook.com/share/v/19NRBmveP5/",
  },
  {
    id: 2,
    title: "ইফতার মাহফিল - ২০২৬",
    description: "আলহামদুলিল্লাহ, আমরা প্রতিবছরই বড় পরিসরে ইফতার কর্মসূচি আয়োজন করে থাকি।",
    date: "১৯ মার্চ, ২০২৬",
    category: "ইফতার মাহফিল",
    image: "https://i.ibb.co.com/nM0pNMLf/im.jpg",
    link: "https://www.facebook.com/share/p/1G4KYKWMSy/",
  },
  {
    id: 3,
    title: "লোকমান আলী শাহ্ স্মৃতি ক্রীড়া উৎসব",
    description: "একজন প্রকৃত ক্রীড়াপ্রেমী ও সফল ব্যবসায়ী আমাদের প্রিয় ও শ্রদ্ধেয় মরহুম লোকমান আলী শাহ্ এর স্মরনে এক বিশাল ক্রীড়া উৎসবের আয়োজন।",
    date: "১৫ জুন, ২০২৫",
    category: "বিনোদন",
    image: "https://i.ibb.co.com/ksDjwWdC/ls.jpg",
    link: "https://www.facebook.com/share/v/1Bkxaqtndp/",
  },
  {
    id: 4,
    title: "বিবাহিত ও অবিবাহিত ক্রিকেট টুর্নামেন্ট",
    description: "ঈদের আনন্দকে আরও বাড়িয়ে তুলতে উদীয়মান যুবসংঘের আয়োজনে বিকেলে অনুষ্ঠিত হয় বিবাহিত বনাম অবিবাহিতদের ক্রিকেট টুর্নামেন্ট।",
    date: "৩১ মার্চ, ২০২৫",
    category: "ক্রীড়া",
    image: "https://i.ibb.co.com/CKgnsQyf/bb.jpg",
    link: "https://www.facebook.com/share/p/1B4RTJxdwf/",
  },
  {
    id: 5,
    title: "ইফতার মাহফিল - ২০২৬",
    description: "উদীয়মান যুবসংঘের পক্ষ থেকে প্রথমবারের মতো ইফতার মাহফিলের আয়োজন করা হলো। এলাকায় এ ধরনের আয়োজন আগে কখনও হয়নি, এটি নিঃসন্দেহে এক নতুন দিগন্তের সূচনা।।",
    date: "২৯ মার্চ, ২০২৫",
    category: "ইফতার মাহফিল",
    image: "https://i.ibb.co.com/938VbjwN/2025.jpg",
    link: "https://www.facebook.com/share/v/1Br5JxGrb3/",
  },
  {
    id: 6,
    title: "মহান বিজয় দিবস - ২০২৫",
    description: "মহান বিজয় দিবস উপলক্ষে উদীয়মান যুবসংঘের আয়োজনে ক্রিড়া উৎসব।",
    date: "১৬ ডিসেম্বর, ২০২৫",
    category: "বিজয় দিবস",
    image: "https://i.ibb.co.com/qLH1BHpR/bd.jpg",
    link: "https://www.facebook.com/share/p/1EYFbXVjvE/",
  },
  {
    id: 7,
    title: "ভুঁড়ি ভোজের আয়োজন🥰",
    description: "খেলাধুলা শেষে একটা ছোট্ট ভুঁড়ি ভোজের আয়োজন।",
    date: "১৭ ডিসেম্বর, ২০২৫",
    category: "পিকনিক",
    image: "https://i.ibb.co.com/PG5K8YxH/pp.jpg",
    link: "https://www.facebook.com/share/p/1Fmwma8nfx/",
  },
  {
    id: 8,
    title: "নতুন জার্সির মোড়ক উন্মোচন অনুষ্ঠান",
    description: "২০২৬ সিরিজের নতুন জার্সি হাতে পেয়ে সদস্যদের মাঝে আনন্দ ও উচ্ছ্বাসের এক সুন্দর মুহূর্ত।",
    date: "১২ মার্চ, ২০২৬",
    category: "নতুন জার্সি",
    image: "https://i.ibb.co.com/fdqrZZKP/sss.jpg",
    link: "https://www.facebook.com/share/p/18h9ku6gWR/",
  },
  {
    id: 9,
    title: "ইদুল ফিতর - ২০২৬",
    description: "ইদের নামাজ শেষে উদীয়মান যুবসংঘের সম্মানিত সদস্যবৃন্দের একাংশ।",
    date: "২১ মার্চ, ২০২৬",
    category: "ইদুল ফিতর",
    image: "https://i.ibb.co.com/KjYT1Wjh/iff.jpg",
    link: "https://www.facebook.com/share/p/1C6XmVFKxu/",
  },
];

export type Member = {
  id: number;
  name: string;
  area: string;
  photo: string;
  facebook?: string;
  phone?: string;
  email?: string;
};

/** সকল সদস্য — প্রতিটি সদস্যের ছবি ও তথ্য এক জায়গায় */
export const MEMBERS: Member[] = [
  // সদস্য 1
  {
    id: 101,
    name: "আব্দুর রশিদ রাসেল",
    area: "দেওপাড়া",
    photo: "https://i.ibb.co.com/0jN13pXc/rsl.jpg",
    facebook: "https://www.facebook.com/consulateboyrasel",
    phone: "01717549119",
    email: "member101@example.com",
  },

  // সদস্য 2
  {
    id: 102,
    name: "মো:শাহিনুর রহমান",
    area: "ফুলপুর",
    photo: "https://i.ibb.co.com/nqqTcmq5/shn.jpg",
    facebook: "https://www.facebook.com/shahin007z",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member102@example.com",
  },

  // সদস্য 3
  {
    id: 103,
    name: "সুমন মাহমুদ",
    area: "দেওপাড়া",
    photo: "https://i.ibb.co.com/3YhV0HqX/smn.jpg",
    facebook: "https://www.facebook.com/mdsumonmahmud.tahsan/",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member103@example.com",
  },

  // সদস্য 4
  {
    id: 104,
    name: "বিদ্যুৎ হোসেন",
    area: "দেওপাড়া",
    photo: "https://i.ibb.co.com/NdcksdWv/bid.jpg",
    facebook: "https://www.facebook.com/bidyut.hosen",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member104@example.com",
  },

  // সদস্য 5
  {
    id: 105,
    name: "জাহিদুল ইসলাম রুবেল",
    area: "বিলমাললী",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member105@example.com",
  },

  // সদস্য 6
  {
    id: 106,
    name: "জাহিদুল হক",
    area: "ফুলপুর",
    photo: "https://i.ibb.co.com/dJr8Y8Nj/jsl.jpg",
    facebook: "https://www.facebook.com/md.jahidul.haque.82566",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member106@example.com",
  },

  // সদস্য 7
  {
    id: 107,
    name: "হারুনুর রশীদ রিদয়",
    area: "ফুলপুর",
    photo: "https://i.ibb.co.com/ynTW0FyM/hrn.jpg",
    facebook: "https://www.facebook.com/harunur.rashid.hridoy.2024",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member107@example.com",
  },

  // সদস্য 8
  {
    id: 108,
    name: "আতাউর রহমান",
    area: "পারুইটুঙ্গী",
    photo: "https://i.ibb.co.com/8gZg6gyz/att.jpg",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member108@example.com",
  },

  // সদস্য 9
  {
    id: 109,
    name: "আব্দুল মতিন",
    area: "দেওপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member109@example.com",
  },

  // সদস্য 10
  {
    id: 110,
    name: "সবুজ হোসেন",
    area: "দেওপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member110@example.com",
  },

  // সদস্য 11
  {
    id: 111,
    name: "ইমরান হাসান",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member111@example.com",
  },

  // সদস্য 12
  {
    id: 112,
    name: "রাকিব করিম",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member112@example.com",
  },

  // সদস্য 13
  {
    id: 113,
    name: "সাইফুল মিয়া",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member113@example.com",
  },

  // সদস্য 14
  {
    id: 114,
    name: "রবিউল মজুমদার",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member114@example.com",
  },

  // সদস্য 15
  {
    id: 115,
    name: "ফাহিম রহমান",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member115@example.com",
  },

  // সদস্য 16
  {
    id: 116,
    name: "তৌহিদ হোসেন",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member116@example.com",
  },

  // সদস্য 17
  {
    id: 117,
    name: "সোহাগ খান",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member117@example.com",
  },

  // সদস্য 18
  {
    id: 118,
    name: "মিরাজ ইসলাম",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member118@example.com",
  },

  // সদস্য 19
  {
    id: 119,
    name: "আবদুল আহমেদ",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member119@example.com",
  },

  // সদস্য 20
  {
    id: 120,
    name: "মোহাম্মদ চৌধুরী",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member120@example.com",
  },

  // সদস্য 21
  {
    id: 121,
    name: "রফিকুল হাসান",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member121@example.com",
  },

  // সদস্য 22
  {
    id: 122,
    name: "সাজ্জাদ করিম",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member122@example.com",
  },

  // সদস্য 23
  {
    id: 123,
    name: "নাঈম মিয়া",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member123@example.com",
  },

  // সদস্য 24
  {
    id: 124,
    name: "তানভীর মজুমদার",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member124@example.com",
  },

  // সদস্য 25
  {
    id: 125,
    name: "আরিফ রহমান",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member125@example.com",
  },

  // সদস্য 26
  {
    id: 126,
    name: "শাকিল হোসেন",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member126@example.com",
  },

  // সদস্য 27
  {
    id: 127,
    name: "জাহিদ খান",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member127@example.com",
  },

  // সদস্য 28
  {
    id: 128,
    name: "মাসুদ ইসলাম",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member128@example.com",
  },

  // সদস্য 29
  {
    id: 129,
    name: "ইমরান আহমেদ",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member129@example.com",
  },

  // সদস্য 30
  {
    id: 130,
    name: "রাকিব চৌধুরী",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member130@example.com",
  },

  // সদস্য 31
  {
    id: 131,
    name: "সাইফুল হাসান",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member131@example.com",
  },

  // সদস্য 32
  {
    id: 132,
    name: "রবিউল করিম",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member132@example.com",
  },

  // সদস্য 33
  {
    id: 133,
    name: "ফাহিম মিয়া",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member133@example.com",
  },

  // সদস্য 34
  {
    id: 134,
    name: "তৌহিদ মজুমদার",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member134@example.com",
  },

  // সদস্য 35
  {
    id: 135,
    name: "সোহাগ রহমান",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member135@example.com",
  },

  // সদস্য 36
  {
    id: 136,
    name: "মিরাজ হোসেন",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member136@example.com",
  },

  // সদস্য 37
  {
    id: 137,
    name: "আবদুল খান",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member137@example.com",
  },

  // সদস্য 38
  {
    id: 138,
    name: "মোহাম্মদ ইসলাম",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member138@example.com",
  },

  // সদস্য 39
  {
    id: 139,
    name: "রফিকুল আহমেদ",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member139@example.com",
  },

  // সদস্য 40
  {
    id: 140,
    name: "সাজ্জাদ চৌধুরী",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member140@example.com",
  },

  // সদস্য 41
  {
    id: 141,
    name: "নাঈম হাসান",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member141@example.com",
  },

  // সদস্য 42
  {
    id: 142,
    name: "তানভীর করিম",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member142@example.com",
  },

  // সদস্য 43
  {
    id: 143,
    name: "আরিফ মিয়া",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member143@example.com",
  },

  // সদস্য 44
  {
    id: 144,
    name: "শাকিল মজুমদার",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member144@example.com",
  },

  // সদস্য 45
  {
    id: 145,
    name: "জাহিদ রহমান",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member145@example.com",
  },

  // সদস্য 46
  {
    id: 146,
    name: "মাসুদ হোসেন",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member146@example.com",
  },

  // সদস্য 47
  {
    id: 147,
    name: "ইমরান খান",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member147@example.com",
  },

  // সদস্য 48
  {
    id: 148,
    name: "রাকিব ইসলাম",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member148@example.com",
  },

  // সদস্য 49
  {
    id: 149,
    name: "সাইফুল আহমেদ",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member149@example.com",
  },

  // সদস্য 50
  {
    id: 150,
    name: "রবিউল চৌধুরী",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member150@example.com",
  },

  // সদস্য 51
  {
    id: 151,
    name: "ফাহিম হাসান",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member151@example.com",
  },

  // সদস্য 52
  {
    id: 152,
    name: "তৌহিদ করিম",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member152@example.com",
  },

  // সদস্য 53
  {
    id: 153,
    name: "সোহাগ মিয়া",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member153@example.com",
  },

  // সদস্য 54
  {
    id: 154,
    name: "মিরাজ মজুমদার",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member154@example.com",
  },

  // সদস্য 55
  {
    id: 155,
    name: "আবদুল রহমান",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member155@example.com",
  },

  // সদস্য 56
  {
    id: 156,
    name: "মোহাম্মদ হোসেন",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member156@example.com",
  },

  // সদস্য 57
  {
    id: 157,
    name: "রফিকুল খান",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member157@example.com",
  },

  // সদস্য 58
  {
    id: 158,
    name: "সাজ্জাদ ইসলাম",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member158@example.com",
  },

  // সদস্য 59
  {
    id: 159,
    name: "নাঈম আহমেদ",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member159@example.com",
  },

  // সদস্য 60
  {
    id: 160,
    name: "তানভীর চৌধুরী",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member160@example.com",
  },

  // সদস্য 61
  {
    id: 161,
    name: "আরিফ হাসান",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member161@example.com",
  },

  // সদস্য 62
  {
    id: 162,
    name: "শাকিল করিম",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member162@example.com",
  },

  // সদস্য 63
  {
    id: 163,
    name: "জাহিদ মিয়া",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member163@example.com",
  },

  // সদস্য 64
  {
    id: 164,
    name: "মাসুদ মজুমদার",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member164@example.com",
  },

  // সদস্য 65
  {
    id: 165,
    name: "ইমরান রহমান",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member165@example.com",
  },

  // সদস্য 66
  {
    id: 166,
    name: "রাকিব হোসেন",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member166@example.com",
  },

  // সদস্য 67
  {
    id: 167,
    name: "সাইফুল খান",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member167@example.com",
  },

  // সদস্য 68
  {
    id: 168,
    name: "রবিউল ইসলাম",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member168@example.com",
  },

  // সদস্য 69
  {
    id: 169,
    name: "ফাহিম আহমেদ",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member169@example.com",
  },

  // সদস্য 70
  {
    id: 170,
    name: "তৌহিদ চৌধুরী",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member170@example.com",
  },

  // সদস্য 71
  {
    id: 171,
    name: "সোহাগ হাসান",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member171@example.com",
  },

  // সদস্য 72
  {
    id: 172,
    name: "মিরাজ করিম",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member172@example.com",
  },

  // সদস্য 73
  {
    id: 173,
    name: "আবদুল মিয়া",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "member173@example.com",
  },
];

/** উপদেষ্টা মন্ডলী — প্রতিটি সদস্যের ছবি ও তথ্য এক জায়গায় */
export const ADVISORS: Member[] = [
  // উপদেষ্টা 1
  {
    id: 201,
    name: "আবদুল হাসান",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor1@example.com",
  },

  // উপদেষ্টা 2
  {
    id: 202,
    name: "মোহাম্মদ রহমান",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor2@example.com",
  },

  // উপদেষ্টা 3
  {
    id: 203,
    name: "রফিকুল আহমেদ",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor3@example.com",
  },

  // উপদেষ্টা 4
  {
    id: 204,
    name: "সাজ্জাদ মিয়া",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor4@example.com",
  },

  // উপদেষ্টা 5
  {
    id: 205,
    name: "নাঈম খান",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor5@example.com",
  },

  // উপদেষ্টা 6
  {
    id: 206,
    name: "তানভীর হাসান",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor6@example.com",
  },

  // উপদেষ্টা 7
  {
    id: 207,
    name: "আরিফ রহমান",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor7@example.com",
  },

  // উপদেষ্টা 8
  {
    id: 208,
    name: "শাকিল আহমেদ",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor8@example.com",
  },

  // উপদেষ্টা 9
  {
    id: 209,
    name: "জাহিদ মিয়া",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor9@example.com",
  },

  // উপদেষ্টা 10
  {
    id: 210,
    name: "মাসুদ খান",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor10@example.com",
  },

  // উপদেষ্টা 11
  {
    id: 211,
    name: "ইমরান হাসান",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor11@example.com",
  },

  // উপদেষ্টা 12
  {
    id: 212,
    name: "রাকিব রহমান",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor12@example.com",
  },

  // উপদেষ্টা 13
  {
    id: 213,
    name: "সাইফুল আহমেদ",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor13@example.com",
  },

  // উপদেষ্টা 14
  {
    id: 214,
    name: "রবিউল মিয়া",
    area: "পূর্বপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor14@example.com",
  },

  // উপদেষ্টা 15
  {
    id: 215,
    name: "ফাহিম খান",
    area: "শান্তিপুর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor15@example.com",
  },

  // উপদেষ্টা 16
  {
    id: 216,
    name: "তৌহিদ হাসান",
    area: "যুবনগর",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor16@example.com",
  },

  // উপদেষ্টা 17
  {
    id: 217,
    name: "সোহাগ রহমান",
    area: "নয়াপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor17@example.com",
  },

  // উপদেষ্টা 18
  {
    id: 218,
    name: "মিরাজ আহমেদ",
    area: "দক্ষিণপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor18@example.com",
  },

  // উপদেষ্টা 19
  {
    id: 219,
    name: "কামাল মিয়া",
    area: "মধ্যপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor19@example.com",
  },

  // উপদেষ্টা 20
  {
    id: 220,
    name: "হাবিব খান",
    area: "উত্তরপাড়া",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "advisor20@example.com",
  },
];

export type CommitteeMember = {
  id: number;
  name: string;
  role: string;
  photo: string;
  facebook?: string;
  phone?: string;
  email?: string;
};

/** কমিটি — প্রতিটি সদস্যের ছবি, পদবি ও তথ্য এক জায়গায় */
export const COMMITTEE: CommitteeMember[] = [
  // কমিটি সদস্য 1
  {
    id: 1,
    name: "রফিকুল হাসান",
    role: "সভাপতি",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee1@example.com",
  },

  // কমিটি সদস্য 2
  {
    id: 2,
    name: "সাজ্জাদ রহমান",
    role: "সহ-সভাপতি",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee2@example.com",
  },

  // কমিটি সদস্য 3
  {
    id: 3,
    name: "নাঈম আহমেদ",
    role: "সাধারণ সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee3@example.com",
  },

  // কমিটি সদস্য 4
  {
    id: 4,
    name: "তানভীর মিয়া",
    role: "সহ-সাধারণ সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee4@example.com",
  },

  // কমিটি সদস্য 5
  {
    id: 5,
    name: "আরিফ খান",
    role: "সাংগঠনিক সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee5@example.com",
  },

  // কমিটি সদস্য 6
  {
    id: 6,
    name: "শাকিল হাসান",
    role: "অর্থ সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee6@example.com",
  },

  // কমিটি সদস্য 7
  {
    id: 7,
    name: "জাহিদ রহমান",
    role: "প্রচার সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee7@example.com",
  },

  // কমিটি সদস্য 8
  {
    id: 8,
    name: "মাসুদ আহমেদ",
    role: "ক্রীড়া সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee8@example.com",
  },

  // কমিটি সদস্য 9
  {
    id: 9,
    name: "ইমরান মিয়া",
    role: "সাংস্কৃতিক সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee9@example.com",
  },

  // কমিটি সদস্য 10
  {
    id: 10,
    name: "রাকিব খান",
    role: "শিক্ষা ও সমাজকল্যাণ সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee10@example.com",
  },

  // কমিটি সদস্য 11
  {
    id: 11,
    name: "সাইফুল হাসান",
    role: "দপ্তর সম্পাদক",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee11@example.com",
  },

  // কমিটি সদস্য 12
  {
    id: 12,
    name: "রবিউল রহমান",
    role: "কার্যনির্বাহী সদস্য",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee12@example.com",
  },

  // কমিটি সদস্য 13
  {
    id: 13,
    name: "ফাহিম আহমেদ",
    role: "কার্যনির্বাহী সদস্য",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee13@example.com",
  },

  // কমিটি সদস্য 14
  {
    id: 14,
    name: "তৌহিদ মিয়া",
    role: "কার্যনির্বাহী সদস্য",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee14@example.com",
  },

  // কমিটি সদস্য 15
  {
    id: 15,
    name: "সোহাগ খান",
    role: "কার্যনির্বাহী সদস্য",
    photo: "https://i.ibb.co.com/Txgn65fD/man.png",
    facebook: "#",
    phone: "+৮৮০১৭১২৩৪৫৬৭৮",
    email: "committee15@example.com",
  },
];
