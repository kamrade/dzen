import { IGalleryImage } from '~/types';

const home_page_data = {
  hero_text: {
    title1: "Hello. I’m Denis.",
    title2: "A Product Designer",
    text: `
      Over 15 years of experience in designing and developing digital products. 
      I solve complex problems using simple methods.
      I value interaction and flexibility, and avoiding unnecessary complications and bureaucracy.`
  },
  slides_title: [
    "Research and Ideation.",
    "Prototyping and design.",
    "Development and testing.",
    "Feedback and Iteration."
  ],
  slider_text: [
    "Understand the target audience, analyze the competitive landscape. Generate ideas and concepts, explore potential solutions.",
    "Testing and gathering feedback. Improvements based on testing. Visual elements and layout. Seamless and enjoyable user journey.",
    "Implement the UI design, integration. Check the user stories and test cases, ensure the product meets users expectations.",
    "Continuously monitor the product, collect user feedback, make continuous improvements based on feedback and changing requirements."
  ],
  slide_tags: [
    ["User Stories", "Moodboard", "Mind Maps", "User Journey Maps", "Characters Creation", "Empathy Cards", "Problem Statement"],
    ["Test Cases (for TDD)", "Wireframes", "Interactive prototypes", "Usability testing", "A/B Testing", "Interviews"],
    ["UIKit", "Design System", "Corner Cases", "Test Scenarios", "TDD", "Clean Architecture", "MVP", "FSD", "SOLID", "GRASP"],
    ["Agile Development", "Feedback and Analytics", "Double Diamond", "Lean UX", "Agile Methodology", "User-Centered Design (UCD)", "Kano Model ", "HEART Framework", "MMP"]
  ],
  typewriter_text: `Create products and services that meet users needs and preferences. It emphasizes empathy, usability, satisfaction, inclusivity, and
    sustainability, ensuring solutions are intuitive, accessible, and beneficial for both users and organizations.`
}


const gallery_data: IGalleryImage[] = [{
  src: '/img/gallery/sidebar_menu_showcase_1.png',
  alt: 'Sidebar Component',
  title: 'Sidebar Component. Using in mobile.',
  chipText: 'React Component, React Native.'
}, {
  src: '/img/gallery/sidebar_menu_showcase_3.png',
  alt: 'Sidebar component variations',
  title: 'Sidebar Component. Using variation',
  chipText: 'Web UI, Settings'
}, {
  src: '/img/gallery/sidebar_menu_showcase_2.png',
  alt: 'Sidebar Component',
  title: 'Sidebar Component. Using in the banking application',
  chipText: 'Web UI, Navigation'
}, {
  src: '/img/gallery/sidebar_menu_showcase_4.png',
  alt: 'Sidebar Component',
  title: 'Sidebar Component. Using in the onboarding',
  chipText: 'WebUI, Navigation'
}, {
  src: '/img/gallery/plugin_showcase.png',
  alt: 'Figma Plugin. Export variables',
  title: 'Figma Plugin. Figma variables to JS, SCSS, CSS',
  chipText: 'Figma plugin'
}, {
  src: '/img/gallery/the_city_showcase_1.png',
  alt: 'The City Showcase 1',
  title: 'The City Magazine website',
  chipText: 'Web Design, Graphic Design, Svelte, Strapi'
}, {
  src: '/img/gallery/the_city_showcase_2.png',
  alt: 'The City Showcase 2',
  title: 'The City Magazine website',
  chipText: 'Web Design, Graphic Design, Svelte, Strapi'
}, {
  src: '/img/gallery/customer_portal.png',
  alt: 'Customer onboarding application',
  title: 'Customer onboarding application',
  chipText: 'Web App, React'
}, {
  src: '/img/gallery/my_home.png',
  alt: 'Smart Home App',
  title: 'Smart Home Mobile Application',
  chipText: 'Mobile UI'
}, {
  src: '/img/gallery/tee_bag_theme_layout.png',
  alt: 'Theme for the web platform',
  title: 'Theme for the web platform',
  chipText: 'Theme, wordpress, web design'
}, {
  src: '/img/gallery/calendar_showcase.png',
  alt: 'Calendar. Showcase',
  title: 'React/Svelte component. Calendar. Daterange picker.',
  chipText: 'React, Svelte, Component'
}, {
  src: '/img/gallery/ibank_dark.png',
  alt: 'Calendar. Showcase',
  title: 'iBank. Unlimint fintech.',
  chipText: 'bank, web ui'
}]



export const data = {

  home_page_data,
  gallery_data,

  mainTitle: {
    name: 'Denis Mikhailov',
    description: 'Seasoned Product Designer'
  },
  heroLines: [
    'Human',
    'focusing',
    'design'
  ],
  scrambledValuesHome: ['Digital', 'UX/UI', 'Mobile', 'Research', 'System'],

  heroPhrases: [
    'User-friendly, intuitive, and enjoyable digital platforms',
    'Optimize user satisfaction by improving the usability'
  ]
}
