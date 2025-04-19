
export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Comment = {
  id: string;
  postId: string;
  author: string;
  authorImage: string;
  content: string;
  date: string;
  replies?: Comment[];
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  category: string;
  featured?: boolean;
  readTime: number;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "Explore the latest advancements in technology and digital innovation"
  },
  {
    id: "2",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Ideas and inspiration for living a balanced, fulfilling life"
  },
  {
    id: "3",
    name: "Travel",
    slug: "travel",
    description: "Destinations, adventures, and travel tips from around the world"
  },
  {
    id: "4",
    name: "Food",
    slug: "food",
    description: "Recipes, culinary experiences, and food culture explorations"
  },
  {
    id: "5",
    name: "Design",
    slug: "design",
    description: "Beautiful design concepts, principles, and creative inspiration"
  }
];

export const posts: Post[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2024",
    slug: "future-web-development-2024",
    excerpt: "Exploring the cutting-edge technologies and methodologies that will shape web development in the coming year.",
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look ahead to 2024, several key trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>AI-Assisted Development</h2>
      <p>Artificial intelligence is no longer just a buzzword in web development—it's becoming an integral part of the development workflow. From code completion to automated testing, AI tools are enhancing developer productivity and enabling more sophisticated applications with less manual effort.</p>
      
      <p>These AI assistants can now understand context, suggest entire functions, and even debug issues in real-time. The most advanced tools can generate complete components based on natural language descriptions, greatly accelerating the development process.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (WASM) has been gaining traction for years, but 2024 is likely to be the year it truly goes mainstream. This binary instruction format allows code written in languages like C, C++, and Rust to run in the browser at near-native speed.</p>
      
      <p>The implications are profound: complex applications that once required native installation can now run directly in the browser. From video editing to scientific simulations, WASM is enabling a new class of web applications that rival desktop software in performance and capabilities.</p>
      
      <h2>Edge Computing Revolution</h2>
      <p>The shift toward edge computing is transforming how web applications are deployed and served. Instead of relying on centralized data centers, content and computation are moving closer to users, resulting in faster load times and improved performance.</p>
      
      <p>Frameworks and platforms are increasingly optimized for edge deployment, with features like incremental static regeneration and distributed caching becoming standard. This architecture not only improves user experience but also offers better scalability and reliability.</p>
      
      <h2>Conclusion</h2>
      <p>As we embrace these advancements, the web will continue to evolve as a platform, becoming more capable, performant, and accessible. Developers who stay ahead of these trends will be well-positioned to create innovative, cutting-edge experiences for users worldwide.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "2024-03-15",
    author: {
      name: "Alex Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    category: "technology",
    featured: true,
    readTime: 8
  },
  {
    id: "2",
    title: "Finding Balance in a Digital World",
    slug: "finding-balance-digital-world",
    excerpt: "Practical strategies for maintaining wellness while navigating our increasingly connected lives.",
    content: `
      <p>In today's hyper-connected world, finding balance between our digital and physical lives has become increasingly challenging. The constant notifications, endless social media feeds, and 24/7 availability through our devices can lead to digital overwhelm and affect our overall wellbeing.</p>
      
      <h2>The Digital Wellness Challenge</h2>
      <p>Our devices have become extensions of ourselves, making it difficult to create boundaries. Studies show that the average person checks their phone over 150 times per day, and this constant connection can impact everything from our sleep quality to our ability to focus on deep work.</p>
      
      <p>Digital wellness isn't about rejecting technology entirely, but rather about developing a mindful relationship with our devices—one that enhances our lives without diminishing our wellbeing.</p>
      
      <h2>Practical Strategies for Digital Balance</h2>
      <p>Implementing boundaries around technology use can dramatically improve quality of life. Consider designating tech-free zones in your home, particularly the bedroom, to improve sleep quality and morning routines.</p>
      
      <p>Time-boxing your digital activities can also help maintain focus and prevent the endless scroll. Try setting specific times to check email and social media, using a timer to maintain accountability.</p>
      
      <h2>Mindful Technology Use</h2>
      <p>Being intentional about how we interact with technology can transform our relationship with our devices. Before reaching for your phone, pause and ask: "Why am I checking this right now? Is this serving me?"</p>
      
      <p>Curating your digital environment is equally important. Regularly audit your apps, notifications, and subscriptions. Keep only what adds genuine value to your life, and be ruthless about eliminating digital clutter.</p>
      
      <h2>Reconnecting with the Physical World</h2>
      <p>As we become more deliberate about our technology use, we create space to reconnect with the physical world. Engaging in activities that require presence—whether cooking, gardening, or simply taking a walk without headphones—helps reset our attention spans and nervous systems.</p>
      
      <h2>Conclusion</h2>
      <p>Digital wellness isn't about perfection—it's about progress and awareness. By implementing even small changes to how we interact with technology, we can begin to reclaim our attention and create lives that feel more balanced, connected, and fulfilling.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "2024-03-12",
    author: {
      name: "Maya Johnson",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    category: "lifestyle",
    featured: true,
    readTime: 6
  },
  {
    id: "3",
    title: "Hidden Gems of Portugal's Coastal Towns",
    slug: "portugal-coastal-towns",
    excerpt: "Discover the charming, lesser-known destinations along Portugal's breathtaking coastline.",
    content: `
      <p>While Lisbon and Porto often capture the spotlight, Portugal's coastline is dotted with enchanting small towns that offer authentic experiences away from the crowds. From historic fishing villages to surfer paradises, these hidden gems showcase the country's diverse coastal charm.</p>
      
      <h2>Ericeira: Where Tradition Meets Surf Culture</h2>
      <p>Just 45 minutes from Lisbon, Ericeira perfectly balances traditional Portuguese life with world-class surfing. The town's whitewashed buildings and narrow cobblestone streets reveal its fishing village roots, while its designation as a World Surfing Reserve attracts wave enthusiasts from around the globe.</p>
      
      <p>Beyond the beaches, Ericeira's culinary scene deserves attention. The local seafood restaurants serve up the day's catch with stunning ocean views, and the town's pastry shops offer delicious Portuguese specialties that rival those in the bigger cities.</p>
      
      <h2>Tavira: The Algarve's Cultural Treasure</h2>
      <p>While much of the Algarve has developed for mass tourism, Tavira maintains its authentic character. With over 20 churches, an ancient Roman bridge, and architecture showcasing both Moorish and Portuguese influences, the town is a cultural delight.</p>
      
      <p>The nearby Ilha de Tavira offers pristine beaches accessible only by boat, keeping them peaceful even in high season. The island's long stretches of golden sand and crystal-clear waters provide a tranquil retreat from the more developed areas of the Algarve.</p>
      
      <h2>Nazaré: Where Fishing Traditions Meet Epic Waves</h2>
      <p>Nazaré gained international fame for its gigantic waves—some of the largest in the world—but this former fishing village offers much more than extreme surfing. The town is divided between the beach level (Praia) and the historic clifftop settlement (Sítio), connected by a funicular that provides breathtaking views.</p>
      
      <p>Local women still wear traditional dress with seven colorful layers of skirts, and fish are dried in the sun using centuries-old methods. This living heritage creates a fascinating contrast with the modern surf culture that has recently taken root.</p>
      
      <h2>Conclusion</h2>
      <p>These coastal gems offer a more intimate perspective on Portuguese culture, cuisine, and landscapes. By venturing beyond the major destinations, travelers can discover the authentic charm and warm hospitality that make Portugal's coast so special.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
    date: "2024-03-08",
    author: {
      name: "Sofia Martins",
      image: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    category: "travel",
    readTime: 7
  },
  {
    id: "4",
    title: "Seasonal Cooking: Embracing Spring Ingredients",
    slug: "seasonal-cooking-spring",
    excerpt: "How to make the most of spring's vibrant produce with fresh, inspired recipes.",
    content: `
      <p>As winter fades and new growth emerges, spring brings a bounty of fresh, vibrant ingredients to our kitchens. Cooking with seasonal produce not only delivers superior flavor but also connects us to the natural rhythms of the year and supports sustainable food systems.</p>
      
      <h2>The Spring Harvest</h2>
      <p>Spring vegetables offer a welcome contrast to winter's hearty roots and tubers. Asparagus, peas, artichokes, and tender leafy greens like spinach and arugula bring brightness and vitality to the plate. These early crops are often more delicate in flavor, allowing simple preparations to shine.</p>
      
      <p>Herbs also flourish in spring, with chives, mint, dill, and tarragon offering fresh, aromatic possibilities. These herbs can transform even the simplest dishes with minimal effort.</p>
      
      <h2>Asparagus: The Ultimate Spring Delicacy</h2>
      <p>Perhaps no vegetable signifies spring quite like asparagus. Available for just a brief window each year, these tender spears deserve celebration. When ultra-fresh, asparagus needs little more than a quick steam or blanch and a drizzle of good olive oil and lemon to shine.</p>
      
      <p>For a simple yet elegant dish, try shaving raw asparagus into ribbons for a salad with Parmesan, lemon, and olive oil. The raw preparation highlights asparagus at its freshest and most vibrant.</p>
      
      <h2>Celebrating Peas</h2>
      <p>Fresh peas—whether English peas, snow peas, or sugar snaps—offer sweet, green flavor that signals the arrival of spring. While frozen peas are convenient year-round, there's nothing like the taste of just-picked peas in season.</p>
      
      <p>A simple pasta primavera celebrates the season perfectly: sauté spring vegetables with garlic and olive oil, toss with pasta, fresh herbs, and a touch of cream or pasta water for a dish that captures spring's essence.</p>
      
      <h2>Embracing Seasonal Eating</h2>
      <p>Seasonal cooking isn't just about recipes—it's a mindset that connects us more deeply to our food. Shopping at farmers' markets, joining a CSA (Community Supported Agriculture), or even growing a small herb garden can transform how we think about ingredients.</p>
      
      <p>The rewards extend beyond flavor. Seasonal eating typically means consuming foods at their nutritional peak and reducing the environmental impact of long-distance food transportation.</p>
      
      <h2>Conclusion</h2>
      <p>As we welcome spring's bounty, let's embrace the opportunity to cook with ingredients at their peak. Simple preparations that highlight natural flavors can create memorable meals that celebrate the season and remind us of food's connection to place and time.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da",
    date: "2024-03-05",
    author: {
      name: "Daniel Park",
      image: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    category: "food",
    readTime: 5
  },
  {
    id: "5",
    title: "Minimalist Design Principles for Everyday Spaces",
    slug: "minimalist-design-principles",
    excerpt: "How to apply minimalist aesthetics to create calmer, more functional living environments.",
    content: `
      <p>Minimalist design is more than an aesthetic—it's a mindful approach to creating spaces that support clarity, focus, and wellbeing. By emphasizing quality over quantity and function alongside form, minimalist principles can transform cluttered, chaotic environments into havens of calm and purpose.</p>
      
      <h2>The Philosophy Behind Minimalist Design</h2>
      <p>At its core, minimalism asks: what is essential? Rather than stripping spaces of personality or comfort, true minimalist design eliminates excess to highlight what truly matters. This approach values thoughtful curation over accumulation, creating room for both functionality and beauty.</p>
      
      <p>From a psychological perspective, minimalist spaces can reduce cognitive load. When our environments are overflowing with visual information and physical objects, our brains must constantly process these stimuli, leading to mental fatigue. Minimalist spaces give our minds room to breathe.</p>
      
      <h2>Key Principles of Minimalist Design</h2>
      <p>Intentional reduction forms the foundation of minimalist design. This doesn't mean living with nothing—it means being selective about what you introduce into your space. Each item should serve a purpose, whether functional, sentimental, or aesthetic.</p>
      
      <p>Quality over quantity becomes paramount. Investing in fewer, better-made pieces creates a more sustainable approach to design and consumption. Consider durability, craftsmanship, and timelessness when selecting furniture and decor.</p>
      
      <h2>Practical Applications</h2>
      <p>Creating an effective minimalist space begins with honest assessment. Take inventory of what you currently have and what you actually use and value. This process often reveals how much we keep out of habit rather than necessity or joy.</p>
      
      <p>Negative space—the empty areas between objects—plays a crucial role in minimalist design. Rather than seeing these spaces as voids to fill, recognize them as active elements that create visual breathing room and highlight what's important.</p>
      
      <h2>Minimalism Across Different Styles</h2>
      <p>Minimalist principles can adapt to various aesthetic preferences. Scandinavian minimalism emphasizes warmth through natural materials and textures. Japanese minimalism (often influenced by Zen principles) focuses on tranquility and balance. Modern minimalism might incorporate bold colors or geometric forms while maintaining simplicity.</p>
      
      <h2>Conclusion</h2>
      <p>Minimalist design isn't about creating picture-perfect, impersonal spaces—it's about designing environments that support how you want to live. By focusing on what's essential and meaningful, minimalist principles can help create homes that feel both beautiful and purposeful.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1486304873000-235643847519",
    date: "2024-03-01",
    author: {
      name: "Emma Rodriguez",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    category: "design",
    readTime: 6
  },
  {
    id: "6",
    title: "Understanding Web Accessibility: A Developer's Guide",
    slug: "web-accessibility-guide",
    excerpt: "Essential practices for building inclusive websites that everyone can use and navigate.",
    content: `
      <p>Web accessibility isn't just a set of technical requirements—it's a commitment to ensuring that everyone, regardless of ability or circumstance, can access and interact with digital content. As developers and designers, building with accessibility in mind isn't just good ethics—it's good business and often required by law.</p>
      
      <h2>Why Accessibility Matters</h2>
      <p>Over one billion people worldwide live with some form of disability, representing a significant portion of your potential users. Accessibility improvements benefit not only people with permanent disabilities but also those with temporary or situational limitations—like someone using a device one-handed while holding a child, or browsing in bright sunlight.</p>
      
      <p>Beyond inclusion, accessible websites often demonstrate improved usability for all users, better SEO performance, and greater resilience across different devices and browsing contexts.</p>
      
      <h2>Core Accessibility Principles</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) organize accessibility concerns around four principles: content must be perceivable, operable, understandable, and robust.</p>
      
      <p>Perceivable content can be accessed through multiple senses. This means providing text alternatives for non-text content, creating content that can be presented in different ways, and making it easier for users to see and hear content.</p>
      
      <h2>Practical Implementation</h2>
      <p>Semantic HTML forms the foundation of accessible websites. Using the right HTML elements for their intended purpose (like buttons for actions and links for navigation) provides built-in accessibility features that custom solutions often lack.</p>
      
      <p>Keyboard navigability ensures users can access all functionality without a mouse. This includes logical tab order, visible focus indicators, and ensuring all interactive elements are keyboard-accessible.</p>
      
      <h2>Testing for Accessibility</h2>
      <p>Automated testing tools like Lighthouse, WAVE, or axe can identify common accessibility issues, but they typically catch only about 30% of potential problems. Manual testing—including keyboard navigation testing, screen reader testing, and zoom testing—remains essential.</p>
      
      <p>For the most comprehensive evaluation, consider involving users with disabilities in your testing process. Their real-world experience provides insights that automated tools and abled testers might miss.</p>
      
      <h2>Conclusion</h2>
      <p>Accessibility isn't a checkbox feature—it's an ongoing commitment to inclusive design. By incorporating accessibility considerations from the beginning of projects and throughout the development process, we can create a web that truly works for everyone.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1551033406-611cf9a28f67",
    date: "2024-02-25",
    author: {
      name: "Alex Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    category: "technology",
    readTime: 7
  },
  {
    id: "7",
    title: "The Art of Slow Living in a Fast-Paced World",
    slug: "slow-living-fast-world",
    excerpt: "Reclaiming presence and intentionality in our daily lives amid constant demands for productivity and speed.",
    content: `
      <p>In a world that celebrates hustle culture and instant gratification, the concept of slow living offers a radical alternative. Rather than measuring success by productivity metrics or achievement milestones, slow living invites us to find richness in presence, connection, and mindful engagement with everyday experiences.</p>
      
      <h2>What Is Slow Living?</h2>
      <p>Slow living isn't about moving through life at a glacial pace—it's about living at the right speed for each moment. The philosophy encourages us to invest time and attention in activities that matter most, rather than rushing through experiences to reach the next task or goal.</p>
      
      <p>This approach stands in stark contrast to our culture's default mode of constant optimization and efficiency. Slow living suggests that some things—relationships, creativity, enjoyment, and personal growth—actually suffer when we try to accelerate them.</p>
      
      <h2>The Origins of Slow</h2>
      <p>The modern slow movement began with Slow Food, founded in Italy in 1986 as a protest against fast food culture. The movement championed local food traditions, sustainable agriculture, and the pleasure of cooking and dining without rush.</p>
      
      <p>From this foundation, "slow" philosophies expanded into other areas of life: slow cities, slow travel, slow fashion, slow parenting, and beyond. Each branch shares a commitment to mindfulness, sustainability, and quality over quantity.</p>
      
      <h2>Practical Applications</h2>
      <p>Integrating slow living principles doesn't require dramatic lifestyle changes. Small shifts in how we approach everyday activities can create meaningful differences in our experience.</p>
      
      <p>Single-tasking—focusing on one activity at a time—allows for deeper engagement and often greater efficiency than attempting to juggle multiple tasks simultaneously. This might mean turning off notifications while working, eating without screens, or giving conversations your full attention.</p>
      
      <h2>The Paradox of Slowing Down</h2>
      <p>One of slow living's most counterintuitive insights is that slowing down can actually help us accomplish what matters most. By creating space for rest, reflection, and presence, we often find greater clarity about our priorities and more sustainable energy for pursuing them.</p>
      
      <p>This doesn't mean abandoning ambition or productivity—it means approaching them with greater intentionality and awareness of their proper place in a well-lived life.</p>
      
      <h2>Conclusion</h2>
      <p>In embracing slow living, we're not rejecting the modern world but rather reclaiming our autonomy within it. By consciously choosing when to speed up and when to slow down, we create lives that feel less like a race to the finish and more like a journey worth savoring.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    date: "2024-02-20",
    author: {
      name: "Maya Johnson",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    category: "lifestyle",
    readTime: 6
  },
  {
    id: "8",
    title: "Urban Photography: Capturing City Life and Architecture",
    slug: "urban-photography-guide",
    excerpt: "Tips and techniques for creating compelling photographs that showcase the energy and aesthetics of urban environments.",
    content: `
      <p>Cities offer photographers an endless array of compelling subjects, from towering architectural marvels to intimate street scenes. Urban photography captures the essence of city life—its energy, diversity, design, and human stories—requiring both technical skill and creative vision.</p>
      
      <h2>Finding Your Urban Perspective</h2>
      <p>Every photographer brings a unique perspective to urban environments. Some are drawn to the grand scale of cityscapes and architectural details, while others focus on human elements—street life, cultural expressions, or the interplay between people and built environments.</p>
      
      <p>Before heading out with your camera, consider what aspects of the urban experience most captivate you. This focus will help you develop a distinctive style and narrative in your urban photography.</p>
      
      <h2>Light in the Urban Jungle</h2>
      <p>Cities create fascinating light conditions unlike anywhere else. The "blue hour"—that brief period after sunset when the sky deepens to cobalt but buildings are illuminated—offers a magical atmosphere for cityscape photography.</p>
      
      <p>Harsh midday sun, often challenging in other contexts, can create compelling high-contrast scenes in urban settings, particularly for black and white photography. Look for strong shadow patterns on building facades or streets.</p>
      
      <h2>Composition Techniques</h2>
      <p>Leading lines abound in urban environments—streets, bridges, building edges—naturally drawing the viewer's eye through the frame. Use these structural elements to create depth and guide attention to your subject.</p>
      
      <p>Framing urban scenes through archways, windows, or infrastructure adds layers to your composition and can create a sense of discovery. This technique works particularly well when highlighting distant landmarks or creating a juxtaposition between foreground and background elements.</p>
      
      <h2>Capturing Urban Movement</h2>
      <p>Cities pulse with movement—traffic, pedestrians, public transportation—offering opportunities to incorporate dynamic elements into your photographs. Experiment with slower shutter speeds to capture light trails from cars or to create a sense of human flow through busy areas.</p>
      
      <p>Alternatively, use faster shutter speeds to freeze precise moments amid urban chaos—a pedestrian crossing the street, the perfect symmetry of a moving subway car, or the decisive instant when light strikes a building at just the right angle.</p>
      
      <h2>Conclusion</h2>
      <p>Urban photography rewards both careful planning and spontaneous observation. Whether you're documenting architectural masterpieces or quiet moments of humanity amid concrete and glass, cities offer endless opportunities to develop your photographic eye and create images that reveal the complexity of modern urban life.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    date: "2024-02-15",
    author: {
      name: "Emma Rodriguez",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    category: "design",
    readTime: 5
  }
];

export const comments: Comment[] = [
  {
    id: "1",
    postId: "1",
    author: "Jamie Smith",
    authorImage: "https://randomuser.me/api/portraits/women/79.jpg",
    content: "This article offers great insights! I'm particularly interested in how AI-assisted development will change the workflow for junior developers. Do you think it will lower the barrier to entry or potentially make it harder to learn fundamentals?",
    date: "2024-03-15T14:23:00Z",
    replies: [
      {
        id: "2",
        postId: "1",
        author: "Alex Chen",
        authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "That's a great question, Jamie. I think AI assistants will likely make it easier to get started, but there's definitely a risk of becoming dependent on them without understanding the underlying concepts. The best approach might be to use AI tools while actively learning why the suggested code works the way it does.",
        date: "2024-03-15T15:47:00Z"
      },
      {
        id: "3",
        postId: "1",
        author: "Robin Taylor",
        authorImage: "https://randomuser.me/api/portraits/women/22.jpg",
        content: "As someone learning to code right now, I find AI tools incredibly helpful but have noticed I sometimes accept suggestions without fully understanding them. I've started challenging myself to explain the code to myself before implementing it.",
        date: "2024-03-15T16:30:00Z"
      }
    ]
  },
  {
    id: "4",
    postId: "1",
    author: "Michael Wong",
    authorImage: "https://randomuser.me/api/portraits/men/52.jpg",
    content: "I'm particularly excited about the WebAssembly developments. I've been experimenting with Rust and WASM for a few projects, and the performance gains are substantial. Still feels like there's a learning curve for developers coming from a JavaScript-only background though.",
    date: "2024-03-16T09:12:00Z"
  },
  {
    id: "5",
    postId: "2",
    author: "Sarah Johnson",
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "I've been implementing digital boundaries for a few months now, and it's made such a difference in my anxiety levels and sleep quality. The hardest part was the first week without checking social media first thing in the morning!",
    date: "2024-03-13T10:45:00Z",
    replies: [
      {
        id: "6",
        postId: "2",
        author: "Maya Johnson",
        authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
        content: "So glad to hear that, Sarah! The morning routine shift is challenging but so impactful. Did you replace the habit with something else or just remove it?",
        date: "2024-03-13T11:23:00Z"
      },
      {
        id: "7",
        postId: "2",
        author: "Sarah Johnson",
        authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
        content: "I replaced it with a short stretching routine and making tea mindfully. Having a specific alternative really helped make the change stick!",
        date: "2024-03-13T11:45:00Z"
      }
    ]
  }
];
