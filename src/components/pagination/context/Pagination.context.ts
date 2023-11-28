import { create } from "zustand";

interface PaginationState {
  count: number;
  setCount: (val: number) => void;
  currentPage: number;
  setCurrentPage: (val: number) => void;
  maxLinksDisplayed: number;
  setMaxLinksDisplayed: (val: number) => void;
  showPrevAndNextButtons: boolean;
  setShowPrevAndNextButtons: (val: boolean) => void;
  showFirstAndLastButtons: boolean;
  setShowFirstAndLastButtons: (val: boolean) => void;
  moveNextPage: () => void;
  movePreviousPage: () => void;
  moveFirstPage: () => void;
  moveLastPage: () => void;
}

const usePagination = create<PaginationState>((set, get) => ({
  count: 10,
  setCount: value => set({ count: value }),
  currentPage: 1,
  setCurrentPage: value => set({ currentPage: value }),
  maxLinksDisplayed: 5,
  setMaxLinksDisplayed: value => set({ maxLinksDisplayed: value }),
  showPrevAndNextButtons: true,
  setShowPrevAndNextButtons: value => set({ showPrevAndNextButtons: value }),
  showFirstAndLastButtons: true,
  setShowFirstAndLastButtons: value => set({ showFirstAndLastButtons: value }),
  moveNextPage() {
    const totalCount = get().count;
    const currentCount = get().currentPage;

    if (currentCount < totalCount) {
      set({ currentPage: currentCount + 1 });
    }
  },
  movePreviousPage() {
    const currentCount = get().currentPage;

    if (currentCount > 1) {
      set({ currentPage: currentCount - 1 });
    }
  },
  moveFirstPage() {
    set({ currentPage: 1 });
  },
  moveLastPage() {
    const totalCount = get().count;

    set({ currentPage: totalCount });
  }
}));

export { usePagination };
