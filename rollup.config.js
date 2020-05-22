import fs from 'fs';
import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import svg from 'rollup-plugin-svg';

const config = fs
    .readdirSync('src')
    .filter(srcSubDir => ['components'].includes(srcSubDir))
    .reduce(
        (acc, dir) => [
            ...acc,
            ...fs.readdirSync(`src/${dir}`).map(filePath => path.join(`src/${dir}`, filePath))
        ],
        []
    )
    .map(component => ({
        input: `${component}/index.js`,
        plugins: [
            external(),
            svg({
                base64: true
            }),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true,
                externalHelpers: true
            }),
            commonjs(),
            resolve()
        ],
        output: [
            {
                file: `packages/${component.split('/').pop()}.js`,
                format: 'esm'
            },
            {
                file: `packages/cjs/${component.split('/').pop()}.js`,
                format: 'cjs',
                exports: 'named'
            }
        ]
    }));

export default config;
