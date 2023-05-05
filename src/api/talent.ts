import request from "@/utils/request";
// 登录接口
export function login(data: Object) {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}


// 登录接口
export function getPolicy(data: Object) {
  return request({
    url: 'policy_protocol/list',
    method: 'get',
    params: data
  })
}

