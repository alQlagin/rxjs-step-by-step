export const createObservable = () => {
  const observers = [];
  return {
    watch(observer) {
      observers.push(observer);
    },
    update(value) {
      observers.forEach(observer => observer.next(value));
    }
  };
};
