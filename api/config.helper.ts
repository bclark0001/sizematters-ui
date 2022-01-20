const CONFIGURED_SERVER_KEY = "configuredServer";

export default
{
    getServerList()
    {
        return ["wss://ws.sizematters.dev", "ws://localhost:9001", "wss://sm-test-ws.t.brazenconnect.com"];
    },
    getDefaultServer()
    {
        return "wss://ws.sizematters.dev"
    },
    getConfiguredServer()
    {
        const localStorageServer = localStorage.getItem(CONFIGURED_SERVER_KEY);
        return localStorageServer ? localStorageServer : this.getDefaultServer();
    },
    setConfiguredServer(server: string)
    {
        localStorage.setItem(CONFIGURED_SERVER_KEY, server);
    }
};

