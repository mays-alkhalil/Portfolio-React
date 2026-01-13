const defaultContent = {
  featured: {
    greeting: { ar: "مرحبًا، أنا", en: "Hello I’m" },
    typedRoles: [
      { ar: "مطور ويب فل ستاك", en: "Full Stack Web Developer" },
      { ar: "مطور Laravel و React", en: "Laravel & React Developer" },
      {
        ar: "مهندس أتمتة وربط واجهات برمجية",
        en: "Automation & API Integration Engineer",
      },
      { ar: "مدرّس برمجة", en: "Programming Instructor" },
      { ar: "محلّل مشاكل ومتعلم سريع", en: "Problem Solver & Fast Learner" },
    ],
    introText: {
      ar: "“أطوّر حلول ويب متكاملة وأعلّم البرمجة مع التركيز على التطبيقات الواقعية.”",
      en: "“I develop full-stack web solutions and teach programming with a focus on real-world applications.”",
    },
    hireButtonLabel: { ar: "تواصل معي", en: "Hire Me" },
    hireButtonTarget: "contact",
    cv: {
      label: { ar: "تحميل السيرة الذاتية", en: "Download CV" },
      link: "/mays_resume_Web_Developer.pdf",
      filename: "mays resume Web Developer.pdf",
    },
    social: {
      email:
        "mailto:maysalkhalil02@gmail.com?subject=Hello%20Mays%20I%20would%20like%20to%20connect",
      whatsapp:
        "https://wa.me/962776506379?text=Hello%20Mays%20I%20would%20like%20to%20connect",
      linkedin: "https://www.linkedin.com/in/maysalkhalil",
      github: "https://github.com/mays-alkhalil",
    },
    image: {
      src: "/assets/mays1.jpg",
      alt: { ar: "صورة ميس", en: "Mays profile" },
      sizes: {
        desktop: 260,
        tablet: 200,
        mobile: 160,
      },
    },
  },
  about: {
    title: { ar: "من أنا", en: "About Me" },
    subtitle: {
      ar: "نمزج بين التقنية والإبداع وأثر المجتمع.",
      en: "Blending technology, creativity, and community impact.",
    },
    roleHeadline: {
      ar: "مطور ويب · أتمتة · مدرّس",
      en: "Web Developer · Automation Builder · Educator",
    },
    image: {
      src: "/assets/mays1.jpg",
      alt: {
        ar: "صورة ميس الكحللي",
        en: "Portrait of Mays Al Khalil, Web Developer",
      },
      sizes: {
        desktop: 220,
        tablet: 180,
        mobile: 140,
      },
    },
    paragraphs: [
      {
        ar: "بدأت رحلتي مع التقنية بدافع الفضول حول تأثير الأنظمة الرقمية في حياتنا. تخرّجت من تخصص هندسة الحاسوب من جامعة البلقاء التطبيقية بتقدير جيد جدًا، ومن هناك بدأت تحويل الأفكار إلى تجارب ويب تفاعلية وسلسة.",
        en: "My journey in tech began with curiosity about how digital systems shape the way we live and learn. I earned my degree in Computer Engineering from Al-Balqa Applied University with a “Very Good” GPA, and quickly discovered my passion for turning ideas into seamless, interactive web experiences.",
      },
      {
        ar: "خلال تدريب تطوير البرمجيات المتكاملة في Orange Academy عملت على مشاريع واقعية صقلت مهاراتي في الواجهة الأمامية والخلفية باستخدام React وLaravel وPHP وMySQL وNode.js، كما أتممت تدريبًا مكثفًا لمدة 280 ساعة في Pio-Tech.",
        en: "During my Full Stack Development training at Orange Academy, I worked on collaborative, real-world projects that honed my skills in both front-end and back-end technologies — including React, Laravel, PHP, MySQL, and Node.js. My earlier 280-hour training at Pio-Tech gave me exposure to scalable architectures and user-centric software solutions.",
      },
      {
        ar: "انتقلت لاحقًا إلى أنظمة التعليم الإلكتروني كمطوّر Moodle، مع خبرة عميقة في أتمتة العمليات باستخدام n8n وربط واجهات برمجية لرفع الكفاءة.",
        en: "Later, I expanded into e-learning systems, working as a Moodle developer to design, customize, and deploy educational platforms for diverse learners. I also developed deep experience in automation workflows using n8n — integrating APIs and processes to enhance efficiency and scalability.",
      },
      {
        ar: "خارج البرمجة، أؤمن بالأثر المجتمعي. أسست مبادرة “كتابك بفيد غيرك” لتعزيز تبادل الكتب بين الشباب، وساهمت في مشاريع لإنتاج كتب صوتية للطلبة من ذوي الإعاقة البصرية.",
        en: "Outside of coding, I’m committed to community impact. I founded the initiative “Kitabek Befeed Gheirak” to promote book exchange among youth, and contributed to projects producing audiobooks for visually impaired students. These experiences strengthened my leadership, collaboration, and communication skills.",
      },
      {
        ar: "اليوم أركّز على بناء حلول ويب إنسانية، سهلة الوصول وفعّالة، تجمع بين التطوير والأتمتة والتعليم لصناعة أثر حقيقي.",
        en: "Today, I focus on building human-centered, accessible, and efficient web solutions — combining my expertise in development, automation, and education to make technology truly meaningful.",
      },
    ],
  },
  projects: {
    title: { ar: "المشاريع", en: "Projects" },
    cards: [
      {
        title: { ar: "أعمال مؤثرة", en: "Impact Portfolio" },
        label: { ar: "10 إطلاقات ناجحة", en: "10 launches delivered" },
        iconClass: "uil uil-users-alt",
        link: "/CompletedProjects",
      },
      {
        title: { ar: "آراء العملاء", en: "Testimonials" },
        label: { ar: "4 عملاء سعداء", en: "4 happy clients" },
        iconClass: "uil uil-smile",
        link: "/Reviews",
      },
      {
        title: { ar: "الخبرات", en: "Experience" },
        label: { ar: "Safar AI & Zaha Center", en: "Safar AI & Zaha Center" },
        iconClass: "uil uil-award",
        link: "/Experience",
      },
    ],
  },
  contact: {
    title: {
      ar: "لنُنشئ شيئًا استثنائيًا",
      en: "Let's Build Something Exceptional",
    },
    subtitle: {
      ar: "سواء منصة سفر ذكية أو منصة ثقافية، يسعدني التعاون معك.",
      en: "Whether it’s AI-driven travel or cultural impact platforms, I’d love to collaborate.",
    },
    email: "maysalkhalil02@gmail.com",
    phone: "+962796532179",
  },
  reviews: {
    title: { ar: "ماذا يقولون", en: "What People Say" },
    subtitle: {
      ar: "انطباعات من زملاء وشركاء", 
      en: "Words from colleagues, mentors, and collaborators",
    },
    items: [
      {
        name: { ar: "حنين الحجاج", en: "Haneen Al-Hajaj" },
        role: { ar: "مهندسة برمجيات · Safar AI", en: "Software Engineer · Safar AI" },
        text: {
          ar: "ميس مطوّرة ملتزمة ودقيقة، وإبداعها يرفع جودة كل مشروع تعمل عليه.",
          en: "Mays is an incredibly dedicated developer with a sharp eye for detail. Her creativity and commitment elevate every project she contributes to.",
        },
      },
      {
        name: { ar: "بتول شنيكات", en: "Batool Shneikat" },
        role: { ar: "مهندسة برمجيات · Safar AI", en: "Software Engineer · Safar AI" },
        text: {
          ar: "التعاون مع ميس ملهم جدًا، وهي تجمع بين الانضباط والإحساس التصميمي والعمل الجماعي.",
          en: "Collaborating with Mays was an inspiring experience. Her coding discipline, design intuition, and teamwork make her a standout professional.",
        },
      },
      {
        name: { ar: "إسراء عيد", en: "Israa Eid" },
        role: {
          ar: "مطوّرة فل ستاك · Orange Coding Academy",
          en: "Full Stack Developer · Orange Coding Academy",
        },
        text: {
          ar: "ميس تجمع بين الخبرة التقنية والحس الفني لتقديم منتجات متكاملة.",
          en: "Mays combines technical expertise with artistic sense. She always ensures that every product is both functional and beautifully crafted.",
        },
      },
      {
        name: { ar: "دينا نافذ", en: "Dina Nafez" },
        role: {
          ar: "مطوّرة فل ستاك · Orange Coding Academy",
          en: "Full Stack Developer · Orange Coding Academy",
        },
        text: {
          ar: "العمل مع ميس ممتع؛ إيجابية واحترافية وتترك أثرًا واضحًا على الفريق.",
          en: "Working with Mays is a joy. Her positivity, problem-solving mindset, and professionalism leave a lasting impression on everyone around her.",
        },
      },
      {
        name: { ar: "محمد الخليل", en: "Mohammad Al Khalil" },
        role: {
          ar: "مهندس روبوتكس · مشروع أتمتة",
          en: "Robotics Engineer · N8N Automation Project",
        },
        text: {
          ar: "ميس مبدعة في الربط بين الإبداع والأتمتة وتحسين سير العمل.",
          en: "Mays has an impressive ability to bridge creativity with automation. Her innovative approach consistently improves workflow efficiency and project outcomes.",
        },
      },
      {
        name: { ar: "مصعب الزعبي", en: "Musab Al Zoubi" },
        role: {
          ar: "منسق مشاريع · مركز زها الثقافي",
          en: "Project Coordinator · Zaha Cultural Center",
        },
        text: {
          ar: "ميس مطوّرة موثوقة واحترافية وتضيف الحماس لأي تعاون.",
          en: "Mays is a highly skilled and reliable developer who brings both professionalism and enthusiasm to every collaboration.",
        },
      },
    ],
  },
  experience: {
    title: { ar: "الخبرات المهنية", en: "Professional Experience" },
    items: [
      {
        role: {
          ar: "رئيسة القسم التقني · مطورة فل ستاك — Safar AI",
          en: "Technical Department Head · Full Stack Developer — Safar AI",
        },
        duration: "Jan 2025 – Present",
        description: {
          ar: "قيادة القسم التقني وتطوير منصة Safar AI التعليمية والسياحية. تصميم أنظمة قابلة للتوسع وربط خدمات Moodle وOpenAI وZoom، مع أتمتة العمليات عبر n8n وربط Google Workspace وLinkedIn وMaps APIs.",
          en: "Leading the technical department and overseeing end-to-end development for Safar AI, an AI-driven educational and travel platform. Designed scalable full-stack systems and managed integrations with Moodle, OpenAI, and Zoom APIs. Collaborated closely with the UI/UX team to deliver a responsive, accessible user experience. Automated internal workflows using n8n and integrated Google Workspace, LinkedIn, and Maps APIs for seamless operations.",
        },
      },
      {
        role: {
          ar: "مدرّسة برمجة — مركز زها الثقافي (خلدا)",
          en: "Programming Instructor — Zaha Cultural Center (Khalda Branch)",
        },
        duration: "Apr 2025 – Present",
        description: {
          ar: "تدريب اليافعين على مفاهيم البرمجة عبر أدوات تفاعلية وبناء خطط تدريبية قائمة على المشاريع.",
          en: "Teaching coding fundamentals and web concepts to youth aged 10 – 17 using interactive tools like EduBlocks. Developed structured lesson plans and project-based exercises that build logical reasoning and creative problem-solving skills.",
        },
      },
      {
        role: {
          ar: "منسقة برمجة — مركز زها الثقافي (خلدا)",
          en: "Programming Coordinator — Zaha Cultural Center (Khalda Branch)",
        },
        duration: "Apr 2025 – Present",
        description: {
          ar: "تنسيق الأنشطة البرمجية وإدارة الأجهزة وحل المشكلات التقنية أثناء الفعاليات.",
          en: "Coordinating all programming-related operations at the center, managing devices and systems, and resolving technical challenges during workshops and STEAM events. Supported smooth delivery of programs across departments.",
        },
      },
      {
        role: {
          ar: "مطوّرة فل ستاك — أكاديمية Orange",
          en: "Full Stack Web Developer — Coding Academy by Orange",
        },
        duration: "Sep 2024 – Dec 2024",
        description: {
          ar: "إنهاء برنامج مكثف لتطوير البرمجيات وبناء عدة مشاريع باستخدام HTML وCSS وBootstrap وPHP وLaravel وReact وJavaScript مع دور Scrum Master.",
          en: "Completed an intensive Full Stack Bootcamp in collaboration with Simplon.co and PSUT. Built multiple projects using HTML5, CSS3, Bootstrap, PHP, Laravel, React, and JavaScript. Served as Scrum Master and project owner, strengthening leadership and Agile collaboration skills.",
        },
      },
      {
        role: { ar: "مطوّرة مستقلة", en: "Freelance Full Stack Developer" },
        duration: "2023 – 2024",
        description: {
          ar: "تقديم لوحات تحكم ومنصات محتوى وحلول أتمتة باستخدام React وLaravel وn8n مع تركيز على الأداء والربط مع APIs.",
          en: "Delivered tailored dashboards, content platforms, and automation solutions using React, Laravel, and n8n. Focused on performance optimization, API integration, and scalable backend architecture.",
        },
      },
      {
        role: { ar: "عمل تطوعي ومجتمعي", en: "Volunteer & Community Work" },
        duration: "Ongoing",
        description: {
          ar: "مشاركة فعّالة في مبادرات تعليمية واجتماعية ضمن Nabd Club وWarsha Balad وبرنامج أنا أشارك، مع تعزيز روح التعاون والإبداع.",
          en: "Active member in social and educational initiatives including Nabd Club (Integration & Registration Teams), Warsha Balad (youth leadership program), and Ana Usharak / Ana Usharak Plus by the Crown Prince Foundation, fostering community engagement, creative thinking, and collaboration.",
        },
      },
    ],
  },
  completedProjects: {
    title: { ar: "أبرز المشاريع", en: "Projects & Highlights" },
    items: [
      {
        title: { ar: "Safar AI", en: "Safar AI" },
        description: {
          ar: "قيادة تطوير منصة تعليم وسفر مدعومة بالذكاء الاصطناعي وربط خدمات Moodle وOpenAI وZoom مع أتمتة داخلية عبر n8n.",
          en: "Leading full-stack development for Safar AI — an AI-driven educational and travel companion. Architected scalable React front-end, integrated Moodle, OpenAI & Zoom APIs, and automated internal workflows with n8n for Google Workspace and LinkedIn integration.",
        },
        link: "https://safarai.org",
        cta: { ar: "استكشاف Safar AI", en: "Explore Safar AI" },
      },
      {
        title: {
          ar: "منصة التطوع — مركز زها الثقافي",
          en: "Zaha Cultural Center Volunteer Platform",
        },
        description: {
          ar: "تطوير منصة رقمية لتسجيل المتطوعين والفعاليات باستخدام Laravel وReact وربط المجتمع بالشباب.",
          en: "Developed a digital volunteering hub for Zaha Cultural Center (Khalda Branch) enabling families to discover STEAM workshops, register, and track their community impact. Built with Laravel and React to connect youth and mentors seamlessly.",
        },
        link: "https://www.facebook.com/ZahaCulturalCenter/",
        cta: { ar: "زيارة مركز زها", en: "Discover Zaha Center" },
      },
      {
        title: { ar: "JORYMODA — متجر متعدد البائعين", en: "JORYMODA – Multi-Vendor E-Commerce" },
        description: {
          ar: "منصة تجارة إلكترونية متعددة البائعين باستخدام Laravel وMySQL ولوحة تحكم للإدارة وتتبع الطلبات.",
          en: "A complete multi-vendor fashion marketplace built with Laravel, MySQL, and Bootstrap. Vendors manage independent stores while customers enjoy a streamlined shopping experience. Includes Admin Dashboard, order tracking, and secure payments.",
        },
        link: "https://github.com/mays-alkhalil/JORYMODA",
        cta: { ar: "عرض المستودع", en: "View Repository" },
      },
      {
        title: { ar: "Tayeb — وصفات الطعام", en: "Tayeb – Food Recipes Web App" },
        description: {
          ar: "منصة وصفات تفاعلية مع بحث متقدم ومفضلات باستخدام React وLaravel.",
          en: "An interactive recipe platform built with React and Laravel. Implements CRUD operations, advanced search by ingredients and categories, and a Favorites system for personalized collections.",
        },
        link: "https://github.com/mays-alkhalil/Test_React_Laravel",
        cta: { ar: "عرض المستودع", en: "View Repository" },
      },
      {
        title: {
          ar: "GamifyTech — متجر إكسسوارات الألعاب",
          en: "GamifyTech – Gaming Accessories E-Commerce",
        },
        description: {
          ar: "متجر إلكتروني مع قائمة رغبات وكوبونات وتتبع طلبات باستخدام HTML/CSS/JS/PHP/MySQL.",
          en: "An engaging online store for gaming enthusiasts. Features Wishlist, Cart, discount coupons, and order tracking. Built with HTML5, CSS3, JavaScript, PHP, and MySQL using the Singleton pattern for secure database connections.",
        },
        link: "https://github.com/HamzasZaitoun/NextLevelTech",
        cta: { ar: "عرض المستودع", en: "View Repository" },
      },
      {
        title: { ar: "Fit Me — نادي لياقة", en: "Fit Me – Fitness Club Website" },
        description: {
          ar: "موقع لياقة متجاوب يقدم تدريبات ونصائح غذائية وتتبع التقدم.",
          en: "A responsive fitness club platform developed with HTML, CSS, and JavaScript to enhance member engagement. Includes interactive sections for workouts, nutrition tips, and progress tracking.",
        },
        link: "https://github.com/mays-alkhalil/FitME_PROJECT_JAVASCRIPT-main",
        cta: { ar: "عرض المستودع", en: "View Repository" },
      },
      {
        title: {
          ar: "موقع بورتفوليو (React)",
          en: "Portfolio Website (React Edition)",
        },
        description: {
          ar: "بورتفوليو تفاعلي بـ React مع أوضاع ألوان وحركات سلسة وتصميم متجاوب.",
          en: "A dynamic React portfolio designed to showcase skills, projects, and achievements with dark/light mode toggle, animated sections, and smooth scroll navigation. Fully responsive across devices.",
        },
        link: "https://github.com/mays-alkhalil/Portfolio-React",
        cta: { ar: "عرض المستودع", en: "View Repository" },
      },
      {
        title: {
          ar: "بورتفوليو الأصلي",
          en: "Creative Portfolio – Original Version",
        },
        description: {
          ar: "النسخة الأولى من البورتفوليو باستخدام HTML وCSS وJavaScript.",
          en: "The initial portfolio built using HTML, CSS, and JavaScript — the foundation of Mays’s design language and front-end journey.",
        },
        link: "https://github.com/mays-alkhalil/mays-portfolio",
        cta: { ar: "عرض المستودع", en: "View Repository" },
      },
      {
        title: { ar: "تحويل النص إلى صوت", en: "Text-to-Speech Converter" },
        description: {
          ar: "تطبيق خفيف لتحويل النص إلى صوت مع أصوات متعددة.",
          en: "A lightweight web app that converts text into speech with multiple voice presets. Built using HTML, CSS, and JavaScript.",
        },
        link: "#",
        cta: { ar: "طلب تجربة", en: "Request Demo" },
      },
      {
        title: { ar: "Weather Pulse — الطقس", en: "Weather Pulse – Forecast Dashboard" },
        description: {
          ar: "تطبيق طقس بسيط يعرض بيانات مباشرة من API بواجهة متجاوبة.",
          en: "A minimal weather application providing real-time data via API integration. Built with clean JavaScript and responsive UI principles.",
        },
        link: "https://github.com/mays-alkhalil/weather-app",
        cta: { ar: "عرض المستودع", en: "View Repository" },
      },
    ],
  },
  footer: {
    links: [
      { label: { ar: "الرئيسية", en: "Home" }, href: "#home" },
      { label: { ar: "من أنا", en: "About" }, href: "#about" },
      { label: { ar: "المشاريع", en: "Projects" }, href: "#Projects" },
      { label: { ar: "تواصل", en: "Contact" }, href: "#contact" },
    ],
    social: [
      {
        iconClass: "fab fa-instagram",
        href: "https://www.instagram.com/codingwithmays/",
      },
      {
        iconClass: "fab fa-linkedin",
        href: "https://www.linkedin.com/in/mays-al-khalil-94723b220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        iconClass: "fab fa-github",
        href: "https://github.com/mays-alkhalil",
      },
      {
        iconClass: "fab fa-facebook",
        href: "https://www.facebook.com/maysm.ali.14?mibextid=ZbWKwL",
      },
    ],
    copyrightName: "Mays Alkhalil",
    year: "2024",
  },
  sectionStyles: {
    featured: { background: "#ffffff", text: "#1f1f1f" },
    about: { background: "#ffffff", text: "#1f1f1f" },
    projects: { background: "#ffffff", text: "#1f1f1f" },
    contact: { background: "#ffffff", text: "#1f1f1f" },
    reviews: { background: "#ffffff", text: "#1f1f1f" },
    experience: { background: "#ffffff", text: "#1f1f1f" },
    completedProjects: { background: "#ffffff", text: "#1f1f1f" },
    footer: { background: "#0b0b0b", text: "#ffffff" },
  },
};

export default defaultContent;
