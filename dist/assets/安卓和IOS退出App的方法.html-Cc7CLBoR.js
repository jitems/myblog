import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as e,d as t,o as n}from"./app-Bi9sAhmd.js";const p={},l=e("p",null," ",-1),r=t(`<h1 id="安卓和ios退出app的方法" tabindex="-1"><a class="header-anchor" href="#安卓和ios退出app的方法"><span>安卓和IOS退出App的方法</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (uni.getSystemInfoSync().platform) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    c</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ase</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;android&#39;:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        plus.runtime.quit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    c</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ase</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;ios&#39;:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        plus.ios.import(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;UIApplication&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">.sharedApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().performSelector(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;exit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(o,d){return n(),s("div",null,[l,a(" more "),r])}const m=i(p,[["render",h],["__file","安卓和IOS退出App的方法.html.vue"]]),g=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/%E5%AE%89%E5%8D%93%E5%92%8CIOS%E9%80%80%E5%87%BAApp%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"安卓和IOS退出App的方法","lang":"zh-CN","frontmatter":{"title":"安卓和IOS退出App的方法","category":["前端"],"tag":["uniapp"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/%E5%AE%89%E5%8D%93%E5%92%8CIOS%E9%80%80%E5%87%BAApp%E7%9A%84%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"安卓和IOS退出App的方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"uniapp"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安卓和IOS退出App的方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1659952375000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":0.15,"words":44},"filePathRelative":"前端/uniapp教程/安卓和IOS退出App的方法.md","localizedDate":"2022年8月8日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,g as data};
