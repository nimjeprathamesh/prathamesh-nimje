import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { RiNextjsLine } from "react-icons/ri";
import { SiBootstrap, SiDigitalocean, SiExpress, SiIndeed, SiJavascript, SiMui, SiMysql, SiNetlify, SiPhpmyadmin, SiPostman, SiTailwindcss, SiVercel, SiVite, SiRender } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import debtor from '../assets/images/debtor.png';
import mechanic from '../assets/images/mechanic.png';
import smart from '../assets/images/smart.png';
import tms from "../assets/images/tms.png";
import event from "../assets/images/event-creation.png";
import challenge from "../assets/images/challenges-app.png";
import food from "../assets/images/food-order.png";
import visitor from '../assets/images/visitor.png';

export const navItems = [
    { id: 1, name: "Home", url: "introduction" },
    { id: 2, name: "About", url: "profile" },
    { id: 3, name: "Skills", url: "skills" },
    { id: 4, name: "Experience", url: "work-process" },
    { id: 5, name: "Projects", url: "/projects" },
    { id: 6, name: "Contact", url: "contact" },
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
    {
        id: 3,
        image: 'https://play-lh.googleusercontent.com/BW4lGdImxlYV3QyHBXMZu2kIMjZk2QASv8jw_sqyE0cY_pcc4kx7oFl95sBd1emORRZVmanm7EPHMP75wB1Ifw=w240-h480-rw',
        title: "Smart Money Collection",
        description:
            "Introducing Smart Money Collection App, your ultimate solution for hassle-free cash collection. Designed for every Android user, this app is ideal for daily cash collection agents, small business owners, freelancers, and anyone who regularly handles payments. It simplifies money collection, streamlines operations, and eliminates the need for manual recording of transactions, receipts, and client data.",
        link: "https://play.google.com/store/apps/details?id=com.peccular.moneycollect",
    },
    {
        id: 4,
        image: 'https://play-lh.googleusercontent.com/b8qE-m5Iuks42yYQLROLteUCDw1ufVs6dC91Z4xB7DjWRhqU51QXRLhAqKLjm1eqnDvm2lFU0YyO2BmLXdibww=w240-h480-rw',
        title: "Entry Book - Visitor Management",
        description:
            "Entry Book – Visitor Management Android App is a modern digital system that replaces outdated manual logbooks used in offices, buildings, factories, warehouses, and events. Instead of recording visitor names, contact details, and purpose of visit on paper, your security personnel or gatekeeper can enter the information directly into the app using a smartphone or tablet. This creates a professional, secure, and organized visitor management process with automatic digital ...",
        link: "https://play.google.com/store/apps/details?id=com.peccular.entrybook",
    },
];

