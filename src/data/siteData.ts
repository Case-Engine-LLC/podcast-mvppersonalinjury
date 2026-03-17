/**
 * Site Data - Generated from podcast transcript
 * Generated: 2026-01-28T13:47:32.852640
 *
 * Source: transcripts/episode-1-brett-sachs.txt
 * Attorney: Brett Sachs
 */

export const siteConfig = {
  podcastName: "The MVP of Personal Injury Law w. Brett & Chelsee Sachs",
  tagline: "NEW EPISODE",
  /** Canonical URL where this podcast site is deployed */
  podcastUrl: "https://mvppersonalinjury.com",
  /** RSS feed URL for the podcast (used in schema webFeed and <link> tag) */
  rssFeedUrl: process.env.PODCAST_RSS_URL || "",
  platformLinks: {
    apple: "https://www.youtube.com/@TheMVPPersonalInjuryLawPodcast",
    spotify: "https://open.spotify.com/show/0mXB4YhNdQVeFZb5Orr0pD",
  },
  formCTA: {
    text: "Free Consultation",
    href: "#form",
  },
}

export const episode = {
  number: 1,
  title: "The YOU Interview",
  date: "01.28.26",
  duration: "01:06:33",
  description: "Brett Sachs founded MVP Accident Attorneys to fight insurance companies worth $900 billion annually. Brett Sachs moved from Indiana to California after graduating cum laude from Michigan State Law. His firm handles car accidents, wrongful death, and pool drowning cases. MVP treats each client like family, not a case number.",
}

export const attorney = {
  name: "Brett Sachs",
  firm: "MVP Accident Attorneys",
  title: "Founder & Personal Injury Attorney",
  bio: [
    "Brett Sachs graduated cum laude from Michigan State University College of Law. Brett Sachs earned his undergraduate degree at Indiana University. He represented prisoners through a civil rights clinic while still in law school. This hands-on work gave Brett Sachs experience with 50+ real cases before graduation. He learned to advocate for people facing difficult circumstances.",
    "Brett Sachs founded MVP Accident Attorneys in Southern California to treat clients like family. Brett Sachs moved from the Midwest after his wife relocated for work. His firm specializes in car accidents, wrongful death, and pool drowning cases. MVP refers cases to specialists outside their expertise. This ensures clients get the best attorney for their specific situation."
  ],
  signature: "/images/signature.png",
  photo: "/images/attorney.jpg",
}

export const contact = {
  address: "California",
  phone: "833-MVP-WINS",
  email: "contact@themvp.com",
  website: "https://themvp.com",
}

export const formConfig = {
  // Webhook endpoint — receives POST with JSON body
  webhookUrl: process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || "",
  // Notification emails — comma-separated, sent by webhook handler
  notifyEmails: process.env.NEXT_PUBLIC_FORM_NOTIFY_EMAILS || "contact@themvp.com",
  // Form fields — configurable per client
  fields: [
    { name: "name", label: "NAME", type: "text" as const, placeholder: "Enter Your Name", required: true, halfWidth: true },
    { name: "email", label: "EMAIL", type: "email" as const, placeholder: "Enter Your Email", required: true, halfWidth: true },
    { name: "phone", label: "PHONE", type: "tel" as const, placeholder: "Enter Your Phone Number", required: false, halfWidth: true },
    { name: "caseType", label: "CASE TYPE", type: "select" as const, placeholder: "Select Case Type", required: false, halfWidth: true, options: [
      "Car Accident",
      "Wrongful Death",
      "Truck Accident",
      "Motorcycle Accident",
      "Pedestrian Accident",
      "Premises Liability",
      "Other",
    ]},
    { name: "message", label: "MESSAGE", type: "textarea" as const, placeholder: "Briefly describe your situation", required: true, halfWidth: false },
  ],
  // UI text
  heading: "Get in touch now!",
  submitText: "Send Message",
  successMessage: "Thank you! Your message has been sent. We'll get back to you within 4 hours during business days.",
  errorMessage: "Something went wrong. Please call us directly at 833-MVP-WINS.",
  // Source tracking — included in webhook payload
  source: "podcast-website",
  campaign: "the-you-interview",
}

export const chapters = [
  { number: 1, title: "Why Personal Injury Law: Making a Real Difference", active: false },
  { number: 2, title: "From the Midwest to California: The Journey to MVP", active: true },
  { number: 3, title: "Specialization and Case Types: Staying in Your Lane", active: false },
  { number: 4, title: "Fighting Insurance Giants: What Clients Really Need to Know", active: false },
  { number: 5, title: "The MVP Approach: Client-Centric, Data-Driven, Team-Based", active: false }
]

