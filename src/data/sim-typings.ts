import * as z from "zod";
import {
  type Prisma,
  type Sim as SimPrisma,
  type Pet as PetPrisma,
  type Neighbourhood as NeighbourhoodPrisma,
} from "@prisma/client";

export type Sim = SimPrisma;
export type Neighbourhood = NeighbourhoodPrisma;
export type Pet = PetPrisma;
export type SimWithSpouse = Prisma.SimGetPayload<{
  include: { spouse: true };
}>;

export type PetWithOwner = Prisma.PetGetPayload<{
  include: { owner: true };
}>;

export const SimInput = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  gender: z.string().min(1),
  race: z.string().min(1),
  orientation: z.string().optional(),
  lifestage: z.string().min(1),
  aspiration: z.string().optional(),
  secondAspiration: z.string().optional(),
  maritalStatus: z.string().optional(),
  career: z.string().optional(),
  zodiac: z.string().optional(),
  hobby: z.string().optional(),
  subHobby: z.string().optional(),
  lifetimeWish: z.string().optional(),
  isDead: z.boolean().default(false),
  deathReason: z.string().optional(),
  notes: z.string().optional(),
  partnerId: z.string().optional(),
  neighbourhoodId: z.string(),
  eyeColour: z.string().min(1),
  hairColour: z.string().min(1),
});

export type SimFormValues = z.infer<typeof SimInput>;

export const PetInput = z.object({
  name: z.string().min(1),
  gender: z.string().min(1),
  species: z.string().min(1),
  career: z.string().optional(),
  ownerId: z.string().optional(),
  isDead: z.boolean().default(false),
  deathReason: z.string().optional(),
});

export type PetFormValues = z.infer<typeof PetInput>;

export const genders = ["Female", "Male"];
export const orientations = ["Straight", "Gay", "Bisexual"];
export const races = [
  "Human",
  "Werewolf",
  "Zombie",
  "Vampire",
  "Witch",
  "Robot",
  "Alien",
  "Plant",
];
export const lifeStages = [
  "Baby",
  "Toddler",
  "Child",
  "Teen",
  "Adult",
  "Elder",
];
export const aspirations = [
  "Grow up",
  "Family",
  "Fortune",
  "Knowledge",
  "Popularity",
  "Romance",
  "Pleasure",
  "Grilled Cheese",
];
export const careers = [
  "Adventurer",
  "Architecture",
  "Artist",
  "Athletic",
  "Business",
  "Criminal",
  "Cullinary",
  "Dance",
  "Education",
  "Entertainment",
  "Fame",
  "Game Development",
  "Gamer",
  "Gatherer",
  "Intelligence",
  "Journalism",
  "Law",
  "Law Enforcement",
  "Medicine",
  "Military",
  "Music",
  "Natural Scientist",
];

export const zodiacs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export const hobbies = [
  "Arts and Crafts",
  "Cuisine",
  "Film and Literature",
  "Fitness",
  "Games",
  "Music and Dance",
  "Nature",
  "Science",
  "Sports",
  "Tinkering",
];

export const haircolours = ["Black", "Blonde", "Brown", "Red"];

export const eyecolours = [
  "Green",
  "Light Blue",
  "Dark Blue",
  "Brown",
  "Grey",
  "Alien",
];

export const petcareers = ["Security", "Service", "Showbiz"];