export const shopifyData = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/app-store/listing_images/d3e078004acc95fe018f6db932904d58/promotional_image/CPOKy6HCg4oDEAE=.jpeg',
        title: "RG Quick Builk Product Editor",
        description:
            "RG Quick & Bulk Product Editor is a powerful app designed to simplify product management. Effortlessly edit product details, prices, inventory, and more in bulk or individually—all in one intuitive interface. Save time, reduce errors, and streamline your store updates with this must-have tool for efficient store management.",
        link: "https://apps.shopify.com/rg-bulk-product-editor?st_source=autocomplete&surface_detail=autocomplete_apps",
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/app-store/listing_images/0783853fabbdfd4f0c735378fbcc1de5/promotional_image/CJS94eTXtI4DEAE=.png',
        title: "RG Products Image Gallery",
        description:
            "The RG Products Image Gallery automatically fetches all product images from your Shopify store and displays them in a clean, organized gallery. It updates in real-time as products are added or removed, saving you time and effort. This dynamic gallery enhances your store’s visual appeal and improves user experience.",
        link: "https://apps.shopify.com/rg-products-image-gallery?st_source=autocomplete&surface_detail=autocomplete_apps",
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
    {
        id: 3,
        image: smart,
        logo: 'https://play-lh.googleusercontent.com/BW4lGdImxlYV3QyHBXMZu2kIMjZk2QASv8jw_sqyE0cY_pcc4kx7oFl95sBd1emORRZVmanm7EPHMP75wB1Ifw=w240-h480-rw',
        title: "Smart Money Collection",
        short_desc: "Secure, easy cash collection with tracking & receipts.",
        description:
            "Smart Money Collection App\nIntroducing Smart Money Collection App, your ultimate solution for hassle-free cash collection. Designed for every Android user, this app is ideal for daily cash collection agents, small business owners, freelancers, and anyone who regularly handles payments. It simplifies money collection, streamlines operations, and eliminates the need for manual recording of transactions, receipts, and client data. With its easy-to-use interface, real-time tracking, and secure data handling, managing collections has never been easier.\nSecure & Easy Login\nThe app offers a robust login and registration system, ensuring user information is protected at all times. Users can quickly register and log in securely, without worrying about unauthorized access. All transactions are encrypted, and real-time cash tracking ensures your financial records are accurate, safe, and always accessible. Whether managing business or personal collections, the app guarantees a secure, smooth, and transparent experience.\nUser Management\nSmart Money Collection App allows you to record detailed information about clients, including name, phone number, email, amount to be collected, and type of package (daily, weekly, or monthly). Users can easily add, edit, or delete records, ensuring flexibility and accuracy in managing collections. The app keeps a complete history of transactions, helping you maintain precise records for every client, big or small, individual or bulk.\nEfficient Money Management\nThe app supports both individual and bulk transactions, tracking collections according to each client’s package. You can view complete collection histories and client data in real-time. Bulk Collection features allow handling multiple clients and transactions with ease, ensuring no confusion or errors in recording. This ensures a smoother workflow and better cash management for all users.\nDashboard & Insights\nSmart Money Collection App comes with a comprehensive Dashboard that provides instant summaries of your collections. You can view collections for today, yesterday, week, month, or year through interactive cards. Each card displays detailed, user-wise receipts, which can be shared via WhatsApp, SMS, or other channels. The Dashboard also highlights insights such as the highest collection from clients, offering a clear and instant view of your cash flow.\nReports & Analytics\nGenerate detailed reports for individual clients or overall collections. The app allows filtering by dates, client, or package, providing precise analytics in Excel format. Reports can be easily shared with stakeholders through WhatsApp, SMS, email, or other channels. This feature ensures transparency and accountability in all transactions.\nReceipt Sharing\nEvery transaction generates a digital receipt that can be instantly shared with clients, ensuring transparency and verification. This feature builds trust and maintains a clear record of all collections.\nGuidance & Ease of Use\nSmart Money Collection App is mobile-friendly, intuitive, and designed by expert developers to simplify cash handling. From recording transactions to generating and sharing receipts, the app streamlines every step of the money collection process. It helps small businesses, freelancers, and entrepreneurs manage receivables efficiently, reduce errors, and accelerate cash flow.\nWith Smart Money Collection App, say goodbye to manual tracking, delayed payments, and entry errors. Enjoy a secure, streamlined, and highly efficient money collection process, and take control of your cash flow like never before.",
        link: "https://play.google.com/store/apps/details?id=com.peccular.moneycollect",
    },
    {
        id: 4,
        image: visitor,
        logo: 'https://play-lh.googleusercontent.com/b8qE-m5Iuks42yYQLROLteUCDw1ufVs6dC91Z4xB7DjWRhqU51QXRLhAqKLjm1eqnDvm2lFU0YyO2BmLXdibww=w240-h480-rw',
        title: "Entry Book - Visitor Management",
        short_desc: "Ultimate solution for managing visitor entries efficiently and securely.",
        description:
            "Entry Book – Visitor Management Android App is a modern digital system that replaces outdated manual logbooks used in offices, buildings, factories, warehouses, and events. Instead of recording visitor names, contact details, and purpose of visit on paper, your security personnel or gatekeeper can enter the information directly into the app using a smartphone or tablet. This creates a professional, secure, and organized visitor management process with automatic digital records.\nIn today’s digital era, businesses increasingly rely on smart tools to streamline operations and enhance security. Entry Book is part of this digital transformation. It helps maintain accurate visitor history, improves monitoring, and gives your organization a more professional image from the moment someone walks in.\nWhat is Entry Book – Visitor Management Android App?\nEntry Book is a simple, user-friendly visitor management solution designed for Android devices. It helps you maintain paperless, secure, and automated records of everyone entering your premises. No special training is required—any security guard, receptionist, or gatekeeper can use it effortlessly. Suitable for small, medium, and large businesses, residential complexes, townships, events, and warehouses, it offers better accuracy, fewer errors, and improved visitor experience.\nKey Features\n1. Manual Visitor Check-in\nSecurity staff can enter basic visitor details such as name, contact number, company name, and purpose of visit. This digital process ensures the information is clean, clear, and securely stored. It enhances operational efficiency, compliance, and overall safety.\n2. Time & Attendance Logs\nEntry Book automatically logs check-in and check-out times for visitors, clients, and employees. You can see:\nExact time someone entered and exited\nHow long each person stayed\nDaily and weekly visitor summaries\nVisitor flow patterns and peak hours\nNumber of people currently inside the premises\nThis improves accountability, accuracy, and security while giving you valuable insights for planning and monitoring.\n3. Exportable Reports\nYou can instantly download organized visitor data, attendance logs, and activity summaries. These reports can be shared with management, HR, auditors, or security teams within seconds—making documentation and compliance effortless.\n4. Visitor History & Multi-Location Support\nWhether you manage a single office, an entire building, or multiple branches across locations, Entry Book gives you centralized visibility. You can track:\nVisitor activity across all locations\nDepartment-wise visits\nReal-time logs for audits\nHistorical records for decision-making\nThis makes it ideal for corporate offices, warehouses, service centers, residential buildings, and remote sites.\nBenefits\nEnhanced security through real-time digital logging\nIncreased accuracy with minimal chances of error\nFaster check-in process and improved visitor experience\nCentralized data storage and easy access anytime\nAutomatic reports for compliance and audits\nAffordable, easy to use, and quick to implement\nEntry Book helps maintain discipline, ensures transparency, and strengthens security. It is an essential tool for any organization that values safety, professionalism, and efficiency. Whether you need to track employee attendance, manage visitor flow, or maintain detailed access records, Entry Book offers a complete, reliable, and convenient digital solution.",
        link: "https://play.google.com/store/apps/details?id=com.peccular.entrybook",
    },
];

