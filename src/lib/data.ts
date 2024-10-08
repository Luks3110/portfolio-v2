import afinz from "@/../public/Afinz.png";
import arbo from "@/../public/Arbo.png";
import elevateRentals from "@/../public/ElevateRentals.png";
import gericht from "@/../public/Gericht.png";
import resolv from "@/../public/Resolv.png";
import soipo from "@/../public/Soipo.png";
import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#hero",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Bun",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "AWS",
  "GraphQL",
  "Apollo",
  "Kafka",
  "Kubernetes",
  "RabbitMQ",
  "BullMQ",
  "Middify",
  "EC2",
  "ECS",
  "SES",
  "Cognito",
  "API Gateway",
  "VPC",
] as const;

export const projectsData = [
  {
    title: "Elevate Rentals",
    description:
      "I built an Shopify App and Theme App Extension from scratch to manage car rentals.",
    tags: [
      "Typescript",
      "React",
      "Node.js",
      "Fastify",
      "Shopify",
      "Shopify Polaris",
      "Liquid",
      "REST",
      "GraphQL",
      "Apollo",
      "Gadget.dev",
    ],
    imageUrl: elevateRentals,
  },
  {
    title: "Arbo",
    description: "I worked as a full-stack developer on this startup.",
    tags: [
      "Typescript",
      "React",
      "Next.js",
      "Node.js",
      "Fastify",
      "Express",
      "Loopback.io 2",
      "MongoDB",
      "PostgreSQL",
      "Bootstrap",
      "Prisma",
      "Serverless Framework",
      "AWS",
      "Lambda",
    ],
    imageUrl: arbo,
  },
  {
    title: "Resolv Tech",
    description: "I worked as a full-stack developer on this startup.",
    tags: [
      "Typescript",
      "React",
      "Vite",
      "Material-UI",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "Serverless Framework",
      "AWS",
      "RDS",
      "Bastion",
      "Lambda",
      "Clean Architecture",
    ],
    imageUrl: resolv,
  },
  {
    title: "Afinz",
    description: "I worked as a backend developer on this fintech.",
    tags: [
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Serverless Framework",
      "Keycloak",
      "AWS",
      "RDS",
      "Lambda",
      "Clean Architecture",
    ],
    imageUrl: afinz,
  },
  {
    title: "Soipo",
    description: "I worked as a full-stack developer on this consultancy.",
    tags: [
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Serverless Framework",
      "AWS",
      "RDS",
      "Cognito",
      "API Gateway",
      "Socket.io",
      "Pusher",
      "Shopify",
      "BigCommerce",
    ],
    imageUrl: soipo,
  },
  {
    title: "Gericht Restaurant",
    description: "A case study of CSS BEM model",
    tags: ["React", "HTML", "CSS"],
    imageUrl: gericht,
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Remote, Brazil",
    description:
      "Full-Stack Developer at Arbo, where I develop most of the core features for a real-estate marketplace whitelabel.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote, Brazil",
    description:
      "Full-Stack Developer at Bitway Systems, a consultancy firm, where I'm allocated at Resolv Tech.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Backend Developer",
    location: "Remote, Brazil",
    description:
      "I worked as Backend Developer where I contributed to the creation of various features involving the KYC process and FaaS of the fintech, where our client with FaaS was Sem-Parar.",
    icon: React.createElement(FaNodeJs),
    date: "2023 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote, Brazil",
    description:
      "I worked as a Full-Stack Developer for Soipo Services, that's a consultancy in Estonia, where I've worked on platform that creates insights, dashboards and optimize campaigns for e-commerce.",
    icon: React.createElement(FaReact),
    date: "2022 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote, Brazil",
    description:
      "I worked as a freelancer for some small companies, and a supermarket.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "São Paulo, Brazil",
    description:
      "I started my degree in Information Systems in Mackenzie Presbyterian University.",
    icon: React.createElement(FaReact),
    date: "2018 - Unfinished",
  },
] as const;
