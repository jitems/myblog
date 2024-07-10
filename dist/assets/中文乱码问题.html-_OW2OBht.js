import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,a,d as t,o as n}from"./app-Bi9sAhmd.js";const l={},r=a("p",null," ",-1),p=t(`<h1 id="中文乱码问题" tabindex="-1"><a class="header-anchor" href="#中文乱码问题"><span>中文乱码问题</span></a></h1><h2 id="情况描述" tabindex="-1"><a class="header-anchor" href="#情况描述"><span>情况描述</span></a></h2><p>昨天开始学习SpringBoot，对配置文件application.properties进行了一些编码，今天来的时候再次打开application.properties这个配置文件，发现昨天编写的中文内容出现了下面乱码的情况，于是开始寻找解决方法。</p><img src="https://jitems.github.io/blog/bk90.png" alt="solar"><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h2><p>1、在application.peoperties中添加如下内容</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#配置中文编码格式</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">server.tomcat.uri-encoding=UTF-8</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">server.servlet.encoding.force=true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">server.servlet.encoding.charset=UTF-8</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">server.servlet.encoding.enabled=true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#配置中文编码格式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  tomcat</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    uri-encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">UTF-8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  servlet</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      force</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      charset</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">UTF-8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.github.io/blog/bk91.png" alt="solar"><p>2、file—&gt;settings—&gt;file encoding</p><img src="https://jitems.github.io/blog/bk92.png" alt="solar"><p>3、保存退出——&gt;重新启动IDEA 再次查看application.properties</p><img src="https://jitems.github.io/blog/bk93.png" alt="solar">`,13);function h(d,o){return n(),s("div",null,[r,e(" more "),p])}const g=i(l,[["render",h],["__file","中文乱码问题.html.vue"]]),m=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/SpringBoot%E6%95%99%E7%A8%8B/%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98.html","title":"中文乱码问题","lang":"zh-CN","frontmatter":{"title":"中文乱码问题","category":["后端"],"tag":["springboot"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%90%8E%E7%AB%AF/SpringBoot%E6%95%99%E7%A8%8B/%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"中文乱码问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"springboot"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中文乱码问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"情况描述","slug":"情况描述","link":"#情况描述","children":[]},{"level":2,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[]}],"git":{"createdTime":1659952375000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":0.66,"words":198},"filePathRelative":"后端/SpringBoot教程/中文乱码问题.md","localizedDate":"2022年8月8日","excerpt":"<p>&nbsp;</p>\\n"}');export{g as comp,m as data};