export const shopifyDetailsData = [
    {
        id: 1,
        image: "https://cdn.shopify.com/app-store/listing_images/d3e078004acc95fe018f6db932904d58/promotional_image/CPOKy6HCg4oDEAE=.jpeg?height=720&quality=90&width=1280",
        logo: 'https://cdn.shopify.com/s/files/applications/d3e078004acc95fe018f6db932904d58.png?1732270841',
        title: "RG Quick Bulk Product Editor",
        short_desc: "Quickly edit products.",
        description:
            "RG Quick & Bulk Product Editor is a powerful app designed to simplify product management. Effortlessly edit product details, prices, inventory, and more in bulk or individually—all in one intuitive interface. Save time, reduce errors, and streamline your store updates with this must-have tool for efficient store management.\nQuick Edits: Update products effortlessly without switching between pages.\nFilter by title, tags, collection, or inventory for fast and accurate edits\nUser-Friendly Interface: Enjoy a clean, responsive, and easy-to-use design.\nReal-Time Updates: Sync all changes instantly with your store.\nSecure: Compliant with API for data safety and reliability.",
        link: "https://apps.shopify.com/rg-bulk-product-editor?st_source=autocomplete&surface_detail=autocomplete_apps",
    },
    {
        id: 2,
        image: "https://cdn.shopify.com/app-store/listing_images/0783853fabbdfd4f0c735378fbcc1de5/promotional_image/CJS94eTXtI4DEAE=.png",
        logo: 'https://cdn.shopify.com/s/files/applications/0783853fabbdfd4f0c735378fbcc1de5.png?1752227066',
        title: "Mechanic Invoice Manager",
        short_desc: "Display the images of stoare as image gallery.",
        description:
            "Auto-fetch all store images and display them in a dynamic, organized product image gallery\nThe RG Products Image Gallery automatically fetches all product images from your Shopify store and displays them in a clean, organized gallery. It updates in real-time as products are added or removed, saving you time and effort. This dynamic gallery enhances your store’s visual appeal and improves user experience. It’s easy to integrate, fully responsive, and works seamlessly with any Shopify theme, making it a perfect solution for showcasing your products beautifully.\nAutomatically syncs and updates all product images from your store.\nDisplays images in a clean, responsive, and organized gallery layout.\nEasy integration with any Shopify theme, no coding required.",
        link: "https://apps.shopify.com/rg-products-image-gallery?st_source=autocomplete&surface_detail=autocomplete_apps",
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