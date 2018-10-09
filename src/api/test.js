import request from '@/utils/request.js'

export function list(){
	return request({
	    url: 'vehicle/busBizLocation/list',
	    method: 'post',
	    data:params
	})
}

