export class Toaster {
  setToastItems = () => {
    return;
  };

  constructor(setState) {
    if (setState) this.setToastItems = setState;
  }

  addToastItem({ type, message }) {
    this.setToastItems((state) => [
      { id: new Date().getUTCMilliseconds(), type, message },
      ...state,
    ]);
  }

  removeToastItem(toastId) {
    this.setToastItems((state) => {
      const indexToRemove = state.findIndex(
        (toastItem) => toastItem.id === toastId
      );
      if (indexToRemove > -1) {
        return [
          ...state.slice(0, indexToRemove),
          ...state.slice(indexToRemove + 1),
        ];
      }
      return state;
    });
  }

  add(message) {
    this.addToastItem({ type: "add", message });
  }

  delete(message) {
    this.addToastItem({ type: "delete", message });
  }
}
