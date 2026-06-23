export const copyText = async (text: string, onCopied: (copied: boolean) => void) => {
  try {
    await navigator.clipboard.writeText(text);
    onCopied(true);
    setTimeout(() => onCopied(false), 2000);
  } catch {
    onCopied(false);
  }
};
