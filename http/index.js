let express = require("express");
const AlipaySdk = require('alipay-sdk').default;

const alipayParams = {
    //应用ID,您的APPID。
    app_id: "2019031663535941",

    //商户私钥，您的原始格式RSA私钥
    merchant_private_key: "MIIEogIBAAKCAQEA1LmqmMz9WoZpO9tDyuw+qi74ZvUUV2o6Oc2vA8JQzPM648+HO/s+RALt/52aePWHoO4hQeSC0YbFkurpVAqv1MzlBOZ+SLsg+VJobaCU+73mw27BCaLK9u/h7OTPbfIIUwNBourba1zA8n2DknuYB2DJwW3FDiPWzRCa8+MMHzD6udzfAq1NwZ2NZjE02Fw6U1dNV7VEttYBWsWO7JIVR3ZRK6J9e0SpRXnnKhSJ6pm8xuKAP06zT7CU67jp5M4Y9J4ZGkSgaDofdIJgKn1Omg/W82xqCVrPUibFiRb/TYRNLvOA0CWExQeUdiEc/qm3oKxgo2gqjG/6ZmBH7H77/QIDAQABAoIBABCErlOZL181KrzEJPp/58nNReqwwziafhT4/Msc7qtLg9omxkiJFOexFowPz+vunO6JLznvpZzhizwCU8X74nVyx6HeyBWbuk7B8Gv62TbHI0Evu3ulEX+lVvTPO7A86BqSGSmudQVcOXta9bmNMVv5TxFfFbsoW0inLnEbw1g0kC7+D+zDkjtVNzWikjS9sJiQXVxm7xJzmGBk7o3RqdFptaM88T3Rw4NypdT2pix91tC9YWUDBYE3UWN+JTMv0M8A7AHnfhqi00FZxwVrDmDmcUtMNUNjTHXUgEpJ9x2+DUcjbvfkTFkpZ7lUFQcqtwcj3g7LK+QbqrYflDPeuCECgYEA8l5vsD1H1lkt5cSdplNpq8xJE/wMse1RH23+JGl1uqsdLehhYpgLnIxKVOcQOG5LTJ/AhDY7eu9ilrJLPF9j5OnxWEvNOpDCv2lnT7Hi12+Oo0sROUItKTVnDM0NS670ljo/mBBwQQr+ojjQecZAu5A6GYxjZwQR0Tzty70aGbUCgYEA4LBtyl8z6qka9wTwYGy0tykwb1i52rQOReFx5qBGx2prZVC07q6NvvEdzLw6CWRcW2X0DLeCq09pRyztEID8vaJBjbSvb8ul9nH6GJxQ1G7TyskhKUCvl96f7E6psztNT8WIFqkbn07mCmYsDFgqS5pjBoQRQVSTiwPOBeWAJikCgYBCzPJ9obY+BuBWlsVYxV63oht2LZ8WHzGftwI36PUw2N62+3hz4zI4GJaYJgNbelK4sMMv7X6hWH9Ux5li72up+SyyyFmtTZ7PgO6fkYjTFgU7ToJVxL6LwBNB/PYwKO1yxmUmtUkrNCuQbJZRKepHh+3rgr0W9JEwmVl1MQ6TjQKBgAfJNVTA7cyg5YVPz4CX479BFyOUoIQany/+uvKx9SHt5yDQpiRrOhA2zMCOeThgGO813joeldGX498KiIB858UufTUK4NVv6iVbF76IlCh4WrB5PcPvMOaDWWlX5HuIf4pXHvsiCwn/MuuDVN1spLKP/AR6yRpJcv9rN1Vu+XzZAoGAA7i2SXeerpZS0WO2CoLdYLNvsq8730bB5RRXKg9QUI8JG3pK4yCaFZm68y8LByMHXyPOzckR8ADQ4HIf1XS+G+UiVGdKYoxqd5yOPEZ4N1MW4I2TL0YE0PRcpI24b3QFKzPTe0MvBVggISuCwvXf0X9CqXvR/wEHxONnbpEHLyY=",

    //异步通知地址
    notify_url: "http://www.shedouwang.com/mobiles/pay/returns",

    //同步跳转
    return_url: "http://www.shedouwang.com/mobiles/pay/links",

    //编码格式
    charset: "UTF-8",

    //签名方式
    sign_type: "RSA2",

    //支付宝网关
    gatewayUrl: "https://openapi.alipay.com/gateway.do",

    //支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    alipay_public_key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl32iEpSWUsaubh1wJADAPdYhHUY4m4qJc7LRCD5NER20dU3xmDl",
}
const alipaySdk = new AlipaySdk({
    appId: alipayParams.app_id,
    privateKey: alipayParams.merchant_private_key,
    alipayPublicKey: alipayParams.alipay_public_key,
});

