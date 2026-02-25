import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./content";

const baseURL: string = "https://berkleyfelix.com";

// Rutas sin la sección de "Atención"
const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

const protectedRoutes: ProtectedRoutesConfig = {
  "/work/proyecto-confidencial": true,
};

import { Geist, Geist_Mono } from "next/font/google";

// 1. DECLARACIÓN DE FUENTES
const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

// 2. ASIGNACIÓN A LA CONFIGURACIÓN
const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: body,
  code: mono,
};

const style: StyleConfig = {
  theme: "system",
  neutral: "slate",
  brand: "emerald",
  accent: "cyan",
  solid: "contrast",
  solidStyle: "plastic",
  border: "conservative",
  surface: "translucent",
  transition: "all",
  scaling: "100",
}; // El error estaba aquí: se eliminó el marcador de conflicto

const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: { fill: "var(--neutral-on-background-weak)", fontSize: 11, line: false },
};

const effects: EffectsConfig = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: {
    display: true,
    opacity: 60,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "page-background",
  },
  dots: { display: true, opacity: 30, size: "2", color: "brand-alpha-strong" },
  grid: { display: true, opacity: 50, color: "neutral-alpha-medium", width: "1rem", height: "1rem" },
  lines: { display: false, opacity: 100, color: "neutral-alpha-weak", size: "16", thickness: 1, angle: 45 },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: { cursor: true, x: 50, y: 0, radius: 100 },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "brand-background-strong",
      colorEnd: "static-transparent",
    },
    dots: { display: true, opacity: 20, size: "2", color: "brand-on-background-weak" },
    grid: { display: false, opacity: 100, color: "neutral-alpha-medium", width: "0.25rem", height: "0.25rem" },
    lines: { display: false, opacity: 100, color: "neutral-alpha-medium", size: "16", thickness: 1, angle: 90 },
  },
};

const schema: SchemaConfig = {
  logo: "/images/nuevo-logo.png",
  type: "Person",
  name: "Berkley Felix",
  description: "Partner Estratégico para Latinoamérica - CTO LATAM Provider",
  email: "berkley.felixf@latamprovider.com",
};

const sameAs: SameAsConfig = {
  linkedin: "https://www.linkedin.com/in/berkleyfelix/",
  tiktok: "https://www.tiktok.com/@berkleyfelix",
};

const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: true,
    pinterest: false,
    whatsapp: true,
    reddit: false,
    telegram: true,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};