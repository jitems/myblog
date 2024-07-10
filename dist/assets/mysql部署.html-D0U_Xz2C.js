import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as i,a,d as t,o as n}from"./app-Bi9sAhmd.js";const l={},r=a("p",null," ",-1),p=t(`<h1 id="mysql部署" tabindex="-1"><a class="header-anchor" href="#mysql部署"><span>mysql部署</span></a></h1><p>拉取官方镜像（我们这里选择5.7.35，如果不写后面的版本号则会自动拉取最新版）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker pull mysql:5.7.35 # 拉取 mysql 5.7.35</span></span>
<span class="line"><span>docker pull mysql # 拉取最新版mysql镜像</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查是否拉取成功</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker images</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>一般来说数据库容器不需要建立目录映射</p><p>运行容器，需要做数据挂载，注意：启动mysql容器需要密码的</p><p>这里挂载了多个目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>-e MYSQL_ROOT_PASSWORD=123456         #这段配置数据库密码的</span></span>
<span class="line"><span>-d  #后台运行</span></span>
<span class="line"><span>-p  #端口映射</span></span>
<span class="line"><span>-v  #数据卷挂载</span></span>
<span class="line"><span>-e  #环境配置</span></span>
<span class="line"><span>-name  #容器名称</span></span>
<span class="line"><span>命令：docker run -d -p :3306:3306 -v 主机地址:/etc/mysql/conf.d   -v 主机地址:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456  --name mysql01  mysql:5.7.35</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.github.io/blog/bk620.png" alt="solar"><p>然后本地也创建了相应文件</p><img src="https://jitems.github.io/blog/bk621.png" alt="solar"><p>数据库链接工具中链接到刚创建的数据库容器,输入创建容器数据库时候的密码，这里因为我创建了，所以是编辑，然后是可以打开创建数据库的</p><img src="https://jitems.github.io/blog/bk622.png" alt="solar"><p>总结：这样本地挂载中的文件与容器中的文件同步修改，，，但把容器删除，那么本地的挂载目录不会消失，还是存在</p>`,15);function d(o,c){return n(),s("div",null,[r,i(" more "),p])}const g=e(l,[["render",d],["__file","mysql部署.html.vue"]]),u=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/docker%E6%95%99%E7%A8%8B/mysql%E9%83%A8%E7%BD%B2.html","title":"mysql部署","lang":"zh-CN","frontmatter":{"title":"mysql部署","category":["后端"],"tag":["docker"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%90%8E%E7%AB%AF/docker%E6%95%99%E7%A8%8B/mysql%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"mysql部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mysql部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1720591787000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"后端/docker教程/mysql部署.md","localizedDate":"2024年7月10日","excerpt":"<p>&nbsp;</p>\\n"}');export{g as comp,u as data};