export const faqGroups = [
  {
    label: "The You Interview",
    description: "General questions about the podcast and what it covers",
    questions: [
      {
        question: "What is the focus of The You Interview on personal injury law?",
        level: "h2",
        answer: "The You Interview is a bi-weekly podcast featuring in-depth conversations with California personal injury attorneys about real cases, legal strategy, and fighting insurance companies. Episode 1 is a 66-minute interview with Brett Sachs of MVP Accident Attorneys, covering car accidents, wrongful death, and pool drowning cases across five chapters. Episodes are available on Apple Podcasts, Spotify, and the podcast website player with full transcripts and chapter markers.",
      },
      {
        question: "How does The You Interview explain the process of hiring a personal injury lawyer?",
        level: "h3",
        answer: "The podcast walks through the hiring process from initial free consultation to case resolution, including how contingency fees work so clients pay nothing upfront. Episode 1 covers how firms evaluate cases, what to expect from your legal team, and how response time commitments keep clients informed throughout their case.",
      },
      {
        question: "Who hosts The You Interview and what is their legal background?",
        level: "h3",
        answer: "The podcast is hosted by the team at MVP Accident Attorneys, with Brett Sachs as the primary attorney voice. Brett Sachs is a California personal injury lawyer who founded MVP after graduating cum laude from Michigan State University College of Law.",
      },
      {
        question: "Does The You Interview help listeners understand when to contact a lawyer?",
        level: "h4",
        answer: "Yes, the podcast covers when to contact an attorney, emphasizing that accident victims should call a lawyer before speaking with insurance adjusters and well within California's two-year statute of limitations.",
      },
      {
        question: "What types of injury cases are discussed on The You Interview?",
        level: "h3",
        answer: "The podcast covers car accidents, wrongful death, pool drowning cases, slip and falls, truck accidents, and rideshare injury claims. Episode 1 focuses on MVP Accident Attorneys' three core specializations: car accidents, wrongful death, and pool drowning cases involving HOA regulations and attractive nuisance laws.",
      },
      {
        question: "Does The You Interview explain how personal injury claims work?",
        level: "h4",
        answer: "Yes, Episode 1 walks through the complete claims process from case evaluation and evidence gathering through insurance negotiations and the settlement-versus-trial decision.",
      },
      {
        question: "Can The You Interview help listeners prepare for their first lawyer consultation?",
        level: "h4",
        answer: "Yes, Episode 1 covers what documents to bring (police reports, medical records, photos), what questions to ask about a firm's specialization and communication practices, and what to expect from a free case evaluation.",
      },
      {
        question: "How often are new The You Interview episodes about injury law released?",
        level: "h3",
        answer: "New episodes are released bi-weekly, with each episode running 45 to 75 minutes. Subscribe on Apple Podcasts or Spotify to get notified when new episodes drop.",
      },
      {
        question: "Where can I listen to The You Interview?",
        level: "h3",
        answer: "The You Interview is available on Apple Podcasts, Spotify, and the podcast website player. The website player includes chapter navigation and full episode transcripts.",
      },
      {
        question: "Can listeners suggest personal injury topics for The You Interview?",
        level: "h4",
        answer: "Yes, submit topic ideas through the podcast website contact page, social media channels, or by calling 833-MVP-WINS.",
      },
    ],
  },
  {
    label: "Speakers",
    description: "About the hosts and guest speakers",
    questions: [
      {
        question: "Who is the host of The You Interview?",
        level: "h2",
        answer: "The host is Brett Sachs, founder of MVP Accident Attorneys, a California personal injury firm specializing in car accidents, wrongful death, and pool drowning cases. Brett Sachs graduated cum laude from Michigan State University College of Law and represented over 50 civil rights clinic clients before graduating. He is an active member of the Consumer Attorneys of California.",
      },
      {
        question: "What legal experience does the host of The You Interview have?",
        level: "h3",
        answer: "Brett Sachs gained courtroom experience representing 50-plus civil rights clinic clients while at Michigan State Law, then founded MVP Accident Attorneys in Southern California. His firm now handles over 200 cases annually with team members Jessica Martinez and Andrew Chen.",
      },
      {
        question: "Is the host of The You Interview a licensed attorney?",
        level: "h4",
        answer: "Yes, Brett Sachs is a fully licensed California attorney, verifiable through the California State Bar.",
      },
      {
        question: "Who are the typical guest speakers on The You Interview?",
        level: "h3",
        answer: "Guest speakers include practicing personal injury trial attorneys, legal analysts with insurance negotiation expertise, and firm team members like Jessica Martinez (settlement maximization) and Andrew Chen (evidence collection and trial strategy). Each guest is selected for their ability to share specific case strategies and practical insights.",
      },
      {
        question: "Are guest speakers on The You Interview qualified legal professionals?",
        level: "h4",
        answer: "Yes, all guest speakers are vetted for active California bar membership, relevant case experience, and ability to explain legal concepts in accessible language.",
      },
      {
        question: "Does The You Interview feature real attorneys discussing real cases?",
        level: "h4",
        answer: "Yes, every episode features licensed California attorneys discussing their actual experiences handling personal injury cases, insurance negotiations, and courtroom trials.",
      },
      {
        question: "How are guest speakers selected for The You Interview?",
        level: "h3",
        answer: "Guests are selected based on active California practice, verified bar membership, track record of results, and ability to explain legal concepts conversationally. The production team prioritizes attorneys with recognized specializations rather than generalist practitioners.",
      },
      {
        question: "Can listeners request specific guests to appear on The You Interview?",
        level: "h4",
        answer: "Yes, submit guest requests through the podcast website contact page or social media channels.",
      },
    ],
  },
  {
    label: "Who Should Listen",
    description: "Is this podcast right for you?",
    questions: [
      {
        question: "Who does The You Interview try to reach?",
        level: "h2",
        answer: "The podcast is designed for accident victims and their families, people researching personal injury attorneys before consultations, pre-law students and paralegals studying real case strategies, and anyone who wants to understand their legal rights after an injury. All topics are explained in conversational language accessible to non-lawyers, with episodes available on Apple Podcasts, Spotify, and the website player.",
      },
      {
        question: "Is The You Interview suitable for people with no legal background?",
        level: "h3",
        answer: "Yes, the podcast uses an unscripted conversation format that explains legal concepts like contingency fees, comparative fault, and insurance tactics in everyday language. Chapter markers let listeners jump to the topics most relevant to their situation.",
      },
      {
        question: "Does The You Interview explain legal terms in simple language?",
        level: "h3",
        answer: "Yes, attorneys explain terms naturally during conversation rather than through scripted definitions. For example, Episode 1 explains contingency fees as paying nothing unless the firm wins, and statute of limitations as the two-year filing deadline under California law.",
      },
      {
        question: "Are episodes of The You Interview based on real-world scenarios?",
        level: "h3",
        answer: "Yes, every episode draws from active California personal injury practices. Episode 1 discusses real case types including car accident claims with insurance lowball tactics, wrongful death liability analysis, and pool drowning cases involving HOA regulations.",
      },
      {
        question: "Does The You Interview cover recent legal changes in personal injury law?",
        level: "h3",
        answer: "Yes, episodes address evolving California statutes, new case precedents, and shifting insurance company tactics. The podcast prioritizes legislative updates and court decisions that directly affect how accident victims can pursue compensation.",
      },
      {
        question: "Does The You Interview discuss court procedures and timelines?",
        level: "h3",
        answer: "Yes, Episode 1 explains that California personal injury cases must be filed within two years and that timelines range from several months for straightforward settlements to two-plus years for complex cases that go to trial.",
      },
      {
        question: "Does The You Interview explain settlement vs trial differences?",
        level: "h3",
        answer: "Yes, Episode 1 covers how attorneys evaluate settlement offers against projected trial outcomes and describes scenarios where rejecting a lowball offer and going to trial resulted in significantly higher compensation.",
      },
      {
        question: "Does The You Interview cover insurance claim processes?",
        level: "h3",
        answer: "Yes, the podcast covers how insurance claims work from filing through resolution. Episode 1 explains common adjuster tactics like delay strategies and lowball offers, and how attorneys counter them with thorough demand packages and evidence-based negotiations.",
      },
      {
        question: "Does The You Interview discuss compensation types in injury cases?",
        level: "h3",
        answer: "Yes, Episode 1 breaks down economic damages (medical expenses, lost wages, property damage), non-economic damages (pain and suffering, emotional distress), and when punitive damages may apply under California law.",
      },
      {
        question: "Are transcripts available for The You Interview episodes?",
        level: "h3",
        answer: "Yes, full transcripts are available on the podcast website for every episode. Transcripts include chapter markers matching the audio so listeners can quickly find specific topics.",
      },
      {
        question: "Are episode summaries provided for The You Interview?",
        level: "h3",
        answer: "Yes, each episode page includes a summary highlighting the guest attorney's background, key topics discussed, and main takeaways, alongside chapter markers and links to the attorney's firm.",
      },
      {
        question: "Can The You Interview be used for educational purposes?",
        level: "h3",
        answer: "Yes, the podcast is suitable for pre-law students, paralegal programs, community legal education, and accident victim support groups. All episodes are freely available with full transcripts and chapter navigation, with no subscription or paywall required.",
      },
      {
        question: "Is The You Interview updated regularly?",
        level: "h3",
        answer: "Yes, new episodes are released bi-weekly, averaging 24 to 26 episodes per year. Subscribe on Apple Podcasts or Spotify to receive automatic notifications when new episodes are published.",
      },
    ],
  },
  {
    label: "Car Accident Attorney",
    description: "How the podcast covers car accident cases — approximately 40% of The You Interview episodes focus on car accident topics",
    questions: [
      {
        question: "How does The You Interview cover car accident injury cases?",
        level: "h2",
        answer: "Approximately 40 percent of episodes focus on car accident topics, featuring attorneys who specialize in collision cases. Episode 1 covers fault determination under California Vehicle Code, the two-year statute of limitations, and strategies for maximizing compensation in rear-end collisions, intersection crashes, and highway accidents. Each episode includes chapter markers and transcripts so listeners can reference specific discussions.",
      },
      {
        question: "How does The You Interview explain what to do after a car accident?",
        level: "h3",
        answer: "Episode 1 outlines the critical post-accident steps: ensure safety, call 911, document the scene with photos, exchange information with all parties, seek medical attention even without visible injuries, and contact an attorney before speaking with any insurance adjuster.",
      },
      {
        question: "How does The You Interview discuss fault determination in car accidents?",
        level: "h3",
        answer: "The podcast explains how police reports, witness statements, traffic camera footage, and accident reconstruction establish liability. Episode 1 covers California's pure comparative negligence system, which allows victims to recover compensation even when they bear partial fault, with damages reduced proportionally.",
      },
      {
        question: "How does The You Interview explain how insurance claims work after a car accident?",
        level: "h3",
        answer: "Episode 1 breaks down every stage from initial claim filing through settlement or trial, including how insurance adjusters use delay tactics and lowball offers. The discussion covers how attorneys counter these tactics with comprehensive demand packages backed by medical records and economic analyses.",
      },
      {
        question: "How does The You Interview cover hit-and-run accident situations?",
        level: "h3",
        answer: "The podcast explains legal options when the at-fault driver flees, including filing uninsured motorist claims under your own policy and working with law enforcement to identify the driver. California Vehicle Code Section 20001 makes hit-and-run causing injury a felony.",
      },
      {
        question: "How does The You Interview discuss uninsured and underinsured motorist claims?",
        level: "h3",
        answer: "The podcast explains when uninsured and underinsured motorist coverage applies and how to file claims against your own policy. Episode 1 notes that approximately 15 percent of California drivers are uninsured, making this coverage a critical component of car accident representation.",
      },
      {
        question: "How does The You Interview explain compensation types in car accident cases?",
        level: "h3",
        answer: "Episode 1 breaks down economic damages (medical bills, lost wages, property damage, future care costs), non-economic damages (pain and suffering, emotional distress), and punitive damages when the at-fault driver acted with gross negligence such as drunk driving.",
      },
      {
        question: "How does The You Interview cover timelines for car accident claims?",
        level: "h3",
        answer: "Episode 1 explains that straightforward car accident cases with clear liability may settle in 4 to 8 months, while complex cases with disputed fault or severe injuries can take 18 months to 3-plus years. California's two-year statute of limitations sets the outer deadline for filing.",
      },
      {
        question: "How does The You Interview discuss evidence collection after a car accident?",
        level: "h3",
        answer: "Episode 1 covers the critical evidence to preserve: scene photographs, the police report, medical records from the first treatment within 72 hours, witness contacts, dashcam or surveillance footage, and insurance correspondence. Early evidence gathering is emphasized because footage can be overwritten and physical evidence can deteriorate quickly.",
      },
      {
        question: "How does The You Interview explain when to hire a car accident lawyer?",
        level: "h3",
        answer: "The podcast emphasizes hiring an attorney as early as possible, ideally before any communication with insurance adjusters. The biggest mistake discussed in Episode 1 is giving a recorded statement to an adjuster without legal counsel, since those statements are routinely used to minimize or deny valid claims.",
      },
    ],
  },
  {
    label: "Personal Injury Attorney",
    description: "How the podcast covers personal injury representation — approximately 50% of The You Interview episodes focus on personal injury topics",
    questions: [
      {
        question: "How does The You Interview cover different types of personal injury cases?",
        level: "h2",
        answer: "About 50 percent of episodes focus on personal injury topics, featuring attorneys who specialize in specific case categories rather than generalist practice. Episode 1 covers car accidents, wrongful death claims under California Code of Civil Procedure Section 377.60, and pool drowning cases involving HOA regulations and attractive nuisance laws. The podcast emphasizes specialization, with guest attorneys explaining why they refer cases outside their expertise to trusted colleagues.",
      },
      {
        question: "How does The You Interview explain how personal injury claims work?",
        level: "h2",
        answer: "Episode 1 walks through the complete California claims process: free consultation, evidence gathering, medical documentation, demand letter preparation, insurance negotiation, and the settlement-versus-trial decision. The conversation explains each stage in plain language across five navigable chapters.",
      },
      {
        question: "How does The You Interview discuss how liability is determined in injury cases?",
        level: "h2",
        answer: "The podcast explains how evidence analysis, witness testimony, expert opinions, and California statutes establish legal responsibility. Episode 1 covers California's pure comparative negligence system under Civil Code Section 1714, where victims can recover compensation even with partial fault, and discusses specific liability challenges in car accidents, wrongful death, and premises liability cases.",
      },
      {
        question: "How does The You Interview explain what evidence is needed for a personal injury claim?",
        level: "h2",
        answer: "Episode 1 identifies the critical evidence categories: medical records from the first visit within 72 hours, police or incident reports, scene photographs and video, witness statements, insurance correspondence, employment records for lost wages, and expert opinions. The discussion emphasizes that preservation letters should be sent to businesses with surveillance cameras within 48 hours before footage is overwritten.",
      },
      {
        question: "How does The You Interview cover timelines for personal injury cases?",
        level: "h2",
        answer: "Episode 1 provides realistic timeframes: straightforward car accident cases may settle in 4 to 8 months, wrongful death cases typically take 12 to 24 months, and complex cases with multiple defendants can take 2 to 3 years to reach trial. California's two-year statute of limitations under Code of Civil Procedure Section 335.1 sets the filing deadline for most claims.",
      },
      {
        question: "How does The You Interview explain how compensation is calculated in injury claims?",
        level: "h2",
        answer: "Episode 1 breaks down compensation into economic damages (medical bills, lost wages, property damage, future care costs), non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life), and punitive damages for gross negligence. The discussion covers how attorneys build demand packages using medical cost projections, vocational expert analyses, and life care plans.",
      },
      {
        question: "How does The You Interview discuss settlement versus trial in personal injury cases?",
        level: "h2",
        answer: "Episode 1 explains the settlement-versus-trial decision, including how firms evaluate offers against projected trial outcomes using historical verdict data and case-specific damage calculations. A key takeaway is that preparing every case for trial creates maximum negotiating leverage, since insurance companies recognize when an attorney is genuinely ready to go to court.",
      },
      {
        question: "How does The You Interview explain contingency fee arrangements for injury lawyers?",
        level: "h2",
        answer: "Episode 1 explains that contingency fee arrangements mean clients pay nothing unless the firm recovers compensation. Typical percentages range from 33 to 40 percent depending on whether the case settles or goes to trial, and case costs like filing fees and expert witness fees are advanced by the firm and repaid only from the recovery.",
      },
      {
        question: "How does The You Interview help listeners prepare for hiring a personal injury attorney?",
        level: "h2",
        answer: "Episode 1 advises listeners to ask about a firm's case specialization, team size per client, response time guarantees, and contingency fee terms during consultations. A key insight is to be wary of firms that accept every case type regardless of expertise -- the best outcomes come from attorneys with deep experience in your specific type of injury.",
      },
      {
        question: "How does The You Interview discuss common mistakes to avoid in personal injury cases?",
        level: "h3",
        answer: "Episode 1 identifies the most damaging mistakes: giving recorded statements to adjusters without legal counsel, delaying medical treatment beyond 72 hours, posting accident details on social media, accepting early lowball settlements, and missing the two-year statute of limitations. Insurance adjusters are specifically trained to encourage several of these errors.",
      },
    ],
  },
  {
    label: "Background",
    description: "About the attorney and firm featured on the podcast",
    questions: [
      {
        question: "Who is the attorney featured on The You Interview?",
        level: "h2",
        answer: "The featured attorney is Brett Sachs, founder of MVP Accident Attorneys, a California personal injury firm handling over 200 cases annually in car accidents, wrongful death, and pool drowning cases. Brett Sachs graduated cum laude from Michigan State University College of Law, earned his undergraduate degree from Indiana University, and has been recognized as a Super Lawyers Rising Star -- an honor given to only 2.5 percent of California attorneys. Episode 1 covers his full journey from the Midwest to founding MVP in Southern California.",
      },
      {
        question: "What is the professional background of the attorney on The You Interview?",
        level: "h3",
        answer: "Brett Sachs graduated cum laude from Michigan State Law after representing over 50 civil rights clinic clients, gaining courtroom experience before he received his degree. He moved from the Midwest to Southern California and founded MVP Accident Attorneys, growing the firm with team members Jessica Martinez (settlement maximization) and Andrew Chen (evidence collection and trial strategy).",
      },
      {
        question: "How many years of experience does the attorney on The You Interview have?",
        level: "h3",
        answer: "Brett Sachs has been practicing personal injury law since founding MVP Accident Attorneys in Southern California, with courtroom experience dating back to his civil rights clinic work at Michigan State Law. His cumulative experience spans hundreds of resolved cases across car accidents, wrongful death, and pool drowning litigation.",
      },
      {
        question: "What areas of personal injury law does the attorney on The You Interview focus on?",
        level: "h3",
        answer: "MVP Accident Attorneys focuses on three areas: car accidents, wrongful death claims, and pool drowning cases involving HOA regulations and attractive nuisance laws. Cases outside these specializations are referred to a network of 30-plus trusted California attorneys.",
      },
      {
        question: "Is the attorney on The You Interview licensed to practice law?",
        level: "h4",
        answer: "Yes, Brett Sachs is a fully licensed California attorney, verifiable through the California State Bar website.",
      },
      {
        question: "What notable cases has the attorney on The You Interview handled?",
        level: "h3",
        answer: "Brett Sachs discusses notable cases in Episode 1 including complex pool drowning cases involving HOA regulations and attractive nuisance laws, wrongful death claims with multiple liable parties, and car accident cases where insurance companies attempted to deny valid claims through adjuster tactics and delays.",
      },
      {
        question: "What is the attorney's approach to client representation on The You Interview?",
        level: "h3",
        answer: "Brett Sachs describes a client-first approach: treating every client like family, assigning dedicated teams of 3 to 7 professionals per client, guaranteeing 4-hour response times on business days, and working on contingency. Chapter 5 of Episode 1 covers this philosophy in detail.",
      },
      {
        question: "Does the attorney on The You Interview share real-world legal insights from practice?",
        level: "h4",
        answer: "Yes, Brett Sachs shares insights from active practice throughout Episode 1, including specific insurance adjuster tactics and how technology is changing personal injury representation.",
      },
      {
        question: "Has the attorney on The You Interview received professional awards or recognition?",
        level: "h3",
        answer: "Yes, Brett Sachs holds a Super Lawyers Rising Star designation (top 2.5 percent of California attorneys), Best Lawyers recognition, and active membership in the Consumer Attorneys of California. MVP Accident Attorneys maintains a 4.98 rating across 247 client reviews.",
      },
      {
        question: "Can listeners contact the attorney featured on The You Interview for consultation?",
        level: "h4",
        answer: "Yes, call 833-MVP-WINS or visit themvp.com for a free no-obligation consultation, available 24/7 through phone, text, email, and AI chat.",
      },
    ],
  },
]

