export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hours > 0) {
    if (minutes > 0) {
      return `${hours}ч ${minutes}м`;
    } else {
      return `${hours}ч`;
    }
  } else {
    return `${minutes}м`;
  }
};
