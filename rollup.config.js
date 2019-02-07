import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/lum.js',
    output: {
      file: 'src/bundle.js',
      format: 'umd',
      name: 'main'
    },
    plugins: [ 
        resolve({
            jsnext: true,
            main: true,
            module: true
        }) 
    ],
  }