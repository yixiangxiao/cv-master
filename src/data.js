
import jxyq from './assets/bg.png'; //此公司已关闭，放个空白图片上去
import anires from './assets/anires.png';
import blog from './assets/blog.png';
import shop from './assets/shop.png';
import data from './assets/data.png';
import manage from './assets/manage.png';
import taobao from './assets/taobao.png';
import notes from './assets/notes.png';

import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
import sWeiBo from './assets/s_wb.svg';
// import sSf from './assets/s_sf.svg';
import sBlog from './assets/s_blog.svg';
import sZh from './assets/s_zh.svg';
// import sJj from './assets/s_Jj.svg';
import SGitee from "./assets/s_gitee.svg"
import SJianshu from "./assets/s_jianshu.svg"
import SCSDN from "./assets/s_csdn.svg"

export default {
  cn: {
    header: {
      langList: ['中', '英'],
      titleList: [{
        svg: dHome,
        title: '首页'
      },
      {
        svg: dSkills,
        title: '能力'
      },
      {
        svg: dExp,
        title: '经历'
      },
      {
        svg: dWorks,
        title: '作品集'
      },
      {
        svg: dContact,
        title: '联系我'
      }
      ]
    },
    footer: ['Released under the Apache License', 'All Rights Reserved'],
    overview: {
      infoList: ['22岁', '本科', '深圳', '在职'],
      quote: '不浮躁，不偏激，爱编程，爱前端，爱测试，爱新技术，爱运动，执行力和学习能力都棒棒哒！',
      desList: ['我叫肖怡翔，web前端，软件测试工程师', '深圳金镒铭通信技术有限公司', '2324094523@qq.com']
    },
    skill: {
      outCircleList: [{
        bg: {
          backgroundColor: 'rgba(121,100,102,0.8)'
        },
        name: 'Js'
      },
      {
        bg: {
          backgroundColor: 'rgba(49,65,82,0.8)'
        },
        name: '软件测试'
      },
      {
        bg: {
          backgroundColor: 'rgba(193,131,106,0.8)'
        },
        name: 'vue'
      },
      {
        bg: {
          backgroundColor: 'rgba(117,148,179,0.8)'
        },
        name: 'mysql'
      },
      {
        bg: {
          backgroundColor: 'rgba(147,147,189,0.8)'
        },
        name: 'git'
      },
      {
        bg: {
          backgroundColor: 'rgba(172,223,159,0.8)'
        },
        name: 'Linux'
      },
      {
        bg: {
          backgroundColor: 'rgba(66,66,66,0.8)'
        },
        name: 'html+css'
      },
      {
        bg: {
          backgroundColor: 'rgba(71,83,94,0.8)'
        },
        name: 'node.js'
      }
      ],
      innerCircleList: [{
        bg: {
          backgroundColor: 'rgba(179,164,140,0.8)'
        },
        name: 'react'
      },
      {
        bg: {
          backgroundColor: 'rgba(171,209,220,0.8)'
        },
        name: 'bootstrap'
      },
      {
        bg: {
          backgroundColor: 'rgba(238,215,163,0.8)'
        },
        name: 'less'
      },
      {
        bg: {
          backgroundColor: 'rgba(207,184,178,0.8)'
        },
        name: 'sass'
      }
      ],
      desList: [
        '我叫肖怡翔，22岁，坐标深圳，web前端，软件测试工程师，二年从业经验。',
        '熟悉软件开发和测试的整个流程，有较强的逻辑思维能力',
        '主要涉及技术：web前端开发、软件测试、mysql、开源爱好者、Linux',
        '有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控'
      ],
      links: [{
        title: '● Github',
        des: 'https://yixiangxiao.github.io',
        url: 'https://yixiangxiao.github.io'
      }, {
        title: '● 码云',
        des: 'http://xiao-yixiang.gitee.io',
        url: 'http://xiao-yixiang.gitee.io'
      }]
    },
    exp: {
      expList: [{
        title: '深圳金镒铭通信技术有限公司',
        time: '2020年4月~至今',
        post: '技术部/软件测试工程师',
        img: {},
        contentList: ['使用软件测试工具解决项目bug', '负责编制与产品或项目相关的测试文档', '使用Linux命令完成日常系统的部署及维护工作']
      },
      {
        title: '深圳云点工业科技有限公司',
        time: '2019年12月~2020年3月',
        post: '技术部/web前端工程师',
        img: {},
        contentList: ['使用js、VueJS、ajax、axious等前沿开发技术', '获得过公司颁发并盖章的优秀员工荣誉证书奖', '与后端开发人员进行功能接口对接，解决测试人员提出的 bug']
      },
      {
        title: '宝辉科技(龙南)有限公司',
        time: '2018年6月~2019年11月',
        post: '技术部/web前端工程师',
        img: {},
        contentList: ['参加讨论相关项目需求、概要设计，并完成核心代码编写', '使用js、vue、axious进行开发', '对代码持续重构优化，对系统不足进行分析，提高系统性能']
      }
      ]
    },
    works: {
      worksList: [{
        title: 'vue商城app',
        des: '基于vue的商城app',
        url: 'http://xiao-yixiang.gitee.io/shop-app/dist/index.html#/home',
        img: {
          src: `${shop}`,
          alt: '基于vue的商城app'
        },
      },
      {
        title: 'vue数据统计',
        des: '基于vue的数据统计',
        url: 'http://xiao-yixiang.gitee.io/my-project/dist/index.html#/chart',
        img: {
          src: `${data}`,
          alt: '基于vue的数据统计'
        }
      },
      {
        title: 'vue+elementUI管理平台',
        des: '基于vue+elementUI的管理平台',
        url: 'http://xiao-yixiang.gitee.io/my-demo/dist/#/home',
        img: {
          src: `${manage}`,
          alt: '基于vue+elementUI的管理平台'
        }
      },
      {
        title: '淘宝静态布局',
        des: '原生html+css',
        url: 'http://xiao-yixiang.gitee.io/taobao/index.html',
        img: {
          src: `${taobao}`,
          alt: '原生html+css'
        }
      },
      {
        title: 'anires',
        des: '一个会动的简历',
        url: 'https://xiao-yixiang.gitee.io/donghua/public/index.html',
        img: {
          src: `${anires}`,
          alt: '一个会动的简历'
        }
      },
      {
        title: '笔记',
        des: 'web前端笔记',
        url: 'https://xiao-yixiang.gitee.io/xiao-yixiang/categories/web%E5%89%8D%E7%AB%AF/',
        img: {
          src: `${notes}`,
          alt: 'web前端笔记'
        }
      },
      {
        title: '个人博客网站',
        des: '肖-怡翔的技术博客网站',
        url: 'http://xiao-yixiang.gitee.io/xiao-yixiang/',
        img: {
          src: `${blog}`,
          alt: '肖-怡翔的技术博客网站'
        }
      },

      ],
      viewMore: '前往GitHub上查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['喜欢尝试，期待新鲜事物', '编程即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [{
        title: 'HTML版',
        url: ''
      },
      {
        title: 'PDF版',
        url: ''
      }
      ],
      typeList: [{
        title: 'GitHub',
        icon: sGithub,
        url: 'https://github.com/yixiangxiao'
      },
      {
        title: '码云',
        icon: SGitee,
        url: 'https://gitee.com/xiao-yixiang'
      },
      {
        title: '个人博客',
        icon: sBlog,
        url: 'https://xiao-yixiang.gitee.io'
      },
      {
        title: '简书',
        icon: SJianshu,
        url: ''
      },
      {
        title: 'CSDN',
        icon: SCSDN,
        url: ''
      },
      {
        title: '知乎',
        icon: sZh,
        url: ''
      },
      {
        title: '微博',
        icon: sWeiBo,
        url: ''
      }
      ],
      links: [{
        title: '● web前端笔记',
        des: 'https://xiao-yixiang.gitee.io/xiao-yixiang/categories/web%E5%89%8D%E7%AB%AF/',
        url: 'https://xiao-yixiang.gitee.io/xiao-yixiang/categories/web%E5%89%8D%E7%AB%AF/'
      }]
    }
  },
  en: {
    header: {
      langList: ['CN', 'EN'],
      titleList: [{
        svg: dHome,
        title: 'home'
      },
      {
        svg: dSkills,
        title: 'skills'
      },
      {
        svg: dExp,
        title: 'exp'
      },
      {
        svg: dWorks,
        title: 'works'
      },
      {
        svg: dContact,
        title: 'contact'
      }
      ]
    },
    footer: ['Released under the Apache License', 'All Rights Reserved'],
    overview: {
      infoList: ['22years', 'B.S.', 'shenzheng', 'On Job'],
      quote: 'Not impetuous, not extreme, love programming, love front-end, love testing, love new technology, love sports, execution and learning ability are awesome!',
      desList: ['My name is yixiang xiao , Web front end, software test engineer', 'Shenzhen Jinyi Ming Communication Technology Co. LTD', '2324094523@qq.com']
    },
    skill: {
      outCircleList: [{
        bg: {
          backgroundColor: 'rgba(121,100,102,0.8)'
        },
        name: 'Js'
      },
      {
        bg: {
          backgroundColor: 'rgba(49,65,82,0.8)'
        },
        name: 'software testing'
      },
      {
        bg: {
          backgroundColor: 'rgba(193,131,106,0.8)'
        },
        name: 'vue'
      },
      {
        bg: {
          backgroundColor: 'rgba(117,148,179,0.8)'
        },
        name: 'mysql'
      },
      {
        bg: {
          backgroundColor: 'rgba(147,147,189,0.8)'
        },
        name: 'git'
      },
      {
        bg: {
          backgroundColor: 'rgba(172,223,159,0.8)'
        },
        name: 'Linux'
      },
      {
        bg: {
          backgroundColor: 'rgba(66,66,66,0.8)'
        },
        name: 'html+css'
      },
      {
        bg: {
          backgroundColor: 'rgba(71,83,94,0.8)'
        },
        name: 'node.js'
      }
      ],
      innerCircleList: [{
        bg: {
          backgroundColor: 'rgba(179,164,140,0.8)'
        },
        name: 'react'
      },
      {
        bg: {
          backgroundColor: 'rgba(171,209,220,0.8)'
        },
        name: 'bootstrap'
      },
      {
        bg: {
          backgroundColor: 'rgba(238,215,163,0.8)'
        },
        name: 'less'
      },
      {
        bg: {
          backgroundColor: 'rgba(207,184,178,0.8)'
        },
        name: 'sass'
      }
      ],
      desList: [
        'My name is yixiang xiao, 22 years old, located in sengzheng, Web front end, software test engineer, two years of experience.',
        'Familiar with the whole process of software development and testing, strong logical thinking ability',
        'Mainly involved in technology: Web front-end development, software testing, mysql, open source enthusiasts, Linux',
        'Good documentation and code writing standards, able to solve problems independently, indomitable, detail control'
      ],
      links: [{
        title: '● Github',
        des: 'https://yixiangxiao.github.io',
        url: 'https://yixiangxiao.github.io'
      }, {
        title: '● Yards cloud',
        des: 'http://xiao-yixiang.gitee.io',
        url: 'http://xiao-yixiang.gitee.io'
      }]
    },
    exp: {
      expList: [{
        title: 'Shenzhen Jinyi Ming Communication Technology Co. LTD',
        time: '2020.04-Now',
        post: 'Technical Department/Software test engineer',
        img: {},
        contentList: ['Use software testing tools to resolve project bugs', 'Responsible for preparing test documentation related to the product or project', 'Use Linux command to complete daily system deployment and maintenance']
      },
      {
        title: 'Shenzhen Yundian Industrial Technology Co. LTD',
        time: '2019.12-2020.03',
        post: 'Technical Department/Web front end engineer',
        img: {},
        contentList: ['Using js, VueJS, Ajax, Axious and other cutting-edge development technologies', 'Excellent employee certificate awarded and sealed by the company', 'Docking with back-end developers for functional interfaces to solve bugs raised by testers']
      },
      {
        title: 'Baohui Technology (Longnan) Co., LTD',
        time: '2018.06-2019.11',
        post: 'Technical Department/Web front end engineer',
        img: {},
        contentList: ['Participate in the discussion of related project requirements, outline design, and complete the core code writing', 'Use JS, VUE, AXIous for development', 'Continuous code reconstruction and optimization, analysis of system deficiencies, improve system performance']
      }
      ]
    },
    works: {
      worksList: [{
        title: 'Vue mall app',
        des: 'Mall app based on VUE',
        url: 'http://xiao-yixiang.gitee.io/shop-app/dist/index.html#/home',
        img: {
          src: `${shop}`,
          alt: 'Mall app based on VUE'
        },
      },
      {
        title: 'Vue data statistics',
        des: 'Data statistics based on VUE',
        url: 'http://xiao-yixiang.gitee.io/my-project/dist/index.html#/chart',
        img: {
          src: `${data}`,
          alt: 'Data statistics based on VUE'
        }
      },
      {
        title: 'Vue +elementUI management platform',
        des: 'Management platform based on VUE +elementUI',
        url: 'http://xiao-yixiang.gitee.io/my-demo/dist/#/home',
        img: {
          src: `${manage}`,
          alt: 'Management platform based on VUE +elementUI'
        }
      },
      {
        title: 'Taobao static layout',
        des: 'Native HTML + CSS',
        url: 'http://xiao-yixiang.gitee.io/taobao/index.html',
        img: {
          src: `${taobao}`,
          alt: 'Native HTML + CSS'
        }
      },
      {
        title: 'anires',
        des: 'A dynamic resume',
        url: 'https://xiao-yixiang.gitee.io/donghua/public/index.html',
        img: {
          src: `${anires}`,
          alt: 'A dynamic resume'
        }
      },
      {
        title: 'notes',
        des: 'Web front end development notes',
        url: 'https://xiao-yixiang.gitee.io/xiao-yixiang/categories/web%E5%89%8D%E7%AB%AF/',
        img: {
          src: `${notes}`,
          alt: 'Web front end development notes'
        }
      },
      {
        title: 'Personal blog site',
        des: 'My blog site',
        url: 'http://xiao-yixiang.gitee.io/xiao-yixiang/',
        img: {
          src: `${blog}`,
          alt: 'My blog site'
        }
      },

      ],
      viewMore: 'Check out more on My GitHub'
    },
    contact: {
      title: 'Contact Me',
      desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
      desList2: [
        'Like to try, look forward to something new',
        'Programming is interested, interest is the future',
        'Line road friends, is a shortcut',
        'With me, see the bigger world together'
      ],
      download: 'Download resume',
      fileList: [{
        title: 'HTML',
        url: ''
      },
      {
        title: 'PDF',
        url: ''
      }
      ],
      typeList: [{
        title: 'GitHub',
        icon: sGithub,
        url: 'https://github.com/yixiangxiao'
      },
      {
        title: 'Gitee',
        icon: SGitee,
        url: 'https://gitee.com/xiao-yixiang'
      },
      {
        title: 'Blog',
        icon: sBlog,
        url: 'https://xiao-yixiang.gitee.io'
      },
      {
        title: 'Jianshu',
        icon: SJianshu,
        url: ''
      },
      {
        title: 'CSDN',
        icon: SCSDN,
        url: ''
      },
      {
        title: 'ZhiHu',
        icon: sZh,
        url: ''
      },
      {
        title: 'WeiBo',
        icon: sWeiBo,
        url: ''
      }
      ],
      links: [{
        title: '● Development Notes',
        des: 'https://xiao-yixiang.gitee.io/xiao-yixiang/categories/web%E5%89%8D%E7%AB%AF/',
        url: 'https://xiao-yixiang.gitee.io/xiao-yixiang/categories/web%E5%89%8D%E7%AB%AF/'
      }]
    }
  }
};