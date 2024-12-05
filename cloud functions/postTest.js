var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');

exports.initializer = (context, callback) => {
  console.log('initializing');
  callback(null, '');
};

exports.handler = (req, resp, context) => {
    console.log('hello world');

    var params = {
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        method: req.method,
        requestURI: req.url,
        clientIP: req.clientIP,
    }

    // 处理原始请求体（适用于JSON或文本数据）
    getRawBody(req, function(err, bodyBuffer) {
        if (err) {
            resp.statusCode = 500;
            resp.send('Error reading body');
            return;
        }
        var body = bodyBuffer.toString();

        // 如果是表单提交，解析表单数据
        if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
            getFormBody(req, function(err, formBody) {
                if (err) {
                    resp.statusCode = 500;
                    resp.send('Error parsing form body');
                    return;
                }
                params.body = formBody;
                resp.setHeader('Content-Type', 'application/json');
                resp.send(JSON.stringify(params, null, '    '));
            });
        } else {
            // 假设是JSON数据
            params.body = body;
            resp.setHeader('Content-Type', 'application/json');
            resp.send(JSON.stringify(params, null, '    '));
        }
    });
};