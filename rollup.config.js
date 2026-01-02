import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const isProd = process.env.NODE_ENV === 'production';

const BASE_PLUGINS = [
    postcss({
        extensions: ['.css'],
        extract: true,
        minimize: !isProd,
        sourceMap: !isProd,
    }),
    resolve({ browser: true, extensions }),
    commonjs(),
    typescript(),
    babel({
        extensions,
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }]
        ],
    }),
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
];

export default [
    // ### CONTENT ###
    {
        input: 'src/content/index.tsx',
        output: {
            file: 'dist/assets/content.js',
            format: 'iife',
            // TODO: Add only for dev mode
            sourcemap: !isProd,
        },
        plugins: [
            ...BASE_PLUGINS,
        ],
    },
    // ### POPUP
    {
        input: 'src/popup/index.tsx',
        output: {
            file: 'dist/assets/popup.js',
            format: 'iife',
            sourcemap: !isProd,
        },
        plugins: [
            ...BASE_PLUGINS,
            copy({
                targets: [
                    { src: 'public/**', dest: 'dist' },
                ],
            }),
        ],
    },
];
