"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Box, Leaf, Sparkles, Cog } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="large"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Features",          id: "features"},
        {
          name: "Products",          id: "products"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Partners",          id: "social-proof"},
        {
          name: "FAQ",          id: "faq"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Elegance Furnishings"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient"}}
      imagePosition="right"
      title="Crafting Comfort, Designing Dreams"
      description="Discover exceptional furniture that blends timeless design with unparalleled comfort. Each piece is meticulously crafted to elevate your living space and create lasting memories."
      buttons={[
        {
          text: "Explore Collections",          href: "#products"},
        {
          text: "About Us",          href: "#about"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/creative-fengshui-practice-living-room-arrangement_23-2149135762.jpg"
      imageAlt="Luxurious living room with modern furniture and wooden coffee table"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/luxurious-lifestyle-rich-woman_52683-97512.jpg",          alt: "Luxurious lifestyle of rich woman"},
        {
          src: "http://img.b2bpic.net/free-photo/home-plant-vase-decoration-arrangement_23-2149090591.jpg",          alt: "Home plant in vase decoration arrangement"},
        {
          src: "http://img.b2bpic.net/free-photo/home-cozy-still-life-with-black-sofa-decor-living-room_169016-6439.jpg",          alt: "Home cozy still life with a black sofa and decor in the living room."},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-interior-with-vintage-suitcase_23-2148610383.jpg",          alt: "Front view interior with vintage suitcase"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-businessman-working-office-couch-putting-long-hours-work-businessperson-professional-environment_482257-32779.jpg",          alt: "Person admiring new furniture in a stylish home"},
      ]}
      avatarText="Join 10,000+ happy customers"
      marqueeItems={[
        {
          type: "text-icon",          text: "Premium Materials",          icon: Cog,
        },
        {
          type: "text",          text: "Sustainable Sourcing"},
        {
          type: "text-icon",          text: "Award-Winning Design",          icon: Award,
        },
        {
          type: "text",          text: "Exceptional Craftsmanship"},
        {
          type: "text-icon",          text: "Luxury & Comfort",          icon: Sparkles,
        },
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Legacy of Quality & Craftsmanship"
      metrics={[
        {
          icon: Award,
          label: "Years in Business",          value: "25+"},
        {
          icon: Box,
          label: "Crafted Pieces",          value: "5000+"},
        {
          icon: Leaf,
          label: "Sustainable Sourcing",          value: "100%"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Unrivaled Quality",          description: "Every piece is constructed using premium materials and time-honored techniques, ensuring durability and lasting beauty.",          imageSrc: "http://img.b2bpic.net/free-photo/engraving-instrument-arrangement-table_23-2149061679.jpg",          imageAlt: "Craftsman working on wooden furniture"},
        {
          title: "Exquisite Design",          description: "From classic sophistication to modern minimalism, our collections are curated to inspire and complement diverse aesthetics.",          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263552.jpg",          imageAlt: "Interior designer sketching furniture layout"},
        {
          title: "Ultimate Comfort",          description: "We blend ergonomic principles with luxurious finishes to create furniture that invites relaxation and rejuvenation.",          imageSrc: "http://img.b2bpic.net/free-photo/lovely-woman-is-having-daily-nap-work-dark-sofa-fashioned-apartment_231208-3282.jpg",          imageAlt: "Person relaxing in a cozy armchair"},
      ]}
      title="Experience the Elegance"
      description="Our furniture is designed to be more than just functional; it's a statement of style and a commitment to comfort that transforms every room."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "product-1",          name: "Modern Sectional Sofa",          price: "$1,899",          imageSrc: "http://img.b2bpic.net/free-photo/brother-sister-living-room-spending-time-together_23-2148385578.jpg",          imageAlt: "Modern gray sectional sofa"},
        {
          id: "product-2",          name: "Elegant Dining Table",          price: "$999",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-table-setting-with-wine-glasses-plates-house-plants-hanging-wall_181624-13228.jpg",          imageAlt: "Elegant wooden dining table"},
        {
          id: "product-3",          name: "Luxurious King Bed",          price: "$1,499",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-modern-luxury-pastel-bedroom-with-marble-carpet-decor-deluxe-hotel_105762-2290.jpg",          imageAlt: "Luxurious king size bed frame"},
        {
          id: "product-4",          name: "Velvet Accent Armchair",          price: "$499",          imageSrc: "http://img.b2bpic.net/free-photo/person-working-from-home-with-pet-dog_23-2149104726.jpg",          imageAlt: "Chic velvet armchair"},
        {
          id: "product-5",          name: "Minimalist Bookcase",          price: "$349",          imageSrc: "http://img.b2bpic.net/free-photo/desk-arrangement-with-shelves_23-2148577681.jpg",          imageAlt: "Modern tall bookcase"},
        {
          id: "product-6",          name: "Marble Coffee Table",          price: "$599",          imageSrc: "http://img.b2bpic.net/free-photo/virtual-love-cute-blonde-girl-red-dress-distance-date-with-wine-candles-sitting_140725-163896.jpg",          imageAlt: "Round marble coffee table"},
      ]}
      title="Our Signature Collections"
      description="Browse our hand-picked selection of furniture designed to elevate every corner of your home, blending functionality with aesthetic appeal."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Absolutely Stunning!",          quote: "The sectional sofa from Elegance Furnishings is the centerpiece of our living room. It’s incredibly comfortable and the quality is exceptional. We couldn't be happier with our purchase!",          name: "Sarah J.",          role: "Homeowner",          imageSrc: "http://img.b2bpic.net/free-photo/resting-smiling-young-woman-sitting-home-sofa_259150-59716.jpg",          imageAlt: "Smiling woman in a modern living room"},
        {
          id: "2",          title: "Exceeded Expectations",          quote: "Our new dining table is a true work of art. The craftsmanship is flawless, and it perfectly complements our home's aesthetic. Elegance Furnishings truly delivers on their promise of quality.",          name: "Michael T.",          role: "Interior Designer",          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-woman_23-2151020306.jpg",          imageAlt: "Professional woman in elegant dining room"},
        {
          id: "3",          title: "Comfort Redefined",          quote: "The bed frame we bought is not just beautiful, but also incredibly sturdy and comfortable. We sleep better knowing we invested in such a high-quality piece. Highly recommend!",          name: "Emily R.",          role: "Happy Customer",          imageSrc: "http://img.b2bpic.net/free-photo/shining-face-beautiful-woman-home_329181-1327.jpg",          imageAlt: "Man relaxing on luxurious armchair"},
        {
          id: "4",          title: "Seamless Experience",          quote: "From browsing to delivery, the experience with Elegance Furnishings was seamless. Their team was professional and the velvet armchair is even more stunning in person.",          name: "David K.",          role: "Client",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-talking-work_23-2149308449.jpg",          imageAlt: "Woman reviewing home decor design"},
        {
          id: "5",          title: "Perfect Addition",          quote: "We needed a stylish bookcase that was also functional, and Elegance Furnishings delivered! It's a perfect addition to our study, blending perfectly with our existing decor.",          name: "Jessica L.",          role: "Home Decor Enthusiast",          imageSrc: "http://img.b2bpic.net/free-photo/boyfriend-reading-love-story-his-girlfriend_23-2148741216.jpg",          imageAlt: "Young couple enjoying new bedroom furniture"},
      ]}
      title="What Our Customers Say"
      description="Hear from those who have transformed their homes with our exquisite furniture."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Elite Residences",        "Design Innovations",        "Grand Hotels",        "Sustainable Living Co.",        "Urban Modern Spaces",        "Architectural Visions",        "Luxe Interiors"]}
      title="Our Valued Partnerships"
      description="We collaborate with leading interior designers, architects, and hospitality groups to furnish spaces that inspire."
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "What materials are used in your furniture?",          content: "We primarily use sustainably sourced hardwoods, premium upholstery fabrics, and durable metals. Each product description details the specific materials used."},
        {
          id: "faq-2",          title: "Do you offer custom furniture design?",          content: "Yes, we offer bespoke furniture design services for select projects. Please contact us with your specific requirements to discuss possibilities and receive a quote."},
        {
          id: "faq-3",          title: "What is your delivery and assembly policy?",          content: "We offer white-glove delivery and assembly services for most items within our service area. Delivery timelines and costs vary based on location and product size, detailed at checkout."},
        {
          id: "faq-4",          title: "What is your return policy?",          content: "We accept returns on most items within 30 days of delivery, provided they are in new and unused condition. Custom orders are generally non-returnable. Please refer to our full return policy for details."},
        {
          id: "faq-5",          title: "How do I care for my furniture?",          content: "Care instructions vary by material. We provide detailed care guides with each purchase and on our website. General tips include regular dusting, avoiding direct sunlight, and prompt spill cleanup."},
      ]}
      sideTitle="Questions? We've Got Answers"
      sideDescription="Find quick answers to the most common questions about our products, services, and policies."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch With Us"
      description="Have a question or need assistance? Our team is here to help you find the perfect pieces for your home."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/sculpture-glass-display-case_23-2151984826.jpg"
      imageAlt="Modern furniture showroom interior"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Collections",              href: "#products"},
            {
              label: "About Us",              href: "#about"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Shipping & Returns",              href: "#"},
          ],
        },
      ]}
      logoText="Elegance Furnishings"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
