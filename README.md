# Vue 3 + TypeScript + Vite

# 招聘 app

uni-app 开发的招聘 app，可打包成 ios 和安卓端

# 静态资源

assets

img // 图片资源
icon // icon 图标类图片
css // 样式资源
style.css // 公用样式

# 项目公共组件

components

list // 列表文件
TaskList.vue // 任务列表组件
ContractList.vue // 合约列表组件
MessageList.vue // 消息列表组件
TalentList.vue // 人才列表组件
FooterTabbar.vue // 底部导航组件

# api 接口

api
user.ts // 登录模块 api
task.ts // 任务模块 api
contract.ts // 合约模块 api
message.ts // 消息模块 api
my.ts // 我的模块 api
talent.ts // 人才模块 api

# 路由

router
index.ts //路由管理主页

# 项目页面结构

login  // 登录页  


index.vue // 登录页主页  

      serviceAgree.vue // 服务协议
      privacyPolicy.vue // 隐私政策

task  // 任务页  

index.vue // 任务主页  

      search.vue // 任务搜索
      details.vue // 任务详情
      companySource.vue // 公司任务主页

contract //合约页  

index.vue // 合约主页  

      details.vue // 合约详情
      progress.vue // 合约进度

message  //消息页  

index.vue // 消息主页
      systemList.vue // 系统消息列表
      systemDetails.vue // 系统消息详情
      talk.vue // 对话消息

my // 我的主页  

index.vue //我的主页首页  

   user // 用户中心  
        index.vue // 个人信息主页  
        authReal.vue // 实名认证  
        certified.vue // 已完成实名认证  
        identitySwitch.vue // 切换身份  

set // 我的设置

index.vue // 设置主页
      feedback // 意见反馈
      index.vue // 反馈主页

account // 我的账户

index.vue // 账户主页
      advance.vue // 账户提现
      coinExplain.vue // 无忧币说明
      depositExplain.vue // 押金说明

resume // 我的简历

index.vue // 简历主页
      preview.vue // 简历预览

collect // 我的收藏
index.vue // 收藏主页

talent  // 人才主页

index.vue // 人才首页
      details.vue // 人才详情
