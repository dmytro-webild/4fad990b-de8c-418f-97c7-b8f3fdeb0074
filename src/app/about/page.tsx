"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { HelpCircle } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      items: [
        { label: "Home", href: "/" },
        { label: "Features", href: "/#features" },
        { label: "About", href: "/about" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      items: [
        { label: "Support", href: "/contact" },
        { label: "Safety Tips", href: "#" },
        { label: "Community Guidelines", href: "#" },
        { label: "Report Issue", href: "#" },
      ],
    },
    {
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "DMCA", href: "#" },
      ],
    },
    {
      items: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "YouTube", href: "https://youtube.com" },
      ],
    },
  ];

  const faqData = [
    {
      id: "1",
      title: "What is OmeChat's mission?",
      content: "Our mission is to bring strangers together from around the world for authentic, meaningful interactions. We believe in the power of genuine human connection and provide a safe, modern platform to make those connections happen.",
    },
    {
      id: "2",
      title: "How long has OmeChat been around?",
      content: "OmeChat is an industry pioneer with over 10 years of experience in the random video chat space. We've continuously evolved our platform to meet the needs of our global community while maintaining our commitment to safety and authenticity.",
    },
    {
      id: "3",
      title: "What makes OmeChat different from competitors?",
      content: "OmeChat stands out through our advanced AI-powered matching algorithm, commitment to 24/7 moderation, HD video streaming, and our focus on creating a genuinely safe community. We treat our users with respect and continuously innovate to improve the experience.",
    },
    {
      id: "4",
      title: "How many countries does OmeChat operate in?",
      content: "OmeChat operates in 190+ countries worldwide. Our platform supports multiple languages and has adapted to meet the cultural needs of diverse communities. We're committed to providing a truly global experience.",
    },
    {
      id: "5",
      title: "How does OmeChat ensure user safety?",
      content: "Safety is our top priority. We employ advanced moderation technology, maintain a 24/7 moderation team, use end-to-end encryption, and have strict community guidelines. Users can block, report, and disconnect instantly. We continuously invest in safety improvements.",
    },
    {
      id: "6",
      title: "What are OmeChat's core values?",
      content: "Our core values are: authenticity in human connection, safety and trust, inclusivity and diversity, transparency in our operations, and innovation in technology. These values guide every decision we make as a company.",
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="grid"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={navItems}
          brandName="OmeChat"
          button={{ text: "Start Chatting", href: "/" }}
          animateOnLoad={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About OmeChat"
          description={[
            "OmeChat started with a simple vision: connect people from around the world through genuine, meaningful video conversations. What began as an experiment has grown into a thriving community of millions of users daily.",
            "Over the past 10+ years, we've continuously evolved our platform to meet the changing needs of our global audience. We've invested in cutting-edge technology, built a passionate team dedicated to user safety, and created policies that foster respect and inclusivity.",
            "Today, OmeChat serves as a bridge between cultures, a tool for language learning, a source of friendship, and a platform for authentic human connection. We're proud to serve 2M+ daily active users from 190+ countries, and we remain committed to our mission of bringing the world together.",
          ]}
          useInvertedBackground={false}
          buttons={[{ text: "Start Your Journey", href: "/" }]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="By The Numbers"
          description="Our impact and reach across the globe demonstrates the power of genuine human connection."
          metrics={[
            {
              id: "1",
              value: "10+",
              title: "Years of Innovation",
              items: ["Industry pioneer", "Continuous evolution"],
            },
            {
              id: "2",
              value: "190+",
              title: "Countries Served",
              items: ["Global community", "Multilingual support"],
            },
            {
              id: "3",
              value: "2M+",
              title: "Daily Active Users",
              items: ["Growing every day", "Engaged community"],
            },
            {
              id: "4",
              value: "1B+",
              title: "Monthly Conversations",
              items: ["Real connections", "Meaningful interactions"],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Join Our Community", href: "/" }]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Learn More About OmeChat"
          description="Explore commonly asked questions about our company, our mission, and what makes us unique."
          tag="About OmeChat"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={faqData}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Ready to Connect?", href: "/" }]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="OmeChat"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}