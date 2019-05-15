// 全局注入 
import {injectFormat} from './formatDate'
import {injectTool} from './tool'
import {injectHttp} from './http'

export const injectGlobal = () => {
	injectFormat();
	injectTool();
	injectHttp();
}