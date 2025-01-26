import number from '../assests/11.jpeg';
import dash from '../assests/Dashboard.png';
import heart from '../assests/heart.png';
import blood from '../assests/13.png';
import job from '../assests/job.png';
import text from '../assests/texthidder.png';
import cyber from '../assests/seasonal.jpg';
import sea from '../assests/image (16).png';
import aifit from '../assests/aifit.png';


// import seasonal from '../assests/seasonal-project.png';  // Add the image for the first new project
// import cyberAttack from '../assests/cyber-attack-project.png';  // Add the image for the second new project

export const data = [
  {
    id: 1,
    name: "Seasonal Variation in Aging-Associated Health Measures",
    image: sea, // Add image for the seasonal project
    github: "https://github.com/premshah06/Seasonal-Variation-in-Aging-Associated-Health-Measures-Alzheimers-and-Mental-Health-Patterns", // Add link to GitHub repository
    description:
      "Built a data pipeline integrating CDC and Census datasets, optimizing ETL efficiency by 60% with 99.9% accuracy. Developed dashboards to track aging health trends, enhancing insight by 40% for data-driven healthcare decisions.",
    skills: ["Python", "Tableau", "AWS", "ETL"],
  },
  {
    id: 2,
    name: "Optimized Cyber Attack Analysis and Network Defense",
    image: cyber, // Add image for the cyber attack project
    github: "https://github.com/premshah06/Optimized-Cyber-Attack-Analysis-and-Network-Defense-using-ETL", // Add link to GitHub repository
    description:
      "Designed and deployed efficient ETL workflows in Amazon Redshift and Neo4j using Apache NiFi. Integrated Kafka with Cassandra to handle high-velocity, real-time data ingestion, supporting immediate threat detection.",
    skills: ["AWS Redshift", "Neo4J", "Cassandra", "Apache NiFi", "Kafka"],
  },
  {
    id: 3,
    name: "AirBnB Dashboard",
    image: dash,
    github: "https://github.com/premshah06/AirBnB-Dashboard",
    description:
      "Developed an interactive Tableau dashboard for Airbnb data, visualizing key metrics such as average prices, booking trends, and revenue by zip code. This project helps investors make informed property decisions using rich data insights and visualizations.",
    skills: ["Tableau", "Python", "SQL"],
  },
  {
    id: 4,
    name: "Job Details Analyzer",
    image: job,
    github: "https://github.com/premshah06/Job-Detail-Analyzer",
    description:
      "Implemented an advanced ETL pipeline in Python for extracting and analyzing job market data. Features custom heatmaps, multi-index pivot tables, and trend analysis to uncover actionable insights on employment trends and salary distributions.",
    skills: ["Python", "Colab", "SQL", "NumPy", "Seaborn"],
  },
  {
    id: 5,
    name: "AI Fit - Fitness App",
    image: aifit,
    github: "https://github.com/premshah06/AI-Fit-App",
    description:
      "Fit-AI-Coach is a cutting-edge web application designed to deliver personalized fitness and diet plans using Google's Gemini Pro Model. With its user-friendly interface and intelligent recommendations, Fit-AI-Coach is perfect for anyone aiming to achieve specific fitness goals, enhance their health, or maintain a healthy lifestyle.",
    skills: ["Python", "Gen AI", "Streamlit", "Google Cloud"],
  },
  {
    id: 6,
    name: "Number Plate Detection System",
    image: number,
    github: "https://github.com/premshah06/Number-Plate-Recognition-System",
    description:
      "Enhanced traffic security by developing a system using OCR and OpenCV to detect and recognize license plates from user-uploaded images. The application facilitates efficient law enforcement and road safety compliance.",
    skills: ["Python", "OpenCV", "Streamlit"],
  },
  {
    id: 7,
    name: "Heart and Diabetes Detection System",
    image: heart,
    github: "https://github.com/premshah06/apps",
    description:
      "Built a predictive machine learning model for detecting heart disease and diabetes. Utilized patient data to provide healthcare providers with actionable insights, empowering them to identify at-risk individuals early.",
    skills: ["Python", "Jupyter", "Power BI", "Streamlit"],
  },
  {
    id: 8,
    name: "Blood Donation Application",
    image: blood,
    github: "https://github.com/premshah06/Blood-Donation-App",
    description:
      "Created a Java-based Android app to connect donors and recipients efficiently. Features include user profile creation, blood group filtering, and Firebase integration for real-time communication and database management.",
    skills: ["Android", "Java", "Firebase"],
  },
  {
    id: 9,
    name: "TextHidder",
    image: text,
    github: "https://github.com/premshah06/Texthidder",
    description:
      "Developed an image steganography project with AES encryption. The GUI-based application allows users to securely hide and retrieve sensitive data within images, providing a practical implementation of cryptographic principles.",
    skills: ["Python", "Tkinter", "Encryption"],
  },
 
  /*{
    id: 9,
    name: "Weather Forecast Application",
    image: weather,
    github: "xx",
    description:
      "Designed a React-based weather application that fetches real-time weather data from an API. Provides forecasts for multiple locations with interactive and user-friendly UI components for enhanced user experience.",
    skills: ["React", "JavaScript", "API Integration"],
  },*/
 /* {
    id: 10,
    name: "Real-Time Chat Application",
    image: chatApp,
    github: "xx",
    description:
      "Created a real-time chat application with socket-based communication. Features include user authentication, personalized chat rooms, and seamless message syncing across devices.",
    skills: ["Node.js", "React", "Socket.IO", "MongoDB"],
  },*/
 /* {
    id: 11,
    name: "E-Commerce Website",
    image: ecommerce,
    github: "xx",
    description:
      "Built a dynamic e-commerce website with full-stack capabilities. Integrated product search, user authentication, and payment gateways to deliver a seamless shopping experience.",
    skills: ["React", "Node.js", "Express", "Stripe", "MongoDB"],
  },*/
];
