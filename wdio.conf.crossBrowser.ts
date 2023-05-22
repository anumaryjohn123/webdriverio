import type { Options } from '@wdio/types'
import {config as baseConfig} from './wdio.conf'

export const config: Options.Testrunner = {
    ...baseConfig ,
    capabilities: [
        
        // capabilities for local browser web tests
        {
        maxInstances: 5,
        browserName: 'firefox', // or "firefox", "microsoftedge", "chrome"
        acceptInsecureCerts: true
        },
        {
        maxInstances: 5,
        browserName: 'chrome', // or "firefox", "microsoftedge", "chrome"
        acceptInsecureCerts: true
        }

        
    ],
    
}
