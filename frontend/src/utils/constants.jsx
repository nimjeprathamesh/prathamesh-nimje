import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillPeopleFill, BsInfoCircle, BsTools } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { MdDesignServices, MdOutlineArticle, MdOutlineContactMail } from "react-icons/md";
import { RiNextjsLine } from "react-icons/ri";
import { SiBootstrap, SiDigitalocean, SiExpress, SiIndeed, SiJavascript, SiMui, SiMysql, SiNetlify, SiPhpmyadmin, SiPostman, SiTailwindcss, SiVercel, SiVite, SiRender } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import debtor from '../assets/images/debtor.png';
import mechanic from '../assets/images/mechanic.png';
import tms from "../assets/images/tms.png";
import event from "../assets/images/event-creation.png";
import challenge from "../assets/images/challenges-app.png";
import food from "../assets/images/food-order.png";

export const navItems = [
    { id: 1, name: "Home", url: "introduction", icon: <BiHomeAlt fontWeight="bold" /> },
    { id: 2, name: "About", url: "profile", icon: <BsInfoCircle fontWeight="bold" /> },
    { id: 3, name: "Skills", url: "skills", icon: <BsTools fontWeight="bold" /> },
    { id: 4, name: "Experience", url: "work-process", icon: <CgWorkAlt fontWeight="bold" /> },
    { id: 5, name: "Projects", url: "/projects", icon: <MdOutlineArticle fontWeight="bold" /> },
    { id: 6, name: "Contact", url: "contact", icon: <MdOutlineContactMail fontWeight="bold" /> },
];

export const socialIcons = [
    { icon: faGithub, link: "https://github.com/nimjeprathamesh", img: null, tag: null },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/prathamesh-nimje-94b43821a/", img: null, tag: null },
    { icon: null, link: "https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage", img: null, tag: <SiIndeed /> },
    { icon: null, link: "https://www.naukri.com/mnjuser/profile?id=&altresid", img: './naukri.png', tag: null },
];

export const addressData = [
    { icon: faLocationDot, title: "Address", description: "Nagpur, Maharashtra, 440002" },
    { icon: faEnvelope, title: "My Email", description: "nimjeprathamesh1@mail.com" },
    { icon: faPhone, title: "Call Me Now", description: "+91 9270516127" },
];

export const informationSummaryData = [
    { id: 1, title: "Experience", description: "1.5 Y." },
    { id: 2, title: "Projects Completed", description: "8" },
];

export const projectData = [
    {
        id: 1,
        image: './tms.png',
        category: "Featured Project",
        title: "Tour Management System",
        description:
            "I developed an Tour Mnagement System project using Chakra UI, React JS, Node JS, Express JS and MySQL in which customer can contact tour guides and book tours and admin can create, update and delete the packages destinations and many more.",
        link: "https://tour-management-system-xi.vercel.app/",
        source: "https://github.com/nimjeprathamesh/tour-management-system",
    },
    {
        id: 2,
        image: './event-creation.png',
        category: "Featured Project",
        title: "Events Creation App",
        description:
            "I developed an Event Creation Web App project using React JS, Node JS, Express JS and MySQL. In this project user can create, update and delete the events.",
        link: "https://events-creation-app.vercel.app/",
        source: "https://github.com/nimjeprathamesh/events-creation",
    },
    {
        id: 3,
        image: './challenges-app.png',
        category: "Featured Project",
        title: "Challenges App",
        description:
            "I developed an Challenges Web App project like a Todo List using React JS, Node JS, Express JS and MySQL in user can add new challenges. By default it display as active and user can mark it as completed or failed.",
        link: "https://challenges-app-seven.vercel.app/",
        source: "https://github.com/nimjeprathamesh/challenges",
    },
    {
        id: 4,
        image: './food-order.png',
        category: "Featured Project",
        title: "Food Order App",
        description:
            "I developed an Food Order Web App project using React JS, Node JS, Express JS and MySQL in which customer can add the order into cart. After that customer can place the order.",
        link: "https://food-order-app-eight-xi.vercel.app/",
        source: "https://github.com/nimjeprathamesh/food_order",
    },
];

