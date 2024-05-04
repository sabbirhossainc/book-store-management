const nextId = (state) => {
  const maxId = state.reduce((maxId, item) => Math.max(item.id, maxId), -1);
  return maxId + 1;
};

export default nextId;
