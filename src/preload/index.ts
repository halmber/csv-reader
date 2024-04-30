import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'

// Custom APIs for renderer
const context = {}

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('electron', electronAPI)
  contextBridge.exposeInMainWorld('context', context)
} catch (error) {
  console.error(error)
}
