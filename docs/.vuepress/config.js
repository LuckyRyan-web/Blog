module.exports = {
  theme: 'reco',
  themeConfig: {
    modePicker: false,
    type: 'blog',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习笔记',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'HTML', link: '/accumulation/HTML/' },
          { text: 'CSS', link: '/accumulation/CSS/' },
          { text: 'JavaScript', link: '/accumulation/JavaScript/' },
          { text: 'Python', link: '/accumulation/Python/' }
        ]
      },
      { text: '面试宝典', link: '/interview/' },
      { text: '算法积累', link: '/algorithm/' },
      { text: '优文转载', link: '/article/' },
      { text: '工具箱', link: '/tool/' },
      { text: '关于我', link: '/about/' },
      { text: '我的博客', link: 'https://www.ly-blog.top/' },
      { text: 'Github', link: 'https://github.com/LuckyRyan-web/' }
    ],
    sidebar: 'auto'
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      collapsable:true,
      sidebarDepth:2,
      titleMap: {
        "interview": "前端基础面试题",
        "JavaScript":"JavaScript基础知识",
        "article": "前端优化类",
        "tool": "常用工具栏"
    	}
    }
  }
}