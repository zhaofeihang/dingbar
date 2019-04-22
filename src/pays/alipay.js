
export default {
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

    //调用支付
    alipay:() => {
    }
}