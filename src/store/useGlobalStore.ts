import { create } from 'zustand';
import { getItem, setItem } from '@/lib/localStorage';
import { type Article, type SelectedArticle } from '@/types/article';
import { logger } from './logger';
import { productos } from './mockedData';

interface GlobalState {
  isMenuOpen: boolean;
  productsList: Article[];
  selectedProducts: SelectedArticle[];
  totalProducts: number;
  totalAmount: number;
}

export interface GlobalStore extends GlobalState {
  toggleMenu: () => void;
  updateSelectedProducts: (data) => void;
  updateTotalProducts: (data: number) => void;
  updateTotalAmount: (data: number) => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  isMenuOpen: getItem('isMenuOpen') ?? false,
  productsList: productos,
  selectedProducts: getItem<SelectedArticle[]>('selectedProducts') ?? [],
  totalProducts: getItem<number>('totalProducts') ?? 0,
  totalAmount: getItem<number>('totalAmount') ?? 0,
};

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      ...productos,
      toggleMenu: () => {
        set((state) => {
          setItem('isMenuOpen', !state.isMenuOpen);
          return { isMenuOpen: !state.isMenuOpen };
        });
      },
      updateSelectedProducts: (data) => {
        set(() => {
          setItem('selectedProducts', data);
          return { selectedProducts: data };
        });
      },
      updateTotalProducts: (data) => {
        set(() => {
          setItem('totalProducts', data);
          return { totalProducts: data };
        });
      },
      updateTotalAmount: (data) => {
        set(() => {
          setItem('totalAmount', data);
          return { totalAmount: data };
        });
      },
    }),
    'globalStore'
  )
);

export default useGlobalStore;