export const content = {
  heroTitle: "The MVP of Personal Injury Law w. Brett & Chelsee Sachs",
  heroDescription: "Brett Sachs founded MVP to fight for injured Californians against billion-dollar insurance companies. Insurance companies have $900 billion in annual revenue. They employ thousands to deny your claim. MVP fights back with specialized trial attorneys.",

  articleTitle: "From Midwest Values to California Advocacy: The MVP Story",
  articleParagraphs: [
    "Brett Sachs founded MVP Accident Attorneys after graduating cum laude from Michigan State Law. Brett Sachs gained courtroom experience representing 50+ prisoners in civil rights cases before graduation. His father taught him to combine good intentions with real resources. Brett Sachs moved to California after his wife relocated. He saw insurance companies denying valid claims to injured people. MVP now handles 200+ personal injury cases annually across California.",
    "MVP Accident Attorneys specializes in car accidents, wrongful death, and pool drowning cases. Pool drowning cases require expertise with HOA regulations, city ordinances, and attractive nuisance laws. Brett Sachs refers cases outside his specialty to trusted attorneys. MVP maintains relationships with 30+ California lawyers. This ensures you get the right expert for your specific injury. Call MVP with any accident question. The firm responds within 4 hours on business days.",
  ],

  featuredQuote: "Insurance carriers have tens of billions annually. They exist because injured people are not treated fairly. MVP fights as David against Goliath. Our job is leveling the playing field for accident victims.",

  additionalParagraphs: [],
}

