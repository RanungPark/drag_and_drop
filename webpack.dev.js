import path from 'path';
import { merge } from 'webpack-merge';

import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
});
