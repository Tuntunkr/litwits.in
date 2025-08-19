import { facebook, instagram, linkedin, shieldTick, support, truckFast } from "../assets/icons";

export const navLinks = [
    { href: "home", label: "Home" },
    { href: "group-session", label: "GROUP SESSIONS" },
    { href: "individual-session", label: "INDIVIDUAL SESSIONS" },
    { href: "college-counseling", label: "College Counseling" },
    { href: "membership", label: "MEMBERSHIP" },
];




export const footerLinks = [
    {
        // title: "Our Products",
        links: [
            { name: "Home", link: "/" },
            { name: "Group Sessions", link: "/group-session" },
            { name: "Individual Sessions", link: "/individual-session" },
            { name: "College Counseling", link: "/college-counseling" },
            { name: "Blog", link: "/blog" },
            { name: "Membership", link: "/membership" },
        ],
    },
    {
        // title: "LEGAL",
        links: [
            { name: "Terms & Conditions", link: "/terms-and-conditions" }, 
            { name: "Privacy Policy", link: "/privacy-policy" },
            { name: "Refund Policy", link: "/refund-policy" }, 
        ],
    },
];

export const socialMedia = [
    {
        src: facebook,
        alt: "facebook logo",
        link: "https://www.facebook.com/lits.wits",
    },
    {
        src: instagram,
        alt: "instagram logo",
        link: "https://www.instagram.com/_litwits_/",
    },
    {
        src: linkedin,
        alt: "linkedin logo",
        link: "https://www.linkedin.com/company/litwitsglobal/",
    },
];
