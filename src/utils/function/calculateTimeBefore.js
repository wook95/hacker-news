const calculateTimeAgo = unixTime => {
  const today = new Date();
  const timeValue = new Date(unixTime * 1000);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60,
  );
  if (betweenTime < 1) return 'now';
  if (betweenTime < 60) {
    return `${betweenTime}minutes ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}hours ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}days ago`;
  }

  return `${Math.floor(betweenTimeDay / 365)}years ago`;
};

export default calculateTimeAgo;