const method = 'alipay.trade.app.pay';
const params = {
    notifyUrl: 'http://localhost:3000/api/alipay',
    appAuthToken: '',
    // sdk 会自动把 bizContent 参数转换为字符串，不需要自己调用 JSON.stringify
    bizContent: {
      tradeNo: '',
      outTradeNo: '',
      operatorId: '',
    },
}

alipaySdk.exec(method, params).then(result => {
    console.log(result);
  }).catch((err) => {

  });


let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//将支付宝发来的数据生成有序数列
function getVerifyParams(params) {
    var sPara = [];
    if (!params) return null;
    for (var key in params) {
        if ((!params[key]) || key == "sign" || key == "sign_type") {
            continue;
        };
        sPara.push([key, params[key]]);
    }
    sPara = sPara.sort();
    var prestr = '';
    for (var i2 = 0; i2 < sPara.length; i2++) {
        var obj = sPara[i2];
        if (i2 == sPara.length - 1) {
            prestr = prestr + obj[0] + '=' + obj[1] + '';
        } else {
            prestr = prestr + obj[0] + '=' + obj[1] + '&';
        }
    }
    return prestr;
}

// getSign: (params) => {
//     try {
//         var privatePem = alipayParams.merchant_private_key;
//         var prestr = getParams (params);
//         var crypto = require('crypto');
//         var sign = crypto. createSign('RSA- -SHA1');
//         sign.update(prestr);
//         sign=sign.sign(key,'base64');
//         return encodeURIComponent(sign);
//     } catch (error) {
//         console.log("getSign err", err);
//     }
// }

//验签
function veriySign(params) {
    try {
        var publicPem = fs.readFileSync('./rsa_public_key.pem');
        var publicKey = publicPem.toString();
        var prestr = getVerifyParams(params);
        var sign = params['sign'] ? params['sign'] : "";
        var verify = crypto.createVerify('RSA-SHA1');
        verify.update(prestr);
        return verify.verify(publicKey, sign, 'base64')

    } catch (err) {
        console.log('veriSign err', err)
    }
}

//发送订单号
sendAlipay = function (req, res) {
    var code = ""
    for (var i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10);
    }
    //订单号暂时由时间戳与四位随机码生成
    AlipayConfig.out_trade_no = Date.now().toString() + code;
    var myParam = getParams(AlipayConfig);
    var mySign = getSign(AlipayConfig)
    var last = myParam + '&sign="' + mySign + '"&sign_type="RSA"';
    console.log(last)
    return res.send(last)
}

//回调验签
getAlipay = (req, res) => {
    console.log(req.body)
    var params = req.body;
    var mysign = veriySign(params);
    //验证支付宝签名mysign为true表示签名正确
    console.log(mysign)
    try {
        //验签成功
        if (mysign) {
            if (params['notify_id']) {
                var partner = AlipayConfig.partner;
                //生成验证支付宝通知的url
                var url = 'https://mapi.alipay.com/gateway.do?service=notify_verify&' + 'partner=' + partner + '¬ify_id=' + params['notify_id'];
                console.log('url:' + url)
                //验证是否是支付宝发来的通知
                https.get(url, function (text) {
                    //有数据表示是由支付宝发来的通知
                    if (text) {
                        //交易成功
                        console.log('success')
                    } else {
                        //交易失败
                        console.log('err')
                    }
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
}



//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.post('/api/alipay', function (req, res) {
    res.send(req.body);
})

app.listen(3000, function () {
    console.log('sucess port at 3000')
})
//baocun save