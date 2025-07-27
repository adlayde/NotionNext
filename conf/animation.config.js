/**
 * 网站美化动效相关配置
 */
module.exports = {
  // 鼠标点击烟花特效（开关）
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true,  
  // 烟花色彩（感谢 https://github.com/Vixcity 贡献）
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 鼠标跟随特效（开关）
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || true,  
  // 鼠标特效类型（1-12，仅当 MOUSE_FOLLOW 为 true 时生效）  
  // 类型说明：1-路径散点 | 2-下降散点 | 3-上升散点 | 4-边缘向鼠标移动散点 | 5-跟踪转圈散点 | 6-路径线条 | 7-聚集散点 | 8-聚集网格 | 9-移动网格 | 10-上升粒子 | 11-转圈随机颜色粒子 | 12-圆锥放射跟随蓝色粒子  
  MOUSE_FOLLOW_EFFECT_TYPE: 11,  
  // 鼠标特效颜色（支持 #xxxxxx 或 rgba(r,g,b,a) 格式）  
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a',  

  // 樱花飘落特效（开关）
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false,  
  // 漂浮线段特效（开关）
  NEST: process.env.NEXT_PUBLIC_NEST || true,  
  // 动态彩带特效（开关）
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false,  
  // 静态彩带特效（开关）
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || true,  
  // 星空雨特效（仅黑夜模式生效，开关）
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true,  
  // animate.css CDN 地址  
  ANIMATE_CSS_URL: process.env.NEXT_PUBLIC_ANIMATE_CSS_URL || 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'  
};
