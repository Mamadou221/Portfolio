// Constantes de styles réutilisables
// Évite la répétition et assure la cohérence visuelle

export const commonStyles = {
  // Transitions communes
  transition: {
    colors: "transition-colors",
    all: "transition-all",
  },
  
  // Couleurs de texte communes
  text: {
    dark: {
      primary: "text-dark-900",
      secondary: "text-dark-700",
      tertiary: "text-dark-600",
      muted: "text-dark-400",
    },
    primary: {
      default: "text-primary-600",
      hover: "hover:text-primary-600",
    },
  },
  
  // Padding communs
  padding: {
    button: "px-4 py-2",
    buttonLarge: "px-4 sm:px-6 py-2 sm:py-3",
    card: "p-3 sm:p-4",
  },
  
  // Espacements
  gap: {
    small: "gap-2",
    medium: "gap-3",
    large: "gap-4",
  },
  
  // Tailles de texte responsive
  textSize: {
    xs: "text-xs",
    sm: "text-xs sm:text-sm",
    base: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
    xl: "text-lg sm:text-xl",
    heading: "text-xl sm:text-2xl md:text-3xl",
  },
};

// Classes Tailwind communes pour éviter la répétition
export const buttonStyles = {
  primary: "px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all",
  secondary: "px-4 py-2 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-all",
  ghost: "px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all",
};

