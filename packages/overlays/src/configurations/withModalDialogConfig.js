export const withModalDialogConfig = () => ({
  placementMode: 'global',
  viewportConfig: {
    placement: 'center',
  },

  hasBackdrop: true,
  preventsScroll: true,
  trapsKeyboardFocus: true,
  hidesOnEsc: true,
  hidesOnOutsideEsc: true,
  handlesAccessibility: true,
});