export const rolesData = [
    {
        id: 1,
        title: "Full Stack (MERN + MySQL) Development",
        description:
            "I build powerful and scalable full stack applications using MySQL, Express.js, React.js, and Node.js. My focus is on writing clean, maintainable code while ensuring performance and security.",
    },
    {
        id: 2,
        title: "React Native App Development",
        description:
            "I develop modern, responsive, and feature-rich Android applications using React Native. I have successfully published apps to the Google Play Store with smooth UI and optimized performance.",
    },
    {
        id: 3,
        title: "Deployment & Cloud Hosting",
        description:
            "I deploy and manage applications on DigitalOcean, ensuring scalability, uptime, and security. From backend APIs to full-fledged web and mobile solutions, I deliver production-ready deployments.",
    },
];

export const androidData = [
    {
        id: 1,
        image: 'https://play-lh.googleusercontent.com/HVm-Hnmg8qaqkFaXasxn-mAxz87JWPplcEX_7cT_cRy8pmLCCHUNiiFIeLz_B2mVxqwxVBo4bHWGKGZk8gNlvg=w240-h480-rw',
        title: "My Debt Tracker",
        description:
            "No business can survive without a compact financial system.  Proper maintenance of financial records gives you a better control over your business. For the 21st Century digitally driven business environment, we've developed an app to help entrepreneurs automate and systematize the system of payment.  Developed with an objective of streamlining a business or occupation, it will make your financial foundation transparent and accurate.",
        link: "https://play.google.com/store/apps/details?id=com.peccular.debttracker",
    },
    {
        id: 2,
        image: 'https://play-lh.googleusercontent.com/NjToYwGI2tpC6rxvkJeWgWL_XWIbCED_ayx-8EH11FcnIe7KE6aFlRbFEkB3EavJf06Bz0S6QREYI3nFk8_K=w240-h480-rw',
        title: "Mechanic Invoice Manager",
        description:
            "Invoices are official records of goods or services delivered, representing the amount payable by clients. With businesses rapidly shifting from manual billing to digital tools, e-invoicing has become essential for efficiency, accuracy, and automation. The Mechanic Invoice Manager Android App brings end-to-end invoicing, payment tracking, tax management, and financial reporting into one easy-to-use platform.",
        link: "https://play.google.com/store/apps/details?id=com.peccular.mechanic",
    },
];

export const skillCategories = {
    Languages: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
    ],
    Frameworks: [
        { name: "React JS", icon: <FaReact className="text-sky-500" /> },
        { name: "Next JS", icon: <RiNextjsLine className="text-black" /> },
        { name: "React Native", icon: <TbBrandReactNative className="text-blue-400" /> },
        { name: "Material UI", icon: <SiMui className="text-blue-700" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Node JS", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express JS", icon: <SiExpress className="text-gray-500" /> },
        { name: "Vite", icon: <SiVite className="text-yellow-500" /> },
        { name: "Context API", icon: <BsFillPeopleFill className="text-green-500" /> },
    ],
    Databases: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Php MySQL", icon: <SiPhpmyadmin className="text-green-500" /> },
    ],
    Tools: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-black" /> },
        { name: "UI/UX", icon: <MdDesignServices className="text-pink-500" /> },
        { name: "DigitalOcean", icon: <SiDigitalocean className="text-blue-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Netlify", icon: <SiNetlify className="text-[#05BDBA]" /> },
        { name: "Render", icon: <SiRender className="text-black" /> },
    ],
};

export const tabs = [
    {
        id: 1,
        title: "Radical Global",
        experiences: [
            {
                role: "Full-Stack Developer",
                company: "Radical Global",
                date: "Sep 2024 - Present",
                details: [
                    "Implemented secure JWT-based authentication with bcrypt password encryption, reducing security vulnerabilities by 80%.",
                    "Constructed fully responsive and scalable website, deployed on Vercel, ensuring 99.9% uptime and sub-2-second load times.",
                    "Integrated booking functionality that increased user tour reservations by 20% within first month.",
                    "Developed contact system connecting customers with tour guides, resulting in 20% increase in successful bookings.",
                ],
                logo: "./radical.png",
            },
            {
                role: "Web Developer Intern",
                company: "Radical Global",
                date: "Mar 2023 - June 2023",
                details: [
                    "Built and enhanced web applications using HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL.",
                    "Developed a full web application leveraging front-end and back-end technologies for efficient data management.",
                    "Implemented responsive design techniques for optimal viewing across multiple devices.",
                ],
                logo: "./radical.png",
            },
        ],
    },
    {
        id: 2,
        title: "ITXN",
        experiences: [
            {
                role: "React JS Intern",
                company: "Itxn Platform",
                date: "Nov 2023 - May 2024",
                details: [
                    "Focused on building and enhancing React applications using React Js.",
                    "Developed custom components, forms, and interfaces leveraging React for dynamic front-end.",
                    "Created banking-related web applications, debugged and resolved issues related to React components.",
                ],
                logo: "./itxn.png",
            },
        ],
    },
];

