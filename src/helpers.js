export const detectBrowser = () => {
  const isBraveBrowser = navigator.brave !== undefined;
  const isChromeBrowser = navigator.vendor.toLowerCase().includes('google') && !isBraveBrowser;

  if (isBraveBrowser || !isChromeBrowser) {
    document.querySelector('body').style.background = 'rgb(220 216 194)';
  } else {
    document.querySelector('body').style.background = '#d7d3ba';
  }
};
