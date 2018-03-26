function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*baidu.com"))
        return "DIRECT";
}
