import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'Fantia TORA COIN 序列码自动填写',
        author: 'Jeremy Hibiki',
        description: 'Fantia TORA COIN 序列码自动填写',
        namespace: 'https://github.com/Jeremy-Hibiki/fantia-tora-coin-auto-fill',
        icon: 'https://fantia.jp/assets/customers/favicon-32x32-8ab6e1f6c630503f280adca20d089646e0ea67559d5696bb3b9f34469e15c168.png',
        match: ['https://fantia.jp/mypage/users/coins/charges'],
      },
    }),
  ],
});
