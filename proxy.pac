function FindProxyForURL(url, host) {
    alert("Proxy test");
    return "PROXY 10.10.7.223:8080; DIRECT";
}
