function is_afternoon() {
  const hour = new Date().getHours();
  return hour >= 12 && hour < 14;
}

export {is_afternoon};
