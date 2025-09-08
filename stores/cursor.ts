export const useCursorStore = defineStore('cursor', {
  state: () => ({
    text: '' as string,
    isVisible: true as boolean,
    image: null as null | string
  }),
  getters: {
    hasText: (state): boolean => state.text?.length > 0,
    hasImage: (state): boolean => state.image?.length > 0
  },
  actions: {
    setText(newText: string) {
      this.text = newText
    },
    setImage(path: string | null) {
      this.image = path;
    },
    clearText() {
      this.text = ''
    }
  }
})
