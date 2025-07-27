module.exports = {
  // 鼠标点击烟花特效（优化参数，降低视觉干扰）
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true,
  FIREWORKS_CONFIG: { // 新增细化配置，替代原FIREWORKS_COLOR
    colors: ['255, 20, 97', '24, 255, 146', '90, 135, 255', '251, 243, 140'],
    particleCount: 30, // 降低粒子数量，避免过于密集
    maxSize: 4, // 缩小粒子尺寸
    gravity: 0.08, // 加快下落速度，减少停留时间
    glow: 0.8 // 降低发光强度
  },

  // 鼠标跟随特效（轻量化处理）
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || false,
  MOUSE_FOLLOW_CONFIG: { // 替代原单独参数，更易维护
    effectType: 6, // 6：路径线条（纤细透明，随鼠标轻滑）
    color: 'rgba(140, 190, 255, 0.6)', // 浅蓝透明色，不刺眼
    particleSize: 2, // 粒子尺寸缩小
    trailLength: 5, // 缩短尾迹，减少残留
    density: 8 // 降低粒子密度
  },

  // 替换樱花特效：轻盈蒲公英粒子（低干扰）
  DANDELION: process.env.NEXT_PUBLIC_DANDELION || true, // 新增蒲公英特效开关
  DANDELION_CONFIG: {
    density: 6, // 每屏最多6个粒子，避免遮挡内容
    speed: 1.2, // 缓慢飘落，不急促
    size: [8, 15], // 粒子大小范围（小而轻盈）
    opacity: [0.4, 0.7], // 半透明，减少视觉冲击
    color: ['#f5f5f5', '#f0f8ff', '#f8f9fa'], // 浅白/米白，适配多数背景
    wind: 0.3 // 轻微左右飘动，轨迹自然
  },

  // 漂浮线段特效（保持低调）
  NEST: process.env.NEXT_PUBLIC_NEST || false,
  NEST_CONFIG: {
    lineColor: 'rgba(180, 180, 180, 0.1)', // 浅灰透明线
    pointColor: 'rgba(200, 200, 200, 0.2)', // 淡点
    lineWidth: 0.5 // 细线不突兀
  },

  // 动态/静态彩带（默认关闭，避免杂乱）
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false,
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false,

  // 星空雨特效（仅夜间模式，降低密度）
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true,
  STARRY_SKY_CONFIG: {
    density: 15, // 每屏15颗星，不密集
    speed: 2, // 缓慢下落
    size: [1, 3], // 小星星
    glow: false // 关闭发光，避免刺眼
  },

  // 动画CSS资源（保留，确保兼容性）
  ANIMATE_CSS_URL: process.env.NEXT_PUBLIC_ANIMATE_CSS_URL || 
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
}
