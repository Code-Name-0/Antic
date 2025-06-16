export const useMobileMenu = () => {
  // Use useState for global reactive state in Nuxt 3
  const isMobileMenuOpen = useState('mobileMenu.isOpen', () => false)

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const openMobileMenu = () => {
    isMobileMenuOpen.value = true
  }

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu
  }
}
