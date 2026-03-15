"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import Link from "next/link";
import { Zap, HelpCircle } from "lucide-react";

export default function PricingPage() {
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
          brandName="OmeChat"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Start Chatting",
            href: "/",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Transparent Pricing for Everyone"
          description="Choose the plan that fits your needs. All plans include access to our global community and advanced matching technology."
          tag="Pricing Plans"
          tagIcon={Zap}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              value: "Free",
              title: "Basic Plan",
              items: [
                "Unlimited video chats",
                "Basic matching",
                "HD video quality",
              ],
            },
            {
              id: "2",
              value: "$4.99",
              title: "Premium Plan",
              items: [
                "Advanced filters",
                "Priority matching",
                "Ad-free experience",
              ],
            },
            {
              id: "3",
              value: "$9.99",
              title: "Pro Plan",
              items: [
                "All Premium features",
                "Custom filters",
                "24/7 priority support",
              ],
            },
            {
              id: "4",
              value: "$14.99",
              title: "Elite Plan",
              items: [
                "All Pro features",
                "Exclusive community",
                "VIP badge",
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            {
              text: "View All Plans",
              href: "/",
            },
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Pricing Questions"
          description="Everything you need to know about our pricing plans and subscription options."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",
              title: "Can I cancel my subscription anytime?",
              content: "Yes! You can cancel your subscription at any time. There are no long-term contracts or hidden fees. Your subscription will remain active until the end of your current billing cycle.",
            },
            {
              id: "2",
              title: "Do you offer refunds?",
              content: "We offer a 7-day money-back guarantee if you're not satisfied with your subscription. If you cancel within 7 days, we'll refund your payment in full.",
            },
            {
              id: "3",
              title: "How often are you charged?",
              content: "All subscriptions are charged monthly on your billing date. You'll receive an email receipt after each charge. You can view and manage your subscription in your account settings.",
            },
            {
              id: "4",
              title: "Are there annual billing options?",
              content: "Yes! We offer annual billing with a 20% discount compared to monthly pricing. Choose the annual option when upgrading to save money.",
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. Your payment information is encrypted and securely processed.",
            },
            {
              id: "6",
              title: "Can I upgrade or downgrade my plan?",
              content: "Absolutely! You can change your plan at any time. If you upgrade, you'll be prorated for the additional features. If you downgrade, the changes take effect at your next billing cycle.",
            },
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Still have questions?",
              href: "/contact",
            },
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Need Help Choosing a Plan?"
          description="Our team is ready to answer any questions about our pricing and help you find the perfect plan for your needs."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true,
            },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us which plan interests you...",
            rows: 4,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Azm8yfAPJyb1mzjrikJIHhKG1a/a-welcoming-contact-illustration-showing-1773609390349-f8d6ebb0.png?_wi=1"
          imageAlt="Contact Us"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Get in Touch"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="OmeChat"
          columns={[
            {
              items: [
                { label: "Home", href: "/" },
                { label: "Features", href: "#features" },
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
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