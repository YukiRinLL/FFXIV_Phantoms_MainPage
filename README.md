![FClogo](assets/images/logo.jpg)

# FFXIV Phantoms FC & Linkshell

欢迎来到我们的部队主页!这里是FC成员交流、分享和展示活动的场所。以下是关于这个项目的详细介绍

## 项目结构
- **/.github**
    - GitHub Actions的工作流文件, 页面部署和保持Supabase/Render活跃的配置
- **/additions**
    - **`foot`**:页面底部相关的HTML模板, 登陆头像框/管理员实时聊天
    - **`js`**:JS脚本文件, 用于实现页面的背景动态效果(悬浮圆圈/线段动画)
    - **`menu`**:导航菜单相关的HTML模板
    - **`DY.cur & HG.cur`**:自定义光标贴图
    - **`mouse.css`**:鼠标效果的CSS样式文件
    - **`bubble.html`**:悬浮圆圈HTML页面
    - **`nest.html`**:线段动画HTML页面
    - **`vortex.html`**:漩涡效果HTML页面
    - **`wave.html`**:波浪效果HTML页面
- **/album**
    - 定制相册功能相关的资源
- **/assets**
    - 项目所需的静态资源, Bootstrap框架文件、图片、CSS、JS等
- **/audio**
    - 音频文件
- **/cloud functions**
    - 用于MemfireDB的云函数的代码和配置文件(归档)
- **/demo**
    - 用于测试和模拟效果的功能模块
- **/history**
- **/lib**
    - **`browser-image-compression`**:用于浏览器端图片压缩的库
    - **`discussbase`**:用于讨论区功能的代码库
    - **`supabase-js`**:用于与Supabase后端服务交互的JavaScript库
- **/messageBoard**
    - **`messageBoard`**:消息板功能相关的HTML页面和资源
    - **`registerUser`**:用户注册页面
    - **`updateProfiliel`**:用户头像资料更新
    - **`userListWithProfile`**:显示用户列表&用户资料
    - **`asserts`**:存放消息板相关的静态资源
- **/profiles**
    - 成员相关资料的展示模块
- **/SQL**
    - SQL脚本文件, 用于数据库的表结构定义、函数、触发器等(归档)
- **/tools**
    - FFXIV工具相关的HTML页面
- **/vedio**
    - 视频播放相关的配置
- **/XIVAPI**
    - 与FFXIV API交互的模块
- **根目录**
    - **`index.html`**:主页文件
    - **`albums.html`**:相册功能的主页面
    - **`artExhibition.html`**:艺术展览相关的页面
    - **`history.html`**:历史活动记录的页面
    - **`tools.html`**:工具集合的主页面
    - **`tools-mobile.html`**:工具集合的主页面(移动端)
    - **`Kook.html`**:Kook嵌入页面
    - **`Oopz.html`**:Oopz嵌入页面
    - **`SMS_forward.html`**:与短信转发功能相关的页面
    - **`http_test.html`**:用于发送HTTP请求测试延迟并重定向到最快URL
    - **`cookie_test.html`**:用于测试Cookie
    - **`visitor-stats.html`**:用于显示访问者统计信息
    - **`visitor-tracker.js`**:用于跟踪访问者的JavaScript脚本
    - **`_config.yml`**:框架配置文件

## FC介绍

这里是Phantoms, 一个充满激情与活力的FinalFantasyXIV free-company.

我们聚集了一群热爱游戏、志同道合的玩家,  致力于在游戏中共同成长、探索和取得胜利。

无论你爱好FF14游戏玩法机制/剧情/世界观设定/游戏社交, 我们都欢迎你的加入, 一起在艾欧泽亚创造属于我们的故事

## 主要内容和功能

### FC信息展示

- **FC简介**:在主页上简要介绍FC的主题风格、运营理念
- **FC历史**:展示FC的发展历程, 包括重要的里程碑事件/取得的成就以及曾经参与的重大活动
- **FC文化**:阐述FC的文化氛围和价值观

### 成员管理

- **成员列表**:展示FC成员基本信息
- **成员肖像**:展示FC成员的肖像和个性签名, 方便成员之间相互了解
- **用户管理**:提供了用户注册和登录功能, 成员可以通过注册账号来参与互动

### 工具资源

- **工具聚合**:收集整合大量相关的攻略内容, 辅助工具, 信息资源, 提供全方位一站式工具索引
- **官方站点**:链接官方站点, 提供最新的活动和运营消息
- **文件资源**:联动FFXIV API, 提供相关游戏资源

### 社交互动

- **留言模块**:搭建一个FC内部的留言板, 成员可以在这里发帖展示游戏相关的话题
- **社交软件整合**:集成OOPZ/KOOK功能, 方便成员在游戏过程中随时进行语音或文字交流

- **相册功能**:提供了相册功能, 用于分享游戏中的照片
- **个性化相册**:对特殊内容设计了个性化风格的相册
- **画展**:用于展览玩家创作的绘画作品

## 联系方式

- **FC name**:Phantom <虚妄>
- **Server**:中国服务器-莫古力区（原电信二区）拂晓之间
- **QQ-Group**:787909466
- **FC管理员联系方式**: @緋雪yuki, 944989026

## Join Us

如果你喜欢我们的FC, 欢迎随时加入我们!
也欢迎随时提出建议和意见, 或者咨询相关问题。

本项目采用架构和技术栈皆为开源资源, 部分为免费网络服务
如果你喜欢我的作品, 可以"Star"我的项目, 或者点击右上角的"Fork"按钮, 将项目复制到你的个人GitHub仓库中。
本项目可以提供给其他游戏爱好者替换内容进行复用。
也欢迎你为本项目贡献代码或者重构
（初版设计仅为静态页面展示，没有考虑到会有这么多功能，目前正在考虑使用VUE前端+Java后端服务+其他第三方服务/组件进行重构）

## 致谢

感谢所有为FC主页项目贡献代码、设计、内容以及提供帮助的成员!(包括但不限于设计师、开发者、测试人员等)

你们的努力和奉献使得这个项目能够顺利进行并取得成功

正是因为有了大家的共同努力, 我们的FC主页才能不断完善和发展特别感谢以下成员（按字母顺序排列）:

- (其实这个项目设计开发测试都是我一个人T_T)
- ...


## 许可证

本项目采用MIT Commercial Restriction & Creative Commons许可证.
允许非商业用途的使用 修改和分发, 同时要求注明原作者.
商业用途必须获得单独的许可.

## 开发备注

请在`main`分支中进行修改和commit, 然后使用deploy脚本进行部署。

这个脚本会将`main`分支中的改动merge到`redefine_url_new`和`none-25M-for-deployment`分支并push到远程仓库，触发自动部署

赋予 Bash 脚本执行权限（Linux/macOS）:
```
chmod +x deploy.sh
```
运行 Bash 脚本（Linux/macOS）:
```
./deploy.sh
```

或者打开 PowerShell 窗口（Win）。
运行以下命令以允许执行脚本：
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
运行脚本：
```
.\deploy.ps1
```
如果因为网络波动导致部署失败请重新运行脚本