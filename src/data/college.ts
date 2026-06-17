/* =================================================================== *
 *  Crescent Junior College — single source of truth                   *
 * ------------------------------------------------------------------- *
 *  Every editable piece of site content lives here. Hand this file to  *
 *  the college office to verify/replace placeholder values.            *
 *                                                                      *
 *  ⚠  Items marked  TO BE CONFIRMED  are placeholders and MUST be      *
 *     verified by Crescent Junior College management before launch.    *
 * =================================================================== */

/* ----------------------------- Types ------------------------------ */

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactDetails {
  /** Public phone number. Placeholder — verify before launch. */
  phone: string;
  /** Digits only, international format, for tel:/wa.me links. */
  phoneRaw: string;
  /** WhatsApp number in wa.me format (digits only, with country code). */
  whatsapp: string;
  email: string;
  /** Full postal address, single line. */
  address: string;
  /** Locality / landmark line shown in the hero + footer. */
  locality: string;
  city: string;
  state: string;
  country: string;
  /** Google Maps share/directions link. Placeholder. */
  mapLink: string;
  /** Embed URL for an <iframe> map (optional). */
  mapEmbed: string;
  /** Office hours line. */
  hours: string;
}

export interface Course {
  code: string;
  name: string;
  /** One-line summary for cards/tabs. */
  summary: string;
  /** Subjects covered in the group. */
  subjects: string[];
  /** Who the stream typically suits. */
  suitsFor: string;
  /** Indicative future pathways (kept generic, no guarantees). */
  pathways: string[];
  /** Tailwind accent key: 'blue' | 'cyan' | 'lime'. */
  accent: "blue" | "cyan" | "lime";
}

export interface AdmissionStep {
  title: string;
  detail: string;
}

export interface WhyPoint {
  /** lucide-astro icon name. */
  icon: string;
  title: string;
  detail: string;
}

export type UpdateCategory = "Admissions" | "Academics" | "Events" | "Notice";

export interface Update {
  title: string;
  /** ISO date string, e.g. "2026-06-10". */
  date: string;
  category: UpdateCategory;
  detail: string;
  /** Highlight as pinned/important. */
  pinned?: boolean;
}

