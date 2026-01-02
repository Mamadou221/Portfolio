// Mapping des entreprises vers leurs logos
export interface CompanyLogo {
  url: string;
  alt: string;
  fallback?: string; // Initiales si logo non disponible
}

export const companyLogos: Record<string, CompanyLogo> = {
  TSI: {
    url: "https://www.tsi-senegal.sn/assets/images/logotsi.png",
    alt: "Logo TSI Sénégal - Transport et Services Internationaux",
    fallback: "TSI",
  },
  CFPM: {
    url: "https://scontent.fdkr6-1.fna.fbcdn.net/v/t39.30808-6/418182690_695942179322589_4214918881634520886_n.jpg?stp=c53.0.918.918a_dst-jpg_s565x565_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mruknP2MKiwQ7kNvwHmcU-J&_nc_oc=AdlW-nHnQ3Pm_vvQUFZhvmbgLZBJ-FzEuDBQLEAgqYTEFtrEjhRzlJ_yzjPOnDWfOIk&_nc_zt=23&_nc_ht=scontent.fdkr6-1.fna&_nc_gid=bu_7DfjvndKDd68Yi1X6Lw&oh=00_AfoirUTqytoVgArtYT15rmX6h3IH4ww3eTMCO329zuwrnw&oe=695D8A3C",
    alt: "Logo CFPM Dakar - Centre de Formation Professionnelle Maritime",
    fallback: "CFPM",
  },
  "Bolloré Transports Logistiques": {
    url: "https://portsetcorridors.com/wp-content/uploads/2023/04/AGL.jpg",
    alt: "Logo Bolloré Transport & Logistics - Groupe international de transport et logistique",
    fallback: "Bolloré",
  },
};

// Mots-clés pour chaque expérience (responsabilité / impact)
export const experienceKeywords: Record<string, string[]> = {
  tsi: ["Infrastructure", "Fiabilité", "Autonomie"],
  cfpm: ["Supervision", "Performance", "Responsabilité"],
  bollore: ["Monitoring", "Support", "Fiabilité"],
};

