import { defineStore } from 'pinia';

export const useColorStore = defineStore({
  id: 'colors',
  state: () => ({
    primary: '#4059AD',
    second: '#6B9AC4',
    third: '#97D8C4',
    fourth: '#EFF2F1',
    fifth: '#F4B942',
  }),
  //   getters: {
  //       primary: (state) => state.primary,
  //       secondary: (state) => state.secondary,
  //       third: (state) => state.third,
  //       fourth: (state) => state.fourth,
  //       fifth: (state) => state.fifth,
  //   }
  //   actions: {
  //     setLoading(loading) {
  //       this.loading = loading;
  //     },
  //   },
});
