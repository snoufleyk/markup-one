import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(svgSprite({
			mode: {
				symbol: {
					prefix: '.svg-%s',
					dimensions: '-sn',
					sprite: 'icons/sprite.svg',
					bust: true,
					render: {
						// css: true,
						scss: true,
					},
					example: true
				},
			}
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}