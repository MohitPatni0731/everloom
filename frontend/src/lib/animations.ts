import { Variants } from "framer-motion"

// Page-level animations
export const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.3 
    } 
  }
}

// Container animations with stagger
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Child element animations
export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Logo animation
export const logoVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    } 
  }
}

// Magnetic button effect
export const magneticVariants: Variants = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 8px 30px 0 rgba(0, 0, 0, 0.15)",
    transition: { 
      type: "spring", 
      stiffness: 400,
      damping: 20
    } 
  },
  tap: { 
    scale: 0.98,
    transition: { 
      duration: 0.1 
    }
  }
}

// Card hover effects
export const cardVariants: Variants = {
  rest: { 
    y: 0,
    boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.05)"
  },
  hover: { 
    y: -4,
    boxShadow: "0 10px 40px 0 rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    } 
  }
}

// Progress bar animation
export const progressVariants: Variants = {
  initial: { 
    width: "0%" 
  },
  animate: { 
    width: "78%",
    transition: { 
      duration: 2.5,
      ease: "easeOut",
      delay: 0.5
    } 
  }
}

// Counter animation
export const counterVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 10
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
}

// Floating elements
export const floatingVariants: Variants = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

// Scroll reveal animation
export const scrollRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Theme toggle animation
export const themeToggleVariants: Variants = {
  light: { 
    rotate: 0,
    transition: { 
      duration: 0.3 
    } 
  },
  dark: { 
    rotate: 180,
    transition: { 
      duration: 0.3 
    } 
  }
}

// Form field animations
export const fieldVariants: Variants = {
  focused: {
    scale: 1.02,
    transition: { 
      duration: 0.2 
    }
  },
  blurred: {
    scale: 1,
    transition: { 
      duration: 0.2 
    }
  }
} 