export interface GalleryItem {
  /** Image path under /public, OR empty string to render a labelled placeholder tile. */
  src: string;
  alt: string;
  caption: string;
  /** Bento sizing hint. */
  span: "sm" | "md" | "lg" | "wide" | "tall";
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface CollegeData {
  name: string;
  shortName: string;
  tagline: string;
  type: string;
  coed: string;
  /** Establishment year is conflicting online — left null deliberately. */
  established: string | null;
  intro: string;
  /** Hero campus/building background image (under /public). Editable. */
  heroImage: string;
  nav: NavLink[];
  contact: ContactDetails;
  courses: Course[];
  admissionSteps: AdmissionStep[];
  documents: string[];
  whyPoints: WhyPoint[];
  updates: Update[];
  gallery: GalleryItem[];
  seo: SeoData;
}

/* --------------------------- The data ----------------------------- */

export const college: CollegeData = {
  name: "Crescent Junior College",
  shortName: "Crescent JC",
  tagline: "Focused intermediate education in Adilabad",
  type: "Private Junior / Intermediate College",
  coed: "Co-Education",
  // Public sources disagree on the founding year — do not display until verified.
  established: null, // TO BE CONFIRMED

  // Hero campus background. Swap this path to replace the building image.
  heroImage: "/images/campus/crescent-campus-hero-bg.png",

  intro:
    "Crescent Junior College is an intermediate (junior) college in Adilabad, Telangana, offering guided two-year intermediate education across science and commerce/arts streams in a disciplined, student-focused learning environment.",

  // ----------------------------------------------------------------
  //  Navigation
  // ----------------------------------------------------------------
  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Courses", href: "/#courses" },
    { label: "Admissions", href: "/#admissions" },
    { label: "Updates", href: "/updates" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/#contact" },
  ],

  // ----------------------------------------------------------------
  //  Contact — ALL VALUES ARE PLACEHOLDERS. Verify before launch.
  // ----------------------------------------------------------------
  contact: {
    phone: "+91 92931 77754", // verified from listing
    phoneRaw: "+919293177754",
    whatsapp: "919293177754", // wa.me format — confirm WhatsApp is active on this number
    email: "office@crescentjuniorcollege.in", // TO BE CONFIRMED
    address: "Ravindra Nagar, Adilabad", // near the verified map pin — confirm full street address
    locality: "Ravindra Nagar area",
    city: "Adilabad",
    state: "Telangana",
    country: "India",
    // Verified Google Maps pin for Crescent Junior College.
    mapLink: "https://maps.app.goo.gl/S21DZQajHjve8gTj9",
    mapEmbed:
      "https://maps.google.com/maps?q=19.6689853,78.5346303&z=17&output=embed",
    hours: "Mon – Sat, 9:30 AM – 4:30 PM", // TO BE CONFIRMED
  },

  // ----------------------------------------------------------------
  //  Courses (intermediate streams referenced in public listings)
  // ----------------------------------------------------------------
  courses: [
    {
      code: "BiPC",
      name: "BiPC — Biology stream",
      summary: "Two-year intermediate science group built around the life sciences.",
      subjects: ["Botany", "Zoology", "Physics", "Chemistry"],
      suitsFor:
        "Students aiming for medicine, allied health, agriculture, biotechnology and life-science fields.",
      pathways: [
        "Medical & allied-health entrance preparation",
        "Agriculture & life-science degrees",
        "B.Sc. and paramedical courses",
      ],
      accent: "lime",
    },
    {
      code: "CEC",
      name: "CEC — Commerce stream",
      summary: "Commerce and economics group for business and finance aspirants.",
      subjects: ["Civics", "Economics", "Commerce"],
      suitsFor:
        "Students interested in commerce, accounting, business, banking and economics.",
      pathways: [
        "B.Com / BBA degrees",
        "Banking, finance & accounting",
        "Competitive & professional courses (CA/CS foundations)",
      ],
      accent: "blue",
    },
    {
      code: "CSP",
      name: "Civics, Sociology & Public Administration",
      summary: "Humanities group with a focus on society, governance and public systems.",
      subjects: ["Civics", "Sociology", "Public Administration"],
      suitsFor:
        "Students drawn to social sciences, civil services, law and public-policy careers.",
      pathways: [
        "B.A. degrees in social sciences",
        "Civil-services & public-administration tracks",
        "Law and journalism foundations",
      ],
      accent: "cyan",
    },
  ],

  // ----------------------------------------------------------------
  //  Admission process (indicative — office confirms specifics)
  // ----------------------------------------------------------------
  admissionSteps: [
    {
      title: "Enquire",
      detail:
        "Call, WhatsApp or visit the college office to ask about available streams and seat availability.",
    },
    {
      title: "Submit details",
      detail:
        "Share your 10th / SSC marks and required documents for an eligibility check.",
    },
    {
      title: "Counselling",
      detail:
        "Discuss the right stream (BiPC, CEC or CSP) with the college based on your interest and marks.",
    },
    {
      title: "Confirm admission",
      detail:
        "Complete the admission formalities and fee process at the college office.",
    },
  ],

  documents: [
    "10th / SSC marks memo (original + copies)",
    "Transfer Certificate (TC)",
    "Caste certificate (if applicable)",
    "Income certificate (if applicable)",
    "Aadhaar card copy",
    "Passport-size photographs",
  ],

  // ----------------------------------------------------------------
  //  Why Crescent — safe, non-fabricated points only
  // ----------------------------------------------------------------
  whyPoints: [
    {
      icon: "Target",
      title: "Focused intermediate education",
      detail:
        "A clear two-year focus on intermediate streams, without the distractions of a sprawling institution.",
    },
    {
      icon: "MapPin",
      title: "Accessible Adilabad location",
      detail:
        "Centrally located for students and parents across Adilabad town and nearby areas.",
    },
    {
      icon: "BookOpen",
      title: "Course choices",
      detail:
        "BiPC, CEC and a Civics / Sociology / Public Administration group under one roof.",
    },
    {
      icon: "Compass",
      title: "Student guidance",
      detail:
        "Help in choosing the right stream and staying on track through the two-year programme.",
    },
    {
      icon: "ShieldCheck",
      title: "Disciplined environment",
      detail:
        "A structured, respectful learning atmosphere that keeps students focused on studies.",
    },
    {
      icon: "HelpingHand",
      title: "Admission support",
      detail:
        "Straightforward guidance through enquiry, documents and admission formalities.",
    },
  ],

  // ----------------------------------------------------------------
  //  Updates / notice board — sample demo content
  // ----------------------------------------------------------------
  updates: [
    {
      title: "Admissions enquiries open for the new intermediate batch",
      date: "2026-06-10",
      category: "Admissions",
      detail:
        "Enquiries are open for BiPC, CEC and Civics/Sociology/Public Administration streams. Contact the college office for current seat availability.",
      pinned: true,
    },
    {
      title: "Stream counselling for first-year students",
      date: "2026-06-05",
      category: "Academics",
      detail:
        "Guidance sessions help new students and parents choose the right intermediate stream based on interest and marks.",
    },
    {
      title: "Document checklist for admission",
      date: "2026-05-28",
      category: "Notice",
      detail:
        "Please keep your SSC marks memo, transfer certificate and ID documents ready to speed up the admission process.",
    },
    {
      title: "Orientation for the upcoming academic session",
      date: "2026-05-20",
      category: "Events",
      detail:
        "An orientation will introduce new students to the college routine, subjects and expectations. Dates to be announced.",
    },
  ],

  // ----------------------------------------------------------------
  //  Gallery — placeholder tiles. Replace src with real campus photos.
  //  Leave src as "" to show a clean labelled placeholder.
  // ----------------------------------------------------------------
  gallery: [
    { src: "", alt: "College building exterior", caption: "Campus exterior", span: "lg" },
    { src: "", alt: "Classroom session", caption: "Classrooms", span: "md" },
    { src: "", alt: "Science laboratory", caption: "Science lab", span: "sm" },
    { src: "", alt: "Library and reading area", caption: "Library", span: "tall" },
    { src: "", alt: "Students in the corridor", caption: "Campus life", span: "wide" },
    { src: "", alt: "Assembly / event ground", caption: "Events & assembly", span: "sm" },
    { src: "", alt: "Faculty interaction", caption: "Guidance", span: "md" },
    { src: "", alt: "Computer lab", caption: "Computer lab", span: "sm" },
  ],

  // ----------------------------------------------------------------
  //  SEO
  // ----------------------------------------------------------------
  seo: {
    title: "Crescent Junior College, Adilabad | Intermediate (BiPC, CEC) College",
    description:
      "Crescent Junior College is a co-education junior college in Adilabad, Telangana offering intermediate streams — BiPC, CEC and Civics/Sociology/Public Administration — in a focused, disciplined learning environment.",
    keywords: [
      "Crescent Junior College Adilabad",
      "junior college in Adilabad",
      "intermediate college Adilabad",
      "BiPC CEC Adilabad",
      "intermediate education Adilabad Telangana",
    ],
    ogImage: "/brand/og-image.jpg",
  },
};

/* Convenience helper: format an ISO date for display (e.g. "10 Jun 2026"). */
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
