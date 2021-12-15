export default function fixOnDiv(fixedElement: any) {
  if (fixedElement) {
    const offSetBounding = fixedElement.parentNode.getBoundingClientRect()
    if (offSetBounding.top < 160 && offSetBounding.bottom > window.innerHeight)
      fixedElement.setAttribute('style', `top: ${-offSetBounding.top + 120}rem`)
    else fixedElement.setAttribute('style', '')
  }
}
