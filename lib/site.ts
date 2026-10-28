// All school details live here. Change text, phone, email and numbers in this one file.

export const site = {
  name: "Tech Kidz",
  fullName: "Tech Kidz Preschool",
  tagline: "Big futures start small.",
  addressLine1: "No. 14, Ramakrishna Nagar",
  addressLine2: "West Tambaram, Chennai",
  address: "No. 14, Ramakrishna Nagar, West Tambaram, Chennai",
  phone: "+91 00000 00000", // TODO: add the real phone number
  email: "hello@techkidz.in", // TODO: add the real email
  hours: "Mon – Sat, 8:30 am – 6:30 pm",
  admissionsYear: "2027-28",
  year: "2027",
};

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address
)}&output=embed`;

export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address
)}`;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/daycare", label: "Daycare" },
  { href: "/franchise", label: "Franchise" },
  { href: "/centres", label: "Centres" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = [
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/centres", label: "Centres" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type Program = {
  slug: string;
  name: string;
  age: string;
  level: string;
  short: string;
  shortMobile?: string;
  image: string;
  intro: string;
  learn: string[];
  day: { time: string; what: string }[];
  timing: string;
  ratio: string;
};

export const programs: Program[] = [
  {
    slug: "seedlings",
    name: "Seedlings",
    age: "2-3 YRS",
    level: "PLAYGROUP",
    short: "Settle in with songs, play and routine.",
    image: "/images/child-portrait.jpg",
    intro:
      "Seedlings is your child's first step away from home. We keep the day gentle and happy, so children feel safe, make friends and enjoy coming to school.",
    learn: [
      "Simple routines – hello time, snack time, tidy-up time",
      "Rhymes, songs and action games",
      "Colours, shapes and sorting with toys",
      "Sand, water and messy play for hand skills",
      "Saying their needs and sharing with friends",
    ],
    day: [
      { time: "9:30", what: "Welcome and free play" },
      { time: "10:00", what: "Circle time – songs and rhymes" },
      { time: "10:30", what: "Snack break" },
      { time: "11:00", what: "Sensory play and outdoor time" },
      { time: "11:45", what: "Story time and home time" },
    ],
    timing: "9:30 am – 12:00 pm",
    ratio: "1 teacher for every 8 children",
  },
  {
    slug: "sprouts",
    name: "Sprouts",
    age: "3-4 YRS",
    level: "NURSERY",
    short: "Sounds, colours, counting and speech.",
    image: "/images/alphabet.jpg",
    intro:
      "In Sprouts, children start to talk more, ask questions and try new things. We build early language, number sense and confidence through play.",
    learn: [
      "Letter sounds (phonics) and new words",
      "Counting 1 to 20 with objects",
      "Drawing, colouring and pencil grip",
      "Show-and-tell to build speaking confidence",
      "Basic tech play – simple coding toys and puzzles",
    ],
    day: [
      { time: "9:30", what: "Welcome and morning circle" },
      { time: "10:00", what: "Phonics and language play" },
      { time: "10:45", what: "Snack break" },
      { time: "11:00", what: "Numbers, art or tech corner" },
      { time: "12:00", what: "Outdoor play" },
      { time: "12:30", what: "Story time and home time" },
    ],
    timing: "9:30 am – 12:30 pm",
    ratio: "1 teacher for every 10 children",
  },
  {
    slug: "blossoms",
    name: "Blossoms",
    age: "4-5 YRS",
    level: "LOWER KG",
    short: "Early reading, writing and numbers.",
    shortMobile: "Early reading, writing and numbers.",
    image: "/images/numbers-shapes.jpg",
    intro:
      "Blossoms (Lower KG) is where reading and writing begin. Children read small words, write letters, solve simple sums and work on group projects.",
    learn: [
      "Reading three-letter words and short sentences",
      "Writing capital and small letters",
      "Numbers to 50, simple adding",
      "Science corner – plants, animals, weather",
      "Beginner coding with screen-free robots",
    ],
    day: [
      { time: "9:00", what: "Assembly and morning circle" },
      { time: "9:30", what: "Reading and writing" },
      { time: "10:30", what: "Snack break" },
      { time: "10:45", what: "Maths and science corner" },
      { time: "11:45", what: "Art, music or tech lab" },
      { time: "12:30", what: "Outdoor play and home time" },
    ],
    timing: "9:00 am – 1:00 pm",
    ratio: "1 teacher for every 12 children",
  },
  {
    slug: "rising-stars",
    name: "Rising Stars",
    age: "5-6 YRS",
    level: "UPPER KG",
    short: "Fully ready for Class 1.",
    image: "/images/classroom-play.jpg",
    intro:
      "Rising Stars (Upper KG) gets your child fully ready for big school. They read on their own, write sentences, solve sums and speak with confidence.",
    learn: [
      "Reading short story books on their own",
      "Writing full sentences neatly",
      "Numbers to 100, adding and taking away",
      "Simple coding logic and problem solving",
      "Stage time – speaking, drama and group work",
    ],
    day: [
      { time: "9:00", what: "Assembly and news sharing" },
      { time: "9:30", what: "English and reading" },
      { time: "10:30", what: "Snack break" },
      { time: "10:45", what: "Maths and EVS" },
      { time: "11:45", what: "Tech lab, art or music" },
      { time: "12:45", what: "Outdoor play and home time" },
    ],
    timing: "9:00 am – 1:15 pm",
    ratio: "1 teacher for every 12 children",
  },
];

export const whyUs = [
  {
    n: "01",
    title: "Trained teachers",
    text: "Qualified in early childhood education.",
    mobile: "Qualified in early childhood",
  },
  {
    n: "02",
    title: "Small classes",
    text: "Real attention for every single child.",
    mobile: "Attention for every child",
  },
  {
    n: "03",
    title: "Safe campus",
    text: "CCTV, secure entry and verified staff.",
    mobile: "CCTV and verified staff",
  },
  {
    n: "04",
    title: "Parent app",
    text: "Photos, updates and reports every day.",
    mobile: "Daily photos and updates",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "is-my-child-ready-for-preschool",
    title: "Is my child ready for preschool? 5 simple signs",
    date: "2026-10-10",
    excerpt:
      "Not sure if it is the right time? Here are five easy signs that your little one is ready to start school.",
    image: "/images/storytime.jpg",
    body: [
      "Every child is different, so there is no perfect age to start. But most children show a few clear signs when they are ready.",
      "1. They can stay away from you for a short time without getting very upset. 2. They enjoy being around other children. 3. They can say simple needs like 'water' or 'toilet'. 4. They can follow a simple instruction. 5. They show interest in books, colours or toys.",
      "If you see most of these signs, your child is likely ready. If not, that is fine too – a few more months at home is perfectly okay.",
      "Want to see how our classes work? Book a free visit and spend time in a class with your child.",
    ],
  },
  {
    slug: "first-week-at-school-tips",
    title: "Making the first week at school easy",
    date: "2026-09-22",
    excerpt:
      "The first week can be hard for both parents and children. These small steps help a lot.",
    image: "/images/parent-family.jpg",
    body: [
      "Talk about school at home in a happy way. Read picture books about going to school.",
      "Keep goodbyes short and sweet. A quick hug and a clear 'I will come back after lunch' works better than a long goodbye.",
      "Be on time for pick-up. When children see you come back every day, they start to trust the routine.",
      "Our teachers send photos on the parent app during the first week, so you can see your child settling in.",
    ],
  },
  {
    slug: "screen-free-coding-for-kids",
    title: "Coding without screens? Yes, it works",
    date: "2026-08-30",
    excerpt:
      "At Tech Kidz, young children learn to think like coders using toys, cards and games – no screens needed.",
    image: "/images/numbers-shapes.jpg",
    body: [
      "Coding is really about thinking step by step. Small children can learn this with simple games long before they use a computer.",
      "We use floor robots, arrow cards and pattern games. Children give the robot steps like 'forward, forward, turn' and watch what happens.",
      "This builds logic, patience and problem solving. And because it feels like play, children love it.",
      "Screen time is kept very low in all our classes.",
    ],
  },
];

export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
