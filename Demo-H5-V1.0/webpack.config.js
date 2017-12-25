var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer'); // 自动补全css3前缀
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取样式插件
/**
 * webpack 把所有的资源都当成了一个模块, CSS,Image, JS 字体文件 都是资源, 都可以打包到一个 js 文件中.
 *但是有时候需要把样式 单独的打包成一个文件, 然后放到 CND上, 然后缓存到浏览器客户端中,*只需要ExtractTextPlugin插件就可以把css从js中独立抽离出来了
 */
// var SwigWebpackPlugin = require('swig-webpack-plugin'); // 生成一个HTML文件或者提供自己的模板(使用swig)
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html插件
/**
 * html-webpack-plugin该插件的两个主要作用：
 *1.为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
 *2.可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
 */
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var CleanPlugin = require('clean-webpack-plugin');

const PUBLIC_PATH = './';

module.exports = {
    entry: { // 多页面应用，页面入口文件配置
        index: ['./src/js/index.js'],
    },
    devtool: 'source-map',
    output: { // 文件输出配置
        path: path.resolve(__dirname, 'dev'), // 输出文件的路径
        publicPath: PUBLIC_PATH, // output.publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换。
        filename: 'js/[name].js'
    },
    module: { // 加载器配置
        rules: [ // loaders => rules
            {
                test: /\.(tpl|html)$/,
                use: 'html-loader', // apply multiple loaders and options
            },
            {
                // 可把options里的内容添加到loader之后 loader:'babel-loader?'+ JSON.stringify({ presets: ['es2015'] })
                // 减少构建搜索或编译路径。提高打包速度
                exclude: path.resolve(__dirname, 'node_modules'),// 使用绝对路径
                include: path.resolve(__dirname, 'src'),
                test: /\.js$/,
                use: [{
                        loader: 'babel-loader', // babel-loader语法转换很耗时  // 如果含有options配置项用use报错
                        // query:{ 典型的 options 被称为 query，是一个可以被添加到 loader 名之后的字符串
                        // options: { // query => options
                        //     // cacheDirectory:'./webpack_cache/',
                        //     presets: ['es2015'] // 安装插件babel-preset-es2015，也可在package.json中指定
                        // }
                    }]
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader!postcss-loader",
                    publicPath: '../'
                })
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                // url-loader和file-loader 都是用于打包文件和图片
                // url-loder有limit参数，小于8K的图片将直接以base64的形式内联在代码中，可以减少一次http请求
                use: ['url-loader?limit=8&name=images/[name].[ext]'],
                // name=img/[name].[ext]指定打包路径，可以先用image-webpack loader先对图片压缩
                //loaders: ['url?limit=8000&name=img/[name].[ext]',
                //          'image-webpack']

            },
            {
                test: /\.(svg|woff|ttf|eot)$/i,
                // 处理字体文件引用的加载器
                use: [
                    // 一般限制小图片转 base64 可以用 url-loader，其他情况都用 file-loader
                    'file-loader?name=font/[name].[ext]'
                ]
            },
            {
                test: /\.(mp4|wav|mkv)$/i,
                use: [
                    // 一般限制小图片转 base64 可以用 url-loader，其他情况都用 file-loader
                    'file-loader?name=vedios/[name].[ext]'
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        // 优化点一.怎样提升开发体验？
        // 1.热刷新/热替换。使用代码热替换在开发的时候无需刷新页面即可看到更新，而且，它将构建的内容放入内存中，能够获得更快的构建编译性能
        // 2.区分开发环境与生产环境。在package.json里面的script设置环境变量；在webpack.config.js使用process.env.NODE_ENV进行判断
        contentBase: path.join(__dirname, "dev"),
        // hot: true, // 开启服务器的模块热替换（HMR）
        // inline: true, //实时刷新
        port: 8080,
        proxy: { // 用webpack-dev-server开发时代理，解决开发时跨域问题
            '/wallets/api/browser/act/*': {
                target: 'http://172.16.33.201:8381',
                changeOrigin: true,
                secure: false
            }
        },
    },
    externals: {
        // 优化点二.怎样提高构建速度？ import vue导致文件变大，编译速度变慢，咋整?
        // 1.将大型库外链。如果你想将vue分离，不打包到一起，可以使用externals。然后用<script>单独将vue引入
        // 2.如果不介意将vue打包到一起，请在alias中直接指向vue的文件。可以提高webpack搜索的速度。准备部署上线时记得将换成vue.min，能减少文件大小(减少约600kb)
        // 3.使用module.noParse或DllPlugin将部分库预先编译
        'vue': 'Vue', // 缩小360多kb 11249行 =》200行
        'vue-router': 'VueRouter',
    },
    resolve: { // 文件路径指向
        // 4.减少构建搜索或编译路径。善用alias和exclude。
        // 5.缓存。 babel-loader
        // 6.并行。Happypack
        //resolve里面有一个alias的配置项目，能够让开发者指定一些模块的引用路径。对一些经常要被import或者require的库，如vue,我们最好可以直接指定它们的位置，这样webpack可以省下不少搜索硬盘的时间。
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [ // 共享所有chunk

        // 优化点四.多个html怎么办
        // 使用HtmlWebpackPlugin，可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口，记得不要用inject，否则全部js都会注入到html。如果真的要用inject模式，请务必将不需要的js用exclude chunk去掉或者用chunk参数填上你需要入口文件。
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true, //所有JavaScript资源插入到body元素的底部
            chunks: ['index','common'],
        }),

        // new CleanPlugin(['dev']),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/dep'),
                to: path.resolve(__dirname, 'dev/dep'),
            }
        ]),
        new ExtractTextPlugin({filename: 'css/[name].css'}),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
        }),

        // 优化点六. 合并公共代码

        //有些类库如utils, bootstrap之类的可能被多个页面共享，最好是可以合并成一个js，而非每个js单独去引用。这样能够节省一些空间。这时我们可以用到CommonsChunkPlugin，我们指定好生成文件的名字，以及想抽取哪些入口js文件的公共代码，webpack就会自动帮我们合并好。

        new webpack.optimize.CommonsChunkPlugin({ // 抽取公共js插件
            name: "common",
            filename: "js/common.js",
        })
    ]
}

// 优化点五.将模块暴露到全局

// 如果想将Loading组件放到全局，有两种办法：
//
// 在loader里使expose将Loading暴露到全局，然后就可以直接使用Loading
//
// {
//     test: path.join(config.path.src, '/js/common/Loading'),
//         loader: 'expose?Loading'
// },


