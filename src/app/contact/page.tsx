"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function ContactPage() {
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
          brandName="Webild"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Features", id: "#features" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{
            text: "Start Chatting",            href: "/"}}
          animateOnLoad={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions, feedback, or want to report an issue? Our support team is here to help. Reach out to us anytime."
          inputs={[
            {
              name: "name",              type: "text",              placeholder: "Your Name",              required: true,
            },
            {
              name: "email",              type: "email",              placeholder: "Your Email",              required: true,
            },
            {
              name: "subject",              type: "text",              placeholder: "Subject",              required: true,
            },
          ]}
          textarea={{
            name: "message",            placeholder: "Your Message...",            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-welcoming-contact-illustration-showing-1773609390349-f8d6ebb0.png?_wi=2"
          imageAlt="Contact Us"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Can't find what you're looking for? Check out our FAQ section or reach out to our support team directly."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "What is the typical response time for support inquiries?",              content: "Our support team typically responds within 24 hours during business days. For urgent issues, we recommend using our live chat feature available on the platform."},
            {
              id: "2",              title: "How do I report a user for inappropriate behavior?",              content: "You can report any user directly within the chat interface by clicking the report button. Our moderation team reviews all reports within 24 hours and takes appropriate action."},
            {
              id: "3",              title: "Can I request specific features or improvements?",              content: "Absolutely! We love hearing from our users. Send us your feature requests and suggestions through the contact form, and our product team will review them."},
            {
              id: "4",              title: "How do I delete my account?",              content: "You can delete your account by going to your account settings and selecting 'Delete Account'. Your data will be permanently removed from our servers within 30 days."},
            {
              id: "5",              title: "Is there a way to contact you through social media?",              content: "Yes! You can reach us on Facebook, Twitter, and Instagram. We monitor our social media channels regularly and try to respond to direct messages within 48 hours."},
            {
              id: "6",              title: "What should I do if I experience technical issues?",              content: "First, try refreshing the page or clearing your browser cache. If the issue persists, reach out to our support team with details about what you're experiencing, and we'll help troubleshoot."},
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Webild"
          columns={[
            {
              items: [
                { label: "Home", href: "/" },
                { label: "Features", href: "/#features" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
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
          ]}
        />
      </div>
    </ThemeProvider>
  );
}