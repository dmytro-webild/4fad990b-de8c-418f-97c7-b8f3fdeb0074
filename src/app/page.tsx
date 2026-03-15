"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Zap, Video, Filter, Shield, Star, HelpCircle } from "lucide-react";

export default function HomePage() {
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

  const testimonialData = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Freelancer",
      date: "March 2024",
      title: "Found My Best Friends Here",
      quote: "I never thought I'd make such meaningful connections with strangers online. OmeChat has introduced me to people from all over the world who have become my closest friends. The experience is authentic and the platform is genuinely safe.",
      tag: "Best Friends",
      avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/sarah-a-smiling-freelancer-woman-in-her--1773609390664-53d3049b.png",
      avatarAlt: "Sarah Johnson",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-warm-inclusive-image-showing-diverse-g-1773609390427-52b9415d.png",
      imageAlt: "Sarah's Story",
    },
    {
      id: "2",
      name: "Marcus Chen",
      role: "Language Teacher",
      date: "February 2024",
      title: "Perfect for Language Practice",
      quote: "As someone learning five languages, OmeChat is invaluable. I can practice with native speakers anytime, anywhere. The filter options make it easy to find conversation partners for specific topics. This platform has accelerated my language learning journey significantly.",
      tag: "Language Learning",
      avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/marcus-an-asian-man-in-his-early-30s-war-1773609390643-827a575c.png",
      avatarAlt: "Marcus Chen",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-focused-image-showing-language-learnin-1773609390613-68c0afa5.png",
      imageAlt: "Marcus's Story",
    },
    {
      id: "3",
      name: "Elena Rodriguez",
      role: "Travel Blogger",
      date: "January 2024",
      title: "Discovering Cultures Globally",
      quote: "I love traveling but OmeChat lets me explore cultures without leaving my home. I've spoken with people from places I couldn't even imagine visiting. It's like having the world in your pocket. The platform redesign made it even better!",
      tag: "Cultural Exchange",
      avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/elena-a-travel-blogger-woman-with-vibran-1773609390768-9244f213.png",
      avatarAlt: "Elena Rodriguez",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-vibrant-travel-inspired-image-showing--1773609390853-6d73475d.png",
      imageAlt: "Elena's Story",
    },
    {
      id: "4",
      name: "James Wilson",
      role: "Remote Worker",
      date: "December 2023",
      title: "Combat Loneliness at Home",
      quote: "Working from home can be isolating, but OmeChat changed that. Taking breaks for quick video chats with friendly strangers became my favorite part of the day. It's amazing how these brief connections can brighten your mood and remind you of our shared humanity.",
      tag: "Connection",
      avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/james-a-remote-worker-man-in-his-30s-com-1773609389998-dcfe24b6.png",
      avatarAlt: "James Wilson",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/an-uplifting-image-showing-person-connec-1773609390681-5101d69b.png",
      imageAlt: "James's Story",
    },
    {
      id: "5",
      name: "Priya Patel",
      role: "Student",
      date: "November 2023",
      title: "Safe and Welcoming Community",
      quote: "I was nervous about video chatting with strangers, but OmeChat's safety features made me feel secure. The moderation is excellent, and the community is genuinely kind and respectful. I've made friends from 15 different countries!",
      tag: "Safe Community",
      avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/priya-a-young-student-woman-with-bright--1773609389373-25d71eba.png",
      avatarAlt: "Priya Patel",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-safe-welcoming-image-showing-protected-1773609390133-f083c40b.png",
      imageAlt: "Priya's Story",
    },
    {
      id: "6",
      name: "David Kim",
      role: "Entrepreneur",
      date: "October 2023",
      title: "Built My Network Here",
      quote: "Beyond just casual chatting, I've met potential business partners and mentors on OmeChat. The platform attracts interesting, ambitious people. It's helped me expand my network globally and learn from diverse perspectives.",
      tag: "Networking",
      avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/david-an-ambitious-entrepreneur-man-in-h-1773609388983-aee2213b.png",
      avatarAlt: "David Kim",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-professional-networking-image-showing--1773609389890-513e0319.png",
      imageAlt: "David's Story",
    },
  ];

  const faqData = [
    {
      id: "1",
      title: "Is OmeChat completely free?",
      content: "Yes! OmeChat is 100% free to use. You can start video chatting immediately without any sign-up, registration, or payment. We offer optional premium features for users who want additional benefits, but the core platform is completely free.",
    },
    {
      id: "2",
      title: "How does the matching algorithm work?",
      content: "Our AI-powered matching system analyzes preferences, location, language, and interests to connect you with compatible chat partners. The algorithm learns from your interactions and improves recommendations over time, ensuring you get quality connections with people you'll enjoy talking to.",
    },
    {
      id: "3",
      title: "Is my privacy protected?",
      content: "Absolutely. We use end-to-end encryption for all video streams and never store chat recordings without explicit consent. Your personal information is protected by industry-standard security protocols. You can always remain anonymous if you choose, and you can report and block users instantly.",
    },
    {
      id: "4",
      title: "What should I do if someone behaves inappropriately?",
      content: "Our 24/7 moderation team monitors all interactions. You can immediately block, report, and disconnect from any user. Simply click the report button to flag concerning behavior. We take safety seriously and take appropriate action against violators.",
    },
    {
      id: "5",
      title: "Can I use OmeChat on mobile?",
      content: "Yes! OmeChat is fully optimized for mobile devices. Download our app from iOS App Store or Google Play Store, or simply visit our website on your mobile browser. The experience is equally smooth and feature-rich on both platforms.",
    },
    {
      id: "6",
      title: "How can I improve my chat experience?",
      content: "Use the filter options to narrow down who you connect with. Have a good camera and microphone for better video quality. Be respectful and genuine in your conversations. Join communities with specific interests or languages you want to practice. The better you interact, the better recommendations you'll receive.",
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

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Connect with Strangers from Around the World"
          description="Experience the thrill of random video chat. Meet new people, make friends, and have meaningful conversations instantly. No sign-up required—just click and connect."
          background="gradient-bars"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-diverse-young-person-smiling-warmly-at-1773609390102-50d0b667.png",
              alt: "User 1",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-professional-looking-individual-in-the-1773609389438-8bd49f35.png",
              alt: "User 2",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-creative-individual-with-expressive-pe-1773609390732-a5c3759d.png",
              alt: "User 3",
            },
          ]}
          avatarText="Join 2M+ daily active users"
          buttons={[
            { text: "Start Free Chat", href: "/" },
            { text: "Learn More", href: "#features" },
          ]}
          buttonAnimation="slide-up"
          marqueeItems={[
            { type: "text", text: "✨ Instant Matching" },
            { type: "text", text: "🌍 Global Community" },
            { type: "text", text: "🔒 Safe & Secure" },
            { type: "text", text: "💬 Real Connections" },
          ]}
          showMarqueeCard={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose OmeChat?"
          description={[
            "OmeChat is the modern platform for random video conversations that connects people from every corner of the globe. Our mission is simple: bring strangers together for authentic, meaningful interactions.",
            "With advanced matching algorithms and real-time HD video streaming, we ensure you always get quality connections. Our community spans across 190+ countries with over 2 million daily active users who are ready to chat, share stories, and make new friends.",
            "Safety and privacy are our top priorities. Every conversation is monitored, and our moderation team works 24/7 to maintain a welcoming environment. Whether you're looking to practice a new language, make friends, or simply have fun conversations, OmeChat is your gateway to global connection.",
          ]}
          useInvertedBackground={true}
          buttons={[{ text: "Explore Features", href: "#features" }]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySix
          title="Powerful Features for Real Connections"
          description="Discover the tools that make OmeChat the leading platform for random video chat conversations worldwide."
          tag="Advanced Technology"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              title: "Instant Matching",
              description: "Our AI-powered algorithm connects you with the perfect stranger in milliseconds. No waiting, no filters—just pure connection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-modern-ui-showing-instant-matching-tec-1773609391520-b27e3172.png",
              imageAlt: "Instant Matching",
              buttonIcon: Zap,
              buttonHref: "/",
            },
            {
              title: "HD Video Quality",
              description: "Crystal-clear HD video streaming with adaptive bitrate ensures smooth conversations even on slower connections.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-video-chat-interface-showing-hd-qualit-1773609390407-b79e3294.png",
              imageAlt: "HD Video Quality",
              buttonIcon: Video,
              buttonHref: "/",
            },
            {
              title: "Advanced Filters",
              description: "Filter by location, language, interests, and more. Find exactly the kind of person you want to talk to.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-filtering-interface-showing-various-fi-1773609389508-830d204a.png",
              imageAlt: "Advanced Filters",
              buttonIcon: Filter,
              buttonHref: "/",
            },
            {
              title: "24/7 Moderation",
              description: "Our dedicated moderation team ensures every chat is safe, respectful, and free from inappropriate content.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-moderation-control-panel-showing-safet-1773609390318-ed711edb.png",
              imageAlt: "24/7 Moderation",
              buttonIcon: Shield,
              buttonHref: "/",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Get Started Now", href: "/" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Trusted by Millions Worldwide"
          description="Join a thriving global community of people connecting, learning, and making friends every single day."
          metrics={[
            {
              id: "1",
              value: "2M+",
              title: "Daily Active Users",
              items: ["Connected every day", "From 190+ countries"],
            },
            {
              id: "2",
              value: "1B+",
              title: "Conversations Per Month",
              items: ["Real human connections", "Genuine interactions"],
            },
            {
              id: "3",
              value: "99.9%",
              title: "Uptime Guarantee",
              items: ["Always available", "Enterprise-grade servers"],
            },
            {
              id: "4",
              value: "10+",
              title: "Years of Experience",
              items: ["Industry pioneer", "Trusted platform"],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Join Our Community", href: "/" }]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Users Say About OmeChat"
          description="Real stories from real people who found friendship, love, and adventure on our platform."
          tag="User Stories"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={testimonialData}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about OmeChat and how to get started with random video chatting."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={faqData}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "More Questions? Contact Us", href: "/contact" }]}
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