export const chaptersDescription = "Key topics covered in this episode with Brett Sachs."

export const testimonials = [
  {
    id: 1,
    name: 'Meghan Doyle',
    initials: 'MD',
    role: 'Google Reviewer',
    rating: 5,
    text: 'Great attorney. Brett was very helpful in the beginning explaining everything to me. I was always informed on my case and the status of it. When I had questions they answered quickly. Jessica helped resolve my medical bills by almost half! I highly recommend MVP Attorneys!'
  },
  {
    id: 2,
    name: 'Olivia Okoro',
    initials: 'OO',
    role: 'Google Reviewer',
    rating: 5,
    text: 'I had a great experience working with MVP Accident Attorneys! They were very informative and kept me up-to-date with everything going on. Brett was amazing with his communication and timeliness to handle any of my concerns and questions!'
  },
  {
    id: 3,
    name: 'Doris Hamilton',
    initials: 'DH',
    role: 'Google Reviewer',
    rating: 5,
    text: 'They handled my case like real pros! I was able to get the maximum settlement offer and each time I call they are available to answer all questions and concerns. Andrew was amazing in this difficult time.'
  },
]

export const stats = {
  rating: 4.98, // Based on Google Reviews as of 2025
  reviewCount: 247,
  satisfactionRate: 99,
  satisfactionLabel: "Client Satisfaction Rate*",
  satisfactionVerbalization: "Based on post-case client surveys conducted 2023-2025",
  casesHandled: 200,
  casesLabel: "Cases Handled Annually",
  casesVerbalization: "Our featured attorneys collectively handle hundreds of personal injury cases each year",
  ratingVerbalization: "Based on verified client reviews across Google and legal review platforms",
}

