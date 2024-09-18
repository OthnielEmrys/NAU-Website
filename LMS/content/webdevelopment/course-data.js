const courseStructure = [
    {
        title: "Introduction",
        topics: [
            { title: "Overview", file: "intro-overview.html" },
            { title: "Getting Started", file: "intro-getting-started.html" }
        ]
    },
    {
        title: "Module 1: Basics",
        topics: [
            { title: "HTML & CSS", file: "module1-html-css.html" },
            { title: "JavaScript Basics", file: "module1-js-basics.html" }
        ]
    },
    // Add more modules and topics here
];






// Course data for Web Development
const courses = {
    "web-development": {
        "modules": {
            "Introduction": {
                "topics": {
                    "topic1-1": "Overview",
                    "topic1-2": "Getting Started"
                }
            },
            "module1": {
                "title": "Introduction to Web Development",
                "topics": {
                    "topic1-1": "What is Web Development?",
                    "topic1-2": "Front-End vs. Back-End Development",
                    "topic1-3": "HTML Basics",
                    "topic1-4": "Setting Up a Development Environment",
                    "topic1-5": "Writing your First Webpage",
                    "topic1-6": "Conclusion"
                }
            },
            "module2": {
                "title": "Introduction to CSS and Responsive Web Design",
                "topics": {
                    "topic2-1": "Understanding CSS",
                    "topic2-2": "Styling Text and Fonts",
                    "topic2-3": "CSS Box Model",
                    "topic2-4": "CSS Layout Techniques",
                    "topic2-5": "Responsive Web Design",
                    "topic2-6": "Hands-On Practice with a Responsive Web Page",
                    "topic2-7": "Conclusion"
                }
            },
            "module3": {
                "title": "Introduction to JavaScript",
                "topics": {
                    "topic3-1": "What is JavaScript?",
                    "topic3-2": "JavaScript Syntax and Basics",
                    "topic3-3": "Functions",
                    "topic3-4": "The Document Object Model (DOM)",
                    "topic3-5": "Events in JavaScript",
                    "topic3-6": "Hands-On Practice",
                    "topic3-7": "Conclusion"
                }
            }
            // Add more modules here as needed
        }
    }
};