export const androidDetailsData = [
    {
        id: 1,
        image: debtor,
        logo: 'https://play-lh.googleusercontent.com/HVm-Hnmg8qaqkFaXasxn-mAxz87JWPplcEX_7cT_cRy8pmLCCHUNiiFIeLz_B2mVxqwxVBo4bHWGKGZk8gNlvg=w240-h480-rw',
        title: "My Debt Tracker",
        short_desc: "Track, manage & automate debtors & creditors for smarter business.",
        description:
            "No business can survive without a compact financial system. Proper maintenance of financial records gives you a better control over your business. For the 21st Century digitally driven business environment, we've developed an app to help entrepreneurs automate and systematize the system of payment. Developed with an objective of streamlining a business or occupation, it will make your financial foundation transparent and accurate.\nTo experience the effectiveness of this app, companies will have to download and start using it. It will enable firms to effectively manage and view the status of creditors and debtors. Understanding the status of debtors and creditors is crucial for financial health of an individual, a professional, or business owner.\nIt's a scalable app. You can use this app irrespective of the size of your business. Besides it is designed to scale with your business. Instead of maintaining manual calendar reminders or employing finance team who will be monitoring your payment and receipts on a day to day basis, you can use this debtor and creditor app.\nWhat Does This Debt Tracker App Do?\nBy posting entries on a day-to-day basis in this app, an entrepreneur will be able to view complete positions of creditors and debtors account at any given time. The same can be viewed day-wise, week-wise, fortnightly, quarterly, however you want. You can come to know the position purchases. Likewise you can view your debtor's account to know the status of total sales, total debts, and total discount allowed and sales returned. Various reports can be generated through this app as and when required. You can generate automated reminders to concerned parties after due-date. The entire debtor and creditor management can be planned through this easy to use app.\nDebtors & Creditors Tally\nYou can also view list of debtors to whom your company has sold goods on credit. At the same time you can view the list of creditors who have sold the goods on credit to your company.\nConvenience of This App:\nEasy to use, no prior training, skill or expertise required; extremely lay-man friendly\nMobile Friendly\nSecure\nAccurate Tracking of Debtor & Creditor Status\nEfficient Debtor & Creditor Management – Eases Billing, Follow-up, and Collection Tasks\nGenerate Real-time Reports day-wise, week-wise, month-wise as required\nSave you time and have better control over cash flows\nWant to try this Debtor & Creditor app? Get started immediately by downloading it!",
        link: "https://play.google.com/store/apps/details?id=com.peccular.debttracker",
    },
    {
        id: 2,
        image: mechanic,
        logo: 'https://play-lh.googleusercontent.com/NjToYwGI2tpC6rxvkJeWgWL_XWIbCED_ayx-8EH11FcnIe7KE6aFlRbFEkB3EavJf06Bz0S6QREYI3nFk8_K=w240-h480-rw',
        title: "Mechanic Invoice Manager",
        short_desc: "Simplify business billing with Mechanic Invoice Manager Android App.",
        description:
            "Mechanic Invoice Manager Android App – For Businesses, Freelancers & Professionals \nInvoices are official records of goods or services delivered, representing the amount payable by clients. With businesses rapidly shifting from manual billing to digital tools, e-invoicing has become essential for efficiency, accuracy, and automation. The Mechanic Invoice Manager Android App brings end-to-end invoicing, payment tracking, tax management, and financial reporting into one easy-to-use platform. \nWhy Choose This App? \nDesigned for small, medium, and large businesses, freelancers, and professionals, our app simplifies invoicing with real-time control, automated approvals, audit trails, and cash flow monitoring. Users have praised it as one of the best invoice manager apps for Android. \nKey Features \n1. Service Management \nAdd new services with name, description, price, and tax details. \nEdit, delete, and manage all services in one place for quick access. \n2. Expense Tracking \nCreate and categorize expenses with full details. \nView and filter expenses by date, week, or custom criteria for detailed insights. \n3. Profit & Finance Summary \nBuilt-in profit calculator to track income and expenses. \nGenerate financial summaries to monitor profitability and control budgets. \n4. Tax Management \nAdd and manage tax details for products and services. \nGenerate accurate invoices and reports with correct tax slabs and rates. \n5. Customer Reports \nGenerate client-specific billing history and reports. \nAnalyze payment records and transactions for better decision-making. \n6. Reports & Export \nExport invoices and financial reports to Excel. \nShare reports via email or integrate them with other business tools. \n7. Payment Tracking \nTrack pending and overdue payments in real time. \nImprove cash flow and reduce manual follow-ups. \n8. Professional Invoices \nCreate branded invoices with logos, signatures, and tax details. \nView invoices by date, client, week, or month with just a click. \n9. Job & Invoice History \nMaintain past job details and invoice history. \nQuickly access and manage old invoices and service records anytime. \nBenefits \nStreamlined invoicing for any type of business or freelancer. \nReal-time data to save time, cut costs, and support smarter decisions. \nImproved financial accuracy and efficiency with easy reporting. \nEnhanced professionalism through timely billing and clear cash flow. \nConclusion \nThe Mechanic Invoice Manager Android App is an all-in-one tool for invoicing, tax compliance, expense tracking, and financial reporting. Whether you run a large company, a startup, or a home-based business, this app ensures smooth financial management with accuracy, speed, and convenience. \nWant to try this Mechnaic app? Get started immediately by downloading it!",
        link: "https://play.google.com/store/apps/details?id=com.peccular.mechanic",
    },
];

