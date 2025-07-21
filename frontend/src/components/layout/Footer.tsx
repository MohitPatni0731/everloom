import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"
import { itemVariants } from "@/lib/animations"

const socialLinks = [
  {
    icon: Twitter,
    href: "https://twitter.com/everloom",
    label: "Follow us on Twitter",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/everloom",
    label: "Connect on LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/everloom",
    label: "Star us on GitHub",
  },
  {
    icon: Mail,
    href: "mailto:hello@everloom.ai",
    label: "Send us an email",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <img
                src="/logo.png"
                alt="Everloom Logo"
                className="h-6 w-auto"
                loading="lazy"
              />
              <span className="text-lg font-bold">Everloom</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your Second Brain Is Loading. Save moments, share memories, let AI remember for you.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <motion.a
                href="/privacy"
                className="hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                className="hover:text-primary transition-colors"
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              © 2025 Everloom. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
} 