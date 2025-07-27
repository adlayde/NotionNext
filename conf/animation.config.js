/**
 * 网站美化动效配置（优化版）
 */
module.exports = {
  // —————— 烟花特效（升级为「梦幻粒子爆炸」） —————— //
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true,  
  FIREWORKS_CONFIG: {
    // 配色：新增粉紫、青蓝，增强层次（共7种梦幻色）
    colors: [
      '255, 20, 97',   // 蜜桃粉
      '24, 255, 146',  // 薄荷绿
      '90, 135, 255',  // 水晶蓝
      '251, 243, 140', // 奶油黄
      '255, 102, 204', // 粉紫色
      '102, 255, 255', // 青蓝色
      '255, 192, 203'  // 浅粉色（柔和过渡）
    ],
    particleCount: 40, // 粒子数量（平衡效果与性能，建议30-50）
    maxSize: 6,        // 最大粒子尺寸（避免过大遮挡内容）
    gravity: 0.07,     // 重力（控制下落速度，0.05-0.1间调整）
    trailLength: 4,    // 拖尾长度（增加轨迹连贯性，1-5间）
    glow: 1.2          // 光晕强度（1.0-1.5，太亮会刺眼）
  },

  // —————— 鼠标跟随（保持原有逻辑，可按需调整） —————— //
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || true,  
  MOUSE_FOLLOW_EFFECT_TYPE: 11,  // 11-转圈随机颜色粒子（视觉协调）
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a',  

  // —————— 樱花替换：蒲公英粒子（低干扰设计） —————— //
  DANDELION: process.env.NEXT_PUBLIC_DANDELION || true,  
  DANDELION_CONFIG: {
    density: 6,          // 每屏最多6个粒子（稀疏，避免遮挡）
    speed: 1.1,          // 飘落速度（1.0-1.5，缓慢更柔和）
    sizeRange: [6, 12],  // 粒子大小（小尺寸，6-12px）
    opacity: 0.6,        // 透明度（半透明，0.5-0.8）
    colors: [            // 浅色系，适配多数背景
      '#f5f5f5',  // 浅灰
      '#f8f9fa',  // 米白
      '#e9ecef'   // 暖灰
    ],
    windFactor: 0.2      // 风动幅度（0.1-0.3，轻微飘动更自然）
  },

  // —————— 其他动效（保持开关，按需启用） —————— //
  NEST: process.env.NEXT_PUBLIC_NEST || true,  
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false,  
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || true,  
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true,  
  ANIMATE_CSS_URL: process.env.NEXT_PUBLIC_ANIMATE_CSS_URL || 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'  
};
