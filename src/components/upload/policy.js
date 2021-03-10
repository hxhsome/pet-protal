import ajax from '../../api/ajax'

export function policy () {
  return ajax(`/api/pet/aliyun/oss/policy`)
}
