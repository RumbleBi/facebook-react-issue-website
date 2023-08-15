export const shouldShowAdvertisement = (idx: number) => {
  return (idx + 1) % 4 === 0;
};
