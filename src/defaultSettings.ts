export type settingsKeys =
    | 'endpoint'
    | 'ipType'
    | 'port'
    | 'psiphon'
    | 'location'
    | 'license'
    | 'gool'
    | 'theme'
    | 'systemTray'
    | 'flag'
    | 'ipData'
    | 'routingRules';

export const defaultSettings = {
    endpoint: 'engage.cloudflareclient.com:2048',
    ipType: '',
    port: 8086,
    psiphon: false,
    location: '',
    license: '',
    gool: false,
    theme: 'light',
    systemTray: false,
    flag: 'xx',
    ipData: true,
    routingRules: '',
};