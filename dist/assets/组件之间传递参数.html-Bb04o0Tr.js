import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as a,a as n,d as l,o as e}from"./app-Bi9sAhmd.js";const t={},h=n("p",null," ",-1),p=l(`<h1 id="组件之间传递参数" tabindex="-1"><a class="header-anchor" href="#组件之间传递参数"><span>组件之间传递参数</span></a></h1><h2 id="on-emit-off" tabindex="-1"><a class="header-anchor" href="#on-emit-off"><span>$on,$emit,$off</span></a></h2><p>在页面与页面之间通讯时，很多人会直接选择使用在navigato的时候直接拼接字符串来传递。可是当需要传依个比较多数据的的对象的时候这个方式就不是很管用了，为此uniapp给我们提供了页面与页面之间通讯的极为简便的方法。</p><p>比如我在下订单页面的时候需要用户选择一个地址去配送，因此我们需要点击之后跳转到选择收货地址页面。而在选择完了收货地址以后需要关闭那个页面返回该订单页面。因此在该订单页面我们需要开启监听用户选择地址的事件。注意在订单页面卸载的时候也要记得关闭该监听。</p><p>下面为订单页面的代码：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">			</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	//开启监听选择收货地址事件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	uni.$on(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;choosePath&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,(res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)=</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		this.path</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">//页面卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	onUnload</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		//关闭监听选择收货地址事件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	uni.$off(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;choosePath&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,(</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		console.log(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;关闭监听选择收货地址&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">methods:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	openPathList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	    uni.navigateTo(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	        url:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;../user-path-list/user-path-list?type=choose&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是选择地址的页面：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">onLoad(option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	if(option.type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">===</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;choose&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		this.isChoose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">methods:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    //选择收获地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">	choosePath(item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		if(this.isChoose</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">			//通知订单页面修改地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">			uni.$emit(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;choosePath&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">,item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">			//关闭当前页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">			uni.navigateBack(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">				delta:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">			});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨级组件传递状态" tabindex="-1"><a class="header-anchor" href="#跨级组件传递状态"><span>跨级组件传递状态</span></a></h2><p>使用 Provide Inject 选项 父组件中：</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Demo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">msg</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">Demo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">     provide</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">         return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">             handleClick</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                 // do something</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">             }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">         }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件中：</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">handleClick</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">el-button</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;DEMO&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    inject</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;handleClick&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function k(d,r){return e(),i("div",null,[h,a(" more "),p])}const g=s(t,[["render",k],["__file","组件之间传递参数.html.vue"]]),F=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0.html","title":"组件之间传递参数","lang":"zh-CN","frontmatter":{"title":"组件之间传递参数","category":["前端"],"tag":["uniapp"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"组件之间传递参数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"uniapp"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件之间传递参数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"$on,$emit,$off","slug":"on-emit-off","link":"#on-emit-off","children":[]},{"level":2,"title":"跨级组件传递状态","slug":"跨级组件传递状态","link":"#跨级组件传递状态","children":[]}],"git":{"createdTime":1659952375000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":1.43,"words":428},"filePathRelative":"前端/uniapp教程/组件之间传递参数.md","localizedDate":"2022年8月8日","excerpt":"<p>&nbsp;</p>\\n"}');export{g as comp,F as data};