export const projectDetailsData = [
    {
        id: 1,
        image: tms,
        category: "Featured Project",
        title: "Tour Management System",
        description:
            "I developed an Tour Mnagement System project using Chakra UI, React JS, Node JS, Express JS and MySQL in which customer can contact tour guides and book tours and admin can create, update and delete the packages destinations and many more.",
        details: [
            "Implemented secure JWT-based authentication with bcrypt password encryption, reducing security vulnerabilities by 80%.",
            "Constructed fully responsive and scalable website, deployed on Vercel, ensuring 99.9% uptime and sub-2-second load times.",
            "Integrated booking functionality that increased user tour reservations by 20% within first month.",
            "Developed contact system connecting customers with tour guides, resulting in 20% increase in successful bookings.",
        ],
        link: "https://tour-management-system-xi.vercel.app/",
        source: "https://github.com/nimjeprathamesh/tour-management-system",
    },
    {
        id: 2,
        image: event,
        category: "Featured Project",
        title: "Events Creation App",
        description:
            "I developed an Event Creation Web App project using React JS, Node JS, Express JS and MySQL. In this project user can create, update and delete the events.",
        details: [
            "Built web application supporting 5 programming languages, serving 200+ active developers monthly.",
            "Launched email-based authentication with JWT tokens, achieving 99% login success rate.",
            "Deployed frontend and backend on Vercel with Docker containerization, ensuring consistent development environment across 3+ team members.",
            "Executed responsive design principles resulting in 40% longer average session duration.",
        ],
        link: "https://events-creation-app.vercel.app/",
        source: "https://github.com/nimjeprathamesh/events-creation",
    },
    {
        id: 3,
        image: challenge,
        category: "Featured Project",
        title: "Challenges App",
        description:
            "I developed an Challenges Web App project like a Todo List using React JS, Node JS, Express JS and MySQL in user can add new challenges. By default it display as active and user can mark it as completed or failed.",
        details: [
            "Built web application supporting 5 programming languages, serving 200+ active developers monthly.",
            "Launched email-based authentication with JWT tokens, achieving 99% login success rate.",
            "Deployed frontend and backend on Vercel with Docker containerization, ensuring consistent development environment across 3+ team members.",
            "Executed responsive design principles resulting in 40% longer average session duration.",
        ],
        link: "https://challenges-app-seven.vercel.app/",
        source: "https://github.com/nimjeprathamesh/challenges",
    },
    {
        id: 4,
        image: food,
        category: "Featured Project",
        title: "Food Order App",
        description:
            "I developed an Food Order Web App project using React JS, Node JS, Express JS and MySQL in which customer can add the order into cart. After that customer can place the order.",
        details: [
            "Built web application supporting 5 programming languages, serving 200+ active developers monthly.",
            "Launched email-based authentication with JWT tokens, achieving 99% login success rate.",
            "Deployed frontend and backend on Vercel with Docker containerization, ensuring consistent development environment across 3+ team members.",
            "Executed responsive design principles resulting in 40% longer average session duration.",
        ],
        link: "https://food-order-app-eight-xi.vercel.app/",
        source: "https://github.com/nimjeprathamesh/food_order",
    },
];