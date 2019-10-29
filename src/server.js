import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session';
import url from 'url';
import proxy from 'express-http-proxy';
import sessionFileStore from 'session-file-store';

const proxy_base = process.env.API_HOST || "http://127.0.0.1:4000"

const create_proxy = (path, options = {}) => {
	const default_opts = {
		proxyReqPathResolver: function (req, res) {
			return path + url.parse(req.url).path;
		}
	}

	const opts = {
		...default_opts,
		...options
	}
	return proxy(`${proxy_base}`, opts);
}

const FileStore = sessionFileStore(session);

const {
	PORT,
	NODE_ENV
} = process.env;
const dev = NODE_ENV === 'development';

const app = polka();

app.use(function (req, res, next) {
	res.status = code => (res.statusCode = code);
	res.set = res.setHeader.bind(res);
	next();
})

// ⚠️ hack to make the proxy work with polka
// express-http-proxy is expecting these methods
app
	.use("/user/avatar", create_proxy('/user/avatar'))
	.use("/user/cover", create_proxy('/user/cover'))
	.use("/api", create_proxy('/api/v1'))
	.use("/auth_data", create_proxy('/auth_data'))
	.use(session({
		secret: 'embers',
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 31536000
		},
		store: new FileStore({
			path: process.env.NOW ? `/tmp/sessions` : `.sessions`
		})
	}))
	.use(
		compression({
			threshold: 0
		}),
		sirv('static', {
			dev
		}),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});