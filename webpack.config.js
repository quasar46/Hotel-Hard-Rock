const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = {
	cache: false,
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.[contenthash].js',
		assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
			},
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif|mp4)$/i,
				type: 'asset/resource',
				generator: {
					filename: path.join('assets/images', '[name].[contenthash][ext]'),
				},
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: path.join('assets/icons', '[name].[contenthash][ext]'),
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]'
				}
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/index.pug'),
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/about.pug'),
			filename: 'about.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/blog.pug'),
			filename: 'blog.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/article.pug'),
			filename: 'article.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/author.pug'),
			filename: 'author.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/calculator.pug'),
			filename: 'calculator.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/residence.pug'),
			filename: 'residence.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/catalog.pug'),
			filename: 'catalog.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/contact.pug'),
			filename: 'contact.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/privacy.pug'),
			filename: 'privacy.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/error.pug'),
			filename: 'error.html',
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'pug/success.pug'),
			filename: 'success.html',
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['dist'],
				},
				onEnd: {
					copy: [
						{
							source: path.join('src', 'static'),
							destination: 'dist',
						},
					],
				},
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 9001,
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', { name: 'preset-default' }],
						],
					},
				},
			}),
		],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	}
};