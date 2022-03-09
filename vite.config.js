// @ts-check 
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'


export default defineConfig({
    plugins: [
        Icons({
            compiler: 'web-components',
            webComponents: {
                autoDefine: true,
            },
        }),
        WindiCSS(),
    ],
});
