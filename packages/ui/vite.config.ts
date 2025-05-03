import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'tiledocsUI', // A different name for the UI package
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'cjs'] // Build for ES Module and CommonJS
        },
        outDir: 'distr', // Output directory as specified
        emptyOutDir: true, // Clear the output directory before building
        sourcemap: true, // Generate sourcemaps
    },
});
