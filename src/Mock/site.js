const Mock = require("mockjs");
export default [
  // 站点信息
  {
    url: "/site",
    type: "get",
    response: () => {
      return {
        code: 20000,
        data: {
          avatar: "https://s2.ax1x.com/2020/01/17/1SCadg.png",
          slogan: "The way up is not crowded, and most chose ease.",
          name: "WZT′blog",
          domain: "https://www.wzt.cn",
          notice: "本博客的Demo数据由Mockjs生成",
          desc: "一个It技术的探索者",
        },
      };
    },
  },
  // 站点社交信息
  {
    url: "/social",
    type: "get",
    response: () => {
      return {
        code: 20000,
        data: [
          {
            id: 1,
            title: "QQ",
            icon: "iconqq",
            color: "#1AB6FF ",
            href: "https://user.qzone.qq.com/240945525/main",
          },
          {
            id: 2,
            title: "Gitee",
            icon: "icongitee",
            color: "#d81e06",
            href: "https://gitee.com/wangchito",
          },
          {
            id: 3,
            title: "GitHub",
            icon: "icongithub",
            color: "",
            href: "https://github.com/pangrongroom",
          },
        ],
      };
    },
  },
];