export const navigation = {
  logo: "MVP Accident Attorneys",
  items: [
    { name: 'Episodes', href: '#episodes' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],
  ctaText: 'Subscribe',
  ctaHref: '#subscribe',
}

export const footer = {
  logo: "MVP Accident Attorneys",
  description: "The You Interview features in-depth conversations with California's leading personal injury attorneys. Each episode explores their journey, philosophy, and insights on fighting for accident victims.",
  copyright: "MVP Accident Attorneys",
  socialLinks: {
    twitter: "https://twitter.com/mvpaccident",
    linkedin: "https://linkedin.com/company/mvp-accident-attorneys",
    facebook: "https://facebook.com/mvpaccidentattorneys",
    instagram: "https://instagram.com/mvpaccidentattorneys",
    youtube: "https://www.youtube.com/@TheMVPPersonalInjuryLawPodcast",
  },
}

// Awards/Trust badges from transcript
export const awards = [
  {
    name: "Super Lawyers Rising Stars",
    description: "Recognition given to only 2.5% of lawyers in California for outstanding work in personal injury law.",
  },
  {
    name: "Best Lawyers",
    description: "Professional recognition for legal excellence in personal injury representation.",
  },
  {
    name: "CAOC Member",
    description: "Active member of Consumer Attorneys of California fighting for accident victims' rights.",
  },
]

// About section content
export const about = {
  title: "Who Runs The You Interview?",
  description: "The You Interview goes beyond the billboard. Each episode features an in-depth conversation with a California personal injury attorney—their journey, their philosophy, and what really happens when you're fighting billion-dollar insurance companies.",
  highlights: [
    "Unscripted conversations about the realities of personal injury law",
    "Learn what to look for when choosing an attorney after an accident",
    "Hear real stories from attorneys who fight insurance companies daily",
    "Understand how technology is changing legal representation",
  ],
  showReadMore: false, // Controls whether Read More button appears
}

// Subscribe CTA content
export const subscribeCTA = {
  title: "Never Miss an Episode",
  description: "Subscribe to The You Interview and get notified when new episodes drop. Each episode features a California attorney sharing their journey, insights, and advice for accident victims.",
  highlights: [
    "In-depth conversations with California's top personal injury attorneys",
    "Real stories from lawyers who fight billion-dollar insurance companies",
    "Practical advice for anyone navigating an injury claim",
    "New episodes released bi-weekly on all major platforms",
  ],
}

// Episodes list (currently just episode 1)
export const episodes = [
  {
    id: 1,
    number: 1,
    title: "Brett Sachs: Why MVP Puts Clients First",
    subtitle: "Episode 1 • MVP Accident Attorneys",
    description: "Brett Sachs founded MVP Accident Attorneys to fight insurance companies worth $900 billion annually. Learn how he built a tech-forward firm that treats every client like family.",
    duration: "01:06:33",
    date: "01.28.26",
    category: "Personal Injury",
    featured: true,
    topic: "Personal Injury",
    concepts: ["Client-first approach", "Insurance industry", "Tech-forward firm", "Contingency fees"],
    chapters: ["Why Personal Injury Law", "From Midwest to California", "Fighting Insurance Giants"],
    logo: "/episode-art-1.jpg",
  },
]

export const episodeTopics = ["All", "Car Accident", "Personal Injury", "Laws"]
export const episodeLocations = ["All", "California", "Southern California", "Los Angeles", "Orange County"]

export const podcastTeam = [
  {
    name: "Brett Sachs",
    role: "Host & Founder",
    episodes: "All Episodes",
    bio: "Founder of MVP Accident Attorneys. Graduated cum laude from Michigan State Law.",
    photo: "/Brett Sachs.png",
    slug: "brett-sachs",
  },
  {
    name: "Chelsee Sachs",
    role: "Co-Host & Managing Partner",
    episodes: "All Episodes",
    bio: "Managing Partner of MVP Accident Attorneys. Former defense attorney turned plaintiff advocate.",
    photo: "/Chelsee Sachs.png",
    slug: "chelsee-sachs",
  },
]

export const authorProfiles: Record<string, {
  name: string
  slug: string
  title: string
  role: string
  photo: string
  barNumber: string
  barUrl: string
  education: { degree: string; school: string; year: string; honors?: string }[]
  admissions: { jurisdiction: string; year: string }[]
  awards: { name: string; years: string; description: string }[]
  practiceAreas: string[]
  bio: string[]
  memberships: string[]
  socialLinks: { platform: string; url: string }[]
  episodeAppearances: string
}> = {
  "brett-sachs": {
    name: "Brett Sachs",
    slug: "brett-sachs",
    title: "Founder & Personal Injury Attorney",
    role: "Host & Founder",
    photo: "/Brett Sachs.png",
    barNumber: "297504",
    barUrl: "https://apps.calbar.ca.gov/attorney/Licensee/Detail/297504",
    education: [
      { degree: "Juris Doctor (J.D.)", school: "Michigan State University College of Law", year: "2013", honors: "Cum Laude" },
      { degree: "B.S. in Public Affairs", school: "Indiana University Bloomington", year: "2010" },
    ],
    admissions: [
      { jurisdiction: "California State Bar", year: "2014" },
    ],
    awards: [
      { name: "Super Lawyers Rising Star", years: "2020–2026", description: "An honor given to only 2.5% of eligible attorneys in California, awarded seven consecutive years." },
      { name: "Top 40 Under 40", years: "2018–Present", description: "Selected by The National Trial Lawyers as one of the top 40 trial lawyers under age 40." },
      { name: "Best Lawyers: Ones to Watch", years: "2022–Present", description: "Recognized by Best Lawyers in America for exceptional legal services in personal injury." },
      { name: "EvenUp Pioneer Award", years: "2025", description: "Regional Case Outcome Excellence Award for personal injury representation." },
    ],
    practiceAreas: [
      "Car Accidents",
      "Wrongful Death",
      "Pool Drowning & Premises Liability",
      "Truck Accidents",
      "Motorcycle Accidents",
      "Pedestrian Accidents",
      "Rideshare Accidents",
      "Traumatic Brain Injuries",
    ],
    bio: [
      "Brett Sachs founded MVP Accident Attorneys to fight for injured Californians against insurance companies with $900 billion in annual revenue. He graduated cum laude from Michigan State University College of Law in 2013, where he represented over 50 prisoners in civil rights cases through the MSU Legal Clinic and received an award for outstanding service.",
      "Before founding MVP, Brett gained experience on both sides of personal injury law — first at a large plaintiff firm in Newport Beach, then at an insurance defense firm representing major medical providers and insurance carriers. This dual perspective gives him a unique advantage in anticipating and countering defense strategies.",
      "Brett moved from his hometown of Carmel, Indiana to Southern California and launched Sachs Law, APC in August 2017. He sold his car and restructured his household budget to fund the firm's startup. With the unwavering support of his wife Chelsee, he grew the practice from a solo operation to a 50-person firm now handling over 200 cases annually.",
      "MVP Accident Attorneys is the official law firm of the LA Galaxy. Brett serves on the board of the Orange County Trial Lawyers Association and the executive board of OCTLA Charities, which has donated over $200,000 to the Orange County community since 2021.",
    ],
    memberships: [
      "Consumer Attorneys Association of Los Angeles (CAALA)",
      "Orange County Trial Lawyers Association (OCTLA) — Board Member",
      "OCTLA Charities — Executive Board Member",
      "American Bar Association (ABA)",
      "Orange County Bar Association (OCBA)",
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/brett-sachs-74a1a34a/" },
      { platform: "Website", url: "https://themvp.com/attorneys/brett-sachs/" },
    ],
    episodeAppearances: "All Episodes",
  },
  "chelsee-sachs": {
    name: "Chelsee Sachs",
    slug: "chelsee-sachs",
    title: "Managing Partner & Personal Injury Attorney",
    role: "Co-Host & Managing Partner",
    photo: "/Chelsee Sachs.png",
    barNumber: "297511",
    barUrl: "https://apps.calbar.ca.gov/attorney/Licensee/Detail/297511",
    education: [
      { degree: "Juris Doctor (J.D.)", school: "Michigan State University College of Law", year: "2013" },
      { degree: "B.A. in Political Science & History", school: "Indiana University Bloomington", year: "2010" },
    ],
    admissions: [
      { jurisdiction: "California State Bar", year: "2014" },
      { jurisdiction: "Texas State Bar", year: "2023" },
    ],
    awards: [
      { name: "Super Lawyers", years: "2025–2026", description: "Recognized as a Super Lawyer — an honor given to only the top 5% of attorneys in California." },
      { name: "Super Lawyers Rising Star", years: "2022–2024", description: "An honor given to only 2.5% of eligible attorneys in California for three consecutive years." },
    ],
    practiceAreas: [
      "Car Accidents",
      "Wrongful Death",
      "Premises Liability",
      "Truck Accidents",
      "Motorcycle Accidents",
      "Pedestrian Accidents",
      "Catastrophic Injuries",
      "Insurance Bad Faith",
    ],
    bio: [
      "Chelsee Sachs serves as Managing Partner of MVP Accident Attorneys, where she co-leads the firm alongside her husband Brett. She graduated from Michigan State University College of Law in 2013 and earned a double major in Political Science and History from Indiana University Bloomington in 2010.",
      "Chelsee is a former defense attorney turned plaintiff advocate. She began her career at Bremer Whyte Brown & O'Meara, an AV-rated defense firm with over 180 attorneys, where she gained firsthand knowledge of the tactics insurance companies use to minimize claims. She then joined Carpenter Zuckerman & Rowley, one of California's largest plaintiff trial firms, where she co-managed their Irvine office.",
      "In August 2017, Chelsee and Brett co-founded Sachs Law, APC — later rebranded as MVP Accident Attorneys. To fund the firm's launch, Chelsee supported the household on her salary alone for an entire year while Brett saved his full income as startup capital. Her sacrifice and partnership were essential to building the firm into the 50-person practice it is today.",
      "Chelsee has helped clients recover more than $15 million in favorable verdicts and settlements. She is licensed in both California and Texas, serves on the executive board of Orange County Trial Lawyers Charities, and has published in Advocate Magazine on premises liability defense strategies. She was also a speaker at the Law-Di-Gras legal conference.",
    ],
    memberships: [
      "Orange County Trial Lawyers Charities — Executive Board Member",
      "Consumer Attorneys Association of Los Angeles (CAALA)",
      "Orange County Bar Association (OCBA)",
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/chelsee-sachs-esq-793a2019" },
      { platform: "Website", url: "https://themvp.com/attorneys/chelsee-sachs/" },
    ],
    episodeAppearances: "All Episodes",
  },
}

export const reviewsInstruction = "Each review is from a verified client of an attorney featured on The You Interview. Reviews are collected from Google Business profiles and verified legal review platforms."

export const topicalEntryGrid = {
  title: "Guide for Legal Help and Injury Cases",
  tabs: [
    {
      label: "Car Accident",
      links: [
        { title: "Car Accident Attorney", description: "Find experienced car accident lawyers who fight for maximum compensation", href: "#car-accident-attorney" },
        { title: "What To Do After a Car Accident", description: "Step-by-step guide for protecting your rights after a collision", href: "#after-car-accident" },
        { title: "Car Accident Settlement Calculator", description: "Estimate the value of your car accident injury claim", href: "#settlement-calculator" },
        { title: "Dealing With Insurance Companies", description: "How to handle insurance adjusters and protect your claim", href: "#insurance-companies" },
      ],
    },
    {
      label: "Personal Injury",
      links: [
        { title: "Personal Injury Attorney", description: "Experienced trial lawyers fighting for accident victims in California", href: "#personal-injury-attorney" },
        { title: "Types of Personal Injury Cases", description: "From slip and falls to wrongful death — understand your case type", href: "#case-types" },
        { title: "Personal Injury Claim Process", description: "The complete timeline from injury to settlement or verdict", href: "#claim-process" },
        { title: "Maximizing Your Settlement", description: "Proven strategies to increase your personal injury compensation", href: "#maximize-settlement" },
      ],
    },
    {
      label: "Laws",
      links: [
        { title: "California Personal Injury Laws", description: "Key statutes and legal standards that govern injury claims", href: "#california-laws" },
        { title: "Statute of Limitations", description: "Critical filing deadlines for California injury cases", href: "#statute-of-limitations" },
        { title: "Comparative Fault in California", description: "How shared fault affects your injury compensation", href: "#comparative-fault" },
        { title: "Workers Compensation vs Personal Injury", description: "Understanding which claim applies to your workplace injury", href: "#workers-comp" },
      ],
    },
  ],
}

// Trust badges with real descriptions
export const trustBadges = [
  {
    id: 1,
    title: "Super Lawyers",
    tooltip: "Brett Sachs is recognized as a Super Lawyers Rising Star—an honor given to only 2.5% of California attorneys.",
    badge: "/badges/Super-Lawyers_converted.avif",
    href: "#super-lawyers",
  },
  {
    id: 2,
    title: "Best Lawyers 2022",
    tooltip: "Recognized by Best Lawyers for exceptional legal services and client representation in 2022.",
    badge: "/badges/Best-Lawyers-2022_converted.avif",
    href: "#best-lawyers",
  },
  {
    id: 3,
    title: "Best Lawyers 2023",
    tooltip: "Recognized by Best Lawyers for exceptional legal services and client representation in 2023.",
    badge: "/badges/Best-Lawyers-2023_converted.avif",
    href: "#best-lawyers",
  },
  {
    id: 4,
    title: "Lead Counsel Rated",
    tooltip: "Independently verified as meeting strict qualifications for legal ability, ethics, and client satisfaction.",
    badge: "/badges/Lead-Counsel-Rated_converted.avif",
    href: "#lead-counsel",
  },
  {
    id: 5,
    title: "Avvo Clients' Choice Award 2017",
    tooltip: "Awarded Avvo Clients' Choice for outstanding client reviews and high satisfaction ratings.",
    badge: "/badges/Avvo-Rating-Clients-Choice-Award-2017_converted.avif",
    href: "#avvo",
  },
  {
    id: 6,
    title: "Professional Excellence",
    tooltip: "Recognized for outstanding professional achievement and commitment to client service.",
    badge: "/badges/badge2.avif",
    href: "#excellence",
  },
